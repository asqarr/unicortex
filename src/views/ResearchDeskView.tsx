import { useState } from 'react';

export default function ResearchDeskView() {
  const [researchItems, setResearchItems] = useState([
    { id: 1, title: 'Deep Learning in Autonomous Systems', type: 'Survey Paper', status: 'Analyzed' },
    { id: 2, title: 'Consensus Protocols in Distributed Ledgers', type: 'IEEE Article', status: 'Summarizing' },
    { id: 3, title: 'Edge Computing Resource Allocation', type: 'Conference Draft', status: 'Structuring' },
  ]);

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md">
        <h3 className="text-lg font-bold text-cyan-400 mb-2">📚 Research Desk & Literature Map</h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Comparative research matrices, intelligent paper summarizers, and structured writing guides for scientific reports.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md">
        <h4 className="font-bold text-slate-200 text-sm mb-4">Active Research Papers & Concept Maps</h4>
        <div className="space-y-3">
          {researchItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
              <div>
                <h5 className="font-medium text-slate-200 text-sm">{item.title}</h5>
                <span className="text-xs text-slate-400 font-mono">Category: {item.type}</span>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-cyan-400 border border-slate-700 font-medium">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}