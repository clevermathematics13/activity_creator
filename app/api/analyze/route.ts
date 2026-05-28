import Anthropic from '@anthropic-ai/sdk';
import { NextRequest } from 'next/server';

export const runtime = 'nodejs';
export const maxDuration = 60;

const client = new Anthropic();

const SYSTEM = `You are an expert IB and Grade 9 Mathematics curriculum analyst with deep knowledge of:
- IB DP Mathematics (AA HL/SL, AI HL/SL) and MYP Mathematics
- Grade 9 Extended Mathematics
- IB command terms and mark scheme conventions

When given math problems or an assessment you will:
1. Analyze each question: exact skill assessed, IB command term, difficulty, topic area
2. Infer the curriculum level and unit
3. Suggest 3–5 additional skills/question types that naturally extend coverage for the same unit
4. Ask 2–3 targeted clarifying questions (grade, unit number, coverage gaps, etc.)

Be specific, curriculum-accurate, and pedagogically insightful.`;

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return Response.json({ error: 'ANTHROPIC_API_KEY not set' }, { status: 500 });
  }

  const contentType = req.headers.get('content-type') ?? '';
  let fileBase64: string | null = null;
  let fileMediaType: string | null = null;
  let pastedText: string | null = null;

  if (contentType.includes('multipart/form-data')) {
    const form = await req.formData();
    const file = form.get('file') as File | null;
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        return Response.json({ error: 'File must be under 5 MB' }, { status: 400 });
      }
      fileBase64 = Buffer.from(await file.arrayBuffer()).toString('base64');
      fileMediaType = file.type;
    }
    const text = form.get('text') as string | null;
    if (text?.trim()) pastedText = text.trim();
  } else {
    const body = await req.json();
    if (body.text?.trim()) pastedText = body.text.trim();
  }

  if (!fileBase64 && !pastedText) {
    return Response.json({ error: 'Provide a file or pasted text' }, { status: 400 });
  }

  // Build user message content
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userContent: any[] = [];

  if (fileBase64 && fileMediaType) {
    if (fileMediaType.startsWith('image/')) {
      userContent.push({
        type: 'image',
        source: { type: 'base64', media_type: fileMediaType, data: fileBase64 },
      });
    } else if (fileMediaType === 'application/pdf') {
      userContent.push({
        type: 'document',
        source: { type: 'base64', media_type: 'application/pdf', data: fileBase64 },
      });
    }
  }

  if (pastedText) {
    userContent.push({ type: 'text', text: pastedText });
  }

  userContent.push({
    type: 'text',
    text: 'Analyze these math problems/assessment, identify what each assesses, suggest additional skills for this unit, and ask clarifying questions.',
  });

  const model = process.env.ANTHROPIC_MODEL ?? 'claude-sonnet-4-6';

  const response = await client.messages.create({
    model,
    max_tokens: 4096,
    system: SYSTEM,
    tools: [
      {
        name: 'assessment_analysis',
        description: 'Structured analysis of a math assessment',
        input_schema: {
          type: 'object',
          properties: {
            naturalLanguageAnalysis: {
              type: 'string',
              description: 'Thorough, teacher-facing analysis of what the assessment covers',
            },
            unitName: {
              type: 'string',
              description: 'Suggested unit name, e.g. "Unit 4: Statistics and Probability"',
            },
            curriculum: {
              type: 'string',
              description: 'Detected curriculum, e.g. "Grade 9 Extended" or "DP AA HL"',
            },
            skills: {
              type: 'array',
              description: 'Skills assessed by the uploaded questions',
              items: {
                type: 'object',
                properties: {
                  skill: { type: 'string' },
                  question: { type: 'string', description: 'Brief quote or description of the question' },
                  commandTerm: { type: 'string' },
                  difficulty: {
                    type: 'string',
                    enum: ['foundational', 'developing', 'proficient', 'advanced'],
                  },
                },
                required: ['skill'],
              },
            },
            suggestions: {
              type: 'array',
              description: 'Suggested additional skills that fit this unit',
              items: {
                type: 'object',
                properties: {
                  skill: { type: 'string' },
                  rationale: { type: 'string' },
                },
                required: ['skill', 'rationale'],
              },
            },
            clarifyingQuestions: {
              type: 'array',
              description: '2–3 targeted clarifying questions for the teacher',
              items: { type: 'string' },
            },
          },
          required: [
            'naturalLanguageAnalysis',
            'unitName',
            'curriculum',
            'skills',
            'suggestions',
            'clarifyingQuestions',
          ],
        },
      },
    ],
    tool_choice: { type: 'tool', name: 'assessment_analysis' },
    messages: [{ role: 'user', content: userContent }],
  });

  const toolBlock = response.content.find((b) => b.type === 'tool_use');
  if (!toolBlock || toolBlock.type !== 'tool_use') {
    return Response.json({ error: 'Analysis failed — no structured output returned' }, { status: 500 });
  }

  return Response.json(toolBlock.input);
}
