import { useState } from 'react';
import { useApp } from '../context/AppContext'; 

export default function StudyCoachView() {
  const { profile } = useApp(); 
  const [techniques] = useState([
    { id: 1, name: 'Feynman Technique', description: 'Simplify complex concepts by explaining them in plain English as if teaching someone else.', status: 'Recommended' },
    { id: 2, name: 'Active Recall', description: 'Test yourself actively instead of passive reading to maximize memory retention in long-term storage.', status: 'Active' },
    { id: 3, name: 'Pomodoro Focus Session', description: '25 minutes of deep focus followed by a 5-minute cognitive break to prevent mental fatigue.', status: 'Ready' },
  ]);

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md">
        <h3 className="text-lg font-bold text-cyan-400 mb-2">🎯 Study Coach & Cognitive Focus</h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Smart learning methods tailored for <span className="text-cyan-300 font-medium">{profile.major}</span>. Optimized for focus days: {profile.workDays}.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md">
        <h4 className="font-bold text-slate-200 text-sm mb-4">Cognitive Learning Methodologies</h4>
        <div className="space-y-3">
          {techniques.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
              <div className="space-y-1 max-w-xl">
                <h5 className="font-medium text-slate-200 text-sm">{item.name}</h5>
                <p className="text-xs text-slate-400 leading-relaxed">{item.description}</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-cyan-400 border border-slate-700 font-medium shrink-0">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}