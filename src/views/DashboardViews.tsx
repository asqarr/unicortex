import { useState } from 'react';
import { useApp } from '../context/AppContext'; 

export default function DashboardView() {
  const { profile } = useApp(); 
  const [activeProjects] = useState([
    { id: 1, title: 'AI-Powered Study Assistant', deadline: '2 Days Left', progress: 75, status: 'In Progress' },
    { id: 2, title: 'Distributed Systems Microservices', deadline: '5 Days Left', progress: 40, status: 'Reviewing' },
  ]);

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-linear-to-br from-slate-900 to-slate-900/50 border border-slate-800 shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none"></div>
        <h3 className="text-xl font-bold text-slate-100 mb-2">Welcome back, Engineer! 🧠</h3>
        <p className="text-slate-400 text-sm leading-relaxed">
          UniCortex OS is active for <span className="text-cyan-300 font-medium">{profile.major}</span>. Monitoring your academic workload, active deadlines, and focus days ({profile.workDays}).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { title: 'Workload Pressure', desc: `Optimized for ${profile.major}`, color: 'border-emerald-500/30 bg-emerald-500/5', badge: 'Normal' },
          { title: 'Active Projects', desc: '2 Repositories in Development', color: 'border-cyan-500/30 bg-cyan-500/5', badge: 'Active' },
          { title: 'Cognitive Focus', desc: `Schedule: ${profile.workDays}`, color: 'border-blue-500/30 bg-blue-500/5', badge: 'Optimal' },
        ].map((card, i) => (
          <div key={i} className={`p-4 rounded-xl border ${card.color} backdrop-blur-sm flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-slate-200 text-sm">{card.title}</h4>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">{card.badge}</span>
              </div>
              <p className="text-xs text-slate-400">{card.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md">
        <h4 className="font-bold text-slate-200 text-base mb-4">Current Academic & Coding Projects</h4>
        <div className="space-y-3">
          {activeProjects.map((proj) => (
            <div key={proj.id} className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800/80">
              <div>
                <h5 className="font-medium text-slate-200 text-sm">{proj.title}</h5>
                <span className="text-xs text-cyan-400">{proj.deadline}</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div className="bg-cyan-500 h-full" style={{ width: `${proj.progress}%` }}></div>
                </div>
                <span className="text-xs font-mono text-slate-400">{proj.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}