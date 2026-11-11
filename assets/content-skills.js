/* ============================================================
   CONTENIDO — PARTE 2: LAS CUATRO DESTREZAS
   ============================================================ */

/* ---------------------------- READING ---------------------------- */
const READING = {
  intro: `En el IELTS Academic Reading tienes <b>60 minutos para 3 textos y 40 preguntas</b>. No hay tiempo extra para pasar respuestas. La clave no es leerlo todo: es <b>localizar información</b>.`,

  strategy: [
    { h: "1. No leas el texto primero (2 min)", html: `<p>Lee el título y el primer párrafo para saber el tema. Después ve directo a las preguntas. El texto tiene 800–1000 palabras: no puedes leerlo dos veces.</p>` },
    { h: "2. Subraya palabras clave de la pregunta", html: `<p>Busca en el texto <b>sinónimos</b>, no la misma palabra. Si la pregunta dice <em>children</em>, el texto puede decir <em>youngsters</em> o <em>the young</em>. Ese es el 80% de la dificultad.</p>` },
    { h: "3. True / False / Not Given", html: `<p><b>True</b>: el texto lo confirma. <b>False</b>: el texto dice lo contrario. <b>Not Given</b>: el texto no lo menciona (aunque tú lo sepas o sea lógico).</p>
    <p class="warn">Si la pregunta dice "always", "all" o "only" y el texto no lo dice literalmente, normalmente es False o Not Given. Distinguir esos dos es la parte difícil: si el texto contradice → False; si simplemente no habla del tema → Not Given.</p>` },
    { h: "4. Gestión del tiempo", html: `<p>20 minutos por texto. Si una pregunta te bloquea más de 90 segundos, marca una opción probable y sigue. Al final vuelves si queda tiempo.</p>` },
    { h: "5. Orden de las preguntas", html: `<p>En la mayoría de tipos (T/F/NG, completar frases, MCQ) las respuestas aparecen <b>en orden</b> en el texto. Úsalo para no releer.</p>` }
  ],

  passages: [
    {
      id: "r1",
      title: "The Secret Life of Bees",
      subtitle: "Texto académico · 7 preguntas",
      text: `Ask most people what bees do and they will say one word: honey. In fact, honey is a by-product. The real work of the honeybee is pollination, and it is worth billions of dollars to global agriculture. Roughly one third of the food we eat depends, directly or indirectly, on insect pollinators, and bees are the most efficient of them all.

Since the late 1990s, however, beekeepers in Europe and North America have reported unusually high losses of colonies. The phenomenon, known as colony collapse disorder, is still not fully understood. Scientists have identified several likely causes rather than a single culprit: a parasitic mite that feeds on bees, viral infections, the heavy use of certain pesticides, and the loss of wildflowers to intensive farming.

What worries researchers most is not the honey supply but the fragility of a system that relies on a single species. Almond orchards in California, for example, require more than a million colonies to be trucked in every spring; if the bees fail to arrive, the harvest fails with them.

Yet there are signs of hope. Urban beekeeping has grown rapidly in cities such as London, Paris and Berlin, where gardens, parks and rooftops offer a surprising variety of flowers. City bees often produce more honey per colony than their rural relatives, partly because cities are warmer and contain fewer pesticides. Some ecologists argue, though, that urban hives are a distraction from the real problem: the countryside itself must be made friendlier to insects. Planting wildflower strips along field edges, cutting pesticide use and restoring hedgerows are all cheaper, if less fashionable, solutions.`,
      questions: [
        { type: "tfng", q: "Honey is the main purpose of the work done by honeybees.", a: 1, why: "El texto dice 'honey is a by-product' y que el verdadero trabajo es la polinización. Contradice la afirmación → False." },
        { type: "tfng", q: "Scientists agree on a single cause of colony collapse disorder.", a: 1, why: "El texto dice 'several likely causes rather than a single culprit'. Lo contrario → False." },
        { type: "tfng", q: "Almond growers in California transport bees to their orchards.", a: 0, why: "'require more than a million colonies to be trucked in every spring' confirma que las transportan → True." },
        { type: "tfng", q: "Urban beekeeping is growing faster in Europe than in Asia.", a: 2, why: "El texto menciona ciudades europeas, pero no compara con Asia. No hay información → Not Given." },
        { type: "mcq", q: "What does the writer suggest about urban beekeeping?", opts: ["It is the best solution to the problem.", "It may distract attention from rural problems.", "It produces less honey than farming.", "It is harmful to city gardens."], a: 1, why: "'urban hives are a distraction from the real problem' → distrae la atención de los problemas del campo." },
        { type: "mcq", q: "Which solution does the writer consider more effective?", opts: ["Building more hives in cities", "Changes in agricultural practice", "Importing bees from abroad", "Reducing honey consumption"], a: 1, why: "El texto dice que plantar flores silvestres, reducir pesticidas y restaurar setos son 'cheaper, if less fashionable, solutions' → cambios en la práctica agrícola." },
        { type: "mcq", q: "In the second paragraph, 'culprit' is closest in meaning to:", opts: ["victim", "cause", "solution", "scientist"], a: 1, why: "'a single culprit' se refiere a una única causa responsable del problema." }
      ]
    },
    {
      id: "r2",
      title: "A City Without Cars",
      subtitle: "Texto académico · 7 preguntas",
      text: `In 1999 the small Galician city of Pontevedra did something that most mayors would consider political suicide: it closed its historic centre to cars. The mayor, Miguel Anxo Fernández Lores, expected protests. Instead, the transformation became so popular that he has been re-elected ever since.

The plan was gradual. First, traffic was restricted in the old town; then the surrounding streets were pedestrianised, parking was removed and a ring road was built to carry through-traffic. The city of 83,000 people now has no cars in its centre at all. CO2 emissions have fallen by around 70% since 1999, and, according to the city council, not a single traffic death has been recorded in the pedestrianised area since the scheme began.

Critics predicted that shops would lose customers. In reality, sales rose: pedestrians stop more often than drivers, and people who walk tend to spend longer in the area. Property prices in the centre have increased, and the population of the old town has grown after decades of decline.

Pontevedra is not a rich city, and its success has been explained partly by its size: 83,000 inhabitants is small enough for walking to be practical. Sceptics point out that the model may be difficult to copy in a metropolis of ten million. Even so, the experiment has influenced policy far beyond Spain. Dozens of European cities have sent delegations to study it, and the mayor has become an unlikely international celebrity among urban planners.

The lesson, he argues, is not really about transport. "A city is a place for people to meet," he says. "If you design it for cars, people disappear."`,
      questions: [
        { type: "tfng", q: "The mayor lost the election after closing the centre to cars.", a: 1, why: "El texto dice que ha sido reelegido desde entonces. Contradice → False." },
        { type: "tfng", q: "The changes to the city centre happened in a single step.", a: 1, why: "'The plan was gradual' → no fue de un solo paso. False." },
        { type: "tfng", q: "Shops in the centre lost customers after the change.", a: 1, why: "El texto dice 'In reality, sales rose'. Contradice la predicción → False." },
        { type: "tfng", q: "Pontevedra has a population of more than 200,000 people.", a: 1, why: "El texto da 83,000 habitantes. Contradice → False." },
        { type: "tfng", q: "Some people doubt whether the model could work in very large cities.", a: 0, why: "'Sceptics point out that the model may be difficult to copy in a metropolis' confirma la duda → True." },
        { type: "mcq", q: "'Sceptics' (paragraph 4) are people who:", opts: ["support the project enthusiastically", "doubt that the idea can be repeated elsewhere", "study transport in delegations", "live in the old town"], a: 1, why: "El contexto lo aclara: dudan que funcione en una metrópolis." },
        { type: "mcq", q: "What does the mayor believe cities should be designed for?", opts: ["Cars and through-traffic", "Tourism and property", "People and social interaction", "Shops and business"], a: 2, why: "'A city is a place for people to meet' y 'If you design it for cars, people disappear'." }
      ]
    }
  ]
};

