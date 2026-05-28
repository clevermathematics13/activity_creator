# MASTER PROMPT: Math Packet Creation Rules

Use this prompt when creating or editing math activity packets, nuanced analysis packets, solutions documents, or markschemes. Create LaTeX code using advanced LaTeX tools and Claude AI-style formatting review so the final document is polished, readable, student-appropriate, and Overleaf-ready.

---

## Global Rules

- Preserve math rigor while reducing unnecessary cognitive load.
- Use student-facing language unless the task is explicitly teacher-facing.
- Never put a response space on a different page from its prompt.
- Never strand a section title at the bottom of a page.
- Never let content spill, overlap, or run outside printable margins.
- Use intentional page breaks so students can navigate packets without confusion.
- Use the exact label **"Clev's Marks"** for all scoring, grading, tracking, or marks sections.
- Use "intersects" for functions, graphs, or objects meeting or crossing. Do not use "is perfectly continuous" for that meaning.
- When editing LaTeX, provide the full updated script unless snippets are explicitly requested.
- Before finalizing LaTeX, check packages, environments, colors, commands, graph fit, answer spaces, page breaks, compilation, and margins.

---

## Document Types

1. Grade 9 Activity Packets
2. DP Nuanced Analysis Packets

---

# 1. GRADE 9 ACTIVITY PACKETS

## A. Core Philosophy

Design for mathematical understanding first, not mere completion. Reduce avoidable cognitive load while preserving mathematical demand. Language, layout, and structure should help students access the mathematics without weakening it. Write for English language learners, diverse thinkers, and Grade 9 mathematicians who benefit from clarity, spacing, visual organization, repeated structure, and precise vocabulary. Do not crowd pages. A slightly longer packet with better pacing is better than a short packet that overwhelms students.

## B. LaTeX, Page Integrity, and Spacing

Use a structured, accessible LaTeX template. For exam-style packets, use one questions environment to prevent label errors. Use dynamic, full-width answer boxes that stretch to fill available page space when answer boxes are appropriate. Provide ample writing space for universal access and lower cognitive load. Use precise vertical spacing, pagination, and intentional `\newpage` commands. Do not start a question awkwardly at the bottom of a page. Do not separate a graph-heavy prompt from its graph. Use more space between major first-page elements. Avoid cramped title pages, vocabulary tables, graph examples, and task instructions. For ordered items, especially tasks like 2.1, make items equally spaced and add extra space before the first item.

## C. Cognitive Load

Break complex tasks into smaller visible steps. Avoid stacking too many types of thinking in one prompt, such as graph interpretation, vocabulary recall, graph-type selection, justification, and calculation. Use worked examples, sentence frames, retrieval practice, spacing, interleaving, and multiple representations only when they support retention. Avoid "explain in your own words" when precision is the goal. Prefer:
- "Use rigorous mathematical vocabulary to explain..."
- "State your answer using the terms interval, frequency, and data value."
- "Justify your choice using at least two mathematical features of the data."

Support language should help students express correct math meaning, not copy phrases.

## D. Page Layout

Give substantial questions breathing room. A question should usually get its own page when it includes:
- Multiple graphs
- A table and graph
- A long explanation box
- A practice section
- A high-cognitive-load reasoning task
- Multiple written parts
- A graphing-window setup
- Visual comparison between two graphs

Practice sections should often be on their own page. Questions like #10, #13, #14, #17, and similarly substantial questions should have their own page when needed. Add vertical space between graph areas when students need to write, label, or compare. Answer boxes must fit realistic Grade 9 work. Do not squeeze multi-step reasoning into tiny boxes. If students only fill values such as x-min, x-max, y-min, and y-max, use clear spaced blanks, not a generic answer box.

## E. Graph Formatting

Generate professional TikZ coordinate planes for all graphing tasks. Graphs must never run off the right side of the page. Check that the full graph, labels, axes, and nearby text fit inside the printable area. Label all coordinates and endpoints. Remind students to use pencils and rulers. Use horizontal placement when comparing two graphs side by side. For graph comparisons, place displays next to each other rather than stacked when possible. Graph examples should be clean and clearly labeled. For student-created graphs, provide blank plotting space or blank grids. Avoid pre-filled tables unless the task is guided practice. If students choose a graphing window, explicitly ask them to:
1. Identify min/max x-values
2. Identify min/max y-values
3. Choose a window
4. Explain why it shows important features

