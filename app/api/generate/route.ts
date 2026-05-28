import Anthropic from '@anthropic-ai/sdk';
import fs from 'fs';
import path from 'path';
import { NextRequest } from 'next/server';

export const runtime = 'nodejs';
export const maxDuration = 120;

const client = new Anthropic();

export async function POST(req: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return new Response('ANTHROPIC_API_KEY is not set.', { status: 500 });
  }

  let docType: string;
  let content: string;

  try {
    ({ docType, content } = await req.json());
  } catch {
    return new Response('Invalid JSON body.', { status: 400 });
  }

  if (!content?.trim()) {
    return new Response('content is required.', { status: 400 });
  }

  const masterPrompt = fs.readFileSync(
    path.join(process.cwd(), 'MASTER_PROMPT.md'),
    'utf-8',
  );

  const docTypeLabel =
    docType === 'dp' ? 'DP Nuanced Analysis Packet' : 'Grade 9 Activity Packet';

  const model =
    process.env.ANTHROPIC_MODEL ?? 'claude-sonnet-4-6';

  const stream = client.messages.stream({
    model,
    max_tokens: 8192,
    system: masterPrompt,
    messages: [
      {
        role: 'user',
        content: `Create a ${docTypeLabel}.\n\n${content}`,
      },
    ],
  });

  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of stream) {
          if (
            chunk.type === 'content_block_delta' &&
            chunk.delta.type === 'text_delta'
          ) {
            controller.enqueue(encoder.encode(chunk.delta.text));
          }
        }
      } catch (err) {
        controller.error(err);
      } finally {
        controller.close();
      }
    },
    cancel() {
      stream.abort();
    },
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      'X-Accel-Buffering': 'no',
    },
  });
}
