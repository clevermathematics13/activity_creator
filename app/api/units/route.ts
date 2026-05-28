import { NextRequest } from 'next/server';
import { dbGet, dbSet, dbSAdd, dbSMembers } from '@/lib/db';
import type { Unit } from '@/lib/types';

export const runtime = 'nodejs';

export async function GET() {
  const ids = await dbSMembers('units');
  const units = (
    await Promise.all(ids.map((id) => dbGet<Unit>(`unit:${id}`)))
  ).filter(Boolean) as Unit[];
  units.sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());
  return Response.json(units);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, curriculum, assessedSkills, includedSuggestions, notes } = body;

  if (!name?.trim()) {
    return Response.json({ error: 'name is required' }, { status: 400 });
  }

  const id = crypto.randomUUID();
  const now = new Date().toISOString();

  const unit: Unit = {
    id,
    name: name.trim(),
    curriculum: curriculum ?? '',
    assessedSkills: assessedSkills ?? [],
    includedSuggestions: includedSuggestions ?? [],
    notes: notes ?? '',
    createdAt: now,
    updatedAt: now,
  };

  await dbSet(`unit:${id}`, unit);
  await dbSAdd('units', id);

  return Response.json(unit, { status: 201 });
}
