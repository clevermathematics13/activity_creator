# Nuanced Analysis — Design Instructions
## Universal Inclusion & Accessibility Protocol

*This file is a standing reference for this project. Every new Nuanced Analysis activity must be designed against all rules below. No rule requires explicit re-stating in the chat — they apply by default.*

---

## 1. What a Nuanced Analysis Is

A Nuanced Analysis is a structured, multi-part guided investigation that:

- Spans multiple IB syllabus topics and weaves them into a single mathematical thread.
- Moves through a sequence of **conjecture → investigation → proof → application → reflection**.
- Builds **representational fluency**: the same object seen as algebra, geometry, series, diagram, and real-world model.
- Includes both a **student-facing packet** and a **Teacher's Companion** (separated by a page break; the companion is removed before distribution).
- Aligns primarily with **Paper 1** (non-calculator) and **Paper 3** (extended investigation/proof) style questions.

---

## 2. Fixed Structural Components

Every Nuanced Analysis must contain these sections, in this order:

### 2.1 Header Block
```
# Nuanced Analysis: [Title — a subtitle that names the unifying idea]

**Student Name:** ________________________  **Date:** ____________

**Course:** IBDP Mathematics — [subject and level]
**Syllabus Topic(s):** [Topic numbers and names]
**Prerequisites:** [Specific prior activities by name]

*Materials needed: [GDC model, software, physical tools. State explicitly whether the activity is Paper 1 style (no calculator) or mixed.]*
```

### 2.2 Command Terms Glossary Table
- Always present at the top of every activity.
- Always printed on a **tear-off strip** (horizontal rule above and below) so students can keep it beside them while working.
- All command terms must be rendered in **red** (e.g., using `<span style="color:red">**Term**</span>` in Markdown, or `\textcolor{red}{\textbf{Term}}` in LaTeX).
- Include a **demand-scale visual** alongside the table: a horizontal spectrum from *write down* (low output demand) to *prove* (high output demand), with each command term placed on it.
- Include a **Command-Term Spotlight** callout box highlighting the most commonly confused pair of terms in this particular activity.

### 2.3 Vocabulary List
- **Define all vocabulary before first use.** Every term that appears in a question must be defined in the header vocabulary list *and* at its first point of use in the body.
- Bold key terms on first use throughout the packet.
- For ELL students: where possible, include a footnote or sidebar noting the term's origin or a clarifying analogy.

### 2.4 ATL Statement
- One sentence naming the **Approaches to Learning skill** being built across the whole packet.

### 2.5 TOK Provocations Block
- Exactly two TOK questions, placed at the top and explicitly flagged for return in the Reflection.
- Each question must be answerable using **specific results from within this packet** — no abstract-only TOK.

### 2.6 International Mindedness Box
- At least one historical or cultural attribution note.
- Must go beyond naming Euler — include non-European mathematicians where the mathematics genuinely connects (e.g., Mādhava, al-Battānī, Wessel).

### 2.7 Parts (numbered 0, 1, 2, …)
- **Part 0** is always "Activating Prior Knowledge" — a bridge from prerequisite activities.
- Each Part begins with a **"What you need to start this Part"** micro-box (two to four bullet points, recapping only what is essential to begin — not a full re-teaching).
- Each Part ends with a **"Geometric / Physical Reading"** callout where appropriate — a sentence or two translating the algebra just done into spatial or real-world language.

### 2.8 Reflection Section
- Always the penultimate section before extensions.
- Always contains: (a) a list question (concepts confirmed or connected), (b) a meta-question about the value of multiple proofs or representations, (c) a return to one TOK provocation from the header.

### 2.9 Extension and IA-Seeding Section
- Labeled clearly as **optional**.
- Minimum two branches, each from a different IB topic area.
- Each branch is deliberately **under-specified**, in the spirit of the Internal Assessment Exploration.

### 2.10 Teacher's Companion
- Separated from the student packet by `---` and a clear heading.
- Contains: Integration Map (IB element → question number), the model's "moves" located, full answer sketches, planted-error keys, and any design notes.

