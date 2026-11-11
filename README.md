# IELTS Academy — de A2 a banda 7.0

Academia personal en una web estática, sin instalaciones ni cuentas. Todo el progreso se guarda en tu navegador (`localStorage`).

## Cómo abrirla

**Opción 1 (la más simple):** abre `index.html` con doble clic en tu navegador.

**Opción 2 (recomendada si usas Chrome y quieres que todo funcione igual):**

```bash
cd ielts-academy
python3 -m http.server 8080
```

Y entra en <http://localhost:8080>.

## Qué incluye

| Sección | Contenido |
|---|---|
| **Inicio** | Resumen, racha, estadísticas y expectativas realistas A2 → 7.0 |
| **Ruta de estudio** | Plan de 48 semanas en 4 fases, semana tipo y tabla banda ↔ nivel MCER |
| **Listening** | 3 tareas tipo examen (formulario, multiple choice, notas) con voz sintética y guion |
| **Reading** | 2 textos académicos con preguntas True/False/Not Given y MCQ explicadas |
| **Writing** | Task 1 y Task 2: estructura, lenguaje, modelos banda 7.5, checklist y zona de práctica con cronómetro |
| **Speaking** | Part 1/2/3, tarjetas con cronómetro, respuestas modelo y pronunciación |
| **Vocabulario** | 60 palabras académicas con repetición espaciada (SRS) y lista buscable |
| **Gramática** | 8 unidades A2–C1 con teoría y test de 5 preguntas |
| **Simulacro** | 20 preguntas cronometradas con banda orientativa e historial |
| **Mi progreso** | Dashboard, exportar/importar JSON y reinicio |

## Cómo estudiarla (rutina de 60 min)

1. **15 min** — sesión de flashcards (10–20 tarjetas).
2. **20 min** — una destreza: reading, listening o writing.
3. **10 min** — una unidad de gramática con su test.
4. **15 min** — inglés real: serie, podcast, o hablar solo 2 minutos grabándote.

Regla: **30 minutos diarios > 6 horas el domingo**. La racha cuenta los días en los que haces algo (quiz, flashcards o marcar una lección).

## Detalles técnicos

- HTML + CSS + JavaScript puro. Sin build, sin dependencias.
- **Audios pregrabados** en `assets/audio/`: 27 líneas de listening, 10 modelos y 60 palabras. Voces **neuronales americanas (en-US)**: Aria (femenina) y Guy (masculina) en los diálogos. Suenan siempre, sin depender de las voces del sistema, y la velocidad se ajusta con el control.
  - Los MP3 se generaron con la voz de Google Translate (uso personal/educativo) y se sirven en local: no hay llamadas a Internet al reproducir.
- Fuentes de Google Fonts con fallback a fuentes del sistema (funciona sin internet).
- Progreso exportable desde **Mi progreso → Exportar progreso**.

## Publicarla gratis (GitHub Pages)

```bash
cd ielts-academy
git init
git add .
git commit -m "IELTS Academy"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/ielts-academy.git
git push -u origin main
```

Luego en GitHub: **Settings → Pages → Branch: main → /(root)**. En un par de minutos tendrás la web en `https://TU-USUARIO.github.io/ielts-academy/`.

## Aviso honesto

Una banda 7.0 equivale a nivel C1. Desde A2 son **700–900 horas** de estudio real. Esta web te da la estructura y el material; las horas y la constancia las pones tú. El simulacro da una banda **orientativa** de gramática y vocabulario, no sustituye a un examen oficial.