Separate extreme-value identification from window-size choice if clearer.

## F. Statistical Graphs

Use precise graph-type language.
- **Bar graphs** are for qualitative data and discrete quantitative data when values are counted as separate categories.
- **Histograms** are for intervals of discrete data or continuous data.
- Define **interval** as "a set of numbers between two values."
- Use "Each bar represents one interval."
- Do **not** define interval using "range," since range has specific meanings in functions and statistics.

Include study-guide definitions of: bar graph, histogram, scatter plot, qualitative data, quantitative data, discrete data, continuous data, interval, and frequency. Explicitly connect graph type to data type. Use "a continuous or sequential numerical range," not "a connected numerical range."

## G. Vocabulary

Include vocabulary support when students need new or precise language. Vocabulary should not feel like a random glossary. Integrate it and use it later in prompts. Put terms next to definitions. Use **purple styling** for vocabulary terms and definitions. Define all important terms before students use them. Vocabulary consolidation should be engaging, not just "copy the definition." Avoid "Give one science example." Instead, use a specific branch or context in the subtitle or prompt, such as Ecology, Physics, Genetics, Astronomy, or Environmental Science. Science examples should not give away too much — they should invite application, not obvious matching.

## H. Command Terms

Use specific IB command terms when appropriate. **Bold red** command terms such as: Classify, State, Describe, Determine, Justify, Evaluate, Compare, and Explain. Only use a command term if it matches the expected action. Avoid "Deduce" if students need explicit instruction. If a task asks students to identify values and then choose a graphing window, split it:
- Part 1: State the minimum and maximum values needed.
- Part 2: Choose an appropriate graphing window and justify your choice.

## I. Student-Facing Wording

Write directly to students. Use short, clear instructions. Avoid teacher-facing language, "mini scenario," and vague phrasing when a specific context is clearer. Prefer prompts that tell students exactly what mathematical action to take.

- **Good:** "Classify the data as qualitative, discrete quantitative, or continuous quantitative. Use one mathematical reason."
- **Less ideal:** "Think about the data and explain what type it is."

Use rigorous vocabulary with accessible sentence structure.

## J. Visual Tone

Make packets polished, colorful, and inviting without visual noise. Small personality moments are fine when purposeful, such as "Statistical Graphs at a Glance (sneak peek of future learning 🐸)." Playful elements should reduce anxiety and increase engagement, not distract. Use:
- **Red** for command terms
- **Purple** for vocabulary
- Strong heading hierarchy
- Clear boxes for notes, examples, and student work

## K. Answer Spaces

Use answer boxes only when they structure work. Use structured fill-ins when better. For graphing windows, use:

```
x-min: ________
x-max: ________
y-min: ________
y-max: ________
```

For explanations, provide enough lines or open space for a realistic response. For multi-step problems, separate computation space from final-answer space when useful.

## L. Random Sampling and Calculators

Make random-number-generator instructions explicit and student-friendly. For the country list activity, use **206** as the upper bound. Include TI-84 Plus CE instructions when needed, especially for `randInt(`. Procedural supports should be visually clear and not buried in paragraphs.

## M. Unit and Curriculum Consistency

Double-check the unit number. The current statistics packet is **Unit 4**, not Unit 3. Keep content aligned with Grade 9 Extended Mathematics expectations. Use prior knowledge labels carefully. If a needed topic is not part of the target curriculum, label it **prior knowledge** rather than new assessed content.

## N. Grade 9 Solutions

When asked for solutions, create a complete Overleaf-ready LaTeX document. Double-check all answers. Show enough reasoning for students and teachers without becoming unnecessarily long. When checking a proposed solution, do not begin by substituting into the original equation in a way that assumes the equality. Verify separately:

```
LHS = ...
RHS = ...
Since LHS = RHS, the solution checks.
```

This avoids circular reasoning or petitio principii. Include convention notes when relevant, such as quartile conventions or graphing-window choices.

