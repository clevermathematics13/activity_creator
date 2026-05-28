'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Unit } from '@/lib/types';

const DIFFICULTY_COLORS: Record<string, string> = {
  foundational: 'text-blue-400 bg-blue-950',
  developing: 'text-green-400 bg-green-950',
  proficient: 'text-yellow-400 bg-yellow-950',
  advanced: 'text-red-400 bg-red-950',
};

function UnitCard({ unit, onDelete }: { unit: Unit; onDelete: (id: string) => void }) {
  const [expanded, setExpanded] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const deleteUnit = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!confirm(`Delete "${unit.name}"?`)) return;
    setDeleting(true);
    await fetch(`/api/units/${unit.id}`, { method: 'DELETE' });
    onDelete(unit.id);
  };

  const allSkills = unit.assessedSkills.length + unit.includedSuggestions.length;

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden">
      {/* Card header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-5 hover:bg-gray-800/50 transition-colors"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-white truncate">{unit.name}</h3>
            <p className="text-sm text-violet-400 mt-0.5">{unit.curriculum}</p>
          </div>
          <span className="text-gray-500 text-lg mt-0.5">{expanded ? '▲' : '▼'}</span>
        </div>
        <div className="flex gap-4 mt-3 text-xs text-gray-500">
          <span>{unit.assessedSkills.length} assessed skill{unit.assessedSkills.length !== 1 ? 's' : ''}</span>
          {unit.includedSuggestions.length > 0 && (
            <span>{unit.includedSuggestions.length} suggestion{unit.includedSuggestions.length !== 1 ? 's' : ''} included</span>
          )}
          <span className="ml-auto">{new Date(unit.updatedAt).toLocaleDateString()}</span>
        </div>
      </button>

      {/* Expanded detail */}
      {expanded && (
        <div className="border-t border-gray-800 p-5 flex flex-col gap-4">
          {/* Assessed skills */}
          {unit.assessedSkills.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Assessed Skills</p>
              <div className="flex flex-col gap-2">
                {unit.assessedSkills.map((skill, i) => (
                  <div key={i} className="flex flex-wrap items-center gap-1.5">
                    <span className="text-sm text-gray-200">{skill.skill}</span>
                    {skill.commandTerm && (
                      <span className="text-xs px-1.5 py-0.5 bg-red-950 text-red-400 rounded">{skill.commandTerm}</span>
                    )}
                    {skill.difficulty && (
                      <span className={`text-xs px-1.5 py-0.5 rounded ${DIFFICULTY_COLORS[skill.difficulty] ?? 'text-gray-400 bg-gray-800'}`}>
                        {skill.difficulty}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Included suggestions */}
          {unit.includedSuggestions.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
                Included Suggestions
              </p>
              <div className="flex flex-col gap-2">
                {unit.includedSuggestions.map((s, i) => (
                  <div key={i}>
                    <p className="text-sm text-gray-200">{s.skill}</p>
                    <p className="text-xs text-gray-500">{s.rationale}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Notes */}
          {unit.notes && (
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Notes</p>
              <p className="text-sm text-gray-300 whitespace-pre-wrap">{unit.notes}</p>
            </div>
          )}

          {/* Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-gray-800">
            <p className="text-xs text-gray-600">
              Created {new Date(unit.createdAt).toLocaleDateString()}
            </p>
            <button
              onClick={deleteUnit}
              disabled={deleting}
              className="text-xs text-red-500 hover:text-red-400 disabled:opacity-50 transition-colors"
            >
              {deleting ? 'Deleting…' : 'Delete unit'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function UnitsTab({ refreshKey }: { refreshKey: number }) {
  const [units, setUnits] = useState<Unit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUnits = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/units');
      if (!res.ok) throw new Error('Failed to load units');
      setUnits(await res.json());
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error loading units');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { fetchUnits(); }, [fetchUnits, refreshKey]);

  const handleDelete = (id: string) => setUnits((u) => u.filter((x) => x.id !== id));

  return (
    <div className="flex-1 p-6 overflow-y-auto">
      <div className="max-w-4xl mx-auto flex flex-col gap-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Units</h2>
            <p className="text-sm text-gray-500 mt-0.5">
              {units.length} unit{units.length !== 1 ? 's' : ''} saved
            </p>
          </div>
          <button
            onClick={fetchUnits}
            className="text-xs px-3 py-1.5 bg-gray-800 hover:bg-gray-700 text-gray-400 rounded-lg transition-colors"
          >
            Refresh
          </button>
        </div>

        {loading && (
          <p className="text-gray-500 text-sm animate-pulse">Loading units…</p>
        )}

        {error && (
          <p className="text-red-400 text-sm">{error}</p>
        )}

        {!loading && !error && units.length === 0 && (
          <div className="text-center py-16 border-2 border-dashed border-gray-800 rounded-xl">
            <p className="text-gray-500 text-sm">No units yet.</p>
            <p className="text-gray-600 text-xs mt-1">
              Use the Analyzer tab to analyze an assessment and save it as a unit.
            </p>
          </div>
        )}

        <div className="flex flex-col gap-4">
          {units.map((unit) => (
            <UnitCard key={unit.id} unit={unit} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </div>
  );
}