/* ---------------------------- LISTENING ---------------------------- */
const LISTENING = {
  intro: `Aquí no hay archivos de audio: cada ejercicio usa la <b>voz del navegador</b> (speechSynthesis) para leerte el guion, como si fuera el examen. Funciona en Chrome, Edge y Safari. Ajusta la velocidad con el control.`,
  tips: [
    "En la Sección 1 (conversación) las respuestas suelen ser datos concretos: nombres deletreados, números, fechas, precios.",
    "Los números y las letras se dicen despacio en el examen: practica deletrear tu nombre, tu código postal y tu teléfono en inglés.",
    "Antes de escuchar, lee las preguntas y predice qué tipo de palabra falta (un número, un lugar, un sustantivo).",
    "Nunca dejes un hueco vacío: una respuesta al azar sigue teniendo un 25% de probabilidad.",
    "En el examen real se escucha UNA sola vez. Aquí puedes repetir: úsalo para entender por qué fallaste, no para memorizar."
  ],
  tasks: [
    {
      id: "l1",
      title: "Sección 1 · Formulario de inscripción al gimnasio",
      type: "Form completion",
      instructions: "Escucha la conversación y completa el formulario. Cada hueco es UNA palabra o UN número. Después pulsa 'Corregir'.",
      script: [
        { sp: "A", text: "Good morning, Riverside Leisure Centre. How can I help you?" },
        { sp: "B", text: "Hello. I'd like to join the gym. Could you give me some information about membership?" },
        { sp: "A", text: "Of course. Can I take your name first?" },
        { sp: "B", text: "Yes, it's Daniel Marsh. That's M-A-R-S-H." },
        { sp: "A", text: "Thank you, Daniel. And your postcode?" },
        { sp: "B", text: "It's K T two, five L P." },
        { sp: "A", text: "Great. We have three types of membership: Bronze, Silver and Gold. The Gold membership includes the swimming pool and all the classes." },
        { sp: "B", text: "I'll go for the Gold, then." },
        { sp: "A", text: "Excellent choice. When would you like to start?" },
        { sp: "B", text: "The third of March, please." },
        { sp: "A", text: "No problem. That will be thirty-eight pounds a month." },
        { sp: "B", text: "Thirty-eight. Is there a joining fee?" },
        { sp: "A", text: "Normally twenty pounds, but it's free this month." },
        { sp: "B", text: "Perfect. And do I get a free class?" },
        { sp: "A", text: "Yes, Gold members get one free class. Yoga is the most popular, but you could also try spinning or pilates." },
        { sp: "B", text: "I'll take yoga." },
        { sp: "A", text: "Lovely. See you on the third." }
      ],
      fields: [
        { label: "Full name", answer: ["daniel marsh"], hint: "Nombre + apellido" },
        { label: "Postcode", answer: ["kt2 5lp", "kt25lp"], hint: "Letras y números" },
        { label: "Membership type", answer: ["gold"], hint: "Bronze, Silver o..." },
        { label: "Start date", answer: ["3 march", "3rd march", "the third of march", "march 3", "3/3"], hint: "Día + mes" },
        { label: "Monthly fee (£)", answer: ["38", "thirty-eight", "thirty eight"], hint: "Solo el número" },
        { label: "Free class", answer: ["yoga"], hint: "Una actividad" }
      ]
    },
    {
      id: "l2",
      title: "Sección 2 · Anuncio del jardín comunitario",
      type: "Multiple choice",
      instructions: "Escucha el monólogo y elige la opción correcta. En el examen real solo lo oirías una vez.",
      script: [
        { sp: "A", text: "Good evening, and welcome to the monthly meeting of the Green Lane Community Garden. My name is Sarah Whitfield, and I'm the volunteer coordinator. Before we begin, let me tell you about a few changes." },
        { sp: "A", text: "First, the opening times. From next month, the garden will open at seven in the morning instead of eight, and it will close at sunset rather than at six. The change is mainly for people who want to water their plants before work." },
        { sp: "A", text: "Second, the tool shed. We've had problems with tools going missing, so from now on you'll need a code to get in. Please don't write the code on the door." },
        { sp: "A", text: "Third, the children's area. We're building a small pond next to the play area, and we need volunteers on Saturday mornings. Bring gloves, because the ground is cold, but we'll provide boots and tools." },
        { sp: "A", text: "Finally, the harvest festival will be on the twelfth of September, not the fifth as we said in the newsletter. Please put the new date in your diaries." }
      ],
      questions: [
        { q: "From next month, the garden will open...", opts: ["an hour earlier than before", "an hour later than before", "at the same time but close later", "only at weekends"], a: 0, why: "Abre a las 7 en lugar de las 8: una hora antes." },
        { q: "Why does the tool shed need a code?", opts: ["To keep children out", "Because tools have been disappearing", "Because the lock was broken", "To reduce the number of volunteers"], a: 1, why: "'We've had problems with tools going missing' → han desaparecido herramientas." },
        { q: "What should volunteers bring on Saturday mornings?", opts: ["boots", "tools", "gloves", "water"], a: 2, why: "'Bring gloves, because the ground is cold' — las botas y herramientas las proporcionan ellos." },
        { q: "When is the harvest festival now?", opts: ["5 September", "12 September", "5 October", "12 October"], a: 1, why: "Se cambia del 5 al 12 de septiembre." }
      ]
    },
    {
      id: "l3",
      title: "Sección 4 · Clase sobre el sueño y la memoria",
      type: "Note completion",
      instructions: "Escucha la clase y completa las notas. Máximo UNA palabra o UN número por hueco.",
      script: [
        { sp: "A", text: "Good morning. Today I want to look at the relationship between sleep and memory. Most adults need between seven and nine hours of sleep a night, yet surveys suggest that nearly a third of us regularly get less than six." },
        { sp: "A", text: "Why does this matter? During deep sleep, the brain consolidates memories. In other words, it moves information from short-term to long-term storage. In one well-known experiment, students who slept for eight hours after studying a list of words remembered about twenty per cent more than those who stayed awake." },
        { sp: "A", text: "The second point concerns screens. The blue light emitted by phones and laptops delays the release of melatonin, the hormone that tells your body it is time to sleep. So using your phone in bed makes it harder to fall asleep, even if you feel tired." },
        { sp: "A", text: "Third, napping. A short nap of under twenty minutes can improve alertness without making you groggy. Anything longer, especially in the late afternoon, can disturb your night's sleep." },
        { sp: "A", text: "Finally, if you have persistent problems, I would recommend keeping a sleep diary for two weeks: note the time you go to bed, what you did before, and how you felt the next day. That record is far more useful to a doctor than a general description." }
      ],
      fields: [
        { label: "Most adults need between ______ and nine hours.", answer: ["seven", "7"], hint: "Número" },
        { label: "Deep sleep helps the brain ______ memories.", answer: ["consolidate"], hint: "Verbo" },
        { label: "Students who slept remembered about ______ % more.", answer: ["twenty", "20"], hint: "Número" },
        { label: "Blue light delays the release of ______.", answer: ["melatonin"], hint: "Una hormona" },
        { label: "Naps should last under ______ minutes.", answer: ["twenty", "20"], hint: "Número" },
        { label: "The lecturer recommends keeping a ______ for two weeks.", answer: ["sleep diary", "diary"], hint: "Dos palabras" }
      ]
    }
  ]
};