## O. Grade 9 LaTeX Output

When editing a packet script, provide the full updated LaTeX script unless snippets are explicitly requested. Check:
- Intentional page breaks
- Graph fit
- Answer-space size
- Closed environments
- Defined colors and commands
- Missing packages
- Clean compilation
- Whether any graph or table is pushed off the page

In chat, avoid unnecessary LaTeX delimiters unless the user asks for LaTeX or Overleaf code.

## P. Recent Grade 9 Statistics Packet Rules

Preserve these exact recent preferences:
- "Statistical Graphs at a Glance" should be followed by "(sneak peek of future learning 🐸)".
- "Classify" and "State" should be bold red command terms.
- Terms should be placed next to definitions in purple.
- All important terms should be defined.
- Task 2.1 items should be equally spaced with extra space above the first item.
- Science-lens prompts should not give too many hints.
- Use specific science branches or contexts instead of vague "Give one science example."
- Replace "a connected numerical range" with "a continuous or sequential numerical range."
- Use "a set of numbers between two values" as the definition of interval.
- Use **206** as the random-number-generator upper bound.
- The packet is **Unit 4**, not Unit 3.
- Question 2 graphs must not run off the right side of the page.
- Give more vertical space between graphs when students compare or write.
- For question 19-style tasks, place graphs horizontally when comparison is the goal.
- For question 20b-style tasks, avoid "deduce" if students need explicit instructions.
- For question 20c-style tasks, use spaced x/y min/max blanks instead of an answer box.

## Q. Grade 9 Master Instruction

Create polished, Overleaf-ready LaTeX Grade 9 activity packets that are student-facing, visually clear, low in unnecessary cognitive load, and mathematically rigorous. Use spacious page design, intentional page breaks, clear graph placement, bold red command terms, purple vocabulary supports, and precise student instructions. Define all important terms before use. Use science or real-world contexts only when they support the math goal. Ensure graphs fit inside margins and student work has enough space. When solutions are requested, provide complete LaTeX solutions with correct answers, clear reasoning, and separate LHS/RHS checks when appropriate.

---

# 2. DP NUANCED ANALYSIS PACKETS

## A. Core Purpose

Design DP analysis packets to help students think like strong IB mathematicians. Do not simply give practice questions. Train students to notice structure, interpret command terms, use precise vocabulary, connect representations, and write mathematically defensible conclusions. Goals: high rigor, reduced unnecessary cognitive load, strong conceptual scaffolding, DP-style precision, polished Overleaf-ready formatting, clear student-facing language, and exam-relevant reasoning habits. The packet should bridge classroom learning, Paper 1/Paper 2 exam reasoning, and Paper 3-style mathematical investigation.

## B. LaTeX, Formatting, Visuals, and Workflow

Use clean, structured LaTeX environments optimized for Overleaf. Ensure generous, clearly delineated answer spaces that stretch appropriately to page margins without awkward page breaks. Use **"Clev's Marks"** for all grading, tracking, scoring, or marks sections. Break complex IB questions into distinct, lettered subsections with ample white space. Generate high-contrast, professional coordinate planes with explicit, consistent scaling. Label critical points, asymptotes, and boundaries. Use official IBDP command terms — such as hence, show that, determine, and justify — to align with past paper expectations. Make question stems direct and unambiguous to isolate the assessed concept and minimize linguistic distraction. Ensure equations and syntax mirror standard IBDP past paper formatting and remain compatible with Mathpix OCR workflows.

## C. Cognitive Load

Preserve intellectual demand but remove avoidable confusion. Do not lower the mathematics — clarify the route into it. Break high-cognitive-load tasks into stages: notice structure, identify representation, use method, interpret result, write a DP-quality conclusion. Do not ask students to graph, compare, justify, generalize, and evaluate in one dense sentence. When a task has multiple reasoning forms, separate them visibly: identify the feature, calculate or graph, interpret, then conclude using precise mathematical language. Scaffold without spoon-feeding.

## D. DP Nuance

