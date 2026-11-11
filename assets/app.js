/* ============================================================
   IELTS ACADEMY — aplicación
   ============================================================ */
'use strict';

/* ------------------------- estado ------------------------- */
const KEY = 'ielts-academy-v1';
const DEFAULT_STATE = {
  done: {}, srs: {}, quiz: {}, exams: [], draft: '',
  streak: { last: null, count: 0 }, theme: 'sepia'
};
let S = loadState();

function loadState(){
  try{
    const raw = JSON.parse(localStorage.getItem(KEY) || '{}');
    return Object.assign({}, DEFAULT_STATE, raw, {
      done: raw.done || {}, srs: raw.srs || {}, quiz: raw.quiz || {},
      exams: raw.exams || [], streak: raw.streak || { last: null, count: 0 }
    });
  }catch(e){ return JSON.parse(JSON.stringify(DEFAULT_STATE)); }
}
function save(){
  try{ localStorage.setItem(KEY, JSON.stringify(S)); }catch(e){}
  refreshTop();
}
function notif(){ /* reservado */ }

/* ------------------------- utilidades ------------------------- */
const $  = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => Array.from(el.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

function dayKey(d=new Date()){
  const x = new Date(d.getTime() - d.getTimezoneOffset()*60000);
  return x.toISOString().slice(0,10);
}
function yesterdayKey(){ return dayKey(new Date(Date.now()-86400000)); }

function touchStreak(){
  const today = dayKey();
  if(S.streak.last === today) return;
  S.streak.count = (S.streak.last === yesterdayKey()) ? (S.streak.count||0)+1 : 1;
  S.streak.last = today;
  save();
}

function fmt(sec){
  sec = Math.max(0, Math.round(sec));
  return String(Math.floor(sec/60)).padStart(2,'0') + ':' + String(sec%60).padStart(2,'0');
}
function shuffle(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
const countWords = t => (t.trim().match(/\S+/g)||[]).length;

/* cronómetros activos (se limpian al cambiar de vista) */
const INTERVALS = new Set();
function clearTimers(){ INTERVALS.forEach(id=>clearInterval(id)); INTERVALS.clear(); }

/* ------------------------- lecciones ------------------------- */
const LESSONS = [
  ['g1','Gramática · Present perfect vs past simple'],
  ['g2','Gramática · Condicionales'],
  ['g3','Gramática · Relative clauses'],
  ['g4','Gramática · Pasiva e impersonales'],
  ['g5','Gramática · Modales de especulación'],
  ['g6','Gramática · Artículos y contables'],
  ['g7','Gramática · Conectores y cohesión'],
  ['g8','Gramática · Nominalización'],
  ['r1','Reading · The Secret Life of Bees'],
  ['r2','Reading · A City Without Cars'],
  ['l1','Listening · Formulario del gimnasio'],
  ['l2','Listening · Jardín comunitario'],
  ['l3','Listening · Sueño y memoria'],
  ['w1','Writing · Task 1'],
  ['w2','Writing · Task 2'],
  ['s1','Speaking · Part 1'],
  ['s2','Speaking · Part 2'],
  ['s3','Speaking · Part 3']
];
const GROUPS = {
  'Gramática': ['g1','g2','g3','g4','g5','g6','g7','g8'],
  'Reading': ['r1','r2'],
  'Listening': ['l1','l2','l3'],
  'Writing': ['w1','w2'],
  'Speaking': ['s1','s2','s3']
};

/* Curso A0 → C1: se añade a las lecciones y al dashboard */
COURSE.levels.forEach(l => {
  l.units.forEach(u => LESSONS.push([u.id, 'Curso ' + l.cefr + ' · ' + u.title]));
});
GROUPS['Curso A0→C1'] = COURSE.levels.flatMap(l => l.units.map(u => u.id));

const slugify = s => String(s).toLowerCase().normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

function doneBtn(id, label){
  const d = !!S.done[id];
  return `<button class="btn ghost sm done-btn ${d?'done':''}" data-done="${id}">${d?'✓ Completado':(label||'Marcar como completado')}</button>`;
}

/* ------------------------- tema ------------------------- */
const THEMES = ['sepia', 'light', 'dark'];
const THEME_COLORS = { sepia:'#f3ead6', light:'#f4f7fa', dark:'#080c12' };

function applyTheme(t){
  if(!THEMES.includes(t)) t = 'sepia';
  document.documentElement.setAttribute('data-theme', t);
  $$('[data-theme-set]').forEach(b => {
    const on = b.dataset.themeSet === t;
    b.classList.toggle('active', on);
    b.setAttribute('aria-pressed', on ? 'true' : 'false');
  });
  const meta = document.querySelector('meta[name="theme-color"]');
  if(meta) meta.setAttribute('content', THEME_COLORS[t]);
}

/* ------------------------- barra superior ------------------------- */
function refreshTop(){
  const mastered = VOCAB.filter(v => S.srs[v.w] && S.srs[v.w].box >= 4).length;
  const st = S.streak.last === dayKey() ? (S.streak.count||0) : 0;
  const a = $('#vocabTop'); if(a) a.textContent = mastered;
  const b = $('#streakSide'); if(b) b.textContent = st;
}

/* ------------------------- quiz genérico ------------------------- */
const QUIZ_REG = {};

function registerQuiz(id, qs, title){
  QUIZ_REG[id] = { qs, title: title || id };
}

function normalizeQs(rawQs){
  return rawQs.map(q => {
    if(q.type === 'tfng') return { q:q.q, opts:['True','False','Not Given'], a:q.a, why:q.why, letters:false };
    return { q:q.q, opts:q.opts, a:q.a, why:q.why, letters:true };
  });
}

function quizHTML(rawQs, id, title){
  const qs = normalizeQs(rawQs);
  registerQuiz(id, qs, title);
  return `<div class="quiz" data-quiz="${id}">
    ${qs.map((q,i)=>`
      <div class="qcard" data-q="${i}">
        <div class="qhead"><span class="qnum">${i+1}</span><div class="qtext">${q.q}</div></div>
        <div class="opts ${q.letters?'':'tfng'}">
          ${q.opts.map((o,j)=>`<button class="opt" data-i="${j}">${q.letters?`<span class="k">${'ABCD'[j]}</span>`:''}<span>${o}</span></button>`).join('')}
        </div>
        <div class="explain">${q.why}</div>
      </div>`).join('')}
    <div class="quiz-foot"></div>
  </div>`;
}

function handleQuizClick(opt, quizEl){
  const card = opt.closest('.qcard');
  if(!card || card.classList.contains('answered')) return;
  const reg = QUIZ_REG[quizEl.dataset.quiz];
  if(!reg) return;
  const qi = +card.dataset.q;
  const chosen = +opt.dataset.i;
  const correct = reg.qs[qi].a;

  card.classList.add('answered');
  $$('.opt', card).forEach((b,idx)=>{
    b.disabled = true;
    if(idx === correct) b.classList.add('correct');
  });
  if(chosen !== correct) opt.classList.add('wrong');
  $('.explain', card).classList.add('show');

  quizEl._score = (quizEl._score || 0) + (chosen === correct ? 1 : 0);
  quizEl._answered = (quizEl._answered || 0) + 1;

  if(quizEl._answered === reg.qs.length){
    const total = reg.qs.length;
    const pct = Math.round(quizEl._score / total * 100);
    const id = quizEl.dataset.quiz;
    S.quiz[id] = Math.max(S.quiz[id] || 0, pct);
    touchStreak();
    const msg = pct === 100 ? 'Perfecto, lo dominas.'
      : pct >= 80 ? 'Muy bien. Repasa los fallos y sigue.'
      : pct >= 60 ? 'Vas bien, pero quedan huecos. Vuelve a la teoría de lo que has fallado.'
      : 'Toca repasar la unidad con calma. Es normal: así se aprende.';
    $('.quiz-foot', quizEl).innerHTML = `<div class="quiz-result">
      <div class="score">${quizEl._score}/${total} · ${pct}%</div>
      <div class="msg">${msg}</div>
      <span class="badge green">Mejor resultado: ${S.quiz[id]}%</span>
    </div>`;
  }
}

/* ------------------------- TTS ------------------------- */
const TTS_REG = {};
const SPEAK_REG = {};
let tts = { lines: [], i: 0, el: null, rate: 1, active: false, token: 0 };
let ttsSeq = 0;

const speechOK = ('speechSynthesis' in window);

function enVoices(){
  try{
    return window.speechSynthesis.getVoices().filter(v => /^en(-|_|$)/i.test(v.lang));
  }catch(e){ return []; }
}
function pickVoice(i){
  const vs = enVoices();
  if(!vs.length) return null;
  const gb = vs.filter(v => /en-GB/i.test(v.lang));
  const us = vs.filter(v => /en-US/i.test(v.lang));
  const pool = gb.length ? gb : (us.length ? us : vs);
  return pool[i % pool.length];
}

function ttsHTML(id, lines){
  TTS_REG[id] = lines;
  const hasAudio = (typeof AUDIO_TASKS !== 'undefined') && !!AUDIO_TASKS[id];
  const rateOK = speechOK || hasAudio;
  return `<div class="tts" data-tts="${id}">
    <div class="tts-row">
      <button class="btn sm" data-tts-act="play" ${rateOK?'':'disabled'}>▶ Escuchar</button>
      <button class="btn ghost sm" data-tts-act="pause" ${rateOK?'':'disabled'}>⏸ Pausa</button>
      <button class="btn ghost sm" data-tts-act="stop" ${rateOK?'':'disabled'}>⏹ Parar</button>
      ${hasAudio?'<span class="badge green" title="Audio pregrabado con voz americana: no depende de las voces del sistema">🔊 voz americana</span>':''}
      <span class="spacer"></span>
      <label class="tts-rate">Velocidad
        <input type="range" class="rate" min="0.6" max="1.2" step="0.05" value="0.92">
      </label>
    </div>
    ${rateOK?'':'<p class="small muted mb0">Tu navegador no soporta la voz sintética. Usa el guion de abajo y léelo en voz alta.</p>'}
    <details><summary>Ver guion (después de intentarlo)</summary>
      <div class="script">
        ${lines.map((l,i)=>`<div class="line" data-i="${i}"><span class="who">${l.sp}</span><span>${l.text}</span></div>`).join('')}
      </div>
    </details>
  </div>`;
}

/* ---------- reproductor de MP3 pregrabados ---------- */
let player = { token: 0, lines: null, li: 0, ci: 0, box: null, audio: null, rate: 1, paused: false };

function stopPlayer(){
  player.token++;
  player.lines = null;
  player.paused = false;
  if(player.audio){
    try{ player.audio.pause(); }catch(e){}
    try{ player.audio.src = ''; }catch(e){}
    player.audio = null;
  }
  $$('.line.speaking').forEach(x => x.classList.remove('speaking'));
}

function playAudioLines(lines, box, rate){
  stopPlayer();
  if(speechOK) window.speechSynthesis.cancel();
  tts.active = false;
  player = { token: player.token + 1, lines, li: 0, ci: 0, box, audio: null, rate: rate || 1, paused: false };
  advanceAudio(player.token);
}

function audioSrc(url){
  /* file:// no admite query strings: quitamos el ?v=... */
  return location.protocol === 'file:' ? url.split('?')[0] : url;
}

function advanceAudio(token){
  if(token !== player.token) return;
  const p = player;
  if(!p.lines) return;
  if(p.li >= p.lines.length){ stopPlayer(); return; }

  const urls = p.lines[p.li] || [];
  if(p.ci >= urls.length){
    if(p.box){
      $$('.line.speaking', p.box).forEach(x => x.classList.remove('speaking'));
    }
    p.li++; p.ci = 0;
    return advanceAudio(token);
  }

  if(p.box){
    $$('.line.speaking', p.box).forEach(x => x.classList.remove('speaking'));
    const el = p.box.querySelector(`.line[data-i="${p.li}"]`);
    if(el){
      el.classList.add('speaking');
      try{ el.scrollIntoView({ block:'nearest' }); }catch(e){}
    }
  }

  const a = new Audio(audioSrc(urls[p.ci]));
  a.playbackRate = p.rate;
  p.audio = a;
  a.onended = () => { if(token !== player.token) return; p.ci++; advanceAudio(token); };
  a.onerror = () => { if(token !== player.token) return; p.ci++; advanceAudio(token); };
  const pr = a.play();
  if(pr && pr.catch) pr.catch(()=>{ /* el navegador puede bloquear el autoplay */ });
}

function pausePlayer(){
  if(!player.audio) return;
  if(player.paused){
    player.paused = false;
    const pr = player.audio.play();
    if(pr && pr.catch) pr.catch(()=>{});
  }else{
    player.paused = true;
    player.audio.pause();
  }
}

function ttsPlay(el){
  const cfg = TTS_REG[el.dataset.tts];
  if(!cfg) return;
  const rate = parseFloat(($('.rate', el) || {}).value) || 0.92;
  if(typeof AUDIO_TASKS !== 'undefined' && AUDIO_TASKS[el.dataset.tts]){
    playAudioLines(AUDIO_TASKS[el.dataset.tts], el, rate);
    return;
  }
  if(!speechOK) return;
  window.speechSynthesis.cancel();
  tts = {
    lines: cfg, i: 0, el,
    rate,
    active: true, token: ++ttsSeq
  };
  speakNext();
}
function speakNext(){
  if(!tts.active) return;
  const { lines, i, el, token } = tts;
  if(i >= lines.length){ clearHighlight(el); tts.active = false; return; }
  const u = new SpeechSynthesisUtterance(lines[i].text);
  const v = pickVoice(lines[i].sp === 'B' ? 1 : 0);
  if(v){ u.voice = v; u.lang = v.lang; }
  u.rate = tts.rate;
  u.pitch = lines[i].sp === 'B' ? 0.88 : 1;

  const lineEl = el.querySelector(`.line[data-i="${i}"]`);
  const prev = el.querySelectorAll('.line.speaking');
  prev.forEach(x => x.classList.remove('speaking'));
  if(lineEl){
    lineEl.classList.add('speaking');
    try{ lineEl.scrollIntoView({ block:'nearest' }); }catch(e){}
  }
  u.onend = () => {
    if(!tts.active || tts.token !== token) return;
    if(lineEl) lineEl.classList.remove('speaking');
    tts.i = i + 1;
    speakNext();
  };
  u.onerror = u.onend;
  window.speechSynthesis.speak(u);
}
function clearHighlight(el){
  if(!el) return;
  el.querySelectorAll('.line.speaking').forEach(x => x.classList.remove('speaking'));
}

function speakText(text){
  if(!speechOK) return;
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const v = pickVoice(0);
  if(v){ u.voice = v; u.lang = v.lang; }
  u.rate = 0.95;
  window.speechSynthesis.speak(u);
}

/* Reproduce un modelo o una palabra: primero el MP3 pregrabado,
   y si no existe, la voz del sistema. */
function speakKey(id){
  const map = (typeof AUDIO_MAP !== 'undefined' && AUDIO_MAP[id])
    || (typeof AUDIO_COURSE !== 'undefined' && AUDIO_COURSE[id]);
  if(map){
    playAudioLines([map], null, 1);
    return;
  }
  speakText(SPEAK_REG[id] || '');
}

/* botón compacto con audio para una palabra del curso */
function wordBtn(word){
  const key = 'w-' + slugify(word);
  SPEAK_REG[key] = word;
  return `<button class="btn ghost sm" data-speak="${key}" title="Escuchar ${esc(word)}" style="padding:3px 8px;font-size:.72rem">🔊</button>`;
}
function speakBtn(id, text, label='Escuchar modelo'){
  SPEAK_REG[id] = text;
  return `<button class="btn ghost sm" data-speak="${id}">🔊 ${label}</button>`;
}

/* ------------------------- cronómetros ------------------------- */
/* Registro inicial de tests: así el dashboard conoce los títulos
   aunque todavía no hayas abierto su vista. */
(function bootstrapQuizzes(){
  try{
    GRAMMAR.forEach(u => registerQuiz(u.id, normalizeQs(u.quiz), 'Gramática · ' + u.title));
    READING.passages.forEach(p => registerQuiz('read-'+p.id, normalizeQs(p.questions), 'Reading · ' + p.title));
    const l2 = LISTENING.tasks.find(t => t.id === 'l2');
    if(l2) registerQuiz('l2', normalizeQs(l2.questions), 'Listening · ' + l2.title);
  }catch(e){}
})();

function timerHTML(minutes, label){
  return `<div class="timer" data-timer data-secs="${minutes*60}" data-total="${minutes*60}">
    <span class="clock">${fmt(minutes*60)}</span>
    <span class="tl">${label}</span>
    <span style="flex:1"></span>
    <button class="btn sm" data-tact="start">Iniciar</button>
    <button class="btn ghost sm" data-tact="reset">Reiniciar</button>
  </div>`;
}
function timerControl(btn){
  const box = btn.closest('.timer');
  const clock = $('.clock', box);
  const act = btn.dataset.tact;
  const total = +box.dataset.total;
  if(act === 'reset'){
    if(box._iv){ clearInterval(box._iv); INTERVALS.delete(box._iv); box._iv = null; }
    box.dataset.secs = total;
    clock.textContent = fmt(total);
    clock.className = 'clock';
    const startBtn = $('[data-tact="start"]', box);
    if(startBtn) startBtn.textContent = 'Iniciar';
    box._running = false;
    return;
  }
  if(box._running || box._iv) return;
  box._running = true;
  btn.textContent = 'En marcha';
  box._iv = setInterval(()=>{
    let secs = +box.dataset.secs - 1;
    box.dataset.secs = secs;
    clock.textContent = fmt(secs);
    if(secs <= 10) clock.classList.add('low');
    if(secs <= 0){
      clearInterval(box._iv); INTERVALS.delete(box._iv);
      box._iv = null; box._running = false;
      clock.textContent = '00:00';
      clock.className = 'clock done';
      btn.textContent = '¡Tiempo!';
      try{
        const ac = new (window.AudioContext || window.webkitAudioContext)();
        const o = ac.createOscillator(), g = ac.createGain();
        o.connect(g); g.connect(ac.destination);
        g.gain.value = 0.05; o.frequency.value = 660;
        o.start(); setTimeout(()=>{ o.stop(); ac.close(); }, 400);
      }catch(e){}
    }
  }, 1000);
  INTERVALS.add(box._iv);
}

/* ------------------------- navegación ------------------------- */
const VIEWS = ['inicio','curso','plan','listening','reading','writing','speaking','vocab','gramatica','examen','progreso'];
const RENDER = {};

function go(view){
  if(location.hash === '#'+view) route(); else location.hash = view;
}

function route(){
  const view = (location.hash || '#inicio').slice(1);
  const name = VIEWS.includes(view) ? view : 'inicio';
  clearTimers();
  window.speechSynthesis && window.speechSynthesis.cancel();
  $$('.view').forEach(v => v.classList.toggle('active', v.id === name));
  $$('.nav-item').forEach(a => a.classList.toggle('active', a.dataset.view === name));
  $('#crumb').textContent = $('#'+name).dataset.title || 'Inicio';
  if(RENDER[name]) RENDER[name]();
  stopPlayer();
  $('#sidebar').classList.remove('open');
  $('#scrim').classList.remove('show');
  window.scrollTo({ top:0, behavior:'instant' in window ? 'instant' : 'auto' });
  refreshTop();
}

/* ============================================================
   VISTA: INICIO
   ============================================================ */
RENDER.inicio = () => {
  const doneCount = LESSONS.filter(([id]) => S.done[id]).length;
  const mastered = VOCAB.filter(v => S.srs[v.w] && S.srs[v.w].box >= 4).length;
  const bestExam = S.exams.length ? Math.max(...S.exams.map(e => e.pct)) : null;
  const st = S.streak.last === dayKey() ? (S.streak.count||0) : 0;

  $('#inicio').innerHTML = `
  <div class="hero">
    <span class="badge green">Curso A0 → C1 + preparación IELTS 7.0</span>
    <h1>De cero a héroe en inglés,<br>y después a banda 7.0.</h1>
    <p>Un curso completo de 24 unidades que empieza en el alfabeto y termina en nivel C1, más la preparación específica del IELTS: ruta de 48 semanas, listening con voz, reading explicado, writing con modelos y speaking con cronómetro.</p>
    <div class="hero-actions">
      <button class="btn" data-nav="curso">Empezar desde cero →</button>
      <button class="btn ghost" data-nav="plan">Ruta IELTS (48 semanas)</button>
      <button class="btn ghost" data-nav="examen">Mini-simulacro</button>
    </div>
  </div>

  <div class="grid four" style="margin-bottom:18px">
    <div class="stat"><div class="n">${st}</div><div class="l">días de racha</div></div>
    <div class="stat"><div class="n">${mastered}<small>/60</small></div><div class="l">palabras dominadas</div></div>
    <div class="stat"><div class="n">${doneCount}<small>/${LESSONS.length}</small></div><div class="l">lecciones hechas</div></div>
    <div class="stat"><div class="n">${bestExam!==null?bestExam+'%':'—'}</div><div class="l">mejor simulacro</div></div>
  </div>

  <div class="card">
    <div class="flex-between">
      <div>
        <span class="badge green">Curso completo</span>
        <h2 style="margin:10px 0 4px">De cero a héroe · A0 → C1</h2>
        <p class="small muted" style="margin:0">24 unidades · 120 preguntas de test · 144 palabras con audio · ejemplos locutados</p>
      </div>
      <button class="btn sm" data-nav="curso">Entrar al curso →</button>
    </div>
    <div class="grid three" style="margin-top:16px">
      ${COURSE.levels.map(l=>{
        const d = l.units.filter(u=>S.done[u.id]).length;
        return `<div class="stat" style="padding:11px 13px">
          <div class="flex-between" style="margin-bottom:6px"><span class="badge">${l.cefr}</span><span class="small muted">${d}/4</span></div>
          <div style="font-weight:700;font-size:.9rem;margin-bottom:7px">${l.name}</div>
          <div class="bar"><i style="width:${Math.round(d/4*100)}%"></i></div>
        </div>`;
      }).join('')}
    </div>
    <div class="note" style="margin-bottom:0">Si empiezas de cero, haz una unidad al día y repite el test hasta acertar 4/5. En 6 semanas tendrás una base A2 sólida.</div>
  </div>

  <div class="card">
    <h2>Antes de empezar: la verdad sobre A2 → 7.0</h2>
    <p class="muted">${PLAN.honest}</p>
    <div class="note">Un 7.0 significa nivel <b>C1</b>. No se llega con trucos ni con plantillas memorizadas: se llega con horas de inglés real y con técnica de examen. Esta web te da la estructura; las horas las pones tú.</div>
    <div class="grid two">
      <div>
        <h3>Qué vas a encontrar</h3>
        <ul class="clean">
          <li><b>Curso de cero a C1</b> en 6 niveles y 24 unidades con audio.</li>
          <li><b>Ruta IELTS de 48 semanas</b> en 4 fases con objetivos medibles.</li>
          <li><b>Listening real</b> con voz americana y guion.</li>
          <li><b>Reading</b> con preguntas True/False/Not Given explicadas.</li>
          <li><b>Writing</b> con estructura, lenguaje y modelos banda 7+.</li>
          <li><b>Speaking</b> con tarjetas, cronómetro y respuestas modelo.</li>
        </ul>
      </div>
      <div>
        <h3>Cómo usarla (rutina de 60 min)</h3>
        <ul class="clean">
          <li><b>15 min</b> de vocabulario (sesión de flashcards).</li>
          <li><b>20 min</b> de una destreza (reading, listening o writing).</li>
          <li><b>10 min</b> de gramática con su test.</li>
          <li><b>15 min</b> de inglés real: serie, podcast o hablar solo.</li>
        </ul>
      </div>
    </div>
  </div>

  <div class="grid two">
    <div class="card tight">
      <span class="badge blue">Destrezas</span>
      <h3 style="margin-top:10px">Empieza por donde más te cuesta</h3>
      <p class="small muted">Si partes de A2, mi recomendación es <b>Listening + Vocabulario</b> a diario, y Gramática 3 veces por semana.</p>
      <div class="chips">
        <button class="chip" data-nav="listening">🎧 Listening</button>
        <button class="chip" data-nav="reading">📖 Reading</button>
        <button class="chip" data-nav="writing">✍ Writing</button>
        <button class="chip" data-nav="speaking">🗣 Speaking</button>
      </div>
    </div>
    <div class="card tight">
      <span class="badge warn">Regla de oro</span>
      <h3 style="margin-top:10px">Mejor 30 minutos diarios que 6 horas el domingo</h3>
      <p class="small muted">El idioma se consolida durmiendo. La racha que ves arriba cuenta los días en los que has hecho algo: un quiz, una sesión de vocabulario o una lección marcada.</p>
      <button class="btn ghost sm" data-nav="progreso">Ver mi progreso</button>
    </div>
  </div>`;
};

/* ============================================================
   VISTA: CURSO A0 → C1
   ============================================================ */
RENDER.curso = () => {
  const levels = COURSE.levels;
  const totalUnits = levels.reduce((a,l) => a + l.units.length, 0);
  const doneTotal = levels.reduce((a,l) => a + l.units.filter(u => S.done[u.id]).length, 0);
  const overall = Math.round(doneTotal / Math.max(1,totalUnits) * 100);

  $('#curso').innerHTML = `
  <div class="page-head">
    <div class="kicker">Curso completo · 6 niveles</div>
    <h1>De cero a héroe: A0 → C1</h1>
    <p class="lead">${COURSE.intro}</p>
  </div>

  <div class="card">
    <div class="flex-between">
      <div>
        <h3 style="margin:0">Tu avance</h3>
        <p class="small muted mb0" id="courseCount">${doneTotal} de ${totalUnits} unidades completadas</p>
      </div>
      <span class="badge green" id="courseOverall">${overall}%</span>
    </div>
    <div class="bar" style="margin-top:12px" id="courseBar"><i style="width:${overall}%"></i></div>
    <div class="grid three" style="margin-top:16px">
      ${levels.map(l=>{
        const d = l.units.filter(u=>S.done[u.id]).length;
        return `<div class="stat" style="padding:12px 14px">
          <div class="flex-between" style="margin-bottom:6px"><span class="badge">${l.cefr}</span><span class="small muted" data-lvl-n="${l.id}">${d}/4</span></div>
          <div style="font-weight:700;font-size:.9rem;margin-bottom:8px">${l.name}</div>
          <div class="bar" data-lvl-bar="${l.id}"><i style="width:${Math.round(d/4*100)}%"></i></div>
        </div>`;
      }).join('')}
    </div>
    <div class="note" style="margin-bottom:0">
      <b>Cómo avanzar:</b> una unidad al día. Lee la teoría, escucha los ejemplos (puedes bajar la velocidad), repite el test hasta acertar <b>4 de 5</b> y marca la unidad como completada. Si fallas 2 o más, vuelve mañana.
    </div>
  </div>

  ${levels.map((l,li)=>{
    const d = l.units.filter(u=>S.done[u.id]).length;
    return `<div class="card">
      <div class="flex-between">
        <div>
          <span class="badge green">${l.cefr}</span>
          <h2 style="margin:10px 0 4px">${l.name}</h2>
        </div>
        <span class="badge" data-lvl-n="${l.id}">${d}/4 unidades</span>
      </div>
      <p class="small muted">${l.desc}</p>
      <p class="small" style="margin-bottom:12px"><b>Objetivo del nivel:</b> ${l.goal}</p>
      ${l.units.map((u,ui)=>`
        <details class="card-det" ${li===0 && ui===0 ? 'open' : ''}>
          <summary>${ui+1}. ${u.title}
            <span class="det-meta">
              <span class="badge green" data-unit-done="${u.id}" style="display:${S.done[u.id] ? 'inline-flex' : 'none'}">✓ hecha</span>
              <span class="badge">${u.quiz.length} preguntas</span>
            </span>
          </summary>
          <div class="details-body">
            <p class="small muted"><b>Objetivo:</b> ${u.goal}</p>
            ${u.points.map(p=>`<h3>${p.h}</h3>${p.html}`).join('')}
            <div class="hr"></div>
            <div class="flex-between">
              <h3 style="margin:0">Vocabulario</h3>
              <span class="small muted">${u.vocab.length} palabras con audio</span>
            </div>
            <div class="grid two" style="gap:0 22px;margin-top:6px">
              ${u.vocab.map(v=>`<div class="kpi-line"><b>${v.en}</b><span class="small muted">${v.es}</span><span style="flex:1"></span>${wordBtn(v.en)}</div>`).join('')}
            </div>
            <div class="flex-between" style="margin-top:16px">
              <h3 style="margin:0">Ejemplos</h3>
              ${speakBtn('unit-'+u.id, u.examples.join(' '), 'Escuchar ejemplos')}
            </div>
            ${u.examples.map(e=>`<p class="ex">${e}</p>`).join('')}
            <div class="hr"></div>
            <h3>Test de la unidad</h3>
            ${quizHTML(u.quiz, u.id, 'Curso ' + l.cefr + ' · ' + u.title)}
            <div class="mt18">${doneBtn(u.id)}</div>
          </div>
        </details>`).join('')}
    </div>`;
  }).join('')}`;
};

/* actualiza los contadores del curso sin re-renderizar (no cierra desplegables) */
function updateCourseProgress(){
  if(!$('#curso')) return;
  let doneTotal = 0;
  COURSE.levels.forEach(l => {
    const d = l.units.filter(u => S.done[u.id]).length;
    doneTotal += d;
    $$(`[data-lvl-n="${l.id}"]`).forEach(el => {
      el.textContent = el.classList.contains('badge') ? d + '/4 unidades' : d + '/4';
    });
    $$(`[data-lvl-bar="${l.id}"]`).forEach(el => {
      const i = el.querySelector('i');
      if(i) i.style.width = (d / 4 * 100) + '%';
    });
  });
  const total = COURSE.levels.reduce((a,l) => a + l.units.length, 0);
  const pct = Math.round(doneTotal / total * 100);
  const p = $('#courseOverall'); if(p) p.textContent = pct + '%';
  const b = $('#courseBar'); if(b && b.querySelector('i')) b.querySelector('i').style.width = pct + '%';
  const c = $('#courseCount'); if(c) c.textContent = `${doneTotal} de ${total} unidades completadas`;
}

/* ============================================================
   VISTA: RUTA
   ============================================================ */
RENDER.plan = () => {
  $('#plan').innerHTML = `
  <div class="page-head">
    <div class="kicker">Plan de 48 semanas</div>
    <h1>La ruta, paso a paso</h1>
    <p class="lead">Cuatro fases. Cada una tiene un objetivo concreto y comprobable. No pases a la siguiente hasta poder cumplir el objetivo de la anterior.</p>
  </div>

  <div class="card">
    <h3>Punto de partida: A2</h3>
    <p class="muted mb0">En A2 puedes comunicarte en situaciones cotidianas con frases sencillas. Para el IELTS eso todavía no da 5.0. La buena noticia: desde A2 los progresos son muy visibles las primeras 12 semanas.</p>
    <div class="note warn">Si tu examen es en menos de 6 meses, plantéate un objetivo intermedio realista (banda 5.5–6.0) y repite después. Forzar un 7.0 sin base solo genera frustración.</div>
  </div>

  ${PLAN.phases.map(p=>`
    <div class="card">
      <div class="flex-between">
        <div>
          <span class="badge green">Fase ${p.n}</span>
          <h2 style="margin:10px 0 6px">${p.title}</h2>
          <p class="small muted" style="margin:0">${p.weeks}</p>
        </div>
      </div>
      <p style="margin-top:14px"><b>Objetivo:</b> ${p.goal}</p>
      <ul class="clean">${p.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>
    </div>`).join('')}

  <div class="card">
    <h2>Tu semana tipo</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Día</th><th>Sesión (60–90 min)</th></tr></thead>
        <tbody>${PLAN.week.map(([d,s])=>`<tr><td><b>${d}</b></td><td>${s}</td></tr>`).join('')}</tbody>
      </table>
    </div>
    <p class="small muted mb0">Empieza con 45 minutos e incrementa. Lo que no se sostiene 12 semanas no sirve.</p>
  </div>

  <div class="card">
    <h2>Qué banda es qué nivel</h2>
    <div class="table-wrap">
      <table>
        <thead><tr><th>Banda</th><th>Nivel MCER</th><th>Qué significa</th></tr></thead>
        <tbody>${PLAN.bands.map(([b,n,d])=>`<tr><td><b>${b}</b></td><td><span class="badge">${n}</span></td><td>${d}</td></tr>`).join('')}</tbody>
      </table>
    </div>
    <div class="note blue">Tu objetivo es <b>7.0 en cada destreza</b>, no la media. Un 7.0 global con 6.0 en Writing no sirve para muchas universidades: piden mínimos por sección.</div>
  </div>

  <div class="card">
    <h2>Cinco principios que lo cambian todo</h2>
    <ul class="clean">${PLAN.tips.map(t=>`<li>${t}</li>`).join('')}</ul>
  </div>`;
};

/* ============================================================
   VISTA: READING
   ============================================================ */
RENDER.reading = () => {
  $('#reading').innerHTML = `
  <div class="page-head">
    <div class="kicker">Destreza 1</div>
    <h1>Reading</h1>
    <p class="lead">${READING.intro}</p>
  </div>

  <div class="card">
    <h2>Estrategia antes de practicar</h2>
    ${READING.strategy.map(s=>`<details><summary>${s.h}</summary><div class="details-body">${s.html}</div></details>`).join('')}
  </div>

  ${READING.passages.map((p,idx)=>{
    const words = countWords(p.text);
    return `<details class="card-det" ${idx===0?'open':''}>
      <summary>${p.title}<span class="det-meta"><span class="badge">${words} palabras</span>${S.done[p.id]?'<span class="badge green">✓</span>':''}</span></summary>
      <div class="details-body">
        <p class="small muted">${p.subtitle}</p>
        ${timerHTML(20,'20 minutos para texto + preguntas')}
        <div class="passage">${p.text.split('\n\n').map(t=>`<p>${t}</p>`).join('')}</div>
        <h3>Preguntas</h3>
        <p class="small muted">True / False / Not Given: si el texto contradice la afirmación es <b>False</b>; si no menciona el tema, <b>Not Given</b>.</p>
        ${quizHTML(p.questions, 'read-'+p.id, 'Reading · '+p.title)}
        <div style="margin-top:14px">${doneBtn(p.id)}</div>
      </div>
    </details>`;
  }).join('')}

  <div class="card">
    <h3>Errores que bajan la nota</h3>
    <ul class="clean">
      <li>Leer el texto entero primero. No hay tiempo: 20 minutos por texto.</li>
      <li>Buscar la palabra exacta en vez de sinónimos.</li>
      <li>Confundir <b>False</b> (el texto dice lo contrario) con <b>Not Given</b> (el texto no lo trata).</li>
      <li>Dejar preguntas en blanco: nunca hay penalización por responder.</li>
    </ul>
  </div>`;
};

/* ============================================================
   VISTA: LISTENING
   ============================================================ */
function formHTML(task){
  return `
    <div data-form="${task.id}">
      ${task.fields.map((f,i)=>`
        <div class="blank-row">
          <div class="field">
            <label>${i+1}. ${f.label}</label>
            <input type="text" data-f="${i}" data-ans="${f.answer.map(a=>a.toLowerCase()).join('|')}" placeholder="Escribe tu respuesta…" autocomplete="off" spellcheck="false">
            <div class="blank-feedback"></div>
          </div>
        </div>`).join('')}
      <button class="btn sm" data-check="${task.id}">Corregir</button>
      <span class="small muted" style="margin-left:10px">${task.fields.length} huecos</span>
    </div>`;
}

RENDER.listening = () => {
  $('#listening').innerHTML = `
  <div class="page-head">
    <div class="kicker">Destreza 2</div>
    <h1>Listening</h1>
    <p class="lead">${LISTENING.intro}</p>
  </div>

  <div class="card">
    <h2>Antes de darle al play</h2>
    <ul class="clean">${LISTENING.tips.map(t=>`<li>${t}</li>`).join('')}</ul>
    <div class="note">En el examen real: 4 secciones, 40 preguntas, 30 minutos de audio + 10 para pasar respuestas. Aquí puedes repetir, pero intenta hacerlo <b>dos veces como máximo</b>: una para responder y otra para comprobar.</div>
  </div>

  ${LISTENING.tasks.map((t,idx)=>`
    <details class="card-det" ${idx===0?'open':''}>
      <summary>${t.title}<span class="det-meta"><span class="badge blue">${t.type}</span>${S.done[t.id]?'<span class="badge green">✓</span>':''}</span></summary>
      <div class="details-body">
        <p class="small muted">${t.instructions}</p>
        ${ttsHTML(t.id, t.script)}
        ${t.fields ? formHTML(t) : `<div class="mt18">${quizHTML(t.questions, t.id, 'Listening · '+t.title)}</div>`}
        <div style="margin-top:16px">${doneBtn(t.id)}</div>
      </div>
    </details>`).join('')}

  <div class="card">
    <h3>Números, letras y fechas: practica en voz alta</h3>
    <p class="small muted">La voz sintética no deletrea como un humano, así que practica tú con esta lista:</p>
    <div class="table-wrap"><table class="mini">
      <thead><tr><th>Se dice</th><th>Significa</th></tr></thead>
      <tbody>
        <tr><td>double oh / oh</td><td>00 (en números de teléfono)</td></tr>
        <tr><td>K T two, five L P</td><td>KT2 5LP</td></tr>
        <tr><td>the third of March / March the third</td><td>3 de marzo</td></tr>
        <tr><td>thirty-eight pounds</td><td>£38</td></tr>
        <tr><td>a quarter past / half past / ten to</td><td>y cuarto / y media / menos diez</td></tr>
      </tbody>
    </table></div>
  </div>`;
};

/* comprobar formularios de listening */
function normalizeAnswer(s){
  return s.toLowerCase().trim().replace(/\s+/g,' ')
    .replace(/[£$.,]/g,'').replace(/^(the|a|an)\s+/,'');
}
function checkForm(btn){
  const wrap = btn.closest('[data-form]');
  const inputs = $$('input[data-ans]', wrap);
  let ok = 0;
  inputs.forEach(inp => {
    const accepted = inp.dataset.ans.split('|');
    const val = normalizeAnswer(inp.value);
    const good = val.length > 0 && accepted.some(a => normalizeAnswer(a) === val || normalizeAnswer(a).replace(/\s/g,'') === val.replace(/\s/g,''));
    inp.classList.toggle('ok', good);
    inp.classList.toggle('no', !good);
    const fb = inp.parentElement.querySelector('.blank-feedback');
    if(fb){
      fb.className = 'blank-feedback ' + (good ? 'good' : 'bad');
      fb.innerHTML = good ? '✓ Correcto' : `✗ Respuesta: <b>${inp.dataset.ans.split('|')[0]}</b>`;
    }
    if(good) ok++;
  });
  const out = wrap.querySelector('.form-score');
  const msg = `${ok}/${inputs.length} correctas. ${ok===inputs.length?'Perfecto. Ahora escúchalo otra vez sin leer el guion.':ok>=inputs.length/2?'Bien: vuelve a escuchar solo las partes falladas.':'Escucha de nuevo con el guion delante y fíjate en cómo se dicen los datos.'}`;
  if(out) out.textContent = msg;
  else wrap.insertAdjacentHTML('beforeend', `<p class="small form-score" style="margin-top:10px">${msg}</p>`);
  if(ok > 0) touchStreak();
}

/* ============================================================
   VISTA: WRITING
   ============================================================ */
RENDER.writing = () => {
  const t1 = WRITING.task1, t2 = WRITING.task2;
  if(!S.draft) S.draft = '';

  $('#writing').innerHTML = `
  <div class="page-head">
    <div class="kicker">Destreza 3</div>
    <h1>Writing</h1>
    <p class="lead">${WRITING.intro}</p>
  </div>

  <div class="card">
    <h2>Cómo te puntúan</h2>
    <div class="table-wrap"><table>
      <thead><tr><th>Criterio (25% cada uno)</th><th>Qué miran</th></tr></thead>
      <tbody>${WRITING.criteria.map(([a,b])=>`<tr><td><b>${a}</b></td><td>${b}</td></tr>`).join('')}</tbody>
    </table></div>
    <div class="note warn">Escribir mucho y mal no sube la nota. Un texto de 260 palabras con errores básicos de artículos y concordancia se queda en 6.0 aunque sea complejo.</div>
  </div>

  <div class="card">
    <div class="flex-between">
      <h2 style="margin:0">${t1.title}</h2>
      <span class="badge blue">${t1.minWords}+ palabras · ${t1.time} min</span>
    </div>
    <p class="muted" style="margin-top:12px">${t1.intro}</p>

    <h3>Estructura</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Parte</th><th>Qué hacer</th><th>Ejemplo</th></tr></thead>
      <tbody>${t1.structure.map(([a,b,c])=>`<tr><td><b>${a}</b></td><td>${b}</td><td class="small">${c}</td></tr>`).join('')}</tbody>
    </table></div>

    <h3>Lenguaje para describir datos</h3>
    <div class="table-wrap"><table class="mini">
      <thead><tr><th>Función</th><th>Verbos / expresiones</th><th>Ejemplo</th></tr></thead>
      <tbody>${t1.language.map(([a,b,c])=>`<tr><td><b>${a}</b></td><td>${b}</td><td>${c}</td></tr>`).join('')}</tbody>
    </table></div>

    <h3>Modelo (banda 7.5)</h3>
    <div class="passage">${t1.model.split('\n\n').map(p=>`<p>${p}</p>`).join('')}</div>
    <p class="small muted">${countWords(t1.model)} palabras · ${speakBtn('w1model', t1.model)}</p>
    <details><summary>Por qué este texto funciona</summary><div class="details-body"><ul class="clean">${t1.notes.map(n=>`<li>${n}</li>`).join('')}</ul></div></details>
    <div style="margin-top:14px">${doneBtn('w1','He practicado Task 1')}</div>
  </div>

  <div class="card">
    <div class="flex-between">
      <h2 style="margin:0">${t2.title}</h2>
      <span class="badge blue">${t2.minWords}+ palabras · ${t2.time} min</span>
    </div>
    <p class="muted" style="margin-top:12px">${t2.intro}</p>

    <h3>Los cuatro tipos de pregunta</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Tipo</th><th>Pregunta típica</th><th>Qué hacer</th></tr></thead>
      <tbody>${t2.types.map(([a,b,c])=>`<tr><td><b>${a}</b></td><td class="small">${b}</td><td>${c}</td></tr>`).join('')}</tbody>
    </table></div>

    <h3>Estructura de 4 párrafos</h3>
    <div class="table-wrap"><table>
      <thead><tr><th>Parte</th><th>Qué hacer</th><th>Ejemplo</th></tr></thead>
      <tbody>${t2.structure.map(([a,b,c])=>`<tr><td><b>${a}</b></td><td>${b}</td><td class="small">${c}</td></tr>`).join('')}</tbody>
    </table></div>

    <h3>Frases que funcionan (y frases a evitar)</h3>
    <div class="table-wrap"><table class="mini">
      <thead><tr><th>Función</th><th>Expresiones</th></tr></thead>
      <tbody>${t2.phrases.map(([a,b])=>`<tr><td><b>${a}</b></td><td>${b}</td></tr>`).join('')}</tbody>
    </table></div>

    <h3>Modelo (banda 7.5)</h3>
    <p class="small muted" style="margin-bottom:6px">Pregunta: <em>Some people believe that university education should be free for everyone. To what extent do you agree or disagree?</em></p>
    <div class="passage">${t2.model.split('\n\n').map(p=>`<p>${p}</p>`).join('')}</div>
    <p class="small muted">${countWords(t2.model)} palabras · ${speakBtn('w2model', t2.model)}</p>
    <details><summary>Por qué este texto funciona</summary><div class="details-body"><ul class="clean">${t2.notes.map(n=>`<li>${n}</li>`).join('')}</ul></div></details>

    <h3>Checklist antes de entregar</h3>
    <div class="details-body" style="border:none;padding:0">
      ${t2.checklist.map((c,i)=>`<label class="kpi-line" style="cursor:pointer"><input type="checkbox" style="width:auto;margin-right:4px"> <span class="grow">${c}</span></label>`).join('')}
    </div>
    <div style="margin-top:14px">${doneBtn('w2','He practicado Task 2')}</div>
  </div>

  <div class="card">
    <h2>Zona de práctica</h2>
    <p class="small muted">Escribe aquí tu ensayo. Se guarda solo en tu navegador. Usa el cronómetro como en el examen.</p>
    <div class="flex-between" style="margin-bottom:10px">
      <span class="badge">Palabras: <b id="wcount">0</b></span>
      <span class="saved" id="wsaved"></span>
    </div>
    ${timerHTML(20,'Task 1 · 20 min')}
    ${timerHTML(40,'Task 2 · 40 min')}
    <textarea id="wDraft" placeholder="Empieza con la introducción: parafrasea la pregunta y anuncia tu postura…">${esc(S.draft)}</textarea>
    <p class="small muted mt18" style="margin-bottom:0">Consejo: escribe primero un esquema de 2 minutos (postura + 2 ideas + ejemplo). Un ensayo sin esquema se desordena en el párrafo 2.</p>
  </div>`;

  const ta = $('#wDraft');
  const wc = $('#wcount');
  const sv = $('#wsaved');
  const update = () => {
    const n = countWords(ta.value);
    wc.textContent = n;
    wc.style.color = n >= 250 ? 'var(--acc)' : 'var(--txt)';
  };
  update();
  ta.addEventListener('input', () => {
    S.draft = ta.value;
    save();
    update();
    sv.textContent = 'Guardado';
    clearTimeout(ta._t);
    ta._t = setTimeout(()=>{ sv.textContent = ''; }, 1200);
  });
};

/* ============================================================
   VISTA: SPEAKING
   ============================================================ */
RENDER.speaking = () => {
  const sp = SPEAKING;
  $('#speaking').innerHTML = `
  <div class="page-head">
    <div class="kicker">Destreza 4</div>
    <h1>Speaking</h1>
    <p class="lead">${sp.intro}</p>
  </div>

  <div class="grid three">
    ${sp.parts.map(p=>`<div class="card tight">
      <span class="badge green">Part ${p.n} · ${p.time}</span>
      <h3 style="margin:10px 0 6px">${p.title.split('·')[1]||p.title}</h3>
      <p class="small muted mb0">${p.desc}</p>
    </div>`).join('')}
  </div>

  <div class="card">
    <h2>Part 1 · Preguntas personales</h2>
    <p class="small muted">Respuestas de 2–3 frases. Estas son las preguntas más frecuentes por tema:</p>
    ${sp.part1.map(t=>`<details><summary>${t.topic}</summary><div class="details-body">
      <ul class="clean">${t.qs.map(q=>`<li>${q}</li>`).join('')}</ul>
    </div></details>`).join('')}
    <h3 style="margin-top:18px">Cómo responder bien</h3>
    <ul class="clean">${sp.part1tips.map(t=>`<li>${t}</li>`).join('')}</ul>
    <div class="mt18">${doneBtn('s1','He practicado Part 1')}</div>
  </div>

  <div class="card">
    <h2>Part 2 · Monólogo de 2 minutos</h2>
    <p class="small muted">Flujo del examen: 1 minuto para preparar (con lápiz y papel), 2 minutos hablando, 1 minuto de preguntas de seguimiento. Practica con el cronómetro y <b>grábate</b>.</p>
    ${timerHTML(1,'Preparación (1 min)')}
    ${timerHTML(2,'Hablar (2 min)')}
    ${sp.part2.map((p,i)=>`<details>
      <summary>Tarjeta ${i+1}: ${p.card.title}</summary>
      <div class="details-body">
        <div class="note blue" style="margin-top:0"><b>Cue card:</b> ${p.card.title}<br>You should say:<br>${p.card.points.map(x=>'• '+x).join('<br>')}</div>
        <details><summary>Ver respuesta modelo (banda 7.5)</summary><div class="details-body">
          <p style="font-family:'Source Serif 4',Georgia,serif">${p.model}</p>
          <p class="small muted">${countWords(p.model)} palabras · ${speakBtn('sp'+i, p.model, 'Escuchar')}</p>
          <div class="note">${p.why}</div>
        </div></details>
      </div>
    </details>`).join('')}
    <div class="mt18">${doneBtn('s2','He practicado Part 2')}</div>
  </div>

  <div class="card">
    <h2>Part 3 · Discusión abstracta</h2>
    <p class="small muted">Aquí se ve el nivel. Estructura: <b>respuesta directa → razón → ejemplo o matiz</b>. Nada de respuestas de una frase.</p>
    ${sp.part3.map((p,i)=>`<details><summary>${p.q}</summary><div class="details-body">
      <p style="font-family:'Source Serif 4',Georgia,serif">${p.model}</p>
      <p class="small muted">${speakBtn('p3-'+i, p.model, 'Escuchar')}</p>
    </div></details>`).join('')}
    <div class="mt18">${doneBtn('s3','He practicado Part 3')}</div>
  </div>

  <div class="card">
    <h2>Pronunciación: los 6 puntos que más cuestan</h2>
    <div class="table-wrap"><table>
      <thead><tr><th>Punto</th><th>Ejemplos</th><th>Consejo</th></tr></thead>
      <tbody>${sp.pronunciation.map(([a,b,c])=>`<tr><td><b>${a}</b></td><td>${b}</td><td>${c}</td></tr>`).join('')}</tbody>
    </table></div>
    <div class="note">La pronunciación es el 25% de la nota. No necesitas acento británico: necesitas que se te entienda sin esfuerzo y usar el acento de palabra correcto.</div>
  </div>`;
};

/* ============================================================
   VISTA: VOCABULARIO (SRS)
   ============================================================ */
const DAYS = [0, 1, 3, 7, 16, 35];
let session = null;
let pendingSession = false;

function vocabStats(){
  let mastered = 0, learning = 0, fresh = 0;
  VOCAB.forEach(v => {
    const e = S.srs[v.w];
    if(!e || !e.seen) fresh++;
    else if(e.box >= 4) mastered++;
    else learning++;
  });
  return { total: VOCAB.length, mastered, learning, fresh };
}

function startSession(size){
  const now = Date.now();
  const unseen = shuffle(VOCAB.filter(v => !S.srs[v.w] || !S.srs[v.w].seen));
  const due = VOCAB.filter(v => S.srs[v.w] && S.srs[v.w].seen && S.srs[v.w].due <= now)
                   .sort((a,b) => S.srs[a.w].due - S.srs[b.w].due);
  let queue = [...unseen, ...due];
  if(queue.length < size){
    const chosen = new Set(queue.map(v=>v.w));
    const rest = VOCAB.filter(v => !chosen.has(v.w))
      .sort((a,b) => ((S.srs[a.w]&&S.srs[a.w].due)||0) - ((S.srs[b.w]&&S.srs[b.w].due)||0));
    queue = queue.concat(rest);
  }
  session = { queue: queue.slice(0,size), total: size, done: 0, right: 0, again: 0, flipped:false };
  renderDeck();
}

function renderDeck(){
  const area = $('#deckArea');
  if(!area) return;
  if(!session){ area.innerHTML = ''; return; }

  if(!session.queue.length){
    const pct = session.done ? Math.round(session.right / session.done * 100) : 0;
    area.innerHTML = `
      <div class="card center" style="max-width:640px;margin:0 auto">
        <div style="font-size:2rem">🎉</div>
        <h2 style="margin:8px 0">Sesión completada</h2>
        <p class="muted">${session.done} tarjetas repasadas · ${session.again} para volver a ver · ${pct}% acertadas</p>
        <div class="grid three" style="margin:16px 0">
          <div class="stat"><div class="n">${session.done}</div><div class="l">repasadas</div></div>
          <div class="stat"><div class="n">${session.right}</div><div class="l">correctas</div></div>
          <div class="stat"><div class="n">${session.again}</div><div class="l">repetidas</div></div>
        </div>
        <button class="btn" data-session-start="10">Otra sesión de 10</button>
        <button class="btn ghost" data-session-start="20">Sesión de 20</button>
      </div>`;
    session = null;
    vocabHeaderRefresh();
    return;
  }

  const v = session.queue[0];
  const learned = session.done;
  const totalNow = session.done + session.queue.length;
  const pct = Math.round(learned / Math.max(1,totalNow) * 100);
  area.innerHTML = `
    <div class="session-top">
      <span class="badge">${learned}/${totalNow}</span>
      <div class="bar"><i style="width:${pct}%"></i></div>
    </div>
    <div class="deck-wrap">
      <div class="flashcard" id="fc">
        <div class="fc-face">
          <div class="fc-sound">${speakBtn('card-'+v.w, v.w, 'oír')}</div>
          <div class="fc-word">${v.w}</div>
          <div class="fc-ipa">${v.ipa}</div>
          <div class="fc-pos">${v.pos}</div>
          <div class="fc-hint">Toca la tarjeta para ver el significado</div>
        </div>
        <div class="fc-face back">
          <div class="fc-trans">${v.es}</div>
          <div class="fc-label">Definición</div>
          <div class="fc-def">${v.en}</div>
          <div class="fc-label">Ejemplo</div>
          <div class="fc-ex">${v.ex}</div>
          <div class="fc-col">${v.col}</div>
        </div>
      </div>
    </div>
    <div class="deck-actions">
      <button class="btn ghost" data-rate="again">Otra vez</button>
      <button class="btn" data-rate="good">Bien</button>
      <button class="btn blue" data-rate="easy">Fácil</button>
    </div>
    <p class="center small muted mt18">«Otra vez» la devuelve al final de la sesión. «Bien» la programa para dentro de 1–3 días. «Fácil» la aleja más.</p>`;
}

function rateCard(rate){
  if(!session || !session.queue.length) return;
  const v = session.queue.shift();
  const now = Date.now();
  const e = S.srs[v.w] || { box:0, seen:0, right:0, wrong:0, due:0 };
  e.seen = (e.seen||0) + 1;
  if(rate === 'again'){
    e.box = 0;
    e.wrong = (e.wrong||0) + 1;
    e.due = now + 10*60*1000;
    session.queue.push(v);
    session.again++;
  }else{
    e.box = Math.min(5, (e.box||0) + (rate === 'easy' ? 2 : 1));
    e.right = (e.right||0) + 1;
    e.due = now + DAYS[Math.min(e.box,5)] * 86400000;
    session.right++;
  }
  session.done++;
  S.srs[v.w] = e;
  save();
  renderDeck();
  vocabHeaderRefresh();
}

function vocabHeaderRefresh(){
  const s = vocabStats();
  const el = $('#vocabStats');
  if(el){
    el.innerHTML = `
      <div class="stat"><div class="n">${s.total}</div><div class="l">palabras</div></div>
      <div class="stat"><div class="n">${s.fresh}</div><div class="l">sin ver</div></div>
      <div class="stat"><div class="n">${s.learning}</div><div class="l">aprendiendo</div></div>
      <div class="stat"><div class="n">${s.mastered}</div><div class="l">dominadas</div></div>`;
  }
  $('#vocabTop') && ($('#vocabTop').textContent = s.mastered);
}

RENDER.vocab = () => {
  const s = vocabStats();
  $('#vocab').innerHTML = `
  <div class="page-head">
    <div class="kicker">Práctica diaria</div>
    <h1>Vocabulario académico</h1>
    <p class="lead">60 palabras que aparecen una y otra vez en el IELTS. El sistema usa repetición espaciada: lo que aciertas vuelve más tarde, lo que fallas vuelve antes.</p>
  </div>

  <div class="grid four" id="vocabStats">
    <div class="stat"><div class="n">${s.total}</div><div class="l">palabras</div></div>
    <div class="stat"><div class="n">${s.fresh}</div><div class="l">sin ver</div></div>
    <div class="stat"><div class="n">${s.learning}</div><div class="l">aprendiendo</div></div>
    <div class="stat"><div class="n">${s.mastered}</div><div class="l">dominadas</div></div>
  </div>

  <div class="card" style="margin-top:16px">
    <div class="flex-between">
      <div>
        <h3 style="margin:0">Sesión de repaso</h3>
        <p class="small muted mb0">10–20 tarjetas. Tarda unos 5 minutos.</p>
      </div>
      <div class="chips">
        <button class="btn sm" data-session-start="10">Empezar 10</button>
        <button class="btn ghost sm" data-session-start="15">15</button>
        <button class="btn ghost sm" data-session-start="20">20</button>
      </div>
    </div>
    <div id="deckArea" style="margin-top:18px"></div>
  </div>

  <div class="card">
    <div class="flex-between">
      <h3 style="margin:0">Lista completa</h3>
      <input type="text" id="vocabSearch" class="searchbar" placeholder="Buscar palabra o traducción…" autocomplete="off">
    </div>
    <div class="table-wrap" style="margin-top:14px">
      <table class="word-table">
        <thead><tr><th>Palabra</th><th>Nivel</th><th>Español</th><th>Ejemplo</th></tr></thead>
        <tbody id="vocabRows">
          ${VOCAB.map(v=>{
            const box = S.srs[v.w] ? S.srs[v.w].box||0 : -1;
            const badge = box < 0 ? '<span class="badge">nueva</span>' : box >= 4 ? '<span class="badge green">dominada</span>' : '<span class="badge blue">aprendiendo</span>';
            return `<tr data-search="${(v.w+' '+v.es+' '+v.en).toLowerCase()}">
              <td>${v.w}<div class="small muted" style="font-weight:400">${v.ipa}</div></td>
              <td>${badge}</td>
              <td>${v.es}</td>
              <td class="small">${v.ex}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  </div>

  <div class="note blue">Método: no memorices la lista. Estudia la tarjeta, di el ejemplo en voz alta y escribe una frase tuya con la palabra. Eso es lo que se queda.</div>`;

  const search = $('#vocabSearch');
  search.addEventListener('input', () => {
    const q = search.value.toLowerCase().trim();
    $$('#vocabRows tr').forEach(tr => {
      tr.style.display = !q || tr.dataset.search.includes(q) ? '' : 'none';
    });
  });

  if(pendingSession){ pendingSession = false; setTimeout(()=>startSession(10), 60); }
};

/* ============================================================
   VISTA: GRAMÁTICA
   ============================================================ */
RENDER.gramatica = () => {
  $('#gramatica').innerHTML = `
  <div class="page-head">
    <div class="kicker">Base del idioma</div>
    <h1>Gramática de A2 a C1</h1>
    <p class="lead">Ocho unidades ordenadas por dificultad. Lee la teoría, haz el test de 5 preguntas y no pases a la siguiente hasta acertar al menos 4.</p>
  </div>
  ${GRAMMAR.map((u,i)=>`
    <details class="card-det" ${i===0?'open':''}>
      <summary>${i+1}. ${u.title}<span class="det-meta"><span class="badge blue">${u.level}</span>${S.done[u.id]?'<span class="badge green">✓</span>':''}</span></summary>
      <div class="details-body">
        <p class="muted">${u.intro}</p>
        ${u.points.map(p=>`<h3>${p.h}</h3>${p.html}`).join('')}
        <div class="hr"></div>
        <h3>Test rápido</h3>
        ${quizHTML(u.quiz, u.id, 'Gramática · '+u.title)}
        <div class="mt18">${doneBtn(u.id)}</div>
      </div>
    </details>`).join('')}

  <div class="card">
    <h3>Orden recomendado</h3>
    <p class="small muted">Si vienes de A2: 1 → 6 → 2 → 3 → 7 → 4 → 5 → 8. Las tres últimas son las que más suben la nota de Writing, pero solo funcionan si las primeras están sólidas.</p>
    <div class="note">Regla: si fallas 2 o más en un test, vuelve a leer la teoría al día siguiente y repite. Un tema por día es suficiente.</div>
  </div>`;
};

/* ============================================================
   VISTA: EXAMEN
   ============================================================ */
let exam = null;

function estimateBand(pct){
  if(pct >= 90) return '7.5 – 8.0';
  if(pct >= 80) return '7.0 – 7.5';
  if(pct >= 70) return '6.5';
  if(pct >= 60) return '6.0';
  if(pct >= 50) return '5.5';
  return '5.0 o menos';
}

RENDER.examen = () => {
  exam = { answers: new Array(EXAM.questions.length).fill(-1), finished: false, started: false };
  $('#examen').innerHTML = `
  <div class="page-head">
    <div class="kicker">Ponte a prueba</div>
    <h1>${EXAM.title}</h1>
    <p class="lead">${EXAM.note}</p>
  </div>
  <div class="card">
    <div class="flex-between" style="margin-bottom:8px">
      <div><span class="badge warn">Sin pausas</span> <span class="small muted">Responde las 20 y entrega.</span></div>
      <div class="timer" style="margin:0;border:none;background:none;padding:0">
        <span class="clock" id="examClock">${fmt(EXAM.duration*60)}</span>
        <span class="tl">restante</span>
      </div>
    </div>
    <p class="small muted" id="examHint">El cronómetro arranca con tu primera respuesta.</p>
    <div class="quiz" data-exam-wrap>
      ${EXAM.questions.map((q,qi)=>`
        <div class="qcard" data-eq="${qi}">
          <div class="qhead"><span class="qnum">${qi+1}</span><div class="qtext">${q.q}</div></div>
          <div class="opts">
            ${q.opts.map((o,oi)=>`<button class="opt" data-exam data-q="${qi}" data-i="${oi}"><span class="k">${'ABCD'[oi]}</span><span>${o}</span></button>`).join('')}
          </div>
          <div class="explain">${q.why}</div>
        </div>`).join('')}
    </div>
    <div class="flex-between" style="margin-top:16px">
      <span class="small muted" id="examProgress">0/20 respondidas</span>
      <button class="btn" id="examSubmit">Entregar y corregir</button>
    </div>
    <div id="examResult"></div>
  </div>
  <div class="card">
    <h3>Cómo interpretar el resultado</h3>
    <p class="small muted mb0">Este simulacro mide gramática y vocabulario, no las cuatro destrezas. Una banda estimada alta aquí no garantiza un 7.0 en el examen real: sirve para detectar huecos, no para predecir la nota. Los simulacros completos (Listening + Reading + Writing) son los que de verdad predicen.</p>
  </div>`;

  $('#examSubmit').addEventListener('click', submitExam);
};

function startExamClock(){
  if(!exam || exam.started || exam.finished) return;
  exam.started = true;
  const hint = $('#examHint');
  if(hint) hint.textContent = 'Cronómetro en marcha. No hay pausas.';
  let secs = EXAM.duration * 60;
  const clock = $('#examClock');
  const iv = setInterval(() => {
    secs--;
    if(clock) clock.textContent = fmt(secs);
    if(secs <= 60 && clock) clock.classList.add('low');
    if(secs <= 0){
      clearInterval(iv); INTERVALS.delete(iv);
      if(clock){ clock.textContent = '00:00'; clock.className = 'clock done'; }
      submitExam();
    }
  }, 1000);
  INTERVALS.add(iv);
}

function handleExamSelect(btn){
  if(!exam || exam.finished) return;
  startExamClock();
  const qi = +btn.dataset.q;
  const i = +btn.dataset.i;
  exam.answers[qi] = i;
  const card = btn.closest('.qcard');
  $$('.opt', card).forEach(b => b.classList.remove('sel'));
  btn.classList.add('sel');
  const answered = exam.answers.filter(a => a >= 0).length;
  const p = $('#examProgress');
  if(p) p.textContent = `${answered}/${EXAM.questions.length} respondidas`;
}

function submitExam(){
  if(!exam || exam.finished) return;
  exam.finished = true;
  clearTimers();
  window.speechSynthesis && window.speechSynthesis.cancel();

  let score = 0;
  EXAM.questions.forEach((q,qi)=>{
    const card = $(`.qcard[data-eq="${qi}"]`);
    if(!card) return;
    const chosen = exam.answers[qi];
    if(chosen === q.a) score++;
    $$('.opt', card).forEach((b,oi)=>{
      b.disabled = true;
      b.classList.remove('sel');
      if(oi === q.a) b.classList.add('correct');
      if(oi === chosen && chosen !== q.a) b.classList.add('wrong');
    });
    $('.explain', card).classList.add('show');
  });

  const total = EXAM.questions.length;
  const pct = Math.round(score/total*100);
  const band = estimateBand(pct);
  S.exams.push({ date: new Date().toISOString(), score, total, pct });
  touchStreak();
  save();

  const btn = $('#examSubmit');
  if(btn) btn.style.display = 'none';
  const res = $('#examResult');
  if(res) res.innerHTML = `<div class="quiz-result" style="margin-top:16px">
    <div class="score">${score}/${total}</div>
    <div class="msg">${pct}% · banda orientativa <b>${band}</b><br>
      <span class="small muted">${pct>=80?'Excelente base. Ahora entrena las destrezas cronometradas.':pct>=60?'Buena base, pero hay temas sueltos. Revisa las explicaciones en rojo.':'Vuelve a la gramática y al vocabulario antes de repetir. Es lo normal al empezar.'}</span>
    </div>
    <button class="btn ghost sm" data-nav="gramatica">Repasar gramática</button>
  </div>`;
  const p = $('#examProgress'); if(p) p.textContent = `Entregado · ${score}/${total}`;
}

/* ============================================================
   VISTA: PROGRESO
   ============================================================ */
function pct(n,d){ return d ? Math.round(n/d*100) : 0; }

RENDER.progreso = () => {
  const doneCount = LESSONS.filter(([id]) => S.done[id]).length;
  const s = vocabStats();
  const bestExam = S.exams.length ? Math.max(...S.exams.map(e => e.pct)) : null;
  const avgQuizVals = Object.values(S.quiz);
  const avgQuiz = avgQuizVals.length ? Math.round(avgQuizVals.reduce((a,b)=>a+b,0)/avgQuizVals.length) : null;
  const st = S.streak.last === dayKey() ? (S.streak.count||0) : 0;
  const quizRows = Object.keys(S.quiz).map(id => {
    const reg = QUIZ_REG[id];
    return { id, title: reg ? reg.title : id, pct: S.quiz[id] };
  }).sort((a,b)=>b.pct-a.pct);

  $('#progreso').innerHTML = `
  <div class="page-head">
    <div class="kicker">Tu dashboard</div>
    <h1>Mi progreso</h1>
    <p class="lead">Todo se guarda en este navegador. Si cambias de dispositivo, exporta el archivo y vuelve a importarlo aquí.</p>
  </div>

  <div class="grid four">
    <div class="stat"><div class="n">${st}</div><div class="l">racha (días)</div></div>
    <div class="stat"><div class="n">${doneCount}<small>/${LESSONS.length}</small></div><div class="l">lecciones</div></div>
    <div class="stat"><div class="n">${s.mastered}<small>/60</small></div><div class="l">palabras dominadas</div></div>
    <div class="stat"><div class="n">${bestExam!==null?bestExam+'%':'—'}</div><div class="l">mejor simulacro</div></div>
  </div>

  <div class="card">
    <h2>Avance por destreza</h2>
    ${Object.entries(GROUPS).map(([g,ids])=>{
      const n = ids.filter(id=>S.done[id]).length;
      const p = pct(n,ids.length);
      return `<div style="margin-bottom:14px">
        <div class="prog-row"><span>${g}</span><b>${n}/${ids.length}</b></div>
        <div class="bar"><i style="width:${p}%"></i></div>
      </div>`;
    }).join('')}
  </div>

  <div class="grid two">
    <div class="card">
      <h3>Vocabulario</h3>
      <div class="prog-row"><span>Sin ver</span><b>${s.fresh}</b></div>
      <div class="bar" style="margin-bottom:12px"><i style="width:${pct(s.fresh,s.total)}%;background:linear-gradient(90deg,#64748b,#94a3b8)"></i></div>
      <div class="prog-row"><span>Aprendiendo</span><b>${s.learning}</b></div>
      <div class="bar" style="margin-bottom:12px"><i style="width:${pct(s.learning,s.total)}%;background:linear-gradient(90deg,#3b82f6,#60a5fa)"></i></div>
      <div class="prog-row"><span>Dominadas</span><b>${s.mastered}</b></div>
      <div class="bar"><i style="width:${pct(s.mastered,s.total)}%"></i></div>
      <button class="btn ghost sm" data-nav="vocab" style="margin-top:16px">Ir a vocabulario</button>
    </div>

    <div class="card">
      <h3>Tests y simulacros</h3>
      <p class="small muted">Media de tests: <b style="color:var(--txt)">${avgQuiz!==null?avgQuiz+'%':'—'}</b> · Simulacros hechos: <b style="color:var(--txt)">${S.exams.length}</b></p>
      ${quizRows.length ? `<div class="table-wrap"><table class="mini">
        <thead><tr><th>Test</th><th>Mejor</th></tr></thead>
        <tbody>${quizRows.slice(0,8).map(r=>`<tr><td>${r.title}</td><td><b style="color:${r.pct>=80?'var(--acc)':r.pct>=60?'var(--warn)':'var(--bad)'}">${r.pct}%</b></td></tr>`).join('')}</tbody>
      </table></div>` : '<p class="small muted">Aún no has hecho ningún test. Empieza por una unidad de gramática.</p>'}
      ${S.exams.length ? `<h3 style="margin-top:16px">Historial de simulacros</h3>
        ${S.exams.slice(-5).reverse().map(e=>`<div class="kpi-line"><span class="dot" style="background:var(--acc)"></span><span class="grow">${new Date(e.date).toLocaleDateString('es-ES')}</span><span class="val"><b>${e.score}/${e.total}</b> · ${e.pct}%</span></div>`).join('')}` : ''}
    </div>
  </div>

  <div class="card">
    <h3>Lecciones</h3>
    <div class="grid two" style="gap:0 24px">
      ${LESSONS.map(([id,title])=>`<label class="kpi-line" style="cursor:pointer">
        <input type="checkbox" data-lesson="${id}" ${S.done[id]?'checked':''} style="width:auto;margin-right:6px">
        <span class="grow" style="color:${S.done[id]?'var(--muted)':'#c3d3e3'}">${title}</span>
      </label>`).join('')}
    </div>
  </div>

  <div class="card">
    <h3>Datos</h3>
    <p class="small muted">Exporta tu progreso como archivo JSON para no perderlo, o impórtalo en otro navegador.</p>
    <div class="chips">
      <button class="btn ghost sm" id="exportBtn">⬇ Exportar progreso</button>
      <label class="btn ghost sm" style="cursor:pointer">⬆ Importar<input type="file" id="importInput" accept="application/json" style="display:none"></label>
      <button class="btn ghost sm" id="resetBtn" style="color:#ffb4b4;border-color:rgba(248,113,113,.4)">Reiniciar todo</button>
    </div>
  </div>`;

  $$('input[data-lesson]').forEach(cb=>{
    cb.addEventListener('change', ()=>{
      const id = cb.dataset.lesson;
      if(cb.checked){ S.done[id] = true; touchStreak(); } else { delete S.done[id]; }
      save();
      RENDER.progreso();
    });
  });

  const ex = $('#exportBtn');
  if(ex) ex.addEventListener('click', ()=>{
    const blob = new Blob([JSON.stringify(S,null,2)], { type:'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'ielts-progreso.json';
    a.click();
    URL.revokeObjectURL(a.href);
  });

  const imp = $('#importInput');
  if(imp) imp.addEventListener('change', () => {
    const f = imp.files && imp.files[0];
    if(!f) return;
    const fr = new FileReader();
    fr.onload = () => {
      try{
        const data = JSON.parse(fr.result);
        S = Object.assign({}, DEFAULT_STATE, data);
        save(); RENDER.progreso(); route();
      }catch(e){ alert('El archivo no es válido.'); }
    };
    fr.readAsText(f);
  });

  const rs = $('#resetBtn');
  if(rs) rs.addEventListener('click', ()=>{
    if(confirm('¿Seguro? Se borrará todo tu progreso de este navegador.')){
      localStorage.removeItem(KEY);
      S = JSON.parse(JSON.stringify(DEFAULT_STATE));
      save();
      route();
    }
  });
};

/* ============================================================
   EVENTOS GLOBALES
   ============================================================ */
document.addEventListener('click', e => {
  /* navegación */
  const nav = e.target.closest('[data-nav]');
  if(nav){ go(nav.dataset.nav); return; }

  /* marcar lección */
  const d = e.target.closest('[data-done]');
  if(d){
    const id = d.dataset.done;
    if(S.done[id]) delete S.done[id]; else { S.done[id] = true; touchStreak(); }
    d.classList.toggle('done', !!S.done[id]);
    d.textContent = S.done[id] ? '✓ Completado' : 'Marcar como completado';
    const badge = document.querySelector(`[data-unit-done="${id}"]`);
    if(badge) badge.style.display = S.done[id] ? 'inline-flex' : 'none';
    updateCourseProgress();
    save();
    return;
  }

  /* quiz */
  const opt = e.target.closest('.opt');
  if(opt){
    if(opt.dataset.exam !== undefined){ handleExamSelect(opt); return; }
    const quizEl = opt.closest('[data-quiz]');
    if(quizEl){ handleQuizClick(opt, quizEl); return; }
  }

  /* inicio de sesión de vocabulario */
  const ss = e.target.closest('[data-session-start]');
  if(ss){ startSession(+ss.dataset.sessionStart); return; }

  /* girar tarjeta */
  const fc = e.target.closest('#fc');
  if(fc && !e.target.closest('[data-speak]')){ fc.classList.toggle('flipped'); return; }

  /* valorar tarjeta */
  const rate = e.target.closest('[data-rate]');
  if(rate){ rateCard(rate.dataset.rate); return; }

  /* tts */
  const tact = e.target.closest('[data-tts-act]');
  if(tact){
    const box = tact.closest('[data-tts]');
    const act = tact.dataset.ttsAct;
    if(act === 'play'){ ttsPlay(box); }
    if(act === 'pause'){
      if(player.lines){ pausePlayer(); return; }
      if(window.speechSynthesis){
        if(window.speechSynthesis.paused) window.speechSynthesis.resume();
        else window.speechSynthesis.pause();
      }
    }
    if(act === 'stop'){
      tts.active = false;
      stopPlayer();
      if(window.speechSynthesis) window.speechSynthesis.cancel();
      clearHighlight(box);
    }
    return;
  }
  const spk = e.target.closest('[data-speak]');
  if(spk){ speakKey(spk.dataset.speak); return; }

  /* cronómetro */
  const tbtn = e.target.closest('[data-tact]');
  if(tbtn){ timerControl(tbtn); return; }

  /* corregir formulario */
  const chk = e.target.closest('[data-check]');
  if(chk){ checkForm(chk); return; }
});

/* atajos de teclado en flashcards */
document.addEventListener('keydown', e => {
  const view = document.querySelector('#vocab.view.active');
  if(!view || !session || !session.queue.length) return;
  if(e.key === ' '){ e.preventDefault(); const fc = $('#fc'); if(fc) fc.classList.toggle('flipped'); }
  if(e.key === '1') rateCard('again');
  if(e.key === '2') rateCard('good');
  if(e.key === '3') rateCard('easy');
});

/* menú móvil */
$('#menuBtn').addEventListener('click', ()=>{
  $('#sidebar').classList.add('open');
  $('#scrim').classList.add('show');
});
$('#scrim').addEventListener('click', ()=>{
  $('#sidebar').classList.remove('open');
  $('#scrim').classList.remove('show');
});

/* cambiar de tema */
document.addEventListener('click', e => {
  const b = e.target.closest('[data-theme-set]');
  if(!b) return;
  S.theme = b.dataset.themeSet;
  save();
  applyTheme(S.theme);
});

/* repaso rápido desde la barra superior */
$('#quickStudy').addEventListener('click', ()=>{
  pendingSession = true;
  if(location.hash === '#vocab') route(); else location.hash = 'vocab';
});

/* voces del sistema (solo se usan si falta el MP3) */
if(speechOK){
  window.speechSynthesis.getVoices();
  window.speechSynthesis.onvoiceschanged = () => { window.speechSynthesis.getVoices(); };
}

/* velocidad del audio pregrabado en vivo */
document.addEventListener('input', e => {
  const r = e.target.closest('.rate');
  if(!r) return;
  player.rate = parseFloat(r.value) || 1;
  if(player.audio) player.audio.playbackRate = player.rate;
});

/* arranque */
applyTheme(S.theme);
window.addEventListener('hashchange', route);
if(!location.hash) location.hash = 'inicio';
route();
refreshTop();
