# Nuanced Analysis: The Great Unification — From $i$ to $e^{i\pi}$

**Student Name:** ________________________  **Date:** ____________

**Course:** IBDP Mathematics — Analysis & Approaches HL  
**Syllabus Topic(s):** Topic 1 (Number & Algebra, HL) · Topic 3 (Geometry & Trigonometry, HL) · Topic 5 (Calculus, HL)  
**Prerequisites:** *Complex Numbers Part 1 & 2*, *Polynomial Analysis*, *Quadratics & The Calculus Transition*

*Materials needed: GDC (TI-84 Plus CE or equivalent) and graphing software capable of plotting on the Argand plane (GeoGebra or Desmos). A ruler. This packet is designed to be completed largely **without** a calculator, in the spirit of Paper 1.*

**Progress Tracker:** Part 0 □ · Part 1 □ · Part 2 □ · Part 3 □ · Part 4 □ · Part 5 □ · Part 6 □ · Part 7 □ · Part 8 □

**Compulsory Core (★ and ★★ questions):** Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q18, Q19, Q20, Q21, Q22, Q23, Q26, Q27, Q28. Questions marked ★★★ are optional challenge questions.

---

### Vocabulary

The following terms are used throughout this packet. Each term is defined again at its first point of use, but this list gives you a preview.

- **Modulus** — the distance from the origin to a complex number on the Argand plane; written $|z|$.
- **Argument** — the angle a complex number makes with the positive real axis, measured counterclockwise; written $\arg(z)$.
- **Polar form** — a way of writing a complex number using its modulus and argument: $z = r(\cos\theta + i\sin\theta)$.
- **De Moivre's theorem** — the rule that $(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta$ for integer $n$.
- **Mathematical induction** — a proof technique that proves a statement for all positive integers by (1) verifying a base case and (2) showing that if the statement holds for $n = k$, it must hold for $n = k+1$.
- **Root of unity** — a complex number $z$ such that $z^n = 1$ for some positive integer $n$.
- **Regular polygon** — a polygon with all sides equal in length and all interior angles equal.
- **Maclaurin series** — an infinite sum that represents a function using its derivatives evaluated at $x = 0$: $f(x) = f(0) + f'(0)x + \frac{f''(0)}{2!}x^2 + \cdots$
- **Radius of convergence** — the value $R$ such that a power series converges for $|x| < R$ and diverges for $|x| > R$.
- **Euler's formula** — the identity $e^{i\theta} = \cos\theta + i\sin\theta$, connecting the exponential function to trigonometry via complex numbers.
- **Phasor** — a complex number used in electrical engineering to represent a sinusoidal signal; the real part of a rotating complex exponential gives the physical oscillation.
- **Argand plane** — the coordinate plane used to plot complex numbers, with the real part on the horizontal axis and the imaginary part on the vertical axis.
- **Compound-angle formula** — a trigonometric identity expressing $\sin$ or $\cos$ of a sum of two angles in terms of sines and cosines of each angle separately.
- **Convergence** — a sequence or series converges if its terms (or partial sums) approach a finite limiting value.

---

### Command Terms

> ✂️ *Tear off this strip and keep it beside you while working.*

---

| <span style="color:red">**Term**</span> | What it demands of you |
|---|---|
| <span style="color:red">**Write down**</span> | A short answer with **no** working required. |
| <span style="color:red">**Describe**</span> | Give a detailed account. |
| <span style="color:red">**Explain**</span> | Give a detailed account **including reasons or causes**. |
| <span style="color:red">**Deduce**</span> | Reach a conclusion by logical reasoning from results already established. *(In other words: use what you have already shown — do not start over.)* |
| <span style="color:red">**Show that**</span> | Obtain a stated result; **every** logical step must appear. |
| <span style="color:red">**Prove**</span> | Establish truth by a rigorous, complete chain of reasoning. |
| <span style="color:red">**Hence**</span> | You **must** use the immediately preceding result. Starting over earns no marks. |
| <span style="color:red">**Hence or otherwise**</span> | Use the previous result *or* any other valid method. |
| <span style="color:red">**Sketch**</span> | A clear diagram showing key features and **relative** scale; label exact coordinates of intercepts, extrema, and special points. |

**Demand scale:** Write down → Describe → Explain → Deduce → Show that → Hence → Prove *(increasing output demand left to right)*

---

> **Command-Term Spotlight — <span style="color:red">"Show that"</span> vs <span style="color:red">"Prove"</span>.**
> *<span style="color:red">Show that</span>* fixes the target in advance and rewards the trail of steps that reaches it. *<span style="color:red">Prove</span>* is the same rigor applied to a claim that must hold for **all** cases — which is exactly why an induction argument or a "for all integers $n$" statement uses *prove*, not *show that*.

