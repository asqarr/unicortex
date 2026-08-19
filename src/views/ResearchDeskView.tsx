import { useState } from 'react';
import { useApp } from '../context/AppContext'; 

export default function ResearchDeskView() {
  const { profile } = useApp(); 
  const [researchItems, setResearchItems] = useState([
    { id: 1, title: 'Deep Learning in Autonomous Systems', type: 'Survey Paper', status: 'Analyzed' },
    { id: 2, title: 'Consensus Protocols in Distributed Ledgers', type: 'IEEE Article', status: 'Summarizing' },
    { id: 3, title: 'Edge Computing Resource Allocation', type: 'Conference Draft', status: 'Structuring' },
  ]);

  const [newTitle, setNewTitle] = useState('');

  const handleAddResearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newItem = {
      id: Date.now(),
      title: newTitle,
      type: `${profile.major} Paper`,
      status: 'Structuring'
    };

    setResearchItems([newItem, ...researchItems]);
    setNewTitle('');
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-lg font-bold text-cyan-400 mb-2">📚 Research Desk & Literature Map</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Comparative research matrices and literature maps tailored for <span className="text-cyan-300 font-medium">{profile.major}</span>.
          </p>
        </div>
        <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
          Focus: {profile.workDays}
        </span>
      </div>
      <form onSubmit={handleAddResearch} className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md flex gap-3">
        <input 
          type="text" 
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Enter research paper title or thesis topic..." 
          className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:border-cyan-500 outline-none"
        />
        <button type="submit" className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-sm transition-colors">
          Add Paper
        </button>
      </form>

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