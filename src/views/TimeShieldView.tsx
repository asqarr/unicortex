import { useState } from 'react';
import { useApp } from '../context/AppContext'; 

export default function TimeShieldView() {
  const { profile } = useApp(); 
  const [deadlines, setDeadlines] = useState([
    { id: 1, task: 'Database Final Project Submission', date: '2026-06-20', pressure: 'Critical' },
    { id: 2, task: 'Machine Learning Research Paper Draft', date: '2026-06-25', pressure: 'Moderate' },
    { id: 3, task: 'Operating Systems Lab Report', date: '2026-06-28', pressure: 'Low' },
  ]);

  const heatMapDays = [
    { day: 'Mon', load: 'Low', color: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400' },
    { day: 'Tue', load: 'Moderate', color: 'bg-blue-500/20 border-blue-500/40 text-blue-400' },
    { day: 'Wed', load: 'High', color: 'bg-amber-500/20 border-amber-500/40 text-amber-400' },
    { day: 'Thu', load: 'Critical', color: 'bg-rose-500/20 border-rose-500/40 text-rose-400' },
    { day: 'Fri', load: 'Moderate', color: 'bg-blue-500/20 border-blue-500/40 text-blue-400' },
    { day: 'Sat', load: 'Low', color: 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400' },
    { day: 'Sun', load: 'Rest', color: 'bg-slate-800/50 border-slate-700 text-slate-400' },
  ];

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md">
        <h3 className="text-lg font-bold text-cyan-400 mb-2">⏳ Time Shield & Workload Heatmap</h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Time Shield is actively monitoring schedules for <span className="text-cyan-300 font-medium">{profile.major}</span> based on focus days: {profile.workDays}.
        </p>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md">
        <h4 className="font-bold text-slate-200 text-sm mb-4">Weekly Cognitive Pressure Heatmap</h4>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
          {heatMapDays.map((item, idx) => (
            <div key={idx} className={`p-4 rounded-xl border ${item.color} flex flex-col items-center justify-center text-center`}>
              <span className="font-bold text-sm mb-1">{item.day}</span>
              <span className="text-xs font-mono">{item.load}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md">
        <h4 className="font-bold text-slate-200 text-sm mb-4">Upcoming Critical Deadlines</h4>
        <div className="space-y-3">
          {deadlines.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80">
              <div>
                <h5 className="font-medium text-slate-200 text-sm">{item.task}</h5>
                <span className="text-xs text-slate-400 font-mono">Due: {item.date}</span>
              </div>
              <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${
                item.pressure === 'Critical' ? 'bg-rose-500/10 border-rose-500/30 text-rose-400' :
                item.pressure === 'Moderate' ? 'bg-amber-500/10 border-amber-500/30 text-amber-400' :
                'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
              }`}>
                {item.pressure} Pressure
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}