/* ---------------------------- WRITING ---------------------------- */
const WRITING = {
  intro: `Son <b>2 tareas en 60 minutos</b>. La Task 1 (150 palabras) vale un tercio; la Task 2 (250 palabras) dos tercios. Dedica 20 minutos a la 1 y 40 a la 2. Si escribes menos palabras de las exigidas, pierdes puntos.`,

  criteria: [
    ["Task Achievement", "¿Respondes a la pregunta? ¿Cubres todos los puntos? ¿Tienes una postura clara?"],
    ["Coherence & Cohesion", "¿Se sigue el texto? ¿Párrafos claros? ¿Conectores bien usados?"],
    ["Lexical Resource", "¿Vocabulario variado y preciso? ¿Colocaciones naturales?"],
    ["Grammatical Range & Accuracy", "¿Estructuras variadas? ¿Errores que impiden comprender?"]
  ],

  task1: {
    title: "Task 1 — Describir datos (Academic)",
    time: 20,
    minWords: 150,
    intro: `Te dan un gráfico, tabla, mapa o proceso y debes describirlo en <b>150 palabras</b>. No des opiniones ni expliques causas: describe, compara y destaca lo importante.`,
    structure: [
      ["Introducción", "Parafrasea la pregunta. Una frase.", "The line graph compares the percentage of households with internet access in three countries between 2000 and 2020."],
      ["Overview", "2–3 tendencias generales. SIN datos concretos. Es lo más importante para la nota.", "Overall, access increased in all three countries, although the pace of growth varied considerably."],
      ["Párrafo 1", "Datos del punto de partida y primera tendencia, con cifras.", "In 2000, roughly 40% of households in Country C were connected, compared with 20% in Country A."],
      ["Párrafo 2", "El resto de la evolución y la comparación final.", "By 2020, the figures stood at 95% in Country A and 75% in Country B."]
    ],
    language: [
      ["Subir", "rise, increase, grow, climb, soar, double, triple", "Sales rose sharply / doubled between 2010 and 2015."],
      ["Bajar", "fall, decline, decrease, drop, plummet, halve", "The figure fell steadily to 20%."],
      ["Estabilidad", "remain stable, level off, plateau, stay constant", "Numbers levelled off at around 50%."],
      ["Fluctuación", "fluctuate, peak at, hit a low of", "Prices fluctuated between 20 and 30 euros."],
      ["Comparar", "compared with, whereas, in contrast, overtake", "Country A overtook Country C in 2010."],
      ["Cantidad", "a significant proportion, roughly, approximately, just under, slightly over", "Just under a third of respondents agreed."]
    ],
    model: `The line graph compares the proportion of households with internet access in three countries between 2000 and 2020.

Overall, access rose in all three countries, but the rate of growth differed markedly. Country C had the highest level at the start of the period; however, Country A, despite beginning at only 20%, overtook it by 2010 and ended with the highest figure.

In 2000, roughly 40% of households in Country C were connected, compared with 20% in Country A and just 5% in Country B. Over the following decade, access in Country A climbed sharply to 70%, while Country C grew only marginally, to 45%. Country B experienced the most dramatic relative change, rising sixfold to 30%.

By 2020, the figures stood at 95% in Country A, 75% in Country B and 50% in Country C. Thus, although Country C remained the least connected of the three, the gap between it and the other two had narrowed considerably.`,
    notes: [
      "El <b>overview</b> va después de la introducción y no incluye cifras: es una visión general. Sin overview, la nota máxima suele ser 5.5.",
      "Se compara siempre: no describes una línea y luego otra sin relación.",
      "Se usan cifras concretas en los párrafos de detalle, pero no todas: selecciona las significativas.",
      "Variedad gramatical: 'climbed sharply', 'grew only marginally', 'rising sixfold'.",
      "No hay opinión ni causas ('because people bought computers') — eso baja Task Achievement."
    ]
  },

  task2: {
    title: "Task 2 — Ensayo de opinión",
    time: 40,
    minWords: 250,
    intro: `Te dan un tema social y debes argumentar. <b>250 palabras mínimo</b>, 40 minutos. Vale dos tercios de la nota de Writing. La estructura importa tanto como el vocabulario.`,
    types: [
      ["Opinion (agree/disagree)", "To what extent do you agree or disagree?", "Postura clara desde la introducción y mantenida hasta el final."],
      ["Discussion (both views)", "Discuss both views and give your opinion.", "Un párrafo por postura + tu opinión en la conclusión (o en la intro)."],
      ["Advantages/Disadvantages", "Do the advantages outweigh the disadvantages?", "Responde a la pregunta: ¿qué pesa más? No solo listes."],
      ["Problem/Solution", "What problems does this cause? What solutions can you suggest?", "Problemas concretos + soluciones realistas, conectadas."]
    ],
    structure: [
      ["Introducción (2–3 frases)", "Parafrasea el tema + tesis clara.", "It is often argued that university education should be free. In my view, although the cost is considerable, the benefits for society justify public funding."],
      ["Párrafo 1: argumento principal", "Idea → explicación → ejemplo → cierre.", "The strongest argument is economic. A better-educated workforce... For instance, ..."],
      ["Párrafo 2: concesión o segundo argumento", "Reconoce la otra postura y refútala o añade.", "Admittedly, free tuition places a heavy burden on taxpayers. However, ..."],
      ["Conclusión (2 frases)", "Reafirma la postura. Sin ideas nuevas.", "In conclusion, while the financial cost is real, free university education is a long-term investment that benefits both individuals and the economy."]
    ],
    phrases: [
      ["Introducir", "It is often argued that... / There is growing debate about... / While some believe that..., others maintain that..."],
      ["Posicionarse", "In my view... / I would argue that... / I am convinced that... / This essay will argue that..."],
      ["Añadir", "Furthermore, ... / Moreover, ... / A further consideration is that..."],
      ["Conceder", "Admittedly, ... / It is true that... / Critics may argue that... / While this may be the case, ..."],
      ["Ejemplificar", "For instance, ... / A clear example of this is... / This is illustrated by..."],
      ["Concluir", "In conclusion, ... / To sum up, ... / On balance, I believe that..."],
      ["Hedging", "This tends to... / It is likely that... / The evidence suggests that... / This may well be..."],
      ["Evitar", "✗ I think that... (en cada frase) · ✗ Nowadays... (gastado) · ✗ very very important · ✗ In a nutshell"]
    ],
    model: `It is often argued that university education should be free for everyone. In my view, although the financial cost is considerable, the social and economic benefits of public funding clearly outweigh the drawbacks.

The strongest argument in favour of free tuition is equality of opportunity. When students must pay, talented young people from low-income families are often discouraged from applying, and society loses skills it desperately needs. In countries such as Germany, where tuition is largely free, university participation has risen without a collapse in academic standards. This suggests that the policy is workable rather than merely idealistic.

Admittedly, free education places a heavy burden on taxpayers, and critics argue that graduates, who earn more on average, should contribute. There is some force in this point. However, the alternative — a generation burdened with debt — delays home ownership and reduces consumer spending, which harms the wider economy. Moreover, a significant proportion of the tax paid by graduates over their careers returns the initial investment.

In conclusion, while the cost of free university education is real, it is a long-term investment in human capital. Governments should therefore fund it, at least for students from disadvantaged backgrounds.

[283 palabras]`,
    notes: [
      "Tesis en la introducción y repetida (con otras palabras) en la conclusión: eso es coherencia.",
      "Cada párrafo = una idea + explicación + ejemplo. No mezcles tres ideas en un párrafo.",
      "Conceder ('Admittedly...') y luego refutar demuestra pensamiento crítico; es lo que separa 6.5 de 7.5.",
      "Varía la longitud de las frases: una corta después de dos largas da ritmo.",
      "Revisa 3 minutos al final: artículos, plurales, terceras personas (-s), puntuación."
    ],
    checklist: [
      "¿He respondido exactamente a la pregunta (no a una parecida)?",
      "¿Hay una postura clara y se mantiene?",
      "¿Cada párrafo tiene una idea principal?",
      "¿He usado conectores variados sin abusar?",
      "¿Hay al menos 3 estructuras complejas (condicional, pasiva, relativo, concesión)?",
      "¿He revisado -s de tercera persona y plurales?",
      "¿Supero el mínimo de palabras?"
    ]
  }
};

