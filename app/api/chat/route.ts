import Anthropic from '@anthropic-ai/sdk';
import { NextRequest } from 'next/server';
import type { ChatMessage, AssessmentAnalysis } from '@/lib/types';

export const runtime = 'nodejs';
export const maxDuration = 60;

const client = new Anthropic();

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response('ANTHROPIC_API_KEY not set', { status: 500 });
  }

  const { history, analysis, message }: {
    history: ChatMessage[];
    analysis: AssessmentAnalysis;
    message: string;
  } = await req.json();

  if (!message?.trim()) {
    return new Response('message is required', { status: 400 });
  }

  const skillsSummary = analysis.skills.map((s) => `• ${s.skill}`).join('\n');
  const suggestionsSummary = analysis.suggestions.map((s) => `• ${s.skill}: ${s.rationale}`).join('\n');

  const system = `You are an expert IB Mathematics curriculum analyst helping a teacher refine an assessment.

Initial analysis of the uploaded assessment:
${analysis.naturalLanguageAnalysis}

Detected unit: ${analysis.unitName} (${analysis.curriculum})

Skills identified in the assessment:
${skillsSummary}

Suggested additional skills:
${suggestionsSummary}

Continue the conversation to help the teacher refine their assessment, answer their clarifying questions, and update suggestions based on new information they provide. Be concise and specific.`;

  const messages: Anthropic.MessageParam[] = [
    ...history.map((m) => ({ role: m.role as 'user' | 'assistant', content: m.content })),
    { role: 'user', content: message },
  ];

  const model = process.env.ANTHROPIC_MODEL ?? 'claude-sonnet-4-6';

  const stream = client.messages.stream({
    model,
    max_tokens: 2048,
    system,
    messages,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          if (chunk.type === 'content_block_delta' && chunk.delta.type === 'text_delta') {
            controller.enqueue(encoder.encode(chunk.delta.text));
          }
        }
      } catch (err) {
        controller.error(err);
      } finally {
        controller.close();
      }
    },
    cancel() { stream.abort(); },
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      'X-Accel-Buffering': 'no',
    },
  });
}