---

## 3. The Eight Universal Design Layers

Apply every layer to every new activity. These are non-negotiable defaults, not options.

---

### Layer 1 — Structural Chunking and Modular Design

**Primary beneficiaries:** ADHD, slow processing speed, chronic health conditions, intermittent attendance, trauma-affected learners.

**Rules:**
- Every Part must be completable as a standalone task. A student who missed Part 2 must be able to begin Part 4 using only the micro-box summary.
- Add a **progress tracker** on the front page: `Part 1 of 8 □ □ □ □ □ □ □ □`.
- Sub-questions use hierarchical numbering: `Q4(a)`, `Q4(b)` — never bare `4`.
- A Part may not exceed **six questions** without an internal break (a callout box, a translation table, or a technology task that provides natural pacing).

**Decision test:** Cover Part N+1. Can a student meaningfully start Part N+2 using only what is printed at the top of that part? If not, the micro-box is insufficient — expand it.

---

### Layer 2 — Tiered Entry Points

**Primary beneficiaries:** Prior knowledge gaps, mathematics anxiety, twice-exceptional learners, gifted students who skip scaffolding.

**Rules:**
- Every generalization or proof must be preceded by a **numerical warm-up** (specific values, no variables).
- Conjecture always precedes rule: the student builds the pattern before the formula is confirmed.
- Mark questions with a clear tier symbol:
  - ★ = entry-level (accessible to all; compulsory core)
  - ★★ = standard (target for most students)
  - ★★★ = extension (challenge; optional unless stated otherwise)
- The **compulsory core** (★ and ★★ questions) must be clearly separated from ★★★ questions. Never bury an extension question at the end of a list of compulsory ones without a clear visual break.
- Worked example → parallel practice structure: if a question requires a technique, the immediately preceding question models it at a simpler level.

---

### Layer 3 — Command-Term Accessibility

**Primary beneficiaries:** ELL students, dyslexia, autism spectrum, mathematics anxiety.

**Rules:**
- The glossary table (Section 2.2) is mandatory and must be on the tear-off strip.
- **All command terms must appear in red** in every question stem and in the glossary table. Use `<span style="color:red">**Term**</span>` in Markdown or `\textcolor{red}{\textbf{Term}}` in LaTeX. This applies to every occurrence in the packet body, not just the glossary.
- Use **color-coding** in the PDF/print version to signal output demand:
  - Blue border = answer only (*write down*, *state*)
  - Amber border = working required (*show that*, *determine*, *explain*)
  - Red border = full proof or extended argument (*prove*, *hence prove*)
- Never use a command term not in the glossary without defining it at point of use.
- **"Hence"** questions must explicitly reference *which* preceding result to use: `Hence (using your answer to Q7)…`. Do not assume the student tracks the thread without a pointer.
- **ELL-specific:** Provide the glossary as a translated insert if the student's L1 is known. At minimum, add a one-line plain-English gloss in parentheses after formal command terms on first use: *Deduce (reach a conclusion by logical reasoning from what you have already shown)*.

---

### Layer 4 — Graduated Scaffolding Architecture

**Primary beneficiaries:** All learners; this is the highest-impact single intervention.

**Rules:**
- Every **proof by induction** question must include a blank template with labeled rows:
  ```
  Base case (n = 1):
  Inductive hypothesis (assume true for n = k):
  Inductive step (show true for n = k+1):
  Conclusion:
  ```
- Every **"Show that"** question must include the first line of working if the question is HL-level or above.
- Every **"Sketch"** task must provide a pre-drawn, labeled axis grid with appropriate scale.
- Every **"Describe" or "Explain"** question must provide a sentence starter appropriate to its type:
  - Geometric description: *"The [object] can be described as a [shape] with [property]…"*
  - Causal explanation: *"This happens because…, which means that…"*
  - Proof conclusion: *"Therefore, by the principle of mathematical induction, the statement holds for all…"*