---

**ATL — Thinking & Transfer Skills:** You will repeatedly take a result proven *algebraically* and reinterpret it *geometrically*, then *analytically* (as a series). The skill being built is **representational fluency**: recognizing one object in different forms.

---

> ### TOK Provocations *(return to these in the final Reflection)*
> - Euler's identity $e^{i\pi}+1=0$ is routinely voted "the most beautiful equation in mathematics." **Can aesthetic appeal be evidence of mathematical truth, or is beauty merely a property we project onto results we have already accepted?**
> - The number $i$ was introduced by *definition* ($i^2=-1$) to make unsolvable equations solvable. When centuries later it turned out to describe rotation, alternating current, and quantum states, was $i$ **discovered** to be real, or did we **invent** a tool that we then chose to apply? Does usefulness make something real?

> ### International Mindedness
> The geometric picture of a complex number you used in Part 1 was published independently by **Caspar Wessel** (Norwegian–Danish, 1799) and **Jean-Robert Argand** (Genevan–French, 1806) — the diagram bears only Argand's name. The series you will meet in Part 5 were used by **Leonhard Euler** (Swiss), but the underlying trigonometry rests on a thousand years of work by Indian (Āryabhaṭa, Mādhava of Sangamagrāma — who found the $\sin$/$\cos$ series ~250 years before Newton) and Islamic-world (al-Battānī, Abū al-Wafāʾ) mathematicians. Notation is a poor historian.

---

## Part 0 — Activating Prior Knowledge *(bridge from Part 1)*

> **What you need to start this Part:**
> - A complex number $z = a + bi$ can be plotted on the **Argand plane** (real part on the horizontal axis, imaginary part on the vertical axis).
> - The **modulus** of $z$ is $|z| = \sqrt{a^2 + b^2}$ — the distance from the origin to the point.
> - The **argument** of $z$ is $\theta = \arg(z)$ — the angle from the positive real axis, measured counterclockwise, with $-\pi < \theta \le \pi$.
> - **Polar form** rewrites any nonzero complex number as $z = r(\cos\theta + i\sin\theta)$.

**1. ★** <span style="color:red">**Write down**</span> the polar form of each complex number, with $-\pi < \theta \le \pi$:

&nbsp;&nbsp;(a) $z = 1 + i\sqrt{3}$ &nbsp;&nbsp;&nbsp; (b) $z = -1$ &nbsp;&nbsp;&nbsp; (c) $z = -2 - 2i$

**2. ★** <span style="color:red">**Describe**</span>, in one sentence each, what the two numbers $r$ and $\theta$ tell you **geometrically** about where $z$ sits on the Argand plane.

> *Sentence starter: "The modulus $r$ tells me..." / "The argument $\theta$ tells me..."*

---

## Part 1 — The Geometry of Multiplication *(Conjecture before rule)*

> **What you need to start this Part:**
> - You can write any complex number in polar form: $z = r(\cos\theta + i\sin\theta)$.
> - The **compound-angle formulas** (from the formula booklet) state:
>   $\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta$ and $\sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta$.

Let $z_1 = r_1(\cos\alpha + i\sin\alpha)$ and $z_2 = r_2(\cos\beta + i\sin\beta)$.

**3. ★ Numerical investigation** *(no formula yet).* Using $z_1 = 2(\cos 30^\circ + i\sin 30^\circ)$ and $z_2 = 3(\cos 45^\circ + i\sin 45^\circ)$:

(a) Compute the product $z_1 z_2$.

(b) Rewrite the product in polar form.

(c) <span style="color:red">**Write down**</span> the modulus and argument of $z_1 z_2$.

**4. ★ Conjecture.** Based on Q3, <span style="color:red">**write**</span> a conjecture relating the modulus and argument of a product $z_1 z_2$ to the moduli and arguments of $z_1$ and $z_2$.

**5. ★★ Demonstrate.** <span style="color:red">**Show that**</span> your conjecture is correct in general by multiplying the two polar forms and applying the compound-angle formulas (formula booklet):
$$ \cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta, \qquad \sin(\alpha+\beta)=\sin\alpha\cos\beta+\cos\alpha\sin\beta. $$

> **Geometric Reading.** Multiplying by a complex number is a **rotation** (by its argument) combined with a **scaling** (by its modulus). Multiplication *is* a similarity transformation. Hold onto this — it is the secret engine of the whole packet.

---