Emphasize nuance, not just procedure. Ask students to distinguish:
- Exact versus approximate
- Algebraic versus numerical
- Local versus global behavior
- Necessary versus sufficient
- Evidence versus proof
- Correlation versus causation
- Convergence versus boundedness
- Visual pattern versus justified conclusion
- Calculator result versus mathematical reasoning
- Correct answer versus valid method

Force precision when students may overstate:
- Use "State what the graph suggests. Then explain what additional reasoning would be needed to justify the conclusion," not "Explain what the graph shows."
- Use "does not have an elementary antiderivative," not "cannot be integrated."
- Use "provides numerical evidence, but it is not a proof," not "proves."

## E. Command Terms

Use **bold red** official DP command terms: State, Find, Determine, Show that, Hence, Hence or otherwise, Justify, Explain, Compare, Comment on, Interpret, Evaluate, Prove, Verify, Sketch, Draw, and Use technology to. Only use a command term if the task matches it. Avoid vague "deduce" unless prior information genuinely supports logical deduction. If more direction is needed, split the task. Instead of "Deduce an appropriate viewing window," use:
- a. State minimum and maximum x-values needed to show important features.
- b. State minimum and maximum y-values.
- c. Choose an appropriate viewing window and justify it.

## F. Designed Dependency

Use dependency between parts intentionally, as in IB questions where earlier parts support later parts. Include: method priming, representation switching, "hence" reasoning, calculator-supported exploration, follow-through reasoning, parameter interpretation, algebra-to-graph connections, graph-to-conclusion connections, 2D-before-3D progression, special case before general case, and numerical evidence before proof. Make the dependency educationally clear.

Good wording:
- "Use your result from part (b) to..."
- "Explain how the graph in part (a) supports the algebraic result in part (c)."
- "Compare your numerical result with the exact value found in part (d)."

Avoid disconnected exam fragments unless the goal is deliberate mixed retrieval.

## G. Vocabulary

Define key DP vocabulary before use. Do not assume precise knowledge of: converges, diverges, bounded, monotonic, asymptote, parameter, invariant, approximation, residual, transformation, orthogonal, homogeneous, scalar, vector, magnitude, direction, component, domain, range, interval, constraint, assumption, model, validity, limitation, or generalization.

Use vocabulary boxes or concept translation tables when helpful. Example table:

| Informal | Precise Mathematical Language |
|---|---|
| "The graph gets closer to the line" | "The function approaches an asymptote" |
| "The answer is kind of near 3" | "The numerical approximation is close to 3" |
| "The pattern keeps going" | "The sequence appears to converge" |
| "The calculator says" | "Numerical technology suggests" |

Vocabulary should support precision, not decoration.

## H. Student-Facing Wording

Write directly to students. Use clear, concise instructions with DP sophistication. Avoid overly casual phrasing in mathematical prompts. Personality is fine in titles or transitions, but math language should be precise.

Preferred:
- "Use the graph to estimate the value of x. Then explain why this estimate may not be exact."
- "State one limitation of using this numerical method."
- "Use appropriate mathematical vocabulary in your explanation."

Avoid: "Talk about what is happening," "What do you think?", and "Explain in your own words." Replace "in your own words" with "Explain using precise mathematical vocabulary," "Write a mathematically defensible explanation," or "Use DP-style reasoning to justify your conclusion."

## I. Page Layout and Spacing

Use intentional page breaks. Do not cram high-cognitive-load tasks. Give a task its own page when it includes: a large graph, multiple graphs, table and graph, long justification, proof, model interpretation, calculator output, multiple representations, Paper 3-style context, method comparison, or validity/limitation reflection. Do not separate a graph from the question using it. Do not strand a major reasoning prompt at the page bottom.

Use page breaks as thinking stages:
- Page 1: explore the graph
- Page 2: develop algebra
- Page 3: interpret and justify
- Page 4: extension or exam-style consolidation

Provide room for: algebra, annotations, diagrams, written interpretation, calculator notes, checking work, and conclusions. For proof or "show that," provide multiple lines. For interpretation, provide paragraph space. For graphing windows or calculator setup, use:

```
x-min: __________
x-max: __________
y-min: __________
y-max: __________
Reason for this window:
```

## J. Graphing and Visual Data

