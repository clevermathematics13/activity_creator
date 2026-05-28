'use client';

import { useState, useRef, useEffect } from 'react';

type DocType = 'grade9' | 'dp';

const PLACEHOLDERS: Record<DocType, string> = {
  grade9:
    'e.g. Unit 4 statistics — bar graphs vs histograms, classifying data types (qualitative / discrete / continuous), vocabulary support for ELL students, 20 questions, TI-84 randInt instructions, upper bound 206...',
  dp: 'e.g. DP AA HL calculus — related rates with a draining cone, implicit differentiation scaffold, Paper 3-style investigation, full markscheme with LHS/RHS checks...',
};

export default function GeneratorTab() {
  const [docType, setDocType] = useState<DocType>('grade9');
  const [content, setContent] = useState('');
  const [output, setOutput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  const outputRef = useRef<HTMLPreElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (outputRef.current && isLoading) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || isLoading) return;

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setOutput('');
    setError('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ docType, content }),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error((await response.text()) || `Server error ${response.status}`);
      }

      const reader = response.body!.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        setOutput((prev) => prev + decoder.decode(value, { stream: true }));
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') return;
      setError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleStop = () => { abortRef.current?.abort(); setIsLoading(false); };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">
      {/* Left panel */}
      <div className="border-r border-gray-800 p-6 flex flex-col gap-5 overflow-y-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5 flex-1">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Document Type</label>
            <div className="grid grid-cols-2 gap-2">
              {(['grade9', 'dp'] as DocType[]).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setDocType(type)}
                  className={`py-3 px-4 rounded-lg border-2 text-sm font-medium transition-colors text-left ${
                    docType === type
                      ? 'border-violet-500 bg-violet-500/10 text-violet-300'
                      : 'border-gray-700 bg-gray-900 text-gray-400 hover:border-gray-600 hover:text-gray-300'
                  }`}
                >
                  <span className="block font-semibold">
                    {type === 'grade9' ? 'Grade 9 Activity' : 'DP Analysis'}
                  </span>
                  <span className="block text-xs mt-0.5 opacity-70">
                    {type === 'grade9' ? 'ELL-friendly worksheets' : 'IB DP-style packets'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col flex-1">
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Topics / Content / Questions
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder={PLACEHOLDERS[docType]}
              className="flex-1 min-h-[260px] bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-gray-100 placeholder-gray-600 focus:outline-none focus:border-violet-500 resize-none text-sm font-mono"
            />
          </div>

          <div className="flex gap-2">
            <button
              type="submit"
              disabled={isLoading || !content.trim()}
              className="flex-1 py-3 bg-violet-600 hover:bg-violet-700 disabled:bg-gray-800 disabled:text-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors text-sm"
            >
              {isLoading ? 'Generating…' : 'Generate LaTeX'}
            </button>
            {isLoading && (
              <button
                type="button"
                onClick={handleStop}
                className="px-4 py-3 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg text-sm transition-colors"
              >
                Stop
              </button>
            )}
          </div>
        </form>

        {error && (
          <div className="p-3 bg-red-950 border border-red-800 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}
      </div>

      {/* Right panel */}
      <div className="p-6 flex flex-col gap-3 overflow-hidden">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-300">LaTeX Output</span>
          {output && (
            <button
              onClick={handleCopy}
              className="text-xs px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded text-gray-300 transition-colors"
            >
              {copied ? '✓ Copied' : 'Copy all'}
            </button>
          )}
        </div>

        <div className="flex-1 bg-gray-900 border border-gray-700 rounded-lg overflow-hidden flex flex-col">
          {output ? (
            <pre
              ref={outputRef}
              className="flex-1 p-4 text-sm text-gray-200 font-mono whitespace-pre-wrap break-words overflow-auto"
            >
              {output}
              {isLoading && <span className="animate-pulse text-violet-400">▌</span>}
            </pre>
          ) : (
            <div className="flex-1 flex items-center justify-center text-gray-600 text-sm">
              {isLoading ? (
                <span className="animate-pulse text-gray-500">Generating your packet…</span>
              ) : (
                <span>LaTeX will appear here</span>
              )}
            </div>
          )}
        </div>

        {output && !isLoading && (
          <p className="text-xs text-gray-500">
            Copy the LaTeX above and paste it into a new project on{' '}
            <a
              href="https://www.overleaf.com/project"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:underline"
            >
              Overleaf
            </a>
            .
          </p>
        )}
      </div>
    </div>
  );
}
