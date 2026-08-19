import { useState } from 'react';

export default function CodingLabView() {
  const [snippets, setSnippets] = useState([
    { id: 1, title: 'JWT Authentication Middleware', language: 'TypeScript', status: 'Optimized' },
    { id: 2, title: 'Distributed Lock with Redis', language: 'Python', status: 'Reviewing' },
    { id: 3, title: 'Async Worker Queue Processor', language: 'Node.js', status: 'Drafting' },
  ]);

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md">
        <h3 className="text-lg font-bold text-cyan-400 mb-2">💻 Coding Lab & Code Analyzer</h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Manage your software repositories, review code snippets, and run automated analysis for your academic engineering tasks.
        </p>
      </div>

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