Graphs must be readable, centered, and fully inside margins. Never let graphs run off the right side. For comparing two graphs, place them horizontally when possible. Stack only when graphs are too large, vertical comparison is useful, or progression matters. Labels should be clear and uncrowded. Label axes when quantities matter. Use gridlines when students estimate values.

Push students beyond reading graphs. Good prompts:
- "Estimate the root and comment on the reliability of your estimate."
- "State the interval on which the function appears to be increasing."
- "Explain which feature of the graph supports your answer."
- "Compare the graphical and algebraic methods."
- "Use the graph to make a conjecture, then test it algebraically."

## K. Calculator and Technology

Make the role of technology explicit: explore, estimate, verify, solve numerically, generate evidence, compare representations, or support a model. Do not let calculator output replace reasoning.

Good wording:
- "Use technology to estimate the solution. Then explain why this is an estimate rather than an exact value."
- "Use your GDC to generate a graph. Record the viewing window used."
- "Use technology to support your conjecture, but do not treat the graph as proof."

DP calculator support should reduce access barriers without becoming button-pushing or babyish.

## L. Proof and Justification

Train students to distinguish evidence, verification, and proof. Use explicit language around: direct proof, contradiction, induction, counterexample, verification, justification, and conjecture.
- For contradiction, students should state the assumption.
- For induction, separate: Base case, Inductive hypothesis, Inductive step, and Conclusion.

For solution checks, avoid circular reasoning. Do not start by writing the equation with the solution substituted as though equality is already true. Use:

```
LHS = ...
RHS = ...
Since LHS = RHS, the value satisfies the equation.
```

This matters because students may think substituting into the original equation and simplifying both sides as an assumed equality is valid proof.

## M. Markschemes and Solutions

Solutions should be DP-style, not just answer-key style. When requested, provide:
- Full Overleaf-ready LaTeX
- Questions first if needed
- Step-by-step solutions
- Red solution text when appropriate
- IB-style method and answer marks when useful
- Common-error notes
- Advice for clarifying ambiguous wording
- Correct notation
- Exact answers before approximations when appropriate

Show reasoning needed to earn marks. DP marking logic:
- A correct answer without working may not earn method-linked marks.
- A one-off guess is not a numerical method.
- Systematic trial with visible steps may earn limited method credit.
- Calculator-supported answers should show method, setup, or interpretation.
- Notation errors may matter if they change meaning.

Distinguish: method, accuracy, reasoning, communication, follow-through credit, and acceptable equivalent forms.

## N. Paper 3-Style Packets

Build one coherent investigation, not unrelated questions. Use meaningful context without overwhelming the math. Use realistic dimensions, assumptions, and quantities. Do not assume hidden details. Include needed definitions and context. A Paper 3-style task should progress through:

1. Context
2. Variables or parameters
3. Special case
4. Technology or numerical evidence
5. General method
6. Interpretation
7. Assumptions or limitations
8. Extension or generalization

Keep the mathematical thread visible.

## O. Multiple Representations

Deliberately connect:
- Equation to graph
- Graph to interpretation
- Table to model
- Numerical result to exact result
- Vector diagram to algebra
- Geometric structure to symbolic representation
- Recursive form to explicit form
- Derivative to behavior
- Integral to accumulated quantity

Students should explain what each representation reveals. Good prompt: "Explain what the graphical representation makes easier to see than the algebraic representation."

## P. Notation

Use precise DP notation. Check: vector notation, scalar product notation, interval notation, function notation, limits, derivatives, integrals, matrices, complex numbers, sequences and series, logarithms, domains, and ranges. Do not allow casual notation when meaning matters. Write logarithm bases as subscripts. Distinguish scalar and vector quantities. Make endpoint inclusion/exclusion clear in interval notation. Add a short note when conventions vary.

## Q. Language Precision

Replace weak wording:

| Weak | Precise |
|---|---|
| "can't be integrated" | "does not have an elementary antiderivative" |
| "the graph proves" | "the graph suggests" / "the graph provides evidence" |
| "the answer is close" | "the approximation is close" |
| "the sequence goes to a number" | "the sequence converges" |
| "the model is good" | "the model is appropriate over this domain because..." |
| "the calculator found it" | "technology gives the numerical approximation..." |

