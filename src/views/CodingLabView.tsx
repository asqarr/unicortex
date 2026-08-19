import { useState } from 'react';
import { useApp } from '../context/AppContext'; 

export default function CodingLabView() {
  const { profile } = useApp(); 
  const [snippets, setSnippets] = useState([
    { id: 1, title: 'JWT Authentication Middleware', language: 'TypeScript', status: 'Optimized' },
    { id: 2, title: 'Distributed Lock with Redis', language: 'Python', status: 'Reviewing' },
    { id: 3, title: 'Async Worker Queue Processor', language: 'Node.js', status: 'Drafting' },
  ]);

  const [newTitle, setNewTitle] = useState('');

  const handleAddSnippet = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newSnippet = {
      id: Date.now(),
      title: newTitle,
      language: profile.major.includes('Computer') ? 'TypeScript/Python' : 'General',
      status: 'Drafting'
    };

    setSnippets([newSnippet, ...snippets]);
    setNewTitle('');
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-lg font-bold text-cyan-400 mb-2">💻 Coding Lab & Code Analyzer</h3>
          <p className="text-sm text-slate-400 leading-relaxed">
            Managing repositories tailored for <span className="text-cyan-300 font-medium">{profile.major}</span> active modules.
          </p>
        </div>
        <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
          Sync Active: {profile.workDays}
        </span>
      </div>

      <form onSubmit={handleAddSnippet} className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md flex gap-3">
        <input 
          type="text" 
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Enter new code module or repository name..." 
          className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-200 focus:border-cyan-500 outline-none"
        />
        <button type="submit" className="px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-sm transition-colors">
          Add Module
        </button>
      </form>

      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md">
        <h4 className="font-bold text-slate-200 text-sm mb-4">Active Code Snippets & Modules</h4>
        <div className="space-y-3">
          {snippets.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"></div>
                <div>
                  <h5 className="font-medium text-slate-200 text-sm">{item.title}</h5>
                  <span className="text-xs text-slate-400 font-mono">Language: {item.language}</span>
                </div>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 font-medium">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}