## Part 2 — De Moivre's Theorem *(Conjecture → Proof by Induction)*

> **What you need to start this Part:**
> - From Part 1: multiplying two complex numbers in polar form multiplies their moduli and adds their arguments.
> - **Mathematical induction** has three parts: (1) Base case — verify the statement for the smallest value. (2) Inductive step — assume it holds for $n = k$, then prove it holds for $n = k+1$. (3) Conclusion — state that the result follows for all positive integers.

**6. ★** Restrict to the **unit circle** (every modulus equals 1). Using your Part 1 result repeatedly — multiply $(\cos\theta+i\sin\theta)$ by itself 2, then 3 times — <span style="color:red">**write**</span> a conjecture for $(\cos\theta + i\sin\theta)^{n}$ when $n \in \mathbb{Z}^{+}$.

**7. ★★ Prove De Moivre's Theorem by mathematical induction.** <span style="color:red">**Prove**</span> that for all $n \in \mathbb{Z}^{+}$,
$$ (\cos\theta + i\sin\theta)^{n} = \cos n\theta + i\sin n\theta. $$

Use this template:

```
Base case (n = 1):        [verify the statement holds]
Inductive hypothesis:     [state: assume the statement holds for n = k]
Inductive step:           [show the statement holds for n = k+1]
  Write (cosθ + i sinθ)^{k+1} = (cosθ + i sinθ)^k · (cosθ + i sinθ).
  Apply the inductive hypothesis, then use the Part 1 multiplication result.
Conclusion:               [write the standard induction closing sentence]
```

**8. ★★** <span style="color:red">**Deduce**</span> *(using Q7)* the full-modulus version:
$$\big[r(\cos\theta+i\sin\theta)\big]^{n} = r^{n}(\cos n\theta + i\sin n\theta).$$

> ### The Broken Math Critique
> A student is asked to evaluate $\big[2(\cos 30^\circ + i\sin 30^\circ)\big]^{4}$ and writes:
> $$ \big[2(\cos 30^\circ + i\sin 30^\circ)\big]^{4} = \cos 120^\circ + i\sin 120^\circ = -\tfrac12 + \tfrac{\sqrt3}{2}\,i. $$
> *The following working was submitted by a student. Your job is not to judge the student — errors like this reveal important distinctions. Find the slip and explain its consequence.*

**9. ★★**

(a) <span style="color:red">**Explain**</span> the fatal error and the HL misconception it reveals.

(b) <span style="color:red">**Determine**</span> the correct value, and state it in Cartesian form (i.e., in the form $a + bi$).

---

## Part 3 — Where Trigonometric Identities Come From *(Algebra → Trig Transfer)*

> **What you need to start this Part:**
> - De Moivre's Theorem (Q7–8): $(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta$.
> - **Binomial expansion** (formula booklet): $(x + y)^n = \sum_{k=0}^{n}\binom{n}{k}x^{n-k}y^k$.
> - Powers of $i$ cycle as follows: $i^1 = i$, $\;i^2 = -1$, $\;i^3 = -i$, $\;i^4 = 1$, then repeat. Keep this card handy.

You will now *derive* identities from the formula booklet using **only** De Moivre and the binomial theorem. This is the same algebra-to-other-domain move you made when you turned surds into complex conjugates.

**10. ★★** Apply De Moivre with $n = 2$ to $(\cos\theta + i\sin\theta)^2$. Expand the left side using the binomial theorem. Then equate real and imaginary parts to <span style="color:red">**show that**</span>
$$ \cos 2\theta = \cos^2\theta - \sin^2\theta, \qquad \sin 2\theta = 2\sin\theta\cos\theta. $$

**11. ★★** Now use $n = 3$ and the **binomial expansion** of $(\cos\theta + i\sin\theta)^3$. By equating real and imaginary parts, <span style="color:red">**show that**</span>
$$ \cos 3\theta = 4\cos^3\theta - 3\cos\theta, \qquad \sin 3\theta = 3\sin\theta - 4\sin^3\theta. $$

*(Hint: replace $\sin^2\theta$ with $1-\cos^2\theta$, or $\cos^2\theta$ with $1-\sin^2\theta$, as needed.)*

**12. ★★ Reflect.** In Part 1 you *used* the compound-angle formulas to prove the multiplication rule. In Part 3 those formulas *fell out of* the same machinery for higher multiples. <span style="color:red">**Explain**</span> why this is **not** circular reasoning.

> *Causal explanation starter: "This is not circular because... which means that..."*

---

## Part 4 — Roots of Unity *(Geometry + a Polynomial Callback)*

