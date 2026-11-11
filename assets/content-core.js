/* ============================================================
   CONTENIDO — PARTE 1: RUTA, VOCABULARIO Y GRAMÁTICA
   ============================================================ */

const PLAN = {
  honest: `Desde A2 hasta una banda 7.0 hay un salto grande: se necesitan entre <b>700 y 900 horas</b> de estudio real. A 10 horas por semana eso son unos 18 meses; a 20 horas, entre 9 y 12 meses. No es magia, es constancia. El plan de abajo está diseñado para 48 semanas, pero puedes comprimirlo si estudias más.`,

  phases: [
    {
      n: 1, weeks: "Semanas 1–12", title: "Base sólida: A2 → B1",
      goal: "Dominar el presente, el pasado y el futuro. Construir frases correctas y empezar a entender inglés hablado real.",
      bullets: [
        "Gramática: tiempos verbales, artículos, comparativos, preposiciones básicas.",
        "Vocabulario: 1.000 palabras de uso diario (familias, trabajo, viajes, ciudad).",
        "Listening: 15 min diarios de audio con subtítulos en inglés.",
        "Writing: párrafos de 100 palabras con estructura clara (idea → ejemplo → cierre).",
        "Speaking: grabar 1 min diario hablando de tu día. Sin miedo a los errores."
      ]
    },
    {
      n: 2, weeks: "Semanas 13–24", title: "Consolidación: B1 → B2",
      goal: "Expresar opiniones con matices, usar condicionales y pasiva, y leer textos de 500 palabras sin pararte en cada palabra.",
      bullets: [
        "Gramática: condicionales, pasiva, relativos, modales de especulación.",
        "Vocabulario: 1.500 palabras académicas y colocaciones (make a decision, heavy traffic).",
        "Listening: podcasts de 10 min, series con subtítulos en inglés (nunca en español).",
        "Writing: ensayos de 250 palabras con conectores variados.",
        "Speaking: 2 min sin parar sobre un tema. Empieza a corregir tu pronunciación."
      ]
    },
    {
      n: 3, weeks: "Semanas 25–36", title: "Nivel avanzado: B2 → C1 + técnicas IELTS",
      goal: "Aprender el formato exacto del examen y las estrategias de cada tarea. Aquí es donde la banda sube de verdad.",
      bullets: [
        "Las 4 destrezas del IELTS con sus tipos de pregunta y trampas.",
        "Writing Task 1 (gráficos) y Task 2 (ensayo de opinión) con modelos banda 7+.",
        "Vocabulario académico: nominalización, hedging, conectores formales.",
        "Simulacros cronometrados cada 2 semanas.",
        "Análisis de errores: libreta de fallos recurrentes."
      ]
    },
    {
      n: 4, weeks: "Semanas 37–48", title: "Afinado y simulacros: rumbo a 7.0",
      goal: "Convertir el conocimiento en puntos. Gestión del tiempo, resistencia mental y precisión.",
      bullets: [
        "2 simulacros completos por semana con corrección honesta.",
        "Repaso de los 200 errores más frecuentes de hispanohablantes.",
        "Speaking con grabación y auto-evaluación con los descriptores de banda.",
        "Writing corregido (idealmente por un profesor o IA) y reescrito.",
        "Descanso activo: el cerebro consolida lo aprendido mientras duermes."
      ]
    }
  ],

  week: [
    ["Lunes", "Gramática (30') + flashcards (15') + listening (15')"],
    ["Martes", "Reading: 1 texto con preguntas (40') + repaso de vocab (15')"],
    ["Miércoles", "Writing: párrafo o tarea corta (40') + listening (15')"],
    ["Jueves", "Speaking: grabación de 2 min + corrección (30') + flashcards (20')"],
    ["Viernes", "Repaso de errores de la semana (30') + serie/podcast en inglés (30')"],
    ["Sábado", "Mini-simulacro cronometrado (60–90')"],
    ["Domingo", "Descanso activo: película en inglés o lectura por placer"]
  ],

  bands: [
    ["4.0–4.5", "A2+", "Frases simples, muchos errores que dificultan la comprensión."],
    ["5.0–5.5", "B1", "Se comunica, pero con errores frecuentes y vocabulario limitado."],
    ["6.0–6.5", "B2", "Inglés funcional. Errores ocasionales, buena comprensión general."],
    ["7.0–7.5", "C1", "Uso flexible y preciso. Errores raros. Aquí está tu objetivo."],
    ["8.0–9.0", "C1+/C2", "Dominio casi nativo, matices y precisión total."]
  ],

  tips: [
    "La banda 7.0 no se consigue con trucos: se consigue con volumen de inglés. 2 horas diarias de exposición real valen más que 10 ejercicios de gramática.",
    "No traduzcas palabra por palabra. Aprende bloques: <em>a significant increase</em>, <em>play a crucial role</em>, <em>there is little evidence that</em>.",
    "En el examen, la claridad gana a la complejidad. Una frase simple bien escrita vale más que una relative clause mal montada.",
    "Corrige tus propios errores: ten una lista de los 10 fallos que repites y revísala cada domingo."
  ]
};

/* ------------------------------------------------------------
   VOCABULARIO ACADÉMICO (60 palabras clave)
   ------------------------------------------------------------ */
