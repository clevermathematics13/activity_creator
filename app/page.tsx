'use client';

import { useState } from 'react';
import GeneratorTab from './components/GeneratorTab';
import AnalyzerTab from './components/AnalyzerTab';
import UnitsTab from './components/UnitsTab';

type Tab = 'generator' | 'analyzer' | 'units';

const TABS: { id: Tab; label: string }[] = [
  { id: 'generator', label: 'Generator' },
  { id: 'analyzer', label: 'Analyzer' },
  { id: 'units', label: 'Units' },
];

export default function Home() {
  const [tab, setTab] = useState<Tab>('generator');
  const [unitsRefreshKey, setUnitsRefreshKey] = useState(0);

  const handleUnitSaved = () => setUnitsRefreshKey((k) => k + 1);

  return (
    <main className="h-screen bg-gray-950 text-gray-100 flex flex-col overflow-hidden">
      <header className="border-b border-gray-800 px-6 py-3 flex items-center gap-6 shrink-0">
        <div className="flex items-center gap-2.5">
          <span className="text-xl">📐</span>
          <div>
            <h1 className="text-base font-bold text-white leading-tight">Activity Creator</h1>
            <p className="text-xs text-gray-500">Overleaf-ready LaTeX math packets</p>
          </div>
        </div>
        <nav className="flex gap-1 ml-4">
          {TABS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                tab === id
                  ? 'bg-violet-600 text-white'
                  : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>
      <div className="flex-1 flex flex-col overflow-hidden">
        {tab === 'generator' && <GeneratorTab />}
        {tab === 'analyzer' && <AnalyzerTab onUnitSaved={handleUnitSaved} />}
        {tab === 'units' && <UnitsTab refreshKey={unitsRefreshKey} />}
      </div>
    </main>
  );
}