> **What you need to start this Part:**
> - De Moivre's Theorem.
> - The number $1$ in polar form can be written as $\cos(2\pi k) + i\sin(2\pi k)$ for any integer $k$.
> - **Roots of unity** are complex numbers $z$ satisfying $z^n = 1$. They are the roots of the polynomial $z^n - 1 = 0$.
> - **Vieta's formulas**: for a monic polynomial $z^n + a_{n-1}z^{n-1}+\cdots+a_0$, the sum of all roots equals $-a_{n-1}$ and the product of all roots equals $(-1)^n a_0$.
> - **Conjugate Root Theorem**: if a polynomial with real coefficients has a non-real complex root $z = a + bi$, then $\bar{z} = a - bi$ is also a root.

**13. ★★** <span style="color:red">**Solve**</span> $z^{3} = 1$ over $\mathbb{C}$.

Step 1: Write $1$ in polar form as $\cos(2\pi k) + i\sin(2\pi k)$ for integer $k$.

Step 2: Take cube roots using De Moivre's Theorem.

Step 3: List all three distinct roots.

**14. ★** <span style="color:red">**Sketch**</span> the three roots on the Argand plane below. Then <span style="color:red">**describe**</span> the polygon they form and state its exact symmetry.

*(Use the grid provided. Label each root with its exact coordinates.)*

```
       Im
   1 — · — · — · — · — ·
       |               |
   0 — · — · — · — · — · — Re
       |               |
  -1 — · — · — · — · — ·
      -1   0   1
```

> *Geometric description starter: "The three roots can be described as a [shape] with [property]..."*

**15. ★★ Generalize.** <span style="color:red">**Write**</span> a general formula for the $n$ solutions of $z^{n} = 1$, and <span style="color:red">**describe**</span> their geometric arrangement on the unit circle.

> ### Translation Table — Roots of Unity
>
> | What you observe on the screen… | What you write on the exam paper… |
> |---|---|
> | "The dots are evenly spaced around a circle." | "The $n$-th roots of unity are equally spaced on $\lvert z\rvert = 1$ at intervals of $\dfrac{2\pi}{n}$." |
> | "They make a perfect shape." | "They are the vertices of a regular $n$-gon inscribed in the unit circle." |
> | "If I add the arrows they cancel." | "The roots sum to zero by rotational symmetry (equivalently, the $z^{n-1}$ coefficient is $0$)." |

> **Polynomial Callback — bringing in three results from *Polynomial Analysis*.**
> The $n$-th roots of unity are precisely the roots of $z^{n} - 1 = 0$.

**16. ★★**

(a) Using the **sum of roots** relationship from Vieta's formulas, <span style="color:red">**show that**</span> the sum of all $n$ roots of unity is $0$ for every $n \ge 2$.

(b) <span style="color:red">**Explain**</span> this same fact **geometrically** using the symmetry from Q14.

(c) Using the **Conjugate Root Theorem**, <span style="color:red">**explain**</span> why the non-real roots of unity must occur in conjugate pairs.

**17. ★ Technology.** In GeoGebra or Desmos, plot the $n = 6$ roots of unity.

(a) <span style="color:red">**Describe**</span> one feature of the configuration that is **easier to see graphically than algebraically**.

(b) <span style="color:red">**Describe**</span> one fact that is **easier to prove algebraically than to see graphically**.

> *You may answer part (a) with an annotated diagram instead of a written description.*

---

## Part 5 — The Calculus Bridge: Series *(Topic 5 HL)*

> **What you need to start this Part:**
> - **Maclaurin series** (defined in the Vocabulary section above): for the three functions used here:
>   $$ e^{x} = 1 + x + \frac{x^{2}}{2!} + \frac{x^{3}}{3!} + \cdots \qquad \text{(converges for all real } x\text{)} $$
>   $$ \cos x = 1 - \frac{x^{2}}{2!} + \frac{x^{4}}{4!} - \cdots \qquad \sin x = x - \frac{x^{3}}{3!} + \frac{x^{5}}{5!} - \cdots $$
> - **Convergence** (defined above): a series converges if its partial sums approach a finite value.
> - **Radius of convergence** (defined above): for $e^x$, this is infinite — the series works for every real $x$.
> - Powers-of-$i$ cycle: $i^1 = i$, $\;i^2 = -1$, $\;i^3 = -i$, $\;i^4 = 1$, then repeat.

**18. ★★** The series for $e^{x}$ converges for **all** real $x$ (its radius of convergence is infinite). <span style="color:red">**Explain**</span> why this matters before we substitute an imaginary number into it.

