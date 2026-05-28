import { NextRequest } from 'next/server';
import { dbGet, dbSet, dbDel, dbSRem } from '@/lib/db';
import type { Unit } from '@/lib/types';

export const runtime = 'nodejs';

export async function GET(_req: NextRequest, { params }: { params: { id: string } }) {
  const unit = await dbGet<Unit>(`unit:${params.id}`);
  if (!unit) return Response.json({ error: 'Not found' }, { status: 404 });
  return Response.json(unit);
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  const existing = await dbGet<Unit>(`unit:${params.id}`);
  if (!existing) return Response.json({ error: 'Not found' }, { status: 404 });

  const body = await req.json();
  const updated: Unit = {
    ...existing,
    ...body,
    id: existing.id,
    createdAt: existing.createdAt,
    updatedAt: new Date().toISOString(),
  };

  await dbSet(`unit:${params.id}`, updated);
  return Response.json(updated);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  await dbDel(`unit:${params.id}`);
  await dbSRem('units', params.id);
  return new Response(null, { status: 204 });
}