const VOCAB = [
  { w: "significant", ipa: "/sɪɡˈnɪfɪkənt/", pos: "adj.", en: "large or important enough to have an effect", es: "significativo, importante", ex: "There has been a significant rise in remote work.", col: "a significant increase / difference / impact" },
  { w: "beneficial", ipa: "/ˌbenɪˈfɪʃl/", pos: "adj.", en: "having a good effect", es: "beneficioso", ex: "Regular exercise is beneficial for mental health.", col: "highly beneficial to/for" },
  { w: "detrimental", ipa: "/ˌdetrɪˈmentl/", pos: "adj.", en: "causing harm or damage", es: "perjudicial", ex: "Excessive screen time can be detrimental to children.", col: "detrimental to health" },
  { w: "substantial", ipa: "/səbˈstænʃl/", pos: "adj.", en: "large in amount or degree", es: "considerable, sustancial", ex: "A substantial proportion of students work part-time.", col: "a substantial amount / number" },
  { w: "crucial", ipa: "/ˈkruːʃl/", pos: "adj.", en: "extremely important", es: "crucial, fundamental", ex: "Early diagnosis is crucial for successful treatment.", col: "play a crucial role in" },
  { w: "inevitable", ipa: "/ɪnˈevɪtəbl/", pos: "adj.", en: "certain to happen, unavoidable", es: "inevitable", ex: "Some level of unemployment is inevitable in any economy.", col: "an inevitable consequence of" },
  { w: "adequate", ipa: "/ˈædɪkwət/", pos: "adj.", en: "enough in quantity or good enough in quality", es: "adecuado, suficiente", ex: "Many families lack adequate housing.", col: "adequate funding / facilities" },
  { w: "apparent", ipa: "/əˈpærənt/", pos: "adj.", en: "clearly visible or obvious; seeming", es: "evidente; aparente", ex: "It soon became apparent that the policy had failed.", col: "it is apparent that" },
  { w: "biased", ipa: "/ˈbaɪəst/", pos: "adj.", en: "unfairly preferring one side", es: "sesgado", ex: "The survey was criticized for being biased.", col: "a biased opinion / report" },
  { w: "comprehensive", ipa: "/ˌkɒmprɪˈhensɪv/", pos: "adj.", en: "complete, including everything", es: "integral, exhaustivo", ex: "The report offers a comprehensive analysis of the crisis.", col: "a comprehensive review / study" },

  { w: "controversial", ipa: "/ˌkɒntrəˈvɜːʃl/", pos: "adj.", en: "causing public disagreement", es: "polémico", ex: "The decision to raise tuition fees proved controversial.", col: "a controversial issue / decision" },
  { w: "deteriorate", ipa: "/dɪˈtɪəriəreɪt/", pos: "v.", en: "to become worse", es: "deteriorarse, empeorar", ex: "Air quality has deteriorated sharply in recent years.", col: "conditions deteriorate rapidly" },
  { w: "diminish", ipa: "/dɪˈmɪnɪʃ/", pos: "v.", en: "to become or make smaller", es: "disminuir", ex: "The benefits diminish over time.", col: "diminishing returns" },
  { w: "enhance", ipa: "/ɪnˈhɑːns/", pos: "v.", en: "to improve the quality of something", es: "mejorar, potenciar", ex: "Technology can enhance the learning experience.", col: "enhance performance / quality" },
  { w: "feasible", ipa: "/ˈfiːzəbl/", pos: "adj.", en: "possible and practical to do", es: "viable, factible", ex: "It is not feasible to ban cars entirely.", col: "technically / economically feasible" },
  { w: "fluctuate", ipa: "/ˈflʌktʃueɪt/", pos: "v.", en: "to rise and fall irregularly", es: "fluctuar", ex: "Prices fluctuated between 20 and 30 euros.", col: "fluctuate wildly" },
  { w: "fundamental", ipa: "/ˌfʌndəˈmentl/", pos: "adj.", en: "forming the basis; essential", es: "fundamental", ex: "Education is a fundamental human right.", col: "a fundamental change / principle" },
  { w: "implement", ipa: "/ˈɪmplɪment/", pos: "v.", en: "to put a plan into action", es: "implementar, aplicar", ex: "The government implemented a new tax on sugar.", col: "implement a policy / reform" },
  { w: "incentive", ipa: "/ɪnˈsentɪv/", pos: "n.", en: "something that encourages you to act", es: "incentivo", ex: "Tax breaks act as an incentive to invest.", col: "a financial incentive / provide an incentive" },
  { w: "infrastructure", ipa: "/ˈɪnfrəstrʌktʃə/", pos: "n.", en: "basic systems such as roads and power", es: "infraestructura", ex: "The region needs better transport infrastructure.", col: "invest in infrastructure" },

  { w: "mitigate", ipa: "/ˈmɪtɪɡeɪt/", pos: "v.", en: "to reduce the harmful effects of something", es: "mitigar, atenuar", ex: "Planting trees can mitigate the effects of pollution.", col: "mitigate the impact / risk" },
  { w: "negligible", ipa: "/ˈneɡlɪdʒəbl/", pos: "adj.", en: "so small that it does not matter", es: "insignificante", ex: "The difference in cost was negligible.", col: "a negligible effect" },
  { w: "notion", ipa: "/ˈnəʊʃn/", pos: "n.", en: "an idea or belief", es: "noción, idea", ex: "The notion that money brings happiness is questionable.", col: "the notion that ..." },
  { w: "obstacle", ipa: "/ˈɒbstəkl/", pos: "n.", en: "something that blocks progress", es: "obstáculo", ex: "Cost remains the main obstacle to change.", col: "overcome an obstacle" },
  { w: "phenomenon", ipa: "/fəˈnɒmɪnən/", pos: "n.", en: "a fact or event that can be observed", es: "fenómeno", ex: "Urban migration is a global phenomenon.", col: "a widespread / recent phenomenon" },
  { w: "prevalent", ipa: "/ˈprevələnt/", pos: "adj.", en: "common in a particular place or time", es: "predominante, frecuente", ex: "Obesity is increasingly prevalent among children.", col: "particularly prevalent in" },
  { w: "prohibit", ipa: "/prəˈhɪbɪt/", pos: "v.", en: "to forbid officially", es: "prohibir", ex: "Smoking is prohibited in all public buildings.", col: "strictly prohibited" },
  { w: "reinforce", ipa: "/ˌriːɪnˈfɔːs/", pos: "v.", en: "to make stronger", es: "reforzar", ex: "Advertising reinforces existing stereotypes.", col: "reinforce the idea that" },
  { w: "reluctant", ipa: "/rɪˈlʌktənt/", pos: "adj.", en: "unwilling to do something", es: "reacio", ex: "Many employers are reluctant to hire older workers.", col: "be reluctant to accept" },
  { w: "resilient", ipa: "/rɪˈzɪliənt/", pos: "adj.", en: "able to recover quickly from difficulties", es: "resiliente", ex: "Children are often more resilient than adults expect.", col: "a resilient economy" },

  { w: "sustainable", ipa: "/səˈsteɪnəbl/", pos: "adj.", en: "able to continue without damaging the environment", es: "sostenible", ex: "We need a more sustainable approach to farming.", col: "environmentally sustainable" },
  { w: "tackle", ipa: "/ˈtækl/", pos: "v.", en: "to deal with a problem seriously", es: "abordar, combatir", ex: "Governments must tackle youth unemployment.", col: "tackle a problem / issue" },
  { w: "undermine", ipa: "/ˌʌndəˈmaɪn/", pos: "v.", en: "to weaken gradually", es: "socavar, debilitar", ex: "Constant criticism undermines confidence.", col: "undermine trust / authority" },
  { w: "viable", ipa: "/ˈvaɪəbl/", pos: "adj.", en: "capable of working successfully", es: "viable", ex: "Solar power is now a viable alternative to coal.", col: "a viable option / solution" },
  { w: "widespread", ipa: "/ˈwaɪdspred/", pos: "adj.", en: "existing in many places", es: "generalizado", ex: "There is widespread support for the proposal.", col: "widespread concern / use" },
  { w: "allocate", ipa: "/ˈæləkeɪt/", pos: "v.", en: "to distribute resources for a purpose", es: "asignar, destinar", ex: "The council allocated funds to public transport.", col: "allocate resources / funding" },
  { w: "advocate", ipa: "/ˈædvəkeɪt/", pos: "v.", en: "to publicly support an idea", es: "defender, abogar por", ex: "Some economists advocate raising the retirement age.", col: "advocate for / advocate a policy" },
  { w: "alleviate", ipa: "/əˈliːvieɪt/", pos: "v.", en: "to make pain or a problem less severe", es: "aliviar", ex: "The measures did little to alleviate poverty.", col: "alleviate pressure / poverty" },
  { w: "attribute", ipa: "/əˈtrɪbjuːt/", pos: "v.", en: "to say that something is caused by", es: "atribuir", ex: "Researchers attribute the decline to pollution.", col: "attribute X to Y" },

  { w: "ambiguous", ipa: "/æmˈbɪɡjuəs/", pos: "adj.", en: "having more than one possible meaning; unclear", es: "ambiguo", ex: "The results of the survey were ambiguous.", col: "deliberately ambiguous" },
  { w: "compel", ipa: "/kəmˈpel/", pos: "v.", en: "to force someone to do something", es: "obligar", ex: "Rising costs compelled the company to close.", col: "compel sb to do sth" },
  { w: "constrain", ipa: "/kənˈstreɪn/", pos: "v.", en: "to limit or restrict", es: "limitar, restringir", ex: "A tight budget constrains what schools can offer.", col: "financial constraints" },
  { w: "correlate", ipa: "/ˈkɒrəleɪt/", pos: "v.", en: "to have a mutual relationship", es: "correlacionar", ex: "Income correlates strongly with life expectancy.", col: "correlate with" },
  { w: "criterion", ipa: "/kraɪˈtɪəriən/", pos: "n.", en: "a standard for judging (plural: criteria)", es: "criterio", ex: "Cost is only one criterion in the decision.", col: "meet the criteria" },
  { w: "disparity", ipa: "/dɪˈspærəti/", pos: "n.", en: "a clear difference, often unfair", es: "desigualdad, disparidad", ex: "There is a wide disparity in wages between regions.", col: "a growing disparity between" },
  { w: "empirical", ipa: "/ɪmˈpɪrɪkl/", pos: "adj.", en: "based on observation, not theory", es: "empírico", ex: "There is little empirical evidence for this claim.", col: "empirical evidence / data" },
  { w: "exploit", ipa: "/ɪkˈsplɔɪt/", pos: "v.", en: "to use unfairly for your own benefit", es: "explotar, aprovechar", ex: "Some companies exploit cheap labour abroad.", col: "exploit a resource / workers" },
  { w: "facilitate", ipa: "/fəˈsɪlɪteɪt/", pos: "v.", en: "to make something easier", es: "facilitar", ex: "Online tools facilitate collaboration.", col: "facilitate access to" },
  { w: "hinder", ipa: "/ˈhɪndə/", pos: "v.", en: "to make progress difficult", es: "obstaculizar", ex: "Poor infrastructure hinders economic growth.", col: "hinder development" },

  { w: "imply", ipa: "/ɪmˈplaɪ/", pos: "v.", en: "to suggest without stating directly", es: "implicar, dar a entender", ex: "The data imply a link between diet and mood.", col: "strongly imply that" },
  { w: "incur", ipa: "/ɪnˈkɜː/", pos: "v.", en: "to experience something unpleasant as a result", es: "incurrir en, acarrear", ex: "Students may incur large debts.", col: "incur costs / debt" },
  { w: "intrinsic", ipa: "/ɪnˈtrɪnsɪk/", pos: "adj.", en: "belonging naturally to something", es: "intrínseco", ex: "Reading for pleasure has intrinsic value.", col: "intrinsic motivation" },
  { w: "justify", ipa: "/ˈdʒʌstɪfaɪ/", pos: "v.", en: "to give a good reason for", es: "justificar", ex: "It is hard to justify such high fees.", col: "justify the cost" },
  { w: "legitimate", ipa: "/lɪˈdʒɪtɪmət/", pos: "adj.", en: "reasonable and acceptable by law", es: "legítimo", ex: "They have a legitimate concern about safety.", col: "a legitimate reason" },
  { w: "magnitude", ipa: "/ˈmæɡnɪtjuːd/", pos: "n.", en: "the great size or importance of something", es: "magnitud", ex: "Few people grasp the magnitude of the problem.", col: "the magnitude of the problem" },
  { w: "nevertheless", ipa: "/ˌnevəðəˈles/", pos: "adv.", en: "in spite of that (formal)", es: "sin embargo, no obstante", ex: "The policy is unpopular; nevertheless, it works.", col: "nevertheless, ..." },
  { w: "offset", ipa: "/ˌɒfˈset/", pos: "v.", en: "to balance one effect with an opposite one", es: "compensar", ex: "Higher wages offset the increase in rents.", col: "offset the cost" },
  { w: "perceive", ipa: "/pəˈsiːv/", pos: "v.", en: "to see or understand in a particular way", es: "percibir", ex: "Immigrants are often perceived as a threat.", col: "be perceived as" },
  { w: "plausible", ipa: "/ˈplɔːzəbl/", pos: "adj.", en: "seeming reasonable or likely", es: "plausible", ex: "That is a plausible explanation, but unproven.", col: "a plausible explanation" },
  { w: "profound", ipa: "/prəˈfaʊnd/", pos: "adj.", en: "very great or deeply felt", es: "profundo", ex: "The internet has had a profound effect on language.", col: "a profound impact / change" }
];