> *Causal explanation starter: "This matters because if the series only converged on a small interval, then..."*

> ### Find the Fatal Error
> *The following derivation appears in a set of revision notes. It reaches a conclusion that is **wrong**. Your job is not to judge the author — errors like this reveal important distinctions. Find the single conceptual slip and trace its consequences.*
>
> > Substituting $x = i\theta$ into the series for $e^{x}$:
> > $$ e^{i\theta} = 1 + i\theta + \frac{(i\theta)^2}{2!} + \frac{(i\theta)^3}{3!} + \frac{(i\theta)^4}{4!} + \cdots $$
> > Recall the cycle of powers of $i$: $\;i^2 = -1,\; i^3 = i,\; i^4 = 1.$
> > Therefore
> > $$ e^{i\theta} = 1 + i\theta - \frac{\theta^2}{2!} + \frac{i\theta^3}{3!} + \frac{\theta^4}{4!} + \cdots $$
> > Grouping real and imaginary parts:
> > $$ e^{i\theta} = \left(1 - \frac{\theta^2}{2!} + \frac{\theta^4}{4!} - \cdots\right) + i\left(\theta + \frac{\theta^3}{3!} + \frac{\theta^5}{5!} + \cdots\right). $$
> > "Hence $e^{i\theta} = \cos\theta + i\sinh\theta$."
>
> *(Note: $\sinh\theta$ — pronounced "hyperbolic sine" — is defined as $\frac{e^\theta - e^{-\theta}}{2}$. Unlike $\sin\theta$, it is unbounded.)*

**19. ★★**

(a) The conclusion $e^{i\theta} = \cos\theta + i\sinh\theta$ is geometrically absurd. <span style="color:red">**Explain**</span> the geometric reason it **cannot** be right. *(Think about $\lvert e^{i\theta}\rvert$.)*

(b) <span style="color:red">**Determine**</span> the exact line where the error is introduced, and <span style="color:red">**show that**</span> correcting it changes the imaginary series into an **alternating** one.