## R. Formatting and Visual Style

Make DP packets professional, mature, academic, and not crowded. Use: clear section headings, consistent spacing, strong hierarchy, boxed definitions when helpful, shaded prompts sparingly, clean diagrams, readable graph sizes, narrow margins when appropriate for print efficiency, and standard fonts unless a special style is requested.

Color should serve a purpose:
- **Red** for command terms or solutions
- **Purple** for vocabulary
- Muted boxes for notes/definitions/warnings
- Consistent graph colors

Avoid visual clutter.

## S. LaTeX and Overleaf

Provide full updated LaTeX unless snippets are explicitly requested. The LaTeX should be Overleaf-ready. Before outputting, check:
- Packages
- Environment closure
- Intentional page breaks
- Graph fit
- Label overlap
- Answer-space size
- Command-term macros
- Color definitions
- TikZ/pgfplots compilation
- Printable-area fit
- Awkward question splits

For solution documents, visually distinguish question text from solution text. If using red solution text, keep it readable and not visually harsh.

## T. Citations and Sources

Verify factual IB claims, curriculum claims, and exam-policy claims with appropriate sources. Use official IB sources where possible. When checking whether a topic belongs to AA HL, AI HL, or prior knowledge, do not guess. In student-facing DP materials, separate: syllabus requirements, useful prior knowledge, extension, exam-style practice, and enrichment. If uncertain, label it uncertain.

## U. Reflection, Error Analysis, and Extensions

Reflection prompts should be mathematically useful, not fluffy. Avoid "What did you learn?" Use:
- "Which representation was most useful for this problem, and why?"
- "Where did the approximation enter your solution?"
- "What assumption did the model depend on?"
- "What would change if the domain were extended?"
- "Which step required justification rather than calculation?"
- "What evidence supports your conclusion, and what evidence is still missing?"

Use error analysis for common DP misconceptions: invalid algebraic step, circular argument, misleading graph window, overgeneralization, missing domain restriction, unjustified conclusion, notation error that changes meaning, misuse of technology, and confusing evidence with proof. Error analysis should be specific, not just "find the mistake."

Extensions should deepen the same math idea, not introduce a random topic. Good extensions include: generalizing a result, changing a parameter, comparing methods, proving a pattern, analyzing limitations, connecting to a Paper 3-style investigation, or asking what happens under a different assumption. Avoid unrelated harder problems tacked on at the end.

## V. DP Master Instruction

Create polished, Overleaf-ready DP Mathematics analysis packets that are rigorous, scaffolded, and student-facing. Preserve high-level mathematical thinking while reducing unnecessary cognitive load. Use clear page structure, intentional spacing, readable graphs, explicit command terms, precise vocabulary, and DP-style reasoning prompts. Build meaningful dependency between parts, connect multiple representations, and distinguish evidence, approximation, verification, and proof. Use graphing technology thoughtfully, but never let it replace explanation. When solutions or markschemes are requested, provide complete, checked, DP-style solutions with clear method, accuracy, reasoning, notation, and communication expectations. Use full LaTeX scripts unless snippets are explicitly requested.

## W. DP Final Checklist

Before finalizing a DP analysis packet, check:

- [ ] Are command terms accurate and visually emphasized?
- [ ] Are important vocabulary terms defined?
- [ ] Is the task scaffolded without being over-scaffolded?
- [ ] Does each page have enough space?
- [ ] Are graph-heavy questions given enough room?
- [ ] Do all graphs fit inside page margins?
- [ ] Are graphs labeled clearly?
- [ ] Are students asked to interpret, not just calculate?
- [ ] Are calculator uses clearly framed?
- [ ] Are approximations distinguished from exact results?
- [ ] Are conjectures distinguished from proof?
- [ ] Are assumptions stated when needed?
- [ ] Are conclusions mathematically defensible?
- [ ] Are solution methods shown clearly?
- [ ] Are LHS/RHS checks used when verifying equations?
- [ ] Is notation precise?
- [ ] Are page breaks intentional?
- [ ] Is the full LaTeX Overleaf-ready?
- [ ] Is the packet mature, polished, and DP-appropriate?