/* ------------------------------------------------------------
   GRAMÁTICA — 8 unidades con test
   ------------------------------------------------------------ */
const GRAMMAR = [
  {
    id: "g1", title: "Present perfect vs. past simple", level: "B1",
    intro: `Los hispanohablantes confunden estos dos tiempos constantemente, y en el IELTS se nota. La diferencia no está en el español, sino en <b>si el tiempo ya terminó o no</b>.`,
    points: [
      { h: "Past simple: acción cerrada en un momento concreto", html: `<p>Usa past simple cuando dices <b>cuándo</b> pasó (aunque sea implícito o ya conocido).</p>
      <p class="ex">I <b>studied</b> English for two years. <span>(terminó, ya no estudio)</span></p>
      <p class="ex">She <b>went</b> to London last summer. / I <b>saw</b> him yesterday.</p>` },
      { h: "Present perfect: experiencia o periodo que sigue abierto", html: `<p>Usa present perfect cuando no importa el momento, o cuando el periodo no ha terminado.</p>
      <p class="ex">I <b>have studied</b> English for two years. <span>(sigo estudiando)</span></p>
      <p class="ex">I <b>have been</b> to London three times. <span>(no digo cuándo)</span></p>
      <p class="ex">Have you <b>finished</b> yet? <span>(periodo actual)</span></p>` },
      { h: "Palabras señal", html: `<p><b>Past simple:</b> yesterday, last week, in 2010, ago, then, when I was a child.</p>
      <p><b>Present perfect:</b> ever, never, already, yet, just, since, for, so far, recently, lately.</p>
      <p class="warn">✗ I have seen him yesterday. → ✓ I saw him yesterday.</p>
      <p class="warn">✗ I live here since 2019. → ✓ I have lived here since 2019.</p>` },
      { h: "Truco para el examen", html: `<p>En Writing, combina los dos: <em>Since 2010, the number has risen steadily. In 2019, however, it fell sharply.</em> Esa alternancia demuestra control gramatical.</p>` }
    ],
    quiz: [
      { q: "I ______ to Berlin in 2019 and I loved it.", opts: ["have been", "went", "have gone", "was going"], a: 1, why: "Hay una fecha pasada concreta (2019) y la acción terminó: past simple." },
      { q: "She ______ in Madrid since she was a child.", opts: ["lives", "lived", "has lived", "is living"], a: 2, why: "'Since' + periodo que continúa = present perfect." },
      { q: "______ your homework yet?", opts: ["Did you finish", "Have you finished", "Were you finishing", "Do you finish"], a: 1, why: "'Yet' en una pregunta pide present perfect." },
      { q: "We ______ three emails so far today.", opts: ["sent", "have sent", "are sending", "send"], a: 1, why: "'So far today' es un periodo todavía abierto: present perfect." },
      { q: "Which sentence is correct?", opts: ["I have visited Rome last year.", "I visited Rome last year.", "I have visit Rome last year.", "I am visiting Rome last year."], a: 1, why: "Con 'last year' el tiempo está cerrado: past simple, sin present perfect." }
    ]
  },
  {
    id: "g2", title: "Condicionales y hipótesis", level: "B2",
    intro: `Los condicionales son la herramienta número uno para expresar opinión matizada en el IELTS, sobre todo en Speaking Part 3 y Writing Task 2.`,
    points: [
      { h: "Los cuatro tipos", html: `<table class="mini"><tr><th>Tipo</th><th>Estructura</th><th>Ejemplo</th></tr>
      <tr><td>0</td><td>if + present, present</td><td>If you heat ice, it melts.</td></tr>
      <tr><td>1</td><td>if + present, will</td><td>If governments invest, pollution will fall.</td></tr>
      <tr><td>2</td><td>if + past, would</td><td>If I were the mayor, I would ban cars.</td></tr>
      <tr><td>3</td><td>if + had + pp, would have + pp</td><td>If they had acted sooner, the crisis would have been avoided.</td></tr></table>` },
      { h: "Mezclado: pasado → presente", html: `<p class="ex">If I <b>had studied</b> medicine, I <b>would be</b> a doctor now.</p>
      <p>(condición pasada, resultado presente)</p>` },
      { h: "Alternativas a 'if'", html: `<p><b>Unless</b> (= if not): <em>Unless we act now, the damage will be permanent.</em></p>
      <p><b>Provided (that) / as long as</b>: <em>Public transport will improve provided that funding continues.</em></p>
      <p><b>Otherwise</b>: <em>We must reduce emissions; otherwise, temperatures will rise.</em></p>` },
      { h: "Inversión formal (banda 7+)", html: `<p><em><b>Had</b> the government acted earlier, the outcome would have been different.</em></p>
      <p><em><b>Were</b> university free, more students from poor families would attend.</em></p>
      <p class="warn">Úsalo con moderación: una o dos veces por ensayo, no más.</p>` }
    ],
    quiz: [
      { q: "If I ______ more time, I would learn Portuguese.", opts: ["have", "had", "will have", "would have"], a: 1, why: "Condicional 2: if + past simple, would + infinitivo." },
      { q: "If the government ______ earlier, thousands of jobs would have been saved.", opts: ["acted", "had acted", "would act", "acts"], a: 1, why: "Condicional 3: if + had + participio, would have + participio." },
      { q: "______ we reduce consumption, the problem will get worse.", opts: ["If", "Unless", "Provided", "As long as"], a: 1, why: "'Unless' = if not. Sin reducción, el problema empeora." },
      { q: "Had I known about the deadline, I ______ the essay on time.", opts: ["would submit", "would have submitted", "submitted", "will submit"], a: 1, why: "Inversión de condicional 3: Had I known... would have + participio." },
      { q: "Which sentence is NOT correct?", opts: ["If it rains, the match will be cancelled.", "If I were you, I would apply.", "If I would have money, I would travel.", "If you had left earlier, you would have caught the train."], a: 2, why: "En el condicional 2 el 'if' nunca lleva 'would': If I had money..." }
    ]
  },
  {
    id: "g3", title: "Relative clauses (oraciones de relativo)", level: "B2",
    intro: `Sirven para unir ideas y evitar frases cortas tipo "The car is red. The car is mine". En Writing son oro para la cohesión.`,
    points: [
      { h: "Defining: información esencial, sin comas", html: `<p class="ex">The city <b>which/that</b> I visited was beautiful.</p>
      <p>Puedes omitir el pronombre si es objeto: <em>The book (that) I read...</em></p>
      <p class="warn">Nunca uses 'what' como relativo: ✗ The thing what I need → ✓ The thing (that) I need.</p>` },
      { h: "Non-defining: información extra, entre comas", html: `<p class="ex">Madrid, <b>which</b> is the capital of Spain, has a serious housing problem.</p>
      <p>Aquí <b>no</b> se puede usar 'that' ni omitir el pronombre.</p>` },
      { h: "whose, where, when, why", html: `<p class="ex">Students <b>whose</b> parents are unemployed receive a grant.</p>
      <p class="ex">This is the reason <b>why</b> the policy failed.</p>
      <p class="ex">Cities <b>where</b> public transport is cheap have lower emissions.</p>` },
      { h: "Preposición + which (formal)", html: `<p class="ex">The period <b>during which</b> the economy grew was short.</p>
      <p class="ex">The extent <b>to which</b> this is true remains unclear.</p>
      <p>Muy útil en Task 2 para sonar académico.</p>` }
    ],
    quiz: [
      { q: "The scientist ______ discovered the vaccine won a prize.", opts: ["which", "who", "whose", "where"], a: 1, why: "Persona + función de sujeto → who (o that)." },
      { q: "This is the town ______ I grew up.", opts: ["which", "that", "where", "who"], a: 2, why: "Lugar + 'grow up' sin preposición → where." },
      { q: "Students ______ grades are excellent can apply for the scholarship.", opts: ["who", "which", "whose", "whom"], a: 2, why: "'whose' expresa posesión: sus notas." },
      { q: "My brother, ______ lives in Canada, is a doctor.", opts: ["that", "who", "which", "whose"], a: 1, why: "Non-defining (entre comas): no se usa 'that'; para persona, 'who'." },
      { q: "The report, ______ was published in May, caused a scandal.", opts: ["that", "what", "which", "who"], a: 2, why: "Non-defining con cosa: 'which' (nunca 'that' ni 'what')." }
    ]
  },
  {
    id: "g4", title: "Voz pasiva y construcciones impersonales", level: "B2",
    intro: `La pasiva aleja al sujeto y suena más objetivo. Es típica de textos académicos y del Writing Task 1.`,
    points: [
      { h: "Pasiva básica", html: `<p class="ex">They built the bridge in 1990. → The bridge <b>was built</b> in 1990.</p>
      <p>Estructura: <b>be + participio pasado</b> (en el tiempo que necesites).</p>
      <p class="ex">The results <b>are being analysed</b>. / The law <b>will be reviewed</b>.</p>` },
      { h: "Pasivas de reporte (muy IELTS)", html: `<p class="ex"><b>It is believed that</b> the policy has reduced crime.</p>
      <p class="ex">The policy <b>is believed to have reduced</b> crime.</p>
      <p>Verbos útiles: believe, claim, argue, report, estimate, suggest, consider.</p>
      <p class="ex">Smoking <b>is estimated to cause</b> eight million deaths a year.</p>` },
      { h: "Pasiva con 'get' (informal)", html: `<p class="ex">He <b>got fired</b>. / I <b>got my car repaired</b>.</p>
      <p>No la uses en Writing Task 2; sí en Speaking Part 1.</p>` },
      { h: "Cuándo NO usar pasiva", html: `<p>Si el agente es importante, mantén la activa: <em>The government introduced the tax</em> es más claro que <em>The tax was introduced</em> si quieres señalar responsabilidad.</p>` }
    ],
    quiz: [
      { q: "The new hospital ______ next year.", opts: ["will build", "will be built", "is building", "has built"], a: 1, why: "El hospital recibe la acción: will be + participio." },
      { q: "It ______ that the number of cyclists has doubled.", opts: ["is estimated", "estimates", "is estimating", "has estimated"], a: 0, why: "Construcción impersonal: It is estimated that..." },
      { q: "The suspect is believed ______ the country.", opts: ["to leave", "to have left", "leaving", "having left"], a: 1, why: "La acción es anterior: is believed to have + participio." },
      { q: "Choose the passive: 'Researchers have conducted many studies.'", opts: ["Many studies have conducted.", "Many studies have been conducted.", "Many studies were conducting.", "Many studies are conduct."], a: 1, why: "Present perfect pasivo: have been + participio." },
      { q: "Which is the most natural sentence?", opts: ["The tax was introduced by the government last year.", "The government introduced the tax last year.", "Last year the tax was introduced.", "The tax introduced last year."], a: 1, why: "Si el agente importa (quién lo hizo), la activa es más clara y natural." }
    ]
  },
  {
    id: "g5", title: "Modales de especulación y deducción", level: "B2",
    intro: `En Speaking Part 3 te preguntan por el futuro y por causas. Estos modales te permiten opinar sin sonar categórico, algo clave para banda 7.`,
    points: [
      { h: "Presente: cuánto de seguro estás", html: `<table class="mini"><tr><th>Modal</th><th>Significado</th><th>Ejemplo</th></tr>
      <tr><td>must</td><td>casi seguro (positivo)</td><td>He must be tired.</td></tr>
      <tr><td>might / may / could</td><td>posible</td><td>It might rain later.</td></tr>
      <tr><td>can't</td><td>casi seguro (negativo)</td><td>That can't be true.</td></tr>
      <tr><td>should</td><td>probable / esperado</td><td>The train should arrive at six.</td></tr></table>` },
      { h: "Pasado: modal + have + participio", html: `<p class="ex">She <b>must have forgotten</b> the meeting. <span>(seguro que lo olvidó)</span></p>
      <p class="ex">They <b>might have left</b> already.</p>
      <p class="ex">He <b>can't have finished</b> so quickly.</p>` },
      { h: "Alternativas académicas (hedging)", html: `<p class="ex">This <b>is likely to</b> become more common.</p>
      <p class="ex">It <b>is unlikely that</b> the trend will reverse.</p>
      <p class="ex">There <b>may be</b> a link between the two.</p>
      <p class="ex">The evidence <b>suggests that</b> ...</p>
      <p class="warn">Evita "I think" en cada frase. Varía: In my view, It seems that, There is little doubt that.</p>` }
    ],
    quiz: [
      { q: "She's been driving all day. She ______ be exhausted.", opts: ["can", "must", "can't", "should have"], a: 1, why: "Deducción fuerte positiva: must be." },
      { q: "He ______ have taken the keys — they're still on the table.", opts: ["must", "might", "can't", "should"], a: 2, why: "Es imposible: can't have + participio." },
      { q: "The train ______ arrive around 7, but it's often late.", opts: ["must", "should", "can't", "needn't"], a: 1, why: "Expectativa probable: should." },
      { q: "It ______ be true that he earned that much in a year; it seems impossible.", opts: ["mustn't", "can't", "shouldn't", "needn't"], a: 1, why: "Para deducción negativa se usa can't, no mustn't." },
      { q: "Which sentence sounds most academic?", opts: ["I think it will probably get worse.", "It is likely to become more severe.", "Maybe it gets worse, I don't know.", "It must get worse."], a: 1, why: "Hedging formal y preciso, típico de banda 7+." }
    ]
  },
  {
    id: "g6", title: "Artículos y contables", level: "B1",
    intro: `Los errores con 'a/an/the' y con sustantivos incontables son los más frecuentes entre estudiantes españoles. Cuestan puntos en Writing y Speaking.`,
    points: [
      { h: "a/an vs. the vs. nada", html: `<p><b>a/an</b> = uno cualquiera, primera mención: <em>I saw <b>a</b> documentary.</em></p>
      <p><b>the</b> = ya conocido, único, o especificado: <em><b>The</b> documentary was about bees.</em></p>
      <p><b>sin artículo</b> = generalizaciones en plural o incontables: <em><b>Bees</b> are essential. <b>Education</b> changes lives.</em></p>
      <p class="warn">✗ <b>The</b> pollution is a problem. → ✓ <b>Pollution</b> is a problem.</p>` },
      { h: "Incontables que se usan mal", html: `<p><b>advice, information, research, evidence, news, furniture, equipment, traffic, money, work</b> → nunca con 'a' ni en plural.</p>
      <p class="warn">✗ a research / researches / an advice / many informations</p>
      <p>✓ <em>a piece of research, some advice, a great deal of evidence, a lot of traffic</em></p>` },
      { h: "'The' obligatorio", html: `<p>Superlativos (<em>the best</em>), únicos (<em>the sun, the internet</em>), ríos y mares (<em>the Thames</em>), grupos (<em>the unemployed</em>), épocas (<em>the 1990s</em>).</p>
      <p>Sin 'the': comidas, idiomas, deportes, países (salvo <em>the UK, the USA, the Netherlands</em>).</p>` }
    ],
    quiz: [
      { q: "______ information you gave me was very useful.", opts: ["A", "An", "The", "— (nada)"], a: 2, why: "Información específica (la que me diste) → the. 'Information' es incontable, nunca 'a'." },
      { q: "She gave me ______ advice that changed my life.", opts: ["an", "a", "some", "many"], a: 2, why: "'Advice' es incontable: some advice / a piece of advice." },
      { q: "______ unemployment has fallen in recent years.", opts: ["The", "An", "A", "— (nada)"], a: 3, why: "Generalización con sustantivo abstracto: sin artículo." },
      { q: "I need to buy ______ new furniture for the living room.", opts: ["a", "some", "many", "an"], a: 1, why: "'Furniture' es incontable: some furniture / a piece of furniture." },
      { q: "______ Netherlands is famous for its cycling culture.", opts: ["A", "The", "— (nada)", "An"], a: 1, why: "Países en plural o con 'states/kingdom' llevan 'the': the Netherlands, the UK, the USA." }
    ]
  },
  {
    id: "g7", title: "Conectores y cohesión", level: "B2",
    intro: `Cohesion es el 25% de la nota de Writing (Coherence & Cohesion). No se trata de meter conectores, sino de usarlos bien y variados.`,
    points: [
      { h: "Contraste", html: `<p><b>Although / even though + frase</b>: <em>Although it is expensive, it works.</em></p>
      <p><b>Despite / in spite of + sustantivo o -ing</b>: <em>Despite the cost, it works.</em></p>
      <p><b>However / Nevertheless (formal)</b> al inicio, con coma: <em>However, the evidence is weak.</em></p>
      <p><b>whereas / while</b> para comparar dos datos: <em>Men worked longer, whereas women...</em></p>
      <p class="warn">✗ Despite of the rain → ✓ Despite the rain / In spite of the rain</p>` },
      { h: "Causa y consecuencia", html: `<p><b>because / since / as</b> + frase: <em>Since prices rose, demand fell.</em></p>
      <p><b>because of / due to / owing to</b> + sustantivo: <em>due to rising prices</em>.</p>
      <p><b>therefore / consequently / as a result</b>: <em>Demand fell; consequently, prices dropped.</em></p>
      <p><b>thus / hence</b> (muy formal, usa con cuidado).</p>` },
      { h: "Añadir y ejemplificar", html: `<p><b>Moreover / Furthermore / In addition</b> (formal) — no los acumules.</p>
      <p><b>for instance / for example / such as</b> + ejemplo.</p>
      <p><b>In particular / notably</b> para destacar.</p>` },
      { h: "Estructurar el ensayo", html: `<p><b>On the one hand... on the other hand...</b> (dos caras).</p>
      <p><b>Firstly / Secondly / Finally</b> — simple y claro.</p>
      <p><b>In conclusion / To sum up / Overall</b> — cierra sin introducir ideas nuevas.</p>
      <p class="warn">Regla de oro: máximo un conector cada dos frases. Si suena a lista, está mal.</p>` }
    ],
    quiz: [
      { q: "______ the bad weather, the event was a success.", opts: ["Although", "Despite", "However", "Because of"], a: 1, why: "'Despite' + sustantivo ('the bad weather'). 'Although' necesitaría una frase con verbo." },
      { q: "The service is excellent; ______, it is rather expensive.", opts: ["therefore", "however", "moreover", "whereas"], a: 1, why: "Contraste entre dos ideas positivas/negativas: however." },
      { q: "Sales rose sharply ______ a successful advertising campaign.", opts: ["due to", "although", "whereas", "despite of"], a: 0, why: "'Due to' + sustantivo indica causa. 'Despite of' no existe." },
      { q: "______ it was raining, we decided to walk.", opts: ["Despite", "Although", "Because of", "Nevertheless"], a: 1, why: "'Although' + sujeto y verbo." },
      { q: "Which connector does NOT fit? 'The plan is cheap. ______, it is popular.'", opts: ["Moreover", "In addition", "Furthermore", "Nevertheless"], a: 3, why: "'Nevertheless' marca contraste; las otras tres añaden información." }
    ]
  },
  {
    id: "g8", title: "Nominalización y estilo académico", level: "C1",
    intro: `Nominalizar es convertir verbos y adjetivos en sustantivos. Es la marca típica del inglés académico y una de las formas más rápidas de subir en Writing.`,
    points: [
      { h: "Verbo → sustantivo", html: `<p class="ex">The government <b>decided</b> to invest. → The government's <b>decision</b> to invest...</p>
      <p class="ex">Prices <b>rose</b> sharply. → There was a sharp <b>rise</b> in prices.</p>
      <p class="ex">People <b>consume</b> more energy. → Energy <b>consumption</b> has increased.</p>
      <p>Sufijos útiles: -tion, -ment, -ance, -ity, -ness, -al.</p>` },
      { h: "Adjetivo → sustantivo", html: `<p class="ex">The system is <b>efficient</b>. → The <b>efficiency</b> of the system...</p>
      <p class="ex">The economy is <b>weak</b>. → The <b>weakness</b> of the economy...</p>` },
      { h: "Frases con 'the ... of'", html: `<p class="ex">The <b>increase in</b> the number of cars has led to...</p>
      <p class="ex">The <b>decline of</b> small shops is a consequence of...</p>
      <p class="ex">A <b>reduction in</b> emissions would require...</p>
      <p>Ojo: no nominalices todo. Si todo son sustantivos, el texto se vuelve pesado e ilegible.</p>` },
      { h: "Hedging: no afirmes de más", html: `<p class="ex">This <b>tends to</b> happen in large cities.</p>
      <p class="ex">The data <b>suggest</b> a correlation rather than a cause.</p>
      <p class="ex">It <b>could be argued that</b> the benefits outweigh the costs.</p>
      <p class="ex">This is <b>arguably</b> the most effective solution.</p>` }
    ],
    quiz: [
      { q: "Choose the most academic version: 'People use social media more than before.'", opts: ["Social media use has increased.", "People are using social media a lot.", "Social media is used by people more.", "More people use social media now than before."], a: 0, why: "Nominalización ('use' → 'use' como sustantivo) + present perfect: registro académico." },
      { q: "There has been a sharp ______ in housing prices.", opts: ["increase", "increasing", "increased", "increasingly"], a: 0, why: "Tras 'a sharp' necesitas un sustantivo: increase." },
      { q: "The ______ of the policy was widely criticized.", opts: ["implement", "implementation", "implemented", "implementing"], a: 1, why: "Sustantivo abstracto: implementation." },
      { q: "The data ______ that the trend is slowing.", opts: ["suggests", "suggest", "is suggesting", "has suggest"], a: 1, why: "'Data' se usa como plural en registro académico: suggest." },
      { q: "Which sentence uses hedging appropriately?", opts: ["This proves the policy is a failure.", "This tends to suggest that the policy may need revision.", "This definitely is the worst policy ever.", "The policy is bad, no doubt."], a: 1, why: "Hedging (tends to, may) expresa matiz sin exagerar: estilo académico." }
    ]
  }
];

