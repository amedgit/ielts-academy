/* ============================================================
   CURSO "DE CERO A HÉROE" · A0 → C1 · 24 unidades
   ============================================================ */

const COURSE = {
  intro: `Seis niveles, cuatro unidades por nivel. Cada unidad tiene teoría breve, vocabulario con audio, ejemplos para escuchar y un test de 5 preguntas. No pases de unidad hasta acertar al menos 4.`,

  levels: [
    /* ======================= A0 ======================= */
    {
      id: 'a0', cefr: 'A0', name: 'Supervivencia',
      goal: 'Presentarte, deletrear, decir números y sobrevivir a las situaciones básicas.',
      desc: 'Empiezas de cero absoluto. Aquí aprendes a leer en voz alta, presentarte y pedir las cosas esenciales.',
      units: [
        {
          id: 'a0u1', title: 'El alfabeto y los sonidos',
          goal: 'Deletrear tu nombre y reconocer las letras que más cuestan.',
          points: [
            { h: '26 letras, 5 vocales', html: `<p>El inglés tiene 26 letras. Las vocales son <b>a, e, i, o, u</b>; el resto son consonantes. La <b>y</b> a veces funciona como vocal (<em>city</em>).</p>
            <p class="ex">A B C D E F G / H I J K L M N O P / Q R S T U V W X Y Z</p>` },
            { h: 'Las letras que más cuestan', html: `<p><b>b / v</b>: en inglés son sonidos distintos, pero a los hispanohablantes nos suenan parecidos (<em>bee</em> = abeja, <em>vee</em> = la letra v).</p>
            <p><b>g / j</b>: <em>g</em> suena /dʒ/ en <em>giant</em>, pero /g/ en <em>go</em>.</p>
            <p><b>h</b> es muda en <em>hour, honest, heir</em>.</p>
            <p><b>w</b> se llama <em>double-u</em> y <b>y</b> se llama <em>why</em>.</p>` },
            { h: 'Deletrear en situaciones reales', html: `<p class="ex">— How do you spell your surname?<br>— M-A-R-S-H.</p>
            <p>En un email o por teléfono: <b>@</b> = <em>at</em>, <b>.</b> = <em>dot</em>, <b>-</b> = <em>dash</em>.</p>
            <p class="ex">ana at email dot com</p>` }
          ],
          vocab: [
            { en: 'name', es: 'nombre' }, { en: 'spell', es: 'deletrear' },
            { en: 'letter', es: 'letra' }, { en: 'word', es: 'palabra' },
            { en: 'surname', es: 'apellido' }, { en: 'email', es: 'correo electrónico' }
          ],
          examples: ['Hello, my name is Ana.', 'How do you spell your surname?', 'My email is ana at email dot com.', 'Nice to meet you.'],
          quiz: [
            { q: 'How do you ______ your name?', opts: ['spell', 'write', 'read', 'listen'], a: 0, why: 'La pregunta fija es "How do you spell...?" para preguntar cómo se deletrea.' },
            { q: 'Which letter is silent in "hour"?', opts: ['o', 'u', 'h', 'r'], a: 2, why: '"Hour" se pronuncia /aʊə/ (como "our"): la h es muda.' },
            { q: 'How do you say "@" when you read an email address?', opts: ['and', 'at', 'dot', 'dash'], a: 1, why: '"@" se dice "at"; "." se dice "dot".' },
            { q: 'Which group are the vowels?', opts: ['a, e, i, o, u', 'a, b, c, d, e', 'e, f, g, h, i', 'a, e, i, o, y'], a: 0, why: 'Las vocales son a, e, i, o, u. La y puede funcionar como vocal, pero no es una vocal.' },
            { q: 'Which pair is especially confusing for Spanish speakers?', opts: ['m / n', 'b / v', 'p / q', 'k / c'], a: 1, why: 'En español b y v suenan igual; en inglés son sonidos distintos.' }
          ]
        },
        {
          id: 'a0u2', title: 'Saludos y presentaciones',
          goal: 'Usar el verbo to be para decir quién eres y de dónde vienes.',
          points: [
            { h: 'El verbo to be', html: `<p>Es el verbo más importante del inglés: significa <em>ser</em> o <em>estar</em> y cambia según la persona.</p>
            <table class="mini">
              <tr><th>Persona</th><th>Forma</th><th>Contracción</th></tr>
              <tr><td>I</td><td>am</td><td>I'm</td></tr>
              <tr><td>you</td><td>are</td><td>you're</td></tr>
              <tr><td>he / she / it</td><td>is</td><td>he's / she's / it's</td></tr>
              <tr><td>we / they</td><td>are</td><td>we're / they're</td></tr>
            </table>
            <p class="ex">I'm Ana. You're from Spain. She's a teacher.</p>` },
            { h: 'Presentarte en 4 frases', html: `<p class="ex">Hello, I'm Ana. I'm from Madrid. I'm twenty-eight. I'm a designer.</p>
            <p>Para preguntar: <em>What's your name? Where are you from?</em></p>` },
            { h: 'Negativa y pregunta', html: `<p>Negativa: <b>I'm not</b> from here. / <b>She isn't</b> a doctor.</p>
            <p>Pregunta: <b>Are you</b> Spanish? — Yes, I am. / No, I'm not.</p>
            <p class="warn">✗ I am student. → ✓ I am <b>a</b> student. (Profesiones llevan a/an.)</p>` }
          ],
          vocab: [
            { en: 'hello', es: 'hola' }, { en: 'good morning', es: 'buenos días' },
            { en: 'nice to meet you', es: 'encantado de conocerte' },
            { en: 'from', es: 'de (origen)' }, { en: 'country', es: 'país' }, { en: 'city', es: 'ciudad' }
          ],
          examples: ['Hello, my name is Ana.', 'I am from Spain.', 'She is a teacher.', 'Are you from Madrid?'],
          quiz: [
            { q: 'She ______ from Italy.', opts: ['am', 'is', 'are', 'be'], a: 1, why: 'Con he/she/it se usa "is".' },
            { q: 'I ______ a student.', opts: ['am', 'is', 'are', 'be'], a: 0, why: 'Con "I" se usa "am".' },
            { q: '______ you Spanish?', opts: ['Is', 'Am', 'Are', 'Be'], a: 2, why: 'Con "you" se usa "are".' },
            { q: 'I ______ not from here.', opts: ['am', 'is', 'are', 'do'], a: 0, why: 'Negativa de "I am": "I am not / I\'m not".' },
            { q: 'Which sentence is correct?', opts: ['She is engineer.', 'She is an engineer.', 'She is a engineers.', 'She are engineer.'], a: 1, why: 'Profesión en singular lleva artículo "a/an": an engineer.' }
          ]
        },
        {
          id: 'a0u3', title: 'Números, horas y fechas',
          goal: 'Decir precios, la hora y tu fecha de nacimiento.',
          points: [
            { h: 'Números del 1 al 100', html: `<p>1 one · 2 two · 3 three · 4 four · 5 five · 6 six · 7 seven · 8 eight · 9 nine · 10 ten</p>
            <p>11 eleven · 12 twelve · 13 thirteen · 20 twenty · 21 twenty-one · 30 thirty · 40 forty · 50 fifty · 100 a hundred</p>
            <p class="warn">✗ fourty → ✓ <b>forty</b> (sin u).</p>` },
            { h: 'La hora', html: `<p class="ex">It's seven o'clock. · It's half past six. · It's a quarter to nine.</p>
            <p><b>at</b> + hora: <em>at 7 o'clock, at half past six</em>.</p>
            <p>Para el examen, lo más claro: <em>seven fifteen, seven thirty</em>.</p>` },
            { h: 'Fechas y precios', html: `<p><b>on</b> + día: <em>on 3 March</em> (se dice <em>the third of March</em>).</p>
            <p><b>in</b> + año/mes: <em>in 2026, in May</em>.</p>
            <p class="ex">It costs £38. / It's $12.50. / My birthday is on the third of March.</p>` }
          ],
          vocab: [
            { en: 'number', es: 'número' }, { en: 'hour', es: 'hora' },
            { en: 'half past', es: 'y media' }, { en: 'quarter', es: 'cuarto' },
            { en: 'birthday', es: 'cumpleaños' }, { en: 'price', es: 'precio' }
          ],
          examples: ['It is half past six.', 'My birthday is on the third of March.', 'The ticket costs thirty-eight pounds.', 'I start work at nine o\'clock.'],
          quiz: [
            { q: '______ is it? — It\'s half past six.', opts: ['What time', 'How time', 'Which hour', 'What hour'], a: 0, why: 'Se pregunta la hora con "What time is it?".' },
            { q: 'My birthday is ______ 3 March.', opts: ['in', 'at', 'on', 'to'], a: 2, why: 'Con días y fechas concretas se usa "on".' },
            { q: 'How do you write 40?', opts: ['fourty', 'forty', 'forthy', 'fourteen'], a: 1, why: '"Forty" no lleva u. "Fourteen" es 14.' },
            { q: 'The film starts ______ seven o\'clock.', opts: ['in', 'on', 'at', 'of'], a: 2, why: 'Con horas se usa "at".' },
            { q: '21 is ______.', opts: ['twenty-one', 'twelve-one', 'two-one', 'twenty-first'], a: 0, why: '21 = twenty-one. "Twenty-first" es el ordinal (21.º).' }
          ]
        },
        {
          id: 'a0u4', title: 'Frases de supervivencia',
          goal: 'Pedir cosas, preguntar precios y decir que no entiendes.',
          points: [
            { h: 'Pedir con educación', html: `<p class="ex">Can I have a coffee, please?<br>I'd like a coffee, please.</p>
            <p><b>Can I have...?</b> es directo y educado. <b>I'd like...</b> (= I would like) es más formal.</p>
            <p class="warn">✗ I want a coffee (suena brusco en un bar). → ✓ I'd like a coffee.</p>` },
            { h: 'Preguntas esenciales', html: `<p class="ex">How much is it? · Where is the toilet? · What does it mean? · Could you repeat that, please?</p>
            <p>Cuando no entiendes: <b>Sorry, I don't understand.</b> / <b>Could you say that again?</b> / <b>More slowly, please.</b></p>` },
            { h: 'Las 5 palabras mágicas', html: `<p><b>please</b> (por favor) · <b>thank you</b> (gracias) · <b>sorry</b> (perdón) · <b>excuse me</b> (disculpe) · <b>you're welcome</b> (de nada)</p>
            <p class="ex">Excuse me, where is the station? — Sorry, I don't know.</p>` }
          ],
          vocab: [
            { en: 'please', es: 'por favor' }, { en: 'thank you', es: 'gracias' },
            { en: 'excuse me', es: 'disculpe' }, { en: 'how much is it', es: 'cuánto cuesta' },
            { en: 'I do not understand', es: 'no entiendo' }, { en: 'could you repeat that', es: '¿puede repetirlo?' }
          ],
          examples: ['Can I have a coffee, please?', 'How much is it?', 'Sorry, I do not understand.', 'Could you repeat that, please?'],
          quiz: [
            { q: '______ I have a glass of water, please?', opts: ['Can', 'Do', 'Am', 'Is'], a: 0, why: 'Para pedir: "Can I have...?".' },
            { q: 'How much ______ it?', opts: ['is', 'are', 'do', 'does'], a: 0, why: 'Con "it" (singular) se usa "is".' },
            { q: 'Sorry, I ______ understand.', opts: ['not', 'no', 'don\'t', 'am not'], a: 2, why: 'Negativa en presente simple: don\'t + verbo.' },
            { q: 'Which is the most polite way to ask?', opts: ['Give me a coffee.', 'I want coffee.', 'Could I have a coffee, please?', 'Coffee!'], a: 2, why: '"Could I have...?" es la fórmula más educada.' },
            { q: 'You want someone to say it again. You say:', opts: ['Could you repeat that?', 'How much is it?', 'Where is it?', 'What is your name?'], a: 0, why: 'Para pedir repetición: "Could you repeat that?".' }
          ]
        }
      ]
    },

    /* ======================= A1 ======================= */
    {
      id: 'a1', cefr: 'A1', name: 'Base',
      goal: 'Hablar de tu rutina, tu casa y tu entorno con frases completas.',
      desc: 'Ya puedes presentarte. Ahora aprendes a describir tu día a día sin traducir mentalmente.',
      units: [
        {
          id: 'a1u5', title: 'Artículos y plurales',
          goal: 'Usar a/an/the y formar plurales correctamente.',
          points: [
            { h: 'a / an / the', html: `<p><b>a</b> antes de consonante sonora: <em>a book, a university</em> (suena /juː/).</p>
            <p><b>an</b> antes de vocal sonora: <em>an apple, an hour</em> (h muda).</p>
            <p><b>the</b> cuando es específico o ya conocido: <em>the book on the table</em>.</p>
            <p>Sin artículo en generalizaciones: <em>Books are expensive.</em></p>` },
            { h: 'Plural: reglas', html: `<p>+ <b>-s</b>: book → books.</p>
            <p>+ <b>-es</b> tras s, sh, ch, x, o: box → boxes, watch → watches.</p>
            <p>consonante + <b>y</b> → <b>-ies</b>: city → cities, study → studies.</p>
            <p>Irregulares: man → men, child → children, foot → feet, person → people, woman → women.</p>` },
            { h: 'this / these', html: `<p><b>this</b> + singular: <em>this book</em>. <b>these</b> + plural: <em>these books</em>.</p>
            <p>Lejos: <b>that</b> / <b>those</b>.</p>
            <p class="warn">✗ a informations → ✓ <b>information</b> (incontable) o <em>some information</em>.</p>` }
          ],
          vocab: [
            { en: 'book', es: 'libro' }, { en: 'box', es: 'caja' },
            { en: 'city', es: 'ciudad' }, { en: 'child', es: 'niño' },
            { en: 'person', es: 'persona' }, { en: 'man', es: 'hombre' }
          ],
          examples: ['I have a book and an apple.', 'There are three boxes in the room.', 'These cities are very big.', 'The children are at school.'],
          quiz: [
            { q: 'I need ______ umbrella.', opts: ['a', 'an', 'the', '—'], a: 1, why: '"Umbrella" empieza por sonido vocálico: an.' },
            { q: 'She is ______ engineer.', opts: ['a', 'an', 'the', '—'], a: 1, why: '"Engineer" empieza por sonido vocálico: an.' },
            { q: 'The plural of "city" is ______.', opts: ['citys', 'cities', 'cityes', 'citis'], a: 1, why: 'Consonante + y → -ies: cities.' },
            { q: 'There are three ______ in the park.', opts: ['childs', 'childrens', 'children', 'child'], a: 2, why: 'El plural irregular de child es children.' },
            { q: '______ books on the table are mine.', opts: ['This', 'These', 'A', 'An'], a: 1, why: 'Con plural se usa "these" (o "those").' }
          ]
        },
        {
          id: 'a1u6', title: 'Presente simple: I, you, we, they',
          goal: 'Hablar de rutinas y gustos sin conjugar de más.',
          points: [
            { h: 'La forma base', html: `<p>Con I, you, we, they el verbo no cambia: <em>I work, you live, we study, they play</em>.</p>
            <p class="ex">I live in Madrid. We study English every day.</p>
            <p>Es el tiempo de las rutinas, los gustos y las verdades generales.</p>` },
            { h: 'Negativa y pregunta', html: `<p>Negativa: <b>don't</b> + verbo: <em>I don't like coffee.</em></p>
            <p>Pregunta: <b>Do</b> + sujeto + verbo: <em>Do you speak English?</em></p>
            <p>Respuestas cortas: <em>Yes, I do. / No, I don't.</em></p>
            <p class="warn">✗ I no like → ✓ I <b>don't</b> like.</p>` },
            { h: 'Adverbios de frecuencia', html: `<p><b>always, usually, often, sometimes, rarely, never</b> van antes del verbo principal:</p>
            <p class="ex">I usually work from home. They never eat meat.</p>` }
          ],
          vocab: [
            { en: 'work', es: 'trabajar' }, { en: 'live', es: 'vivir' },
            { en: 'like', es: 'gustar' }, { en: 'study', es: 'estudiar' },
            { en: 'play', es: 'jugar' }, { en: 'every day', es: 'todos los días' }
          ],
          examples: ['I live in Madrid.', 'We study English every day.', 'Do you like coffee?', 'They do not work on Sundays.'],
          quiz: [
            { q: 'They ______ in Madrid.', opts: ['lives', 'live', 'living', 'is living'], a: 1, why: 'Con "they" el verbo va en forma base: live.' },
            { q: 'I ______ like coffee.', opts: ['not', 'no', 'don\'t', 'doesn\'t'], a: 2, why: 'Negativa con I: don\'t + verbo.' },
            { q: '______ you speak English?', opts: ['Do', 'Does', 'Are', 'Is'], a: 0, why: 'Pregunta con "you": Do you...?' },
            { q: 'We ______ football on Sundays.', opts: ['plays', 'play', 'playing', 'is play'], a: 1, why: 'Con "we" no se añade -s: play.' },
            { q: 'I ______ go to the gym.', opts: ['usual', 'usually', 'usualy', 'used'], a: 1, why: 'El adverbio de frecuencia es "usually".' }
          ]
        },
        {
          id: 'a1u7', title: 'Presente simple: he, she, it',
          goal: 'Añadir la -s y hablar de otras personas.',
          points: [
            { h: 'La -s de tercera persona', html: `<p>Con he, she, it el verbo añade <b>-s</b>: <em>he works, she lives, it starts</em>.</p>
            <p>Ortografía: <em>watch → watches, study → studies, go → goes, have → has</em>.</p>
            <p class="warn">✗ She work here. → ✓ She work<b>s</b> here.</p>` },
            { h: 'Negativa y pregunta', html: `<p>Negativa: <b>doesn't</b> + verbo base: <em>She doesn't work here.</em></p>
            <p>Pregunta: <b>Does</b> + sujeto + verbo base: <em>Does he live here?</em></p>
            <p class="warn">✗ Does she works? → ✓ Does she <b>work</b>? (la -s ya está en does).</p>` },
            { h: 'Frecuencia en tercera persona', html: `<p class="ex">He always arrives late. She never drinks coffee.</p>
            <p>La -s solo aparece una vez: en el adverbio no cambia nada.</p>` }
          ],
          vocab: [
            { en: 'always', es: 'siempre' }, { en: 'usually', es: 'normalmente' },
            { en: 'sometimes', es: 'a veces' }, { en: 'never', es: 'nunca' },
            { en: 'start', es: 'empezar' }, { en: 'finish', es: 'terminar' }
          ],
          examples: ['She works in a hospital.', 'He does not like fish.', 'Does she live in London?', 'My brother watches TV every evening.'],
          quiz: [
            { q: 'She ______ in a hospital.', opts: ['work', 'works', 'working', 'is work'], a: 1, why: 'Tercera persona singular: work + s.' },
            { q: 'He ______ like fish.', opts: ['don\'t', 'doesn\'t', 'not', 'no'], a: 1, why: 'Con he/she/it la negativa es doesn\'t + verbo base.' },
            { q: '______ she live here?', opts: ['Do', 'Does', 'Is', 'Are'], a: 1, why: 'Pregunta con she: Does she...?' },
            { q: 'My brother ______ TV every evening.', opts: ['watch', 'watchs', 'watches', 'watching'], a: 2, why: 'watch + es → watches.' },
            { q: 'He ______ goes to bed late.', opts: ['never', 'not', 'no', 'doesn\'t'], a: 0, why: 'El adverbio "never" va antes del verbo y no necesita negación extra.' }
          ]
        },
        {
          id: 'a1u8', title: 'There is / There are y preposiciones',
          goal: 'Describir tu casa y tu barrio.',
          points: [
            { h: 'There is / There are', html: `<p><b>There is</b> + singular: <em>There is a park near my house.</em></p>
            <p><b>There are</b> + plural: <em>There are two bedrooms.</em></p>
            <p>Negativa: <em>There isn't a lift.</em> / <em>There aren't any shops.</em></p>
            <p>Pregunta: <em>Is there a bank near here?</em></p>` },
            { h: 'some / any', html: `<p><b>some</b> en afirmativas: <em>There are some chairs.</em></p>
            <p><b>any</b> en negativas y preguntas: <em>There isn't any milk. Is there any bread?</em></p>` },
            { h: 'Preposiciones de lugar', html: `<p><b>in</b> (dentro), <b>on</b> (sobre), <b>under</b> (debajo), <b>next to</b> (al lado), <b>between</b> (entre), <b>opposite</b> (enfrente), <b>behind</b> (detrás).</p>
            <p class="ex">The cat is under the table. The bank is next to the supermarket.</p>` }
          ],
          vocab: [
            { en: 'kitchen', es: 'cocina' }, { en: 'bedroom', es: 'dormitorio' },
            { en: 'sofa', es: 'sofá' }, { en: 'fridge', es: 'nevera' },
            { en: 'next to', es: 'al lado de' }, { en: 'between', es: 'entre' }
          ],
          examples: ['There is a park near my house.', 'There are two bedrooms in my flat.', 'The cat is under the table.', 'Is there any milk in the fridge?'],
          quiz: [
            { q: 'There ______ a park near my house.', opts: ['is', 'are', 'have', 'has'], a: 0, why: 'Singular: There is.' },
            { q: 'There ______ two bedrooms.', opts: ['is', 'are', 'have', 'has'], a: 1, why: 'Plural: There are.' },
            { q: 'The cat is ______ the table.', opts: ['in', 'on', 'under', 'between'], a: 2, why: 'Si está debajo de la mesa: under.' },
            { q: 'Is there ______ milk?', opts: ['some', 'any', 'a', 'many'], a: 1, why: 'En preguntas se usa "any".' },
            { q: 'The bank is ______ to the supermarket.', opts: ['next', 'near', 'opposite', 'between'], a: 0, why: 'La expresión es "next to" (al lado de).' }
          ]
        }
      ]
    },

    /* ======================= A2 ======================= */
    {
      id: 'a2', cefr: 'A2', name: 'Cotidianidad',
      goal: 'Contar lo que pasó, hacer planes y comparar cosas.',
      desc: 'Ya describes el presente. Ahora aprendes a hablar del pasado, del futuro y a comparar.',
      units: [
        {
          id: 'a2u9', title: 'Pasado simple: regulares e irregulares',
          goal: 'Contar qué hiciste ayer.',
          points: [
            { h: 'Verbos regulares: -ed', html: `<p>work → work<b>ed</b> · live → live<b>d</b> · study → stud<b>ied</b> · stop → stop<b>ped</b></p>
            <p>Pronunciación: /t/ (worked), /d/ (played), /ɪd/ (wanted, needed).</p>
            <p class="ex">I worked late yesterday. She studied for two hours.</p>` },
            { h: 'Irregulares imprescindibles', html: `<p>go → <b>went</b> · see → <b>saw</b> · have → <b>had</b> · do → <b>did</b> · buy → <b>bought</b> · make → <b>made</b> · get → <b>got</b> · come → <b>came</b>.</p>
            <p class="warn">✗ I goed → ✓ I <b>went</b>. No hay regla: se memorizan en contexto.</p>` },
            { h: 'Negativa y pregunta', html: `<p><b>didn't</b> + verbo base: <em>I didn't go.</em></p>
            <p><b>Did</b> + sujeto + verbo base: <em>Did you see him?</em></p>
            <p class="warn">✗ I didn't went. → ✓ I didn't <b>go</b>.</p>` }
          ],
          vocab: [
            { en: 'went', es: 'fui / fue (go)' }, { en: 'saw', es: 'vi (see)' },
            { en: 'bought', es: 'compré (buy)' }, { en: 'had', es: 'tuve (have)' },
            { en: 'yesterday', es: 'ayer' }, { en: 'ago', es: 'hace (tiempo)' }
          ],
          examples: ['I went to London last year.', 'She watched TV last night.', 'Did you see him yesterday?', 'We did not go out because it was raining.'],
          quiz: [
            { q: 'I ______ to London last year.', opts: ['go', 'went', 'gone', 'going'], a: 1, why: 'Pasado irregular de go: went.' },
            { q: 'She ______ TV last night.', opts: ['watch', 'watches', 'watched', 'watching'], a: 2, why: 'Pasado regular: watch + ed.' },
            { q: '______ you see him?', opts: ['Do', 'Did', 'Are', 'Have'], a: 1, why: 'Pregunta en pasado: Did + verbo base.' },
            { q: 'We ______ go out yesterday.', opts: ['don\'t', 'didn\'t', 'not', 'wasn\'t'], a: 1, why: 'Negativa en pasado: didn\'t + verbo base.' },
            { q: 'He ______ a new car last week.', opts: ['buy', 'buyed', 'bought', 'buys'], a: 2, why: 'Pasado irregular de buy: bought.' }
          ]
        },
        {
          id: 'a2u10', title: 'Pasado continuo vs pasado simple',
          goal: 'Describir acciones en progreso e interrupciones.',
          points: [
            { h: 'was / were + -ing', html: `<p><b>was</b> con I/he/she/it; <b>were</b> con you/we/they.</p>
            <p class="ex">I was working at 8 p.m. They were watching a film.</p>` },
            { h: 'Interrupciones: when / while', html: `<p><b>While</b> + acción larga (continuo), <b>when</b> + acción corta (simple):</p>
            <p class="ex">I was having a shower when the phone rang.<br>While she was cooking, the lights went out.</p>` },
            { h: 'Fondo de una historia', html: `<p>El continuo pinta el escenario; el simple cuenta lo que ocurrió.</p>
            <p class="ex">It was raining and people were waiting at the bus stop. Suddenly, a car stopped.</p>` }
          ],
          vocab: [
            { en: 'while', es: 'mientras' }, { en: 'when', es: 'cuando' },
            { en: 'suddenly', es: 'de repente' }, { en: 'raining', es: 'lloviendo' },
            { en: 'driving', es: 'conduciendo' }, { en: 'sleeping', es: 'durmiendo' }
          ],
          examples: ['I was sleeping when you called.', 'While she was cooking, the phone rang.', 'They were playing football at five.', 'It was raining and the streets were empty.'],
          quiz: [
            { q: 'I ______ when you called.', opts: ['slept', 'was sleeping', 'sleep', 'am sleeping'], a: 1, why: 'Acción en progreso interrumpida: pasado continuo.' },
            { q: 'While she ______, the phone rang.', opts: ['cooked', 'was cooking', 'cooks', 'is cooking'], a: 1, why: '"While" + acción larga en pasado continuo.' },
            { q: 'They ______ football when it started to rain.', opts: ['played', 'were playing', 'play', 'have played'], a: 1, why: 'Acción en desarrollo interrumpida por otra: were playing.' },
            { q: 'It ______ when we left the house.', opts: ['rained', 'was raining', 'rains', 'rain'], a: 1, why: 'Describe el fondo de la escena: was raining.' },
            { q: 'Which sentence is correct?', opts: ['I was go to work.', 'I was going to work.', 'I were going to work.', 'I going to work.'], a: 1, why: 'was + -ing; "were" no va con I.' }
          ]
        },
        {
          id: 'a2u11', title: 'El futuro: will, going to, presente',
          goal: 'Elegir la forma correcta para planes y predicciones.',
          points: [
            { h: 'going to: planes e indicios', html: `<p>Plan decidido: <em>We're going to move to Valencia.</em></p>
            <p>Predicción con prueba visible: <em>Look at those clouds — it's going to rain.</em></p>` },
            { h: 'will: decisiones y opiniones', html: `<p>Decisión en el momento: <em>I'll help you.</em></p>
            <p>Predicción u opinión: <em>I think she'll pass.</em> / <em>It won't be easy.</em></p>
            <p class="ex">The phone is ringing. — I'll answer it.</p>` },
            { h: 'Presente para horarios y citas', html: `<p>Horarios oficiales → presente simple: <em>The train leaves at 7.</em></p>
            <p>Cita acordada → presente continuo: <em>I'm meeting Ana tomorrow at six.</em></p>` }
          ],
          vocab: [
            { en: 'tomorrow', es: 'mañana' }, { en: 'next week', es: 'la semana que viene' },
            { en: 'plan', es: 'plan' }, { en: 'probably', es: 'probablemente' },
            { en: 'arrangement', es: 'cita / acuerdo' }, { en: 'predict', es: 'predecir' }
          ],
          examples: ['I am going to study tonight.', 'I will help you with that.', 'The train leaves at seven.', 'We are meeting Ana tomorrow.'],
          quiz: [
            { q: 'Look at those clouds! It ______ rain.', opts: ['will', 'is going to', 'goes to', 'is raining'], a: 1, why: 'Hay evidencia visible: going to.' },
            { q: 'The phone is ringing. — I ______ answer it.', opts: ['am going to', 'will', 'am answering', 'answer'], a: 1, why: 'Decisión espontánea en el momento: will.' },
            { q: 'We ______ dinner with friends tomorrow. (cita acordada)', opts: ['have', 'are having', 'will have', 'had'], a: 1, why: 'Cita acordada: presente continuo (are having).' },
            { q: 'The train ______ at 7:15.', opts: ['leaves', 'is leaving', 'will leave', 'left'], a: 0, why: 'Horario oficial: presente simple.' },
            { q: 'I think she ______ pass the exam.', opts: ['is going to', 'will', 'passes', 'passed'], a: 1, why: 'Opinión/predicción sin evidencia: will.' }
          ]
        },
        {
          id: 'a2u12', title: 'Comparativos y superlativos',
          goal: 'Comparar ciudades, precios y personas.',
          points: [
            { h: 'Comparativo', html: `<p>Adjetivos cortos: + <b>-er</b> → <em>cheaper, bigger, older</em>.</p>
            <p>Largos: <b>more</b> + adjetivo → <em>more expensive, more interesting</em>.</p>
            <p>Irregulares: good → <b>better</b>, bad → <b>worse</b>, far → <b>further</b>.</p>
            <p class="ex">Madrid is bigger than Toledo. This book is more interesting than that one.</p>` },
            { h: 'Superlativo', html: `<p>Cortos: <b>the</b> + -est → <em>the cheapest, the biggest</em>.</p>
            <p>Largos: <b>the most</b> + adjetivo → <em>the most expensive</em>.</p>
            <p class="ex">It's the best restaurant in the city.</p>` },
            { h: 'Matizar la comparación', html: `<p><b>as ... as</b> (igual): <em>He's as tall as me.</em></p>
            <p><b>not as ... as</b> (menos): <em>It's not as expensive as I thought.</em></p>
            <p><b>much / a bit</b> + comparativo: <em>much cheaper, a bit bigger</em>.</p>` }
          ],
          vocab: [
            { en: 'cheaper', es: 'más barato' }, { en: 'more expensive', es: 'más caro' },
            { en: 'better', es: 'mejor' }, { en: 'worse', es: 'peor' },
            { en: 'as tall as', es: 'tan alto como' }, { en: 'the most', es: 'el más' }
          ],
          examples: ['This book is cheaper than that one.', 'Madrid is bigger than Toledo.', 'She is the best student in the class.', 'It is not as difficult as I thought.'],
          quiz: [
            { q: 'This book is ______ than that one.', opts: ['cheap', 'cheaper', 'cheapest', 'more cheap'], a: 1, why: 'Comparativo de adjetivo corto: cheaper.' },
            { q: 'She is the ______ student in the class.', opts: ['better', 'best', 'good', 'most good'], a: 1, why: 'Superlativo irregular de good: the best.' },
            { q: 'Madrid is ______ than Toledo.', opts: ['big', 'bigger', 'biggest', 'more big'], a: 1, why: 'Comparativo: big → bigger (dobla la consonante).' },
            { q: 'It is not as ______ as I thought.', opts: ['difficult', 'more difficult', 'difficultest', 'the difficult'], a: 0, why: 'La estructura es "as + adjetivo base + as".' },
            { q: 'This is ______ most interesting film I have seen.', opts: ['a', 'the', 'more', 'much'], a: 1, why: 'Superlativo: the most interesting.' }
          ]
        }
      ]
    },

    /* ======================= B1 ======================= */
    {
      id: 'b1', cefr: 'B1', name: 'Independencia',
      goal: 'Hablar de experiencias, dar consejos y expresar condiciones.',
      desc: 'Aquí empiezas a sonar "adulto" en inglés: present perfect, modales y condicionales.',
      units: [
        {
          id: 'b1u13', title: 'Present perfect: experiencias',
          goal: 'Hablar de lo que has hecho sin decir cuándo.',
          points: [
            { h: 'have / has + participio', html: `<p>I <b>have</b> visited London. She <b>has</b> eaten sushi.</p>
            <p>Contracciones: <em>I've, she's, they've</em>.</p>
            <p>Se usa para experiencias de vida y para periodos que continúan.</p>` },
            { h: 'ever / never / just / already / yet', html: `<p><b>ever</b> en preguntas: <em>Have you ever been to Japan?</em></p>
            <p><b>never</b>: <em>I've never eaten insects.</em></p>
            <p><b>just</b> (acabar de): <em>She's just arrived.</em></p>
            <p><b>already</b> (ya): <em>I've already finished.</em> · <b>yet</b> (todavía) en negativas/preguntas: <em>Not yet.</em></p>` },
            { h: 'for / since y been / gone', html: `<p><b>for</b> + duración: <em>for three years</em>. <b>since</b> + momento: <em>since 2019</em>.</p>
            <p><b>been</b> = ha ido y ha vuelto: <em>She's been to Paris</em> (ya está aquí).</p>
            <p><b>gone</b> = ha ido y sigue allí: <em>She's gone to Paris</em> (no está aquí).</p>` }
          ],
          vocab: [
            { en: 'ever', es: 'alguna vez' }, { en: 'never', es: 'nunca' },
            { en: 'already', es: 'ya' }, { en: 'yet', es: 'todavía / aún' },
            { en: 'since', es: 'desde' }, { en: 'experience', es: 'experiencia' }
          ],
          examples: ['Have you ever been to Japan?', 'I have never eaten sushi.', 'She has just arrived.', 'I have lived here since 2019.'],
          quiz: [
            { q: 'Have you ______ been to Japan?', opts: ['ever', 'never', 'yet', 'already'], a: 0, why: 'En preguntas de experiencia: ever.' },
            { q: 'I haven\'t finished ______.', opts: ['already', 'yet', 'ever', 'since'], a: 1, why: 'Con negativas se usa "yet".' },
            { q: 'She has lived here ______ 2015.', opts: ['for', 'since', 'from', 'during'], a: 1, why: 'Con un momento concreto (2015): since.' },
            { q: 'He has ______ arrived; he\'s still at the door.', opts: ['yet', 'just', 'ever', 'never'], a: 1, why: 'Acabar de llegar: just.' },
            { q: 'She isn\'t here. She has ______ to Paris.', opts: ['been', 'gone', 'went', 'go'], a: 1, why: 'Se ha ido y sigue allí: has gone.' }
          ]
        },
        {
          id: 'b1u14', title: 'Present perfect vs pasado simple',
          goal: 'No volver a decir “I have seen him yesterday”.',
          points: [
            { h: 'La regla de oro', html: `<p><b>Pasado simple</b> = tiempo cerrado, digo cuándo: <em>I saw him yesterday.</em></p>
            <p><b>Present perfect</b> = sin momento concreto o periodo abierto: <em>I have seen him.</em></p>
            <p class="ex">I have visited Rome. (no digo cuándo)<br>I visited Rome in 2019. (fecha concreta)</p>` },
            { h: 'Palabras señal', html: `<p>Past simple: <b>yesterday, last week, in 2010, two days ago, when I was a child</b>.</p>
            <p>Present perfect: <b>ever, never, already, yet, just, since, for, so far, recently</b>.</p>
            <p class="warn">✗ I have seen him yesterday. → ✓ I <b>saw</b> him yesterday.</p>` },
            { h: 'Combinarlos bien', html: `<p>En un texto: empieza con present perfect y concreta con pasado simple.</p>
            <p class="ex">The number of cyclists has risen sharply. In 2020, it doubled.</p>` }
          ],
          vocab: [
            { en: 'last year', es: 'el año pasado' }, { en: 'ago', es: 'hace' },
            { en: 'so far', es: 'hasta ahora' }, { en: 'recently', es: 'recientemente' },
            { en: 'yet', es: 'aún' }, { en: 'yesterday', es: 'ayer' }
          ],
          examples: ['I saw him yesterday.', 'I have never eaten sushi.', 'We went to Rome in 2019.', 'She has worked here since 2020.'],
          quiz: [
            { q: 'I ______ him yesterday.', opts: ['have seen', 'saw', 'see', 'was seeing'], a: 1, why: '"Yesterday" cierra el tiempo: pasado simple.' },
            { q: 'I have ______ eaten sushi.', opts: ['never', 'yesterday', 'last year', 'ago'], a: 0, why: 'Experiencia de vida: present perfect + never.' },
            { q: 'We ______ to Rome in 2019.', opts: ['have gone', 'went', 'have been', 'go'], a: 1, why: 'Fecha concreta (2019): pasado simple.' },
            { q: 'She ______ here since 2020.', opts: ['worked', 'has worked', 'works', 'is working'], a: 1, why: '"Since" + periodo abierto: present perfect.' },
            { q: '______ you finished yet?', opts: ['Did', 'Have', 'Do', 'Are'], a: 1, why: '"Yet" pide present perfect: Have you finished?' }
          ]
        },
        {
          id: 'b1u15', title: 'Modales: can, should, must, have to',
          goal: 'Dar consejos, expresar obligación y pedir permiso.',
          points: [
            { h: 'Habilidad y permiso', html: `<p><b>can</b> (presente) / <b>could</b> (pasado o cortesía): <em>I can swim. I could swim at five. Could I open the window?</em></p>
            <p>Negativa: <em>can't / couldn't</em>.</p>` },
            { h: 'Consejo y obligación', html: `<p><b>should / shouldn't</b> = consejo: <em>You should see a doctor.</em></p>
            <p><b>must</b> = obligación fuerte o norma: <em>You must wear a seatbelt.</em></p>
            <p><b>have to</b> = obligación externa: <em>I have to work on Saturdays.</em></p>` },
            { h: 'mustn\'t vs don\'t have to', html: `<p><b>mustn't</b> = prohibido: <em>You mustn't smoke here.</em></p>
            <p><b>don't have to</b> = no es necesario: <em>You don't have to come.</em></p>
            <p class="warn">Son opuestos: prohibición vs ausencia de obligación.</p>` }
          ],
          vocab: [
            { en: 'should', es: 'deberías' }, { en: 'must', es: 'deber / tener que (fuerte)' },
            { en: 'have to', es: 'tener que' }, { en: 'allowed', es: 'permitido' },
            { en: 'advice', es: 'consejo' }, { en: 'obligation', es: 'obligación' }
          ],
          examples: ['You should see a doctor.', 'I have to work on Saturdays.', 'You must not smoke here.', 'You do not have to come if you are busy.'],
          quiz: [
            { q: 'You ______ smoke here. It\'s forbidden.', opts: ['mustn\'t', 'don\'t have to', 'shouldn\'t', 'couldn\'t'], a: 0, why: 'Prohibición: mustn\'t.' },
            { q: 'I ______ swim when I was five.', opts: ['can', 'could', 'must', 'should'], a: 1, why: 'Habilidad en el pasado: could.' },
            { q: 'You look tired. You ______ go to bed.', opts: ['must', 'should', 'have to', 'can'], a: 1, why: 'Consejo: should.' },
            { q: 'I ______ work on Saturdays. It\'s in my contract.', opts: ['should', 'have to', 'could', 'might'], a: 1, why: 'Obligación externa: have to.' },
            { q: 'You ______ worry — the exam is optional.', opts: ['mustn\'t', 'don\'t have to', 'shouldn\'t', 'can\'t'], a: 1, why: 'No es necesario: don\'t have to.' }
          ]
        },
        {
          id: 'b1u16', title: 'Condicionales 1 y 2',
          goal: 'Hablar de condiciones reales e hipotéticas.',
          points: [
            { h: 'Primer condicional (real)', html: `<p><b>If + presente, will + verbo</b>: <em>If it rains, we'll cancel the trip.</em></p>
            <p>También con <b>unless</b> (= if not): <em>Unless you study, you'll fail.</em></p>
            <p class="warn">✗ If it will rain... → ✓ If it <b>rains</b>...</p>` },
            { h: 'Segundo condicional (hipotético)', html: `<p><b>If + pasado simple, would + verbo</b>: <em>If I were rich, I would travel.</em></p>
            <p>Con I/he/she/it se usa <b>were</b> en registro cuidado: <em>If I were you...</em></p>
            <p class="ex">I'd help you if I had time.</p>` },
            { h: 'Usos reales', html: `<p>Dar consejos: <em>If I were you, I'd apply.</em></p>
            <p>Hablar de deseos: <em>I'd love to live by the sea.</em></p>
            <p>Negociar: <em>We'll deliver it on Friday if you confirm today.</em></p>` }
          ],
          vocab: [
            { en: 'if', es: 'si' }, { en: 'unless', es: 'a menos que' },
            { en: 'probably', es: 'probablemente' }, { en: 'would', es: 'verbo modal condicional' },
            { en: 'imagine', es: 'imagina' }, { en: 'depend', es: 'depender' }
          ],
          examples: ['If it rains, we will cancel the trip.', 'If I were rich, I would travel.', 'I would help you if I had time.', 'Unless you study, you will fail.'],
          quiz: [
            { q: 'If it ______ tomorrow, we\'ll cancel.', opts: ['will rain', 'rains', 'rained', 'would rain'], a: 1, why: 'Primer condicional: if + presente simple.' },
            { q: 'If I ______ rich, I would travel the world.', opts: ['am', 'were', 'will be', 'would be'], a: 1, why: 'Segundo condicional: if + pasado (were).' },
            { q: 'I\'d help you if I ______ time.', opts: ['have', 'had', 'will have', 'would have'], a: 1, why: 'Segundo condicional: if + pasado simple.' },
            { q: '______ you study, you will fail.', opts: ['If', 'Unless', 'Provided', 'When'], a: 1, why: '"Unless" = si no. Sin estudiar, suspendes.' },
            { q: 'She would come if you ______ her.', opts: ['ask', 'asked', 'will ask', 'would ask'], a: 1, why: 'La condición va en pasado simple: asked.' }
          ]
        }
      ]
    },

    /* ======================= B2 ======================= */
    {
      id: 'b2', cefr: 'B2', name: 'Fluidez',
      goal: 'Argumentar, usar pasiva y relatativos, y contar lo que dijo otro.',
      desc: 'El salto a B2 es gramática compleja usada con naturalidad. Aquí está la base del IELTS 6.5–7.',
      units: [
        {
          id: 'b2u17', title: 'Tercer condicional, mixtos y wish',
          goal: 'Hablar de arrepentimientos y pasados hipotéticos.',
          points: [
            { h: 'Tercer condicional', html: `<p><b>If + had + participio, would have + participio</b>:</p>
            <p class="ex">If I had known, I would have helped you.</p>
            <p>Se refiere a un pasado que ya no se puede cambiar.</p>` },
            { h: 'Condicional mixto', html: `<p>Condición pasada → resultado presente:</p>
            <p class="ex">If I had studied medicine, I would be a doctor now.</p>
            <p>Condición presente → resultado pasado: <em>If I weren't so shy, I would have spoken.</em></p>` },
            { h: 'wish / if only', html: `<p><b>wish + pasado</b> = deseo presente: <em>I wish I had more time.</em></p>
            <p><b>wish + had + participio</b> = arrepentimiento: <em>I wish I had gone to bed earlier.</em></p>
            <p><b>If only</b> = más emotivo: <em>If only I had listened.</em></p>` }
          ],
          vocab: [
            { en: 'regret', es: 'arrepentimiento' }, { en: 'wish', es: 'desear' },
            { en: 'if only', es: 'ojalá' }, { en: 'would have', es: 'habría' },
            { en: 'had known', es: 'hubiera sabido' }, { en: 'otherwise', es: 'de lo contrario' }
          ],
          examples: ['If I had known, I would have helped.', 'If I had studied medicine, I would be a doctor now.', 'I wish I had more time.', 'If only I had listened to you.'],
          quiz: [
            { q: 'If I ______ known, I would have helped.', opts: ['have', 'had', 'would have', 'knew'], a: 1, why: 'Tercer condicional: if + had + participio.' },
            { q: 'I wish I ______ more time.', opts: ['have', 'had', 'will have', 'would have'], a: 1, why: 'Deseo presente: wish + pasado simple.' },
            { q: 'If she had studied, she ______ passed.', opts: ['would', 'would have', 'had', 'will have'], a: 1, why: 'Resultado pasado: would have + participio.' },
            { q: 'I wish I ______ gone to bed earlier.', opts: ['have', 'had', 'would', 'did'], a: 1, why: 'Arrepentimiento pasado: wish + had + participio.' },
            { q: 'We would be there now if we ______ earlier.', opts: ['left', 'had left', 'would leave', 'leave'], a: 1, why: 'Condicional mixto: condición pasada, resultado presente.' }
          ]
        },
        {
          id: 'b2u18', title: 'La voz pasiva',
          goal: 'Sonar objetivo y describir procesos.',
          points: [
            { h: 'be + participio', html: `<p>El objeto pasa a sujeto: <em>They built the bridge in 1990.</em> → <em>The bridge <b>was built</b> in 1990.</em></p>
            <p>Tiempos: <em>is made, was made, will be made, is being made, has been made</em>.</p>` },
            { h: 'Pasivas impersonales', html: `<p><b>It is believed / said / reported / estimated that...</b></p>
            <p class="ex">It is estimated that eight million people die each year from smoking.</p>
            <p>Alternativa: <em>Smoking is estimated to cause...</em></p>` },
            { h: 'Cuándo usarla', html: `<p>Cuando el agente no importa o es obvio: <em>English is spoken here.</em></p>
            <p>Cuando quieres sonar objetivo en Writing: <em>The data were collected in 2024.</em></p>
            <p>Si el responsable importa, usa activa: <em>The government introduced the tax.</em></p>` }
          ],
          vocab: [
            { en: 'was built', es: 'fue construido' }, { en: 'is believed', es: 'se cree' },
            { en: 'by', es: 'por' }, { en: 'process', es: 'proceso' },
            { en: 'report', es: 'informe / informar' }, { en: 'announced', es: 'anunciado' }
          ],
          examples: ['The bridge was built in 1990.', 'English is spoken all over the world.', 'It is believed that he left the country.', 'The results will be announced tomorrow.'],
          quiz: [
            { q: 'The bridge ______ in 1990.', opts: ['built', 'was built', 'is building', 'has built'], a: 1, why: 'Pasado pasivo: was + participio.' },
            { q: 'English ______ all over the world.', opts: ['speaks', 'is spoken', 'is speaking', 'has spoken'], a: 1, why: 'Presente pasivo: is + participio.' },
            { q: 'The results ______ tomorrow.', opts: ['will announce', 'will be announced', 'are announcing', 'announced'], a: 1, why: 'Futuro pasivo: will be + participio.' },
            { q: 'It ______ that he left the country.', opts: ['believes', 'is believed', 'believing', 'has believed'], a: 1, why: 'Pasiva impersonal: It is believed that...' },
            { q: 'The house ______ at the moment.', opts: ['is repairing', 'is being repaired', 'repairs', 'has repaired'], a: 1, why: 'Pasiva en continuo: is being + participio.' }
          ]
        },
        {
          id: 'b2u19', title: 'Oraciones de relativo',
          goal: 'Unir ideas y añadir información sin frases cortas.',
          points: [
            { h: 'Defining: información esencial', html: `<p><b>who</b> (personas), <b>which/that</b> (cosas), <b>whose</b> (posesión), <b>where</b> (lugares).</p>
            <p class="ex">The woman who lives next door is a doctor.<br>The book that I bought is excellent.</p>
            <p>Si el relativo es objeto, se puede omitir: <em>The book (that) I bought...</em></p>` },
            { h: 'Non-defining: entre comas', html: `<p>Añade información extra; si la quitas, la frase sigue teniendo sentido.</p>
            <p class="ex">Madrid, which is the capital of Spain, has a housing problem.</p>
            <p>Aquí <b>no</b> se usa "that" ni se omite el relativo.</p>` },
            { h: 'Preposición + which', html: `<p>Registro formal: <em>the period during which... / the extent to which...</em></p>
            <p class="warn">✗ The thing what I need → ✓ The thing (that) I need.</p>` }
          ],
          vocab: [
            { en: 'who', es: 'que (personas)' }, { en: 'which', es: 'que (cosas)' },
            { en: 'whose', es: 'cuyo/a' }, { en: 'where', es: 'donde' },
            { en: 'that', es: 'que' }, { en: 'during which', es: 'durante el cual' }
          ],
          examples: ['The woman who lives next door is a doctor.', 'The book that I bought is excellent.', 'Madrid, which is the capital, is expensive.', 'This is the town where I grew up.'],
          quiz: [
            { q: 'The woman ______ lives next door is a doctor.', opts: ['which', 'who', 'whose', 'where'], a: 1, why: 'Persona + sujeto: who (o that).' },
            { q: 'The book ______ I bought is excellent.', opts: ['who', 'which', 'whose', 'where'], a: 1, why: 'Cosa: which (o that).' },
            { q: 'Students ______ grades are high can apply.', opts: ['who', 'which', 'whose', 'where'], a: 2, why: 'Posesión: whose.' },
            { q: 'Madrid, ______ is the capital, is expensive.', opts: ['that', 'which', 'who', 'what'], a: 1, why: 'Non-defining con cosa: which (nunca that).' },
            { q: 'This is the town ______ I grew up.', opts: ['which', 'that', 'where', 'who'], a: 2, why: 'Lugar: where.' }
          ]
        },
        {
          id: 'b2u20', title: 'Estilo indirecto (reported speech)',
          goal: 'Contar lo que dijo otra persona.',
          points: [
            { h: 'say vs tell', html: `<p><b>say</b> + lo que se dice: <em>She said (that) she was tired.</em></p>
            <p><b>tell</b> + persona: <em>She told me (that) she was tired.</em></p>
            <p class="warn">✗ She said me → ✓ She told me / She said to me.</p>` },
            { h: 'Retroceso de tiempos', html: `<p>presente → pasado; pasado → past perfect; will → would; can → could; may → might.</p>
            <p class="ex">"I'm leaving." → He said he was leaving.<br>"I'll call you." → She said she would call me.</p>` },
            { h: 'Preguntas y órdenes', html: `<p>Pregunta: <em>She asked me where I lived.</em> (sin do/did, orden normal).</p>
            <p>Orden: <em>The teacher told us to be quiet.</em></p>
            <p>Cambios: today → that day, tomorrow → the next day, here → there.</p>` }
          ],
          vocab: [
            { en: 'said', es: 'dijo' }, { en: 'told', es: 'dijo (a alguien)' },
            { en: 'explained', es: 'explicó' }, { en: 'asked', es: 'preguntó' },
            { en: 'that day', es: 'ese día' }, { en: 'the next day', es: 'al día siguiente' }
          ],
          examples: ['She told me she was tired.', 'He said he would call me.', 'She asked me where I lived.', 'The teacher told us to be quiet.'],
          quiz: [
            { q: 'She ______ me she was tired.', opts: ['said', 'told', 'explained', 'asked'], a: 1, why: '"Tell" va seguido de persona: told me.' },
            { q: 'He said he ______ come later.', opts: ['will', 'would', 'is', 'has'], a: 1, why: 'Will retrocede a would.' },
            { q: '"I\'m leaving." → He said he ______ leaving.', opts: ['is', 'was', 'were', 'has been'], a: 1, why: 'Presente continuo → pasado continuo.' },
            { q: 'She asked me where I ______.', opts: ['live', 'lived', 'do live', 'am living'], a: 1, why: 'En preguntas indirectas no se usa do y el tiempo retrocede.' },
            { q: 'The teacher told us ______ quiet.', opts: ['be', 'to be', 'being', 'that be'], a: 1, why: 'Orden indirecta: tell + persona + to + infinitivo.' }
          ]
        }
      ]
    },

    /* ======================= C1 ======================= */
    {
      id: 'c1', cefr: 'C1', name: 'Dominio',
      goal: 'Matizar, enfatizar y escribir con registro académico.',
      desc: 'El nivel que pide un 7.0: precisión, matices y control del registro. Aquí se pule todo.',
      units: [
        {
          id: 'c1u21', title: 'Modales perfectos y deducción',
          goal: 'Deducir sobre el pasado y expresar arrepentimiento.',
          points: [
            { h: 'Deducción en el pasado', html: `<p><b>must have + participio</b> = seguro que pasó: <em>She must have left.</em></p>
            <p><b>might/may/could have + participio</b> = puede que: <em>They might have missed the train.</em></p>
            <p><b>can't have + participio</b> = es imposible: <em>He can't have finished already.</em></p>` },
            { h: 'Arrepentimiento y crítica', html: `<p><b>should have + participio</b> = debería haber hecho: <em>You should have told me.</em></p>
            <p><b>shouldn't have + participio</b> = no deberías haber: <em>I shouldn't have said that.</em></p>
            <p><b>needn't have + participio</b> = no era necesario: <em>You needn't have paid.</em></p>` },
            { h: 'Alternativas de hedging', html: `<p>Para no sonar categórico en IELTS:</p>
            <p class="ex">This is likely to be the main cause. · It may well be that... · The evidence suggests that...</p>` }
          ],
          vocab: [
            { en: 'must have', es: 'seguro que (pasado)' }, { en: 'might have', es: 'puede que (pasado)' },
            { en: 'cannot have', es: 'es imposible que (pasado)' }, { en: 'should have', es: 'debería haber' },
            { en: 'regret', es: 'arrepentirse' }, { en: 'evidence', es: 'pruebas' }
          ],
          examples: ['She is not answering; she must have left.', 'They might have missed the train.', 'You should have told me earlier.', 'He cannot have finished already.'],
          quiz: [
            { q: 'She\'s not answering; she ______ have left.', opts: ['must', 'can\'t', 'should', 'might not'], a: 0, why: 'Deducción fuerte positiva: must have.' },
            { q: 'He ______ have taken it — it was impossible.', opts: ['must', 'can\'t', 'should', 'may'], a: 1, why: 'Deducción negativa: can\'t have.' },
            { q: 'You ______ have told me! I would have helped.', opts: ['should', 'must', 'can', 'might'], a: 0, why: 'Crítica/arrepentimiento: should have.' },
            { q: 'They ______ have missed the train; I\'m not sure.', opts: ['must', 'might', 'can\'t', 'should'], a: 1, why: 'Posibilidad incierta: might have.' },
            { q: 'I ______ have studied harder for the exam.', opts: ['should', 'must', 'can', 'would'], a: 0, why: 'Arrepentimiento: should have + participio.' }
          ]
        },
        {
          id: 'c1u22', title: 'Inversión y énfasis',
          goal: 'Dar énfasis con estructuras avanzadas y controladas.',
          points: [
            { h: 'Inversión tras adverbio negativo', html: `<p>Cuando la frase empieza con <b>never, rarely, seldom, hardly, not only</b>, el auxiliar va antes del sujeto:</p>
            <p class="ex">Never have I seen such a thing.<br>Rarely do people complain about this.<br>Not only did he arrive late, but he also forgot the file.</p>` },
            { h: 'Hardly / No sooner', html: `<p><b>Hardly had + sujeto + participio + when...</b></p>
            <p><b>No sooner had + sujeto + participio + than...</b></p>
            <p class="ex">Hardly had we arrived when it started to rain.</p>` },
            { h: 'Cleft sentences (énfasis)', html: `<p><b>It is/was ... that ...</b> para destacar un elemento:</p>
            <p class="ex">It was in 2019 that we met. · What I need is more time.</p>
            <p class="warn">Máximo una o dos por texto: si abusas, suena artificial.</p>` }
          ],
          vocab: [
            { en: 'rarely', es: 'rara vez' }, { en: 'hardly', es: 'apenas' },
            { en: 'not only', es: 'no solo' }, { en: 'never', es: 'nunca' },
            { en: 'emphasis', es: 'énfasis' }, { en: 'seldom', es: 'raramente' }
          ],
          examples: ['Never have I seen such a thing.', 'Rarely do people complain about this.', 'Hardly had we arrived when it started to rain.', 'It was in 2019 that we met.'],
          quiz: [
            { q: 'Never ______ I seen such a thing.', opts: ['have', 'has', 'did', 'was'], a: 0, why: 'Inversión con never + auxiliar have + sujeto I + participio.' },
            { q: 'Not only ______ he late, but he also forgot the file.', opts: ['was', 'did', 'had', 'is'], a: 0, why: 'Con "not only" al inicio se invierte: was he late.' },
            { q: 'Hardly ______ we arrived when it started to rain.', opts: ['had', 'have', 'did', 'were'], a: 0, why: 'Estructura: Hardly had we arrived when...' },
            { q: 'Rarely ______ people complain about this.', opts: ['do', 'does', 'are', 'have'], a: 0, why: 'Inversión en presente simple: do + sujeto + verbo.' },
            { q: 'It was in 2019 ______ we met.', opts: ['when', 'that', 'which', 'where'], a: 1, why: 'Cleft sentence: It was ... that ...' }
          ]
        },
        {
          id: 'c1u23', title: 'Nominalización y estilo académico',
          goal: 'Escribir como un texto académico, no como un chat.',
          points: [
            { h: 'Verbo → sustantivo', html: `<p>decide → <b>decision</b> · increase → <b>increase</b> · implement → <b>implementation</b> · analyse → <b>analysis</b>.</p>
            <p class="ex">The government decided to invest. → The government's decision to invest...</p>
            <p class="ex">Prices rose sharply. → There was a sharp rise in prices.</p>` },
            { h: 'Adjetivo → sustantivo', html: `<p>efficient → <b>efficiency</b> · weak → <b>weakness</b> · likely → <b>likelihood</b>.</p>
            <p class="ex">The system is efficient. → The efficiency of the system...</p>` },
            { h: 'No te pases', html: `<p>La nominalización excesiva hace el texto pesado. Alterna con verbos claros.</p>
            <p class="warn">✗ The implementation of the reduction of the consumption... → ✓ The policy reduced consumption...</p>` }
          ],
          vocab: [
            { en: 'increase', es: 'aumento' }, { en: 'reduction', es: 'reducción' },
            { en: 'implementation', es: 'implementación' }, { en: 'evidence', es: 'evidencia' },
            { en: 'analysis', es: 'análisis' }, { en: 'tendency', es: 'tendencia' }
          ],
          examples: ['There has been a sharp increase in prices.', 'The implementation of the policy was criticised.', 'The analysis of the data took several weeks.', 'There is little evidence to support this claim.'],
          quiz: [
            { q: 'There has been a sharp ______ in prices.', opts: ['increase', 'increasing', 'increased', 'increasingly'], a: 0, why: 'Tras "a sharp" hace falta un sustantivo.' },
            { q: 'The ______ of the policy was criticised.', opts: ['implement', 'implementation', 'implemented', 'implementing'], a: 1, why: 'Sustantivo abstracto: implementation.' },
            { q: 'The ______ of the data took weeks.', opts: ['analyse', 'analysis', 'analysed', 'analysing'], a: 1, why: 'Sustantivo: analysis.' },
            { q: 'There is little ______ to support this claim.', opts: ['evidences', 'evidence', 'an evidence', 'evident'], a: 1, why: '"Evidence" es incontable.' },
            { q: 'Which is the most academic version?', opts: ['People use phones more.', 'Phone use has increased.', 'Phones are used by people more.', 'People are using phones a lot.'], a: 1, why: 'Nominalización + present perfect: registro académico.' }
          ]
        },
        {
          id: 'c1u24', title: 'Cohesión, hedging y matices',
          goal: 'Conectar ideas y modular afirmaciones como un C1.',
          points: [
            { h: 'Conectores con precisión', html: `<p>Contraste: <b>however, whereas, despite + sustantivo, although + frase</b>.</p>
            <p>Causa: <b>due to, owing to, as a result, consequently</b>.</p>
            <p class="warn">✗ Despite of the rain → ✓ Despite the rain. · ✗ Although the rain → ✓ Although it rained.</p>` },
            { h: 'Referencias y sustitución', html: `<p>Evita repetir: usa <b>this, these, such, the former, the latter, do so</b>.</p>
            <p class="ex">Many cities have banned cars. This policy has reduced pollution.</p>
            <p class="ex">Some argue for taxes; others prefer incentives. The latter are easier to implement.</p>` },
            { h: 'Hedging (matizar)', html: `<p><b>tends to, is likely to, may well, arguably, to some extent, it could be argued that</b>.</p>
            <p class="ex">This tends to be the case in large cities.</p>
            <p class="ex">It could be argued that the benefits outweigh the costs.</p>
            <p>Hedging no es debilidad: es precisión y suena más profesional.</p>` }
          ],
          vocab: [
            { en: 'however', es: 'sin embargo' }, { en: 'therefore', es: 'por lo tanto' },
            { en: 'whereas', es: 'mientras que' }, { en: 'arguably', es: 'podría decirse' },
            { en: 'tend to', es: 'tender a' }, { en: 'overall', es: 'en conjunto' }
          ],
          examples: ['However, the evidence is limited.', 'Men worked longer, whereas women spent more time on care.', 'This tends to happen in large cities.', 'Overall, the benefits outweigh the costs.'],
          quiz: [
            { q: '______ the high cost, the plan is viable.', opts: ['Although', 'Despite', 'However', 'Because'], a: 1, why: '"Despite" + sustantivo. "Although" necesitaría una frase.' },
            { q: 'The data ______ a link between the two.', opts: ['suggest', 'suggests', 'is suggesting', 'has suggest'], a: 0, why: 'En registro académico "data" se trata como plural: suggest.' },
            { q: 'This ______ be the best option, but it is not certain.', opts: ['may well', 'must', 'can\'t', 'should'], a: 0, why: '"May well" expresa posibilidad con matiz.' },
            { q: '______, the benefits outweigh the costs.', opts: ['Overall', 'However', 'Whereas', 'Despite'], a: 0, why: '"Overall" cierra con una valoración general.' },
            { q: 'Men worked longer, ______ women spent more time on care.', opts: ['whereas', 'therefore', 'despite', 'moreover'], a: 0, why: '"Whereas" compara dos datos contrastados.' }
          ]
        }
      ]
    }
  ]
};
