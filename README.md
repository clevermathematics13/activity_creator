# activity_creator

A tool for creating polished, Overleaf-ready LaTeX math packets for IB/Grade 9 students. Produces two document types:

1. **Grade 9 Activity Packets** — Student-facing worksheets with TikZ graphs, IB command terms (bold red), purple vocabulary supports, dynamic answer boxes, and intentional page breaks. Designed for English language learners and diverse Grade 9 mathematicians.

2. **DP Nuanced Analysis Packets** — Higher-level IB Mathematics packets with scaffolded DP-style reasoning, designed dependency between question parts, precise DP notation, Paper 3-style investigations, and complete markschemes/solutions.

## Web UI

A Next.js app is included so you can run this as a web tool locally or deploy it to Vercel.

### Run locally

```bash
cp .env.local.example .env.local
# add your Anthropic API key to .env.local
npm install
npm run dev
# open http://localhost:3000
```

### Deploy to Vercel

1. Push this repo to GitHub.
2. Import it on [vercel.com](https://vercel.com) — no special root-directory setting needed (Next.js is at the repo root).
3. Add the environment variable `ANTHROPIC_API_KEY` in the Vercel project settings.
4. Deploy.

Optionally set `ANTHROPIC_MODEL` to override the default Claude model (`claude-sonnet-4-6`).

---

## How to use (prompt-based)

Provide content (questions, topics, data, contexts) as a prompt. The full formatting and pedagogical rules are in [MASTER_PROMPT.md](MASTER_PROMPT.md). All LaTeX output will be Overleaf-ready unless snippets are explicitly requested.

## Key conventions

- All scoring/grading sections labeled **"Clev's Marks"**
- Command terms in **bold red**; vocabulary in **purple**
- Graphs via TikZ — always fit within printable margins
- Full LaTeX scripts output by default (not snippets)
- LHS/RHS solution verification used to avoid circular reasoning
- Current statistics packet is **Unit 4**
- Random-number-generator upper bound: **206**