/* ---------------------------- SPEAKING ---------------------------- */
const SPEAKING = {
  intro: `El Speaking dura <b>11–14 minutos</b> y tiene 3 partes. No se evalúa si tienes razón, sino cómo hablas: fluidez, vocabulario, gramática y pronunciación. Hablar despacio y con errores es mejor que quedarse callado.`,

  parts: [
    { n: 1, title: "Part 1 · Preguntas personales", time: "4–5 min", desc: "Temas cotidianos: trabajo, familia, hobbies, ciudad. Respuestas de 2–3 frases, no de una palabra ni de un minuto." },
    { n: 2, title: "Part 2 · Monólogo con tarjeta", time: "3–4 min", desc: "1 minuto para preparar, 2 minutos para hablar sobre una tarjeta. Debes cubrir los 3–4 puntos." },
    { n: 3, title: "Part 3 · Discusión abstracta", time: "4–5 min", desc: "Preguntas sobre el tema del Part 2, más generales y abstractas. Aquí se demuestra el nivel avanzado." }
  ],

  part1: [
    { topic: "Work / Study", qs: ["Do you work or are you a student?", "What do you like most about your job or your studies?", "Would you like to change anything about it in the future?"] },
    { topic: "Hometown", qs: ["Where are you from?", "What is your hometown like?", "Would you like to live there in the future? Why?"] },
    { topic: "Free time", qs: ["What do you usually do in your free time?", "Do you prefer spending free time alone or with others?", "Has the way you spend free time changed in recent years?"] },
    { topic: "Technology", qs: ["How often do you use your phone?", "What do you mainly use it for?", "Do you think you could live without it for a week?"] },
    { topic: "Food", qs: ["What kind of food do you enjoy?", "Do you prefer eating at home or in restaurants?", "Have your eating habits changed since you were a child?"] },
    { topic: "Travel", qs: ["Do you enjoy travelling?", "What is the best place you have visited?", "Would you like to travel more in the future?"] }
  ],

  part1tips: [
    "Responde y añade una razón o un detalle: <em>\"I'm a student, actually. I'm studying engineering because I've always been interested in how things work.\"</em>",
    "No memorices respuestas: los examinadores lo notan y bajan la nota de fluidez.",
    "Usa contracciones (I'm, don't, it's): suenan naturales.",
    "Si no entiendes: <em>\"Sorry, could you repeat the question?\"</em> — no penaliza."
  ],

  part2: [
    {
      card: { title: "Describe a place you like to spend time in.", points: ["where it is", "how often you go there", "what you do there", "and explain why you like it"] },
      model: `I'd like to talk about a small park near my flat, which has become my favourite place to switch off. It's about ten minutes' walk from where I live, in a quiet residential area, and I probably go there three or four times a week, usually in the evening.

What I normally do is quite simple: I walk a couple of laps, sit on one of the benches and read, or sometimes just watch people. There's a group of older men who play chess every day, and I find it oddly relaxing to listen to them argue.

The main reason I like it is that it's the one place where I don't feel pressured to be productive. My phone stays in my pocket, and nobody expects anything from me. It's also where I do most of my thinking — I've made several fairly big decisions while sitting on that same bench. So it's not a spectacular place, but it matters to me.`,
      why: "Cubre los 4 puntos, usa relativo ('which'), pasado perfecto ('I've made'), vocabulario natural ('switch off', 'oddly relaxing'), y desarrolla una idea personal al final."
    },
    {
      card: { title: "Describe a skill you would like to learn.", points: ["what the skill is", "why you want to learn it", "how you would learn it", "and explain how it would change your life"] },
      model: `The skill I'd most like to learn is playing the piano. I've been fascinated by it since I was a child, but my family couldn't afford lessons, so I never had the chance.

I'd like to learn it partly because I think it would give me a creative outlet. My work is very analytical, and by the end of the day my brain is exhausted in a way that scrolling through my phone doesn't fix. There's something appealing about doing something with my hands that produces beauty rather than reports.

As for how I'd learn, I'd probably start with a few months of face-to-face lessons to get the basics right, and then practise on my own with an app. I'd aim for fifteen minutes a day rather than an hour once a week, because I know from experience that little and often works better for me.

If I managed it, I think it would change my life in a modest but real way: I'd have a way to relax that doesn't involve a screen, and I'd finally understand why people say music is a language.`,
      why: "Estructura clara, matices ('partly because', 'rather than', 'little and often'), y respuestas personales que suenan naturales."
    },
    {
      card: { title: "Describe a person who has influenced you.", points: ["who the person is", "how you know them", "what they are like", "and explain how they influenced you"] },
      model: `I'd like to talk about my grandmother, who is probably the most influential person in my life. She's in her eighties now and lives in the same village where she was born.

She's a remarkably practical woman. She left school at fourteen, worked in a factory for thirty years, and raised four children, yet she has an enormous curiosity about the world. She reads two newspapers a day and is always asking me questions about things I've never thought about.

Her influence on me has been mostly by example. When I was a teenager, I was quite anxious about failing, and she used to say that the only real mistake is not trying. I didn't appreciate it at the time, but I find myself repeating it now whenever I'm afraid of starting something new. She also taught me to cook, which sounds trivial, but it gave me a kind of confidence that has nothing to do with work.

So, in short, she shaped both how I think and how I live.`,
      why: "Lenguaje de nivel C1 ('by example', 'appreciate it at the time', 'trivial'), buen uso de pasados y presentes, cierre que responde a la pregunta."
    },
    {
      card: { title: "Describe a decision you made that changed your life.", points: ["what the decision was", "when you made it", "why you made it", "and explain how it changed your life"] },
      model: `The decision that changed my life most was probably choosing to study abroad, at the age of nineteen. It wasn't a dramatic moment — I filled in a form one afternoon — but it set everything else in motion.

I made it for a mixture of reasons. I wanted to improve my English, obviously, but the deeper reason was that I felt I was living in a very small world. Everyone I knew had followed the same path, and I was curious about what else was out there.

Looking back, it was harder than I expected. For the first few months I was homesick and my English was far worse than I'd imagined. But that struggle forced me to become more independent and, frankly, more resilient.

If I hadn't made that decision, I'd probably have a comfortable life in my hometown, but a narrower one. It didn't just change my career; it changed how I see myself.`,
      why: "Condicional 3 ('If I hadn't made...'), matices ('frankly', 'a narrower one'), y respuesta directa a 'how it changed your life'."
    }
  ],

  part3: [
    { q: "Why do you think some people find it difficult to make decisions?", model: `I think there are two main reasons. The first is the sheer number of options available to us: when you have thirty versions of the same product, choosing becomes a burden rather than a freedom. The second is fear of regret — people worry less about the decision itself than about looking foolish afterwards. In my experience, decisive people tend to accept that most decisions are reversible, which makes them much easier to make.` },
    { q: "How has technology changed the way people learn?", model: `Enormously, and in both directions. On the one hand, anyone with a phone can now access university-level material for free, which is a genuine revolution for people in remote areas. On the other hand, technology encourages fragmented attention: we skim rather than read deeply, and we mistake access to information for understanding. So I'd argue it has democratised learning without necessarily improving it. The real advantage goes to people who are disciplined enough to use it deliberately.` },
    { q: "Should governments spend money on public transport rather than roads?", model: `I would say yes, though it depends on the context. In dense cities, investing in buses and trains is far more efficient: one tram can carry the passengers of fifty cars, and the environmental benefits are obvious. In rural areas, however, where populations are spread out, road maintenance may genuinely be the priority. So the sensible approach is not an ideological choice between the two, but a careful look at where the money produces the greatest public benefit.` },
    { q: "Is it possible to be happy without much money?", model: `Up to a point, yes. Research tends to show that money matters most when it lifts people out of poverty; beyond that, additional income brings diminishing returns. What seems to matter more is having strong relationships, a sense of purpose and some control over your time. That said, I'd be cautious about romanticising poverty: financial insecurity is genuinely stressful, and it's hard to be happy when you can't pay the rent.` }
  ],

  pronunciation: [
    ["/θ/ vs /t/", "think ≠ tink · three ≠ tree · health", "La lengua entre los dientes, sin vibrar."],
    ["/ɪ/ vs /iː/", "ship ≠ sheep · live ≠ leave · this", "Corta y relajada vs. larga y tensa."],
    ["/æ/ vs /e/", "bad ≠ bed · man ≠ men", "Abre más la boca para /æ/."],
    ["-ed final", "worked /t/ · played /d/ · wanted /ɪd/", "Solo suena /ɪd/ tras t o d."],
    ["Acento de palabra", "PHOtograph · phoTOgrapher · photoGRAPHic", "El acento cambia con el sufijo."],
    ["Connected speech", "What do you want? → Whaddaya want?", "Entender esto es clave para el listening."]
  ]
};
