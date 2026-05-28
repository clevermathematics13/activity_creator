'use client';

import { useState, useRef } from 'react';
import type { AssessmentAnalysis, ChatMessage, Skill, Suggestion } from '@/lib/types';

const DIFFICULTY_COLORS: Record<string, string> = {
  foundational: 'text-blue-400 bg-blue-950',
  developing: 'text-green-400 bg-green-950',
  proficient: 'text-yellow-400 bg-yellow-950',
  advanced: 'text-red-400 bg-red-950',
};

interface SaveModalProps {
  analysis: AssessmentAnalysis;
  selectedSkills: Set<number>;
  selectedSuggestions: Set<number>;
  onSaved: (unitId: string, unitName: string) => void;
  onClose: () => void;
}

function SaveModal({ analysis, selectedSkills, selectedSuggestions, onSaved, onClose }: SaveModalProps) {
  const [unitName, setUnitName] = useState(analysis.unitName);
  const [notes, setNotes] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const save = async () => {
    if (!unitName.trim()) { setError('Unit name is required'); return; }
    setSaving(true);
    setError('');
    try {
      const skills: Skill[] = analysis.skills.filter((_, i) => selectedSkills.has(i));
      const suggestions: Suggestion[] = analysis.suggestions.filter((_, i) => selectedSuggestions.has(i));
      const res = await fetch('/api/units', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: unitName.trim(),
          curriculum: analysis.curriculum,
          assessedSkills: skills,
          includedSuggestions: suggestions,
          notes,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      const unit = await res.json();
      onSaved(unit.id, unit.name);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Save failed');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-700 rounded-xl p-6 flex flex-col gap-4">
        <h2 className="text-lg font-bold text-white">Save to Unit</h2>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Unit Name</label>
          <input
            value={unitName}
            onChange={(e) => setUnitName(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-violet-500"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Notes (optional)</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={3}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-violet-500 resize-none"
          />
        </div>
        <p className="text-xs text-gray-500">
          Saving {selectedSkills.size} assessed skill{selectedSkills.size !== 1 ? 's' : ''} and{' '}
          {selectedSuggestions.size} suggestion{selectedSuggestions.size !== 1 ? 's' : ''}.
        </p>
        {error && <p className="text-xs text-red-400">{error}</p>}
        <div className="flex gap-2">
          <button
            onClick={save}
            disabled={saving}
            className="flex-1 py-2 bg-violet-600 hover:bg-violet-700 disabled:bg-gray-700 disabled:text-gray-500 text-white font-semibold rounded-lg text-sm transition-colors"
          >
            {saving ? 'Saving…' : 'Save'}
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg text-sm transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AnalyzerTab({ onUnitSaved }: { onUnitSaved: () => void }) {
  const [file, setFile] = useState<File | null>(null);
  const [pastedText, setPastedText] = useState('');
  const [dragging, setDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState<AssessmentAnalysis | null>(null);
  const [analyzeError, setAnalyzeError] = useState('');

  const [selectedSkills, setSelectedSkills] = useState<Set<number>>(new Set());
  const [selectedSuggestions, setSelectedSuggestions] = useState<Set<number>>(new Set());

  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isChatting, setIsChatting] = useState(false);
  const [chatStream, setChatStream] = useState('');

  const [showSaveModal, setShowSaveModal] = useState(false);
  const [savedInfo, setSavedInfo] = useState<{ id: string; name: string } | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const handleFile = (f: File) => {
    const allowed = ['image/png', 'image/jpeg', 'image/webp', 'image/gif', 'application/pdf', 'text/plain'];
    if (!allowed.includes(f.type)) {
      setAnalyzeError('Supported: PNG, JPG, WEBP, PDF, TXT');
      return;
    }
    if (f.size > 5 * 1024 * 1024) {
      setAnalyzeError('File must be under 5 MB');
      return;
    }
    setFile(f);
    setAnalyzeError('');
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const f = e.dataTransfer.files[0];
    if (f) handleFile(f);
  };

  const analyze = async () => {
    if (!file && !pastedText.trim()) return;
    setIsAnalyzing(true);
    setAnalysis(null);
    setAnalyzeError('');
    setChatHistory([]);
    setSavedInfo(null);

    try {
      let res: Response;
      if (file && file.type !== 'text/plain') {
        const form = new FormData();
        form.append('file', file);
        if (pastedText.trim()) form.append('text', pastedText);
        res = await fetch('/api/analyze', { method: 'POST', body: form });
      } else {
        let text = pastedText;
        if (file && file.type === 'text/plain') {
          text = await file.text();
          if (pastedText.trim()) text += '\n\n' + pastedText;
        }
        res = await fetch('/api/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text }),
        });
      }

      if (!res.ok) throw new Error(await res.text());
      const data: AssessmentAnalysis = await res.json();
      setAnalysis(data);
      setSelectedSkills(new Set(data.skills.map((_, i) => i)));
      setSelectedSuggestions(new Set(data.suggestions.map((_, i) => i)));
    } catch (err) {
      setAnalyzeError(err instanceof Error ? err.message : 'Analysis failed');
    } finally {
      setIsAnalyzing(false);
    }
  };

  const sendChat = async () => {
    if (!analysis || !chatInput.trim() || isChatting) return;
    const userMsg = chatInput.trim();
    setChatInput('');
    const newHistory: ChatMessage[] = [...chatHistory, { role: 'user', content: userMsg }];
    setChatHistory(newHistory);
    setIsChatting(true);
    setChatStream('');

    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ history: chatHistory, analysis, message: userMsg }),
        signal: ctrl.signal,
      });
      if (!res.ok) throw new Error(await res.text());

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let full = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        full += chunk;
        setChatStream(full);
      }
      setChatHistory([...newHistory, { role: 'assistant', content: full }]);
      setChatStream('');
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') return;
      setChatHistory([...newHistory, { role: 'assistant', content: '⚠ Error: ' + (err instanceof Error ? err.message : 'Unknown error') }]);
    } finally {
      setIsChatting(false);
    }
  };

  const toggleSkill = (i: number) =>
    setSelectedSkills((s) => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; });

  const toggleSuggestion = (i: number) =>
    setSelectedSuggestions((s) => { const n = new Set(s); n.has(i) ? n.delete(i) : n.add(i); return n; });

  return (
    <div className="flex-1 flex flex-col gap-0 overflow-hidden">
      {showSaveModal && analysis && (
        <SaveModal
          analysis={analysis}
          selectedSkills={selectedSkills}
          selectedSuggestions={selectedSuggestions}
          onSaved={(id, name) => {
            setShowSaveModal(false);
            setSavedInfo({ id, name });
            onUnitSaved();
          }}
          onClose={() => setShowSaveModal(false)}
        />
      )}

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
        {/* Left: upload + chat */}
        <div className="border-r border-gray-800 p-6 flex flex-col gap-5 overflow-y-auto">
          {/* File drop zone */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Upload Assessment</label>
            <div
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-colors ${
                dragging ? 'border-violet-400 bg-violet-950/30' : 'border-gray-700 hover:border-gray-600 bg-gray-900'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept="image/*,.pdf,.txt"
                onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); }}
              />
              {file ? (
                <div className="text-sm text-gray-300">
                  <span className="text-violet-400 font-medium">{file.name}</span>
                  <span className="text-gray-500 ml-2">({(file.size / 1024).toFixed(0)} KB)</span>
                  <button
                    onClick={(e) => { e.stopPropagation(); setFile(null); }}
                    className="ml-3 text-gray-500 hover:text-red-400"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <p className="text-sm text-gray-500">
                  Drag &amp; drop or click — PNG, JPG, WEBP, PDF, TXT (max 5 MB)
                </p>
              )}
            </div>
          </div>

          {/* Paste text */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-300">Or paste questions</label>
            <textarea
              value={pastedText}
              onChange={(e) => setPastedText(e.target.value)}
              placeholder="Paste math problems or question text here…"
              rows={4}
              className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-violet-500 resize-none font-mono"
            />
          </div>

          <button
            onClick={analyze}
            disabled={isAnalyzing || (!file && !pastedText.trim())}
            className="py-2.5 bg-violet-600 hover:bg-violet-700 disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg text-sm transition-colors"
          >
            {isAnalyzing ? 'Analyzing…' : 'Analyze Assessment'}
          </button>

          {analyzeError && (
            <p className="text-sm text-red-400 bg-red-950/40 border border-red-900 rounded-lg px-3 py-2">{analyzeError}</p>
          )}

          {/* Chat section */}
          {analysis && (
            <div className="flex flex-col gap-3 border-t border-gray-800 pt-4">
              <p className="text-sm font-medium text-gray-300">Follow-up / Clarification</p>

              {/* Clarifying questions from Claude */}
              {analysis.clarifyingQuestions.length > 0 && chatHistory.length === 0 && (
                <div className="bg-gray-900 border border-violet-800/40 rounded-lg p-3 flex flex-col gap-1.5">
                  <p className="text-xs text-violet-400 font-medium mb-1">Claude asks:</p>
                  {analysis.clarifyingQuestions.map((q, i) => (
                    <p key={i} className="text-sm text-gray-300">• {q}</p>
                  ))}
                </div>
              )}

              {/* Chat history */}
              {chatHistory.map((m, i) => (
                <div
                  key={i}
                  className={`rounded-lg px-3 py-2 text-sm whitespace-pre-wrap ${
                    m.role === 'user'
                      ? 'bg-violet-950/40 border border-violet-800/30 text-gray-200 self-end ml-8'
                      : 'bg-gray-900 border border-gray-700 text-gray-300'
                  }`}
                >
                  {m.content}
                </div>
              ))}

              {chatStream && (
                <div className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 whitespace-pre-wrap">
                  {chatStream}
                  <span className="animate-pulse text-violet-400">▌</span>
                </div>
              )}

              <div className="flex gap-2">
                <textarea
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChat(); } }}
                  placeholder="Answer questions or ask for refinements… (Enter to send)"
                  rows={2}
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-100 placeholder-gray-600 focus:outline-none focus:border-violet-500 resize-none"
                />
                <button
                  onClick={sendChat}
                  disabled={isChatting || !chatInput.trim()}
                  className="px-3 py-2 bg-gray-700 hover:bg-gray-600 disabled:bg-gray-800 disabled:text-gray-600 text-gray-200 rounded-lg text-sm transition-colors self-end"
                >
                  {isChatting ? '…' : 'Send'}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right: analysis results */}
        <div className="p-6 flex flex-col gap-5 overflow-y-auto">
          {isAnalyzing && (
            <div className="flex-1 flex items-center justify-center text-gray-500 text-sm animate-pulse">
              Analyzing your assessment…
            </div>
          )}

          {!isAnalyzing && !analysis && (
            <div className="flex-1 flex items-center justify-center text-gray-600 text-sm">
              Analysis will appear here
            </div>
          )}

          {analysis && (
            <>
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-bold text-white">{analysis.unitName}</h2>
                  <p className="text-sm text-violet-400">{analysis.curriculum}</p>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  {savedInfo ? (
                    <p className="text-xs text-green-400">✓ Saved as &ldquo;{savedInfo.name}&rdquo;</p>
                  ) : (
                    <button
                      onClick={() => setShowSaveModal(true)}
                      className="px-3 py-1.5 bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold rounded-lg transition-colors"
                    >
                      Save to Unit
                    </button>
                  )}
                </div>
              </div>

              {/* Natural language analysis */}
              <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 text-sm text-gray-300 whitespace-pre-wrap leading-relaxed max-h-48 overflow-y-auto">
                {analysis.naturalLanguageAnalysis}
              </div>

              {/* Assessed skills */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-medium text-gray-300">
                    Assessed Skills ({selectedSkills.size}/{analysis.skills.length} selected)
                  </p>
                  <button
                    onClick={() =>
                      setSelectedSkills(selectedSkills.size === analysis.skills.length
                        ? new Set()
                        : new Set(analysis.skills.map((_, i) => i)))
                    }
                    className="text-xs text-gray-500 hover:text-gray-300"
                  >
                    {selectedSkills.size === analysis.skills.length ? 'Deselect all' : 'Select all'}
                  </button>
                </div>
                <div className="flex flex-col gap-2">
                  {analysis.skills.map((skill, i) => (
                    <label key={i} className="flex gap-3 items-start cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={selectedSkills.has(i)}
                        onChange={() => toggleSkill(i)}
                        className="mt-0.5 accent-violet-500"
                      />
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-sm text-gray-200">{skill.skill}</span>
                          {skill.commandTerm && (
                            <span className="text-xs px-1.5 py-0.5 bg-red-950 text-red-400 rounded font-medium">
                              {skill.commandTerm}
                            </span>
                          )}
                          {skill.difficulty && (
                            <span className={`text-xs px-1.5 py-0.5 rounded ${DIFFICULTY_COLORS[skill.difficulty] ?? 'text-gray-400 bg-gray-800'}`}>
                              {skill.difficulty}
                            </span>
                          )}
                        </div>
                        {skill.question && (
                          <p className="text-xs text-gray-500 mt-0.5">{skill.question}</p>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Suggested additions */}
              {analysis.suggestions.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-300">
                      Suggested Additions ({selectedSuggestions.size}/{analysis.suggestions.length} selected)
                    </p>
                    <button
                      onClick={() =>
                        setSelectedSuggestions(selectedSuggestions.size === analysis.suggestions.length
                          ? new Set()
                          : new Set(analysis.suggestions.map((_, i) => i)))
                      }
                      className="text-xs text-gray-500 hover:text-gray-300"
                    >
                      {selectedSuggestions.size === analysis.suggestions.length ? 'Deselect all' : 'Select all'}
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    {analysis.suggestions.map((s, i) => (
                      <label key={i} className="flex gap-3 items-start cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedSuggestions.has(i)}
                          onChange={() => toggleSuggestion(i)}
                          className="mt-0.5 accent-violet-500"
                        />
                        <div>
                          <p className="text-sm text-gray-200">{s.skill}</p>
                          <p className="text-xs text-gray-500">{s.rationale}</p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