/* ------------------------------------------------------------
   SIMULACRO RÁPIDO (20 preguntas, 20 minutos)
   ------------------------------------------------------------ */
const EXAM = {
  title: "Mini-simulacro de precisión",
  duration: 20, // minutos
  note: "20 preguntas mezclando gramática, vocabulario académico y comprensión. Cronómetro de 20 minutos. Al final verás tu banda estimada orientativa.",
  questions: [
    { q: "The number of electric cars ______ dramatically since 2015.", opts: ["grew", "has grown", "had grown", "grows"], a: 1, why: "'Since 2015' + tendencia que continúa → present perfect." },
    { q: "Governments should ______ more money into public transport.", opts: ["allocate", "alleviate", "attribute", "compel"], a: 0, why: "'Allocate money' = destinar fondos. Collocation correcta." },
    { q: "______ the high cost, the project went ahead.", opts: ["Although", "Despite", "However", "Because"], a: 1, why: "'Despite' + sustantivo ('the high cost')." },
    { q: "If the city ______ more bike lanes, fewer people would drive.", opts: ["builds", "built", "will build", "has built"], a: 1, why: "Condicional 2: if + past simple, would + infinitivo." },
    { q: "There is little ______ that exercise improves mood.", opts: ["evidence", "evidences", "an evidence", "evidencing"], a: 0, why: "'Evidence' es incontable: little evidence." },
    { q: "The report ______ a link between screen time and poor sleep.", opts: ["suggests", "suggests to", "suggests that is", "suggest"], a: 0, why: "Sujeto singular 'the report' → suggests. (También sería válido 'suggests that there is'.)" },
    { q: "Which word is closest in meaning to 'mitigate'?", opts: ["worsen", "reduce", "measure", "predict"], a: 1, why: "Mitigate = reducir el daño o la gravedad." },
    { q: "The new rules are ______ to reduce accidents.", opts: ["aim", "aimed", "aiming at", "aims"], a: 1, why: "Pasiva: are aimed at + -ing (o 'aim to reduce')." },
    { q: "Smoking is ______ in all indoor public spaces.", opts: ["prohibited", "prohibiting", "prohibition", "prohibit"], a: 0, why: "Pasiva: is prohibited." },
    { q: "The chart shows a ______ increase in sales between 2010 and 2015.", opts: ["significant", "significantly", "significance", "signify"], a: 0, why: "Antes de sustantivo ('increase') hace falta un adjetivo." },
    { q: "Many people ______ the rise in prices to the war.", opts: ["attribute", "contribute", "distribute", "institute"], a: 0, why: "'Attribute X to Y' = atribuir X a Y." },
    { q: "It is ______ that the population will peak in 2050.", opts: ["estimate", "estimated", "estimating", "estimates"], a: 1, why: "Pasiva impersonal: It is estimated that..." },
    { q: "______ the economy grows, pollution tends to rise.", opts: ["As", "Despite", "However", "Whereas"], a: 0, why: "'As' = a medida que / conforme." },
    { q: "The government must ______ the problem of youth unemployment.", opts: ["tackle", "tackle with", "tackle to", "tackling"], a: 0, why: "'Tackle a problem' no lleva preposición." },
    { q: "This policy is likely ______ more harm than good.", opts: ["to do", "doing", "do", "that it does"], a: 0, why: "'Be likely to + infinitivo'." },
    { q: "Which sentence is most formal and appropriate for Task 2?", opts: ["Kids these days are always on their phones.", "It could be argued that children spend excessive time on screens.", "I think phones are bad for children, you know.", "Phones? They're a big problem for children."], a: 1, why: "Registro académico con hedging: 'It could be argued that...'." },
    { q: "There has been a ______ in the birth rate over the last decade.", opts: ["decline", "declined", "declining", "declines"], a: 0, why: "'A decline in' = sustantivo tras artículo." },
    { q: "The museum ______ by thousands of tourists every year.", opts: ["visits", "is visited", "is visiting", "has visiting"], a: 1, why: "Pasiva present simple: is visited." },
    { q: "Choose the correct collocation: 'to ______ a crucial role'.", opts: ["make", "play", "do", "take"], a: 1, why: "'Play a crucial role' es la colocación correcta." },
    { q: "______ the results were inconclusive, the researchers recommended further study.", opts: ["Since", "Despite", "Nevertheless", "Due to"], a: 0, why: "'Since' introduce causa con frase completa." }
  ]
};