- Scaffolding must be **opt-in for gifted/twice-exceptional students**: use a fold-under (print) or collapsed detail block (digital) so that students who do not need the hint are not distracted by it.

**Scaffolding hierarchy (choose the minimum level needed for the question's difficulty):**

| Level | What to provide |
|---|---|
| 0 (no scaffold) | Question only |
| 1 (framing) | Sentence starter |
| 2 (structural) | Labeled template with blank rows |
| 3 (procedural) | First step given; student continues |
| 4 (worked model) | Analogous simpler example fully worked, immediately preceding |

---

### Layer 5 — Language Load Reduction

**Primary beneficiaries:** ELL, dyslexia, ADHD, autism spectrum, slow processing speed.

**Rules:**
- **One instruction per sentence.** Never: *"Using your result from Q5 and the compound-angle formulas from the formula booklet, expand and simplify the expression, then equate real and imaginary parts to obtain the identities."* Instead, break into three numbered sub-steps.
- **Bold the key mathematical object** in every question stem so a student scanning quickly knows what they are working on.
- Separate **context** from **task demand**. Context goes in a shaded/boxed preamble. The actual question starts on a new line with the command term first.
- Replace vague verbs with concrete ones wherever possible:
  - *"Investigate"* → *"Calculate X for n = 1, 2, 3. Write a general formula. Explain why it holds."*
  - *"Explore"* → *"Try values of θ = 0, π/4, π/2. What pattern do you notice?"*
- **Readability test:** Cover the question and read only: `[command term] + [mathematical object]`. If that is enough to attempt the task, the question passes. If the student needs the surrounding prose to understand what to do, simplify.
- **American English** is the standard throughout all packets: use *color* (not *colour*), *recognize* (not *recognise*), *generalize* (not *generalise*), *center* (not *centre*), *rigor* (not *rigour*), *analyze* (not *analyse*).

---

### Layer 6 — Multimodal and Multi-Representational Design

**Primary beneficiaries:** ELL, dyscalculia, visual learners, autism spectrum.

**The Rule of Four:** Every key result must appear in at least two of these four forms:

| Form | Example |
|---|---|
| Symbolic / algebraic | $z_1 z_2 = r_1 r_2 (\cos(\alpha+\beta) + i\sin(\alpha+\beta))$ |
| Geometric / diagrammatic | Argand plane showing rotation and scaling |
| Tabular / numeric | Specific cases with computed values |
| Verbal | "Multiplying two complex numbers rotates by the sum of their arguments and scales by the product of their moduli." |

**Translation Tables:** Include a Translation Table callout for every domain transfer (algebraic ↔ geometric ↔ series language). Format:

| What you observe on screen… | What you write on the exam paper… |
|---|---|
| (informal observation) | (formal mathematical phrasing) |

**Reference materials to always include (as inserts or appendices):**
- Powers-of-$i$ cycle card (color-coded: $i^1$, $i^2$, $i^3$, $i^4$)
- Pre-drawn, labeled Argand plane grid for every sketch task
- Formula booklet page reference for every formula used (even if students have the booklet)

---

### Layer 7 — Accessible Metacognition and Reflection

**Primary beneficiaries:** ELL, autism spectrum, mathematics anxiety, twice-exceptional learners.

**Rules:**
- Every **"List" or "Describe what you have learned"** reflection question must include a **concept map template** — a blank table with columns: *Concept*, *Where it appeared in this packet*, *How it connected to another concept*.
- Every **TOK reflection** must include:
  1. A **position-statement frame**: *"I argue that [claim]. My evidence from this packet is [specific result, e.g., Q20]. A counterargument would be [X], but I respond that [Y]."*
  2. A **modeled mentor text** — one fully written example paragraph using a different result from the same packet, so students see the genre without seeing their own answer.
- Every **"Explain what is gained by two proofs"** or similar meta-question must offer a **bullet-point option** as an alternative to a paragraph, so that students with output difficulties can demonstrate understanding without extended prose.
- **ELL-specific:** Provide the TOK sentence frames in the student's L1 if possible, with the English version alongside.

**Oral alternatives:** Every reflection question must be flagged as *"You may respond to this question orally — ask your teacher to record a voice memo or interview."*

---

### Layer 8 — Flexible Assessment and Output Modes

**Primary beneficiaries:** Motor difficulties, ELL, dyslexia, chronic health, ADHD.

**Rules:**
- The **compulsory core** (★ and ★★) is stated on page 1 as a specific list of question numbers. Students with reduced workload accommodations complete the core and stop.
- Every **"Describe" or "Sketch"** task must explicitly state: *"You may answer this question with an annotated diagram instead of a written description."*
- Every **"Explain"** task must explicitly state: *"You may answer this question in bullet points."*
- The activity must be submittable in **digital typed format** without loss of meaning. This means: all diagrams have a digital alternative (GeoGebra export), and no question requires handwritten symbolic manipulation that cannot be typed.
- **Tiered deadlines:** The Teacher's Companion must specify which parts are appropriate for a single lesson (≤ 50 min) versus a take-home or multi-session format.
- **Partial credit policy** must be stated in the Teacher's Companion: what constitutes a meaningful partial solution for each planted-error task and each proof.

---

## 4. Question-Level Design Checklist

Before finalizing any question, run it through this checklist:

```
□ Command term is in the glossary, appears in red, and is bold on first use.
□ All vocabulary used in this question has been defined before this point in the packet.
□ One instruction per sentence (or sentence per sub-step).
□ Key mathematical object is bolded in the stem.
□ Context and task demand are separated.
□ Minimum necessary scaffold is present (see Layer 4 hierarchy).
□ For proofs: labeled template included.
□ For sketches: pre-drawn axis grid included.
□ For "describe"/"explain": sentence starter included.
□ Result appears in at least two representational forms.
□ A "geometric / physical reading" follows if relevant.
□ The question is accessible at tier ★ before introducing tier ★★★.
□ If "hence" is used: the referenced result is explicitly named.
□ Partial solutions are possible and creditworthy (not all-or-nothing).
□ American English spelling is used throughout (color, recognize, generalize, center, rigor).
```

---

## 5. Planted Error and "Find the Fatal Error" Design Rules

These tasks are among the most powerful in the packet but carry the highest anxiety risk. Apply all of the following:

- **Frame positively before presenting the error.** Open with: *"The following working was submitted by a student. Your job is not to judge the student — errors like this reveal important distinctions. Find the slip and explain its consequence."*
- **The error must be a single, identifiable, teachable misconception** — not a careless arithmetic slip.
- **The error must be at exactly one line** — no ambiguity about where the mistake occurs.
- **Always include part (a): geometric/structural reason the answer is absurd** before part (b): locating the algebraic error. This builds intuition-first habits.
- After the student solves it, provide a **"Misconception Name"** in the Teacher's Companion (e.g., "Forgetting to raise the modulus in De Moivre") so teachers can log and track it.

---

## 6. Neurodivergent-Specific Design Moves (Quick Reference)

| Profile | Highest-impact move | What to avoid |
|---|---|---|
| ADHD | Progress tracker + "what you need from earlier" micro-box at Part start | Questions that require holding more than two prior results in working memory simultaneously |
| Dyslexia | Tear-off command-term strip + color-coded output demand | Dense unbroken paragraphs in question stems; multiple instructions in one sentence |
| Autism spectrum | Explicit criteria for all open-ended items; structured sentence starters | Vague verbs ("explore", "reflect") without concrete operationalization; cluttered page layouts |
| Dyscalculia | Powers-of-$i$ cycle card; pre-drawn axis grids; color-coded steps in worked examples | Requiring the student to track the powers-of-$i$ cycle from memory across multiple questions |
| Twice exceptional / gifted | Opt-in scaffolding (fold-under); extensions woven in as natural next steps, not appended as extra work | Forcing gifted students to sit through scaffolding they have already internalized |
| Slow processing speed | Compulsory core explicitly listed on page 1; each Part completable alone | Packets that only make sense if completed front-to-back in one sitting |
| Math anxiety | Low-stakes entry (conjecture before rule); explicit celebration of partial solutions | Commands like "Prove" without a scaffold; questions that feel all-or-nothing |
| Motor/dysgraphia | Digital submission option; pre-drawn diagrams; oral alternative for reflection | Requiring precise hand-drawn diagrams for marks |

---

## 7. ELL-Specific Design Moves (Quick Reference)

| Language demand | Mitigation |
|---|---|
| Academic register (passive voice, nominalizations) | Rewrite question stems in active voice where possible; identify the agent explicitly |
| IB command-term vocabulary | Translated or illustrated glossary; demand-scale visual; plain-English gloss in parentheses |
| Mathematical English phrase bank | Include a **proof-writing phrase bank** for each proof type (induction, direct, by contradiction) |
| TOK and reflective metalanguage | Position-statement frame + mentor text for every TOK question |
| Extended written output | Accept annotated diagrams as evidence; provide bullet-point option; oral alternative |
| Interdisciplinary vocabulary ("phasor", "induction") | Flag explicitly; provide a one-sentence plain-language definition at point of use |

**Structural strength to leverage:** Symbolic mathematics, algebraic manipulation, and GDC tasks are largely language-neutral. Design ELL students' compulsory core to weight these sections more heavily than the extended-prose reflection sections.

---

## 8. Teacher's Companion — Required Sections

The Teacher's Companion at the end of every packet must include:

1. **Integration Map:** Table mapping every IB element (topics, TOK, ATL, international mindedness, technology, IA seeding, Paper alignment, command terms) to specific question numbers.
2. **The Model's "Moves," Located:** Bulleted list identifying each pedagogical move (conjecture-before-rule, planted error, translation table, rule of four, etc.) and which question it lives in.
3. **Answer Sketches:** Brief correct answers for every question, including all planted-error keys with: (a) the correct answer, (b) the name of the misconception the error targets, (c) the HL concept it distinguishes.
4. **Tiered Deadline Guidance:** Which Parts suit a single 50-minute lesson; which require homework or a double period.
5. **Compulsory Core List:** Explicit list of question numbers that constitute the minimum meaningful engagement with the activity.
6. **Differentiation Note:** Specific guidance for: (a) students with ELL needs, (b) students with neurodivergent profiles, (c) students with prior knowledge gaps, (d) gifted or twice-exceptional students.
7. **Design Note (Honesty Section):** A candid note on which IB topic areas are genuinely integrated versus handled at extension level, and why. Integration must be earned by the mathematics, not stapled on.

---

## 9. What This Packet Is Not

These are anti-patterns to avoid:

- **A worksheet with harder problems.** A Nuanced Analysis has an arc — conjecture → proof → application → reflection — not a collection of unrelated questions.
- **A packet that only makes sense front-to-back.** Every Part must be enterable from a micro-box summary.
- **A packet where the extension feels like punishment.** Extensions are natural next questions for curious students, not appendices for fast finishers.
- **A packet where scaffolding is visible to everyone.** Scaffolding is opt-in. Advanced students should not be condescended to by seeing hints they did not ask for.
- **A packet where the mathematics is a vehicle for a language test.** The goal is assessing mathematical understanding. Students whose first language is not English should not be disadvantaged on the algebraic or proof sections.
- **A packet where "integration" is forced.** If a topic area does not naturally connect to the mathematical thread, it belongs in a different activity — not shoehorned in to satisfy a curriculum coverage checklist.

---

*End of Design Instructions. Version 1.1. Changes from v1.0: (1) American English specified as the standard in Layer 5; (2) red command-term rendering made explicit in Section 2.2 and Layer 3; (3) "define all vocabulary before first use" elevated to a standalone rule in Section 2.3; (4) question-level checklist updated to include American English and vocabulary pre-definition checks.*