**20. ★★** <span style="color:red">**Show that**</span> — correctly this time — by substituting $x = i\theta$ into the Maclaurin series for $e^x$ and grouping real and imaginary parts:
$$ \boxed{\,e^{i\theta} = \cos\theta + i\sin\theta\,} \qquad \textbf{(Euler's formula)} $$

> **Geometric Reading.** Euler's formula tells us that $e^{i\theta}$ is the point on the unit circle at angle $\theta$. Every complex number of modulus 1 is a complex exponential. The entire unit circle is the image of the imaginary axis under the exponential map.

---

## Part 6 — Euler's Identity and the Synthesis

> **What you need to start this Part:**
> - Euler's formula (Q20): $e^{i\theta} = \cos\theta + i\sin\theta$.
> - Standard index law: $(e^{a})^n = e^{an}$.

**21. ★** <span style="color:red">**Hence**</span> *(using Q20)* evaluate $e^{i\pi}$, and <span style="color:red">**write down**</span> the resulting identity in the form $\ldots = 0$.

**22. ★★** <span style="color:red">**Show that**</span> De Moivre's theorem is now a **one-line consequence** of Euler's formula, by computing $\big(e^{i\theta}\big)^{n}$ using ordinary index laws.

> **The Unification, in a Sentence.** Repeated *multiplication* (Part 1) became a *rotation rule* (Part 2), which manufactured *trig identities* (Part 3) and located *roots of unity* (Part 4); approached instead through *calculus* (Part 5) the very same objects collapsed into a *single exponential* (Part 6). Three syllabus topics, one identity.

---

## Part 7 — Interdisciplinary Application: Phasors *(Physics / Electrical Engineering)*

> **What you need to start this Part:**
> - Euler's formula: $e^{i\theta} = \cos\theta + i\sin\theta$.
> - A **phasor** (defined in the Vocabulary section above) represents a sinusoidal signal $V_0\cos(\omega t + \phi)$ as the real part of the complex exponential $V_0 e^{i(\omega t + \phi)}$. At $t = 0$, the phasor is simply the complex number $V_0 e^{i\phi} = V_0(\cos\phi + i\sin\phi)$.
> - **Adding two sinusoids of the same frequency** becomes adding their phasor complex numbers — i.e., vector addition on the Argand plane.

**23. ★★** Two voltages of equal frequency are applied in series:
$$ v_1(t) = 3\cos(\omega t), \qquad v_2(t) = 4\cos\!\left(\omega t + \tfrac{\pi}{2}\right). $$

(a) <span style="color:red">**Write down**</span> the phasor (complex amplitude) for each voltage at $t=0$.

(b) <span style="color:red">**Determine**</span> their sum as a single complex number.

(c) <span style="color:red">**Hence**</span> *(using your answer to part (b))* express the combined voltage in the form $R\cos(\omega t + \varphi)$, finding the exact amplitude $R$ and the phase angle $\varphi$.

(d) <span style="color:red">**Explain**</span> what feature of complex numbers — proven back in Part 1 — makes this phasor method work.

**24. ★ Connect.** In one or two sentences, <span style="color:red">**describe**</span> how the appearance of $e^{i\theta}$ in a *physical* law (AC circuits, and the quantum-mechanical phase $e^{i\theta}$) bears on the TOK question about whether $i$ was discovered or invented.

---

## Part 8 — GDC / Technology Mastery: Watching a Series Converge

> **What you need to start this Part:**
> - The Maclaurin series for $e^x$ and Euler's formula from Parts 5–6.
> - GeoGebra or Desmos, set to display points on the Argand plane (real part on $x$-axis, imaginary part on $y$-axis).

**25. ★** Fix $\theta = \pi$. Compute the partial sums
$$ S_m = \sum_{n=0}^{m} \frac{(i\pi)^{n}}{n!} \qquad \text{for } m = 0, 1, 2, \ldots, 8, $$
and plot each $S_m$ as a point $\big(\operatorname{Re}(S_m), \operatorname{Im}(S_m)\big)$ in GeoGebra or Desmos.

(a) <span style="color:red">**Describe**</span> the path the points trace as $m$ increases.

(b) <span style="color:red">**Write down**</span>, to 2 decimal places, the point the sequence is closing in on, and <span style="color:red">**explain**</span> how this confirms your answer to Q21.

(c) <span style="color:red">**Determine**</span> an appropriate viewing window that shows the whole spiral without wasted blank space, in the form:
```
Xmin = …    Xmax = …    Ymin = …    Ymax = …
```

---

## Reflection (Metacognition)

**26. ★** <span style="color:red">**List**</span> the major concepts, formulas, and understandings this analysis has **confirmed** or **connected**. Aim for at least six, naming at least one from each of Topics 1, 3, and 5. Use the table below.

> *You may answer this question in bullet points.*

| Concept or Formula | Where it appeared in this packet | How it connected to another concept |
|---|---|---|
| | | |
| | | |
| | | |
| | | |
| | | |
| | | |

**27. ★★** This packet asked you to prove the **same** facts twice — once with rotation/induction and once with series. <span style="color:red">**Explain**</span> what is gained by holding two independent proofs of one truth. Does a second proof make the result *more true*?

> *You may answer this question in bullet points.*
> *You may also respond orally — ask your teacher to record a voice memo.*

**28. ★★** Return to the two TOK provocations on page 1. In a short paragraph, <span style="color:red">**take and defend a position**</span> on **one** of them, using a specific result from this packet as evidence.

Use this frame:
> *"I argue that [claim]. My evidence from this packet is [specific result, e.g., Q20 or Q21]. A counterargument would be [X], but I respond that [Y]."*

Here is a modeled example using a **different** result, so you can see the genre without seeing your own answer:
> *"I argue that mathematical beauty can signal truth, but only retrospectively. My evidence is Q22: once Euler's formula is established, De Moivre's theorem collapses into a single line using index laws — a result that took pages to prove by induction. The elegant compression feels 'beautiful' because it reveals hidden unity. A counterargument would be that beauty is subjective and varies by training. But I respond that when mathematicians across cultures and centuries independently describe the same result as beautiful, the agreement suggests the aesthetic response is tracking something structural, not merely personal."*

---

## Extension & IA-Seeding Branches *(optional — choose one)*

These open problems are deliberately under-specified, in the spirit of the **Internal Assessment Exploration**. Each grows from this packet but reaches into a fresh area.

- ★★★ **(Probability & Statistics — Topic 4.) Random walk on the roots of unity.** A particle starts at the origin. At each step it moves by a vector equal to one of the $n$-th roots of unity, chosen uniformly at random. *Investigate* the expected distance from the origin after $k$ steps, and the probability the particle returns near its start. *(Connects: expectation, variance, symmetry of roots of unity. A natural IA.)*

- ★★★ **(Computer Science / Geometry.) Newton's fractal.** Apply Newton's method to $z^{n} - 1 = 0$ in the complex plane and color each starting point by which root it converges to. *Investigate* the boundary structure between basins of attraction.

- ★★★ **(Number & Algebra — Topic 1.) Beyond unity.** Generalize Part 4 to the $n$-th roots of an arbitrary complex number $w$. *Determine* and *sketch* the four fourth-roots of $i$.

---
---

# Teacher's Companion

*This section is for the instructor. Remove before distributing to students.*

### A. Integration Map — Where Each IB Element Is Hit

| IB Element | Where it lives in this packet |
|---|---|
| **Topic 1 (Number & Algebra, HL)** | Polar form (Q1–2), De Moivre (Q6–8), **induction** (Q7), binomial expansion (Q11), roots of unity (Q13–17), Vieta callback (Q16). |
| **Topic 3 (Geometry & Trig, HL)** | Multiplication as rotation/scaling (Q3–5), multiple-angle identities (Q10–11), regular polygons (Q14–15). |
| **Topic 5 (Calculus, HL)** | Maclaurin series (Q18–20), convergence/validity of substitution (Q18), partial-sum convergence (Q25). |
| **Topic 4 (Probability & Statistics)** | Extension branch (random walk on roots of unity). *Honestly integrated at the extension level only — see design note below.* |
| **TOK** | p.1 provocations; revisited in Q24, Q27, Q28 (beauty-as-truth; discovery vs. invention; the epistemic value of a second proof). |
| **International Mindedness** | p.1 box (Wessel/Argand; Mādhava's series predating Newton; Islamic-world trigonometry). |
| **Interdisciplinary Connection** | Part 7 phasors (physics/EE); extension to fractals (CS). |
| **Technology** | Q17 (GeoGebra plot), Q25 (partial-sum spiral + window optimization), GDC throughout. |
| **ATL Skills** | Representational fluency stated up front; Q12, Q22, Q27 force explicit transfer/reflection. |
| **Command Terms** | Glossary + *Show that*/*Prove* spotlight; *Hence* deployed deliberately in Q21–22 to reward use of prior results. |
| **IA Seeding** | Three under-specified extension branches. |
| **Paper Alignment** | Non-calculator core mirrors **Paper 1**; the investigation/proof arc mirrors **Paper 3**. |

### B. The Model's "Moves," Located

- **Conjecture-before-rule:** Q4 (multiplication rule), Q6 (De Moivre), Q15 (general roots).
- **Worked-example → parallel practice:** Q10 (worked $n=2$) → Q11 (independent $n=3$).
- **Analogical transfer / interleaving:** Q3–5 (algebra↔geometry); Q12 (explicit reflection on the transfer); Parts 2 vs. 5 (two routes to one truth).
- **Planted error, both flavors:** Q9 (Broken Math Critique — forgotten modulus); Q19 (find the fatal error in an "authoritative" derivation).
- **Translation table:** Part 4 (geometric ↔ algebraic language of roots of unity).
- **Command-term spotlight:** *Show that* vs. *Prove* (p.1).
- **Rule of four:** the same object as polar form, rotation, polygon, and series.
- **First-principles rigor:** Q7 (induction), Q20 (series derivation).
- **Metacognitive reflection:** Q26–28.
- **Self-check / "do you understand":** Q12, Q18, Q19(a).
- **Technology as instrument:** Q25 (watch convergence rather than assert it).

### C. Answer Sketches & Planted-Error Keys

- **Q1:** (a) $2\left(\cos\frac{\pi}{3}+i\sin\frac{\pi}{3}\right)$; (b) $\cos\pi + i\sin\pi$; (c) $2\sqrt2\left(\cos\!\left(-\frac{3\pi}{4}\right)+i\sin\!\left(-\frac{3\pi}{4}\right)\right)$.
- **Q3:** $z_1z_2 = 6(\cos 75^\circ + i\sin 75^\circ)$ — modulus $6 = 2\times 3$, argument $75^\circ = 30^\circ+45^\circ$.
- **Q4/Q5:** $|z_1z_2| = r_1r_2$, $\arg(z_1z_2)=\alpha+\beta$; proof by multiplying polar forms and applying compound-angle formulas.
- **Q7:** Standard induction; the inductive step relies on the Part 1 multiplication rule with both moduli $= 1$.
- **Q9 (Broken Math Critique):** The student forgot to raise the **modulus** to the 4th power. Correct: modulus $2^4 = 16$, argument $4\times30^\circ = 120^\circ$, so $16(\cos120^\circ+i\sin120^\circ) = -8 + 8\sqrt3\,i$. The misconception: treating De Moivre as acting on the *angle only*, i.e., confusing the unit-circle version with the general version (Q8).
- **Q10/Q11:** As boxed; $n=3$ gives $\cos3\theta = \cos^3\theta - 3\cos\theta\sin^2\theta = 4\cos^3\theta-3\cos\theta$ and $\sin3\theta = 3\cos^2\theta\sin\theta - \sin^3\theta = 3\sin\theta-4\sin^3\theta$.
- **Q12:** Not circular — Part 1 *assumes* the sum-of-**two**-angles formula; Part 3 *produces* the **multiple**-angle (e.g., triple-angle) formulas as consequences. Different inputs and outputs.
- **Q13:** $z = 1,\; -\tfrac12 \pm \tfrac{\sqrt3}{2}i$.
- **Q15:** $z_k = \cos\frac{2\pi k}{n} + i\sin\frac{2\pi k}{n}$, $k = 0,1,\ldots,n-1$ — vertices of a regular $n$-gon on $|z|=1$.
- **Q16:** Sum $= 0$ because the $z^{n-1}$ coefficient of $z^n-1$ is $0$ (Vieta); geometrically, equal vectors symmetric about the origin cancel; conjugate pairs follow from real coefficients (Conjugate Root Theorem).
- **Q19 (Find the Fatal Error):** The slip is **"$i^3 = i$"** (correct: $i^3 = -i$). It turns the imaginary series into $\theta + \frac{\theta^3}{3!} + \cdots = \sinh\theta$ and yields the absurd $e^{i\theta}=\cos\theta+i\sinh\theta$, for which $|e^{i\theta}|\neq 1$. Correcting $i^3=-i$ makes the imaginary series **alternating** — i.e., $\sin\theta$ — restoring $|e^{i\theta}|=1$.
- **Q20:** Real part $\to \cos\theta$, imaginary part $\to \sin\theta$.
- **Q21:** $e^{i\pi} = -1$, hence $e^{i\pi}+1 = 0$.
- **Q22:** $\big(e^{i\theta}\big)^n = e^{in\theta} = \cos n\theta + i\sin n\theta$ — De Moivre.
- **Q23:** Phasors $3$ and $4i$; sum $3+4i$ (the 3–4–5 triangle); $R=5$, $\varphi=\arctan\frac{4}{3}\approx 53.13^\circ$; combined $5\cos(\omega t + 53.13^\circ)$. Works because *arguments add / vectors superpose* — the Part 1 result.
- **Q25:** The partial sums **spiral** inward and settle near $(-1.00,\,0.00)$, confirming $e^{i\pi}=-1$; a window roughly $-2 \le x \le 3$, $-2 \le y \le 3$ captures the spiral (it overshoots into the right half-plane on early terms).

### D. Tiered Deadline Guidance

- **Single 50-minute lesson:** Parts 0–2 (Q1–9).
- **Double period or homework:** Parts 3–4 (Q10–17).
- **Multi-session or take-home:** Parts 5–8 + Reflection (Q18–28).
- **Extension branches:** Take-home IA exploration, minimum one week.

### E. Compulsory Core List

Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q18, Q19, Q20, Q21, Q22, Q23, Q26, Q27, Q28.

Students with reduced workload accommodations complete these and stop. Q17, Q24, Q25, and all extension branches are optional.

### F. Differentiation Notes

- **ELL students:** The vocabulary section defines all key terms in plain language before first use. The translation table in Part 4, the sentence starters throughout, and the TOK position-statement frame in Q28 all reduce language-load barriers without reducing mathematical demand. Compulsory core questions are weighted toward symbolic manipulation and algebra, which are more language-neutral.
- **Neurodivergent profiles:** Progress tracker on page 1; each Part has a micro-box summarizing what is needed to begin; no Part requires completing the previous one from scratch. Induction template in Q7 supports students who need explicit structural scaffolding. Planted-error tasks are framed positively before presenting the error.
- **Students with prior knowledge gaps:** Part 0 activates polar form; Part 1 builds the multiplication rule from a single numerical example before generalizing. Students missing De Moivre can enter Part 5 (series) independently using the micro-box.
- **Gifted / twice-exceptional students:** Scaffolding (sentence starters, templates) is framed as optional support, not required procedure. Extension branches are natural next questions, not appendages. Q12, Q22, and Q27 reward depth of reasoning, not just calculation speed.

### G. Design Note (Honesty Section)

A coherent complex-numbers capstone naturally integrates Topics 1, 3, and 5 at depth. **Probability & Statistics is the genuine outlier** and is therefore handled at the *extension* level (random walk on roots of unity) rather than forced into the core, where it would feel contrived. If full five-topic coverage is required for a unit audit, run this packet alongside a separate statistics nuanced analysis rather than diluting this one. This is itself a worked example of a model principle: **integration should be earned by the mathematics, not stapled on.**
