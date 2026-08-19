import { useState } from 'react';

export default function ProfileView() {
  const [profile, setProfile] = useState({
    major: 'Computer Engineering',
    workDays: 'Mon, Wed, Fri',
    deadline: ''
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`System updated for ${profile.major}. Deadlines synchronized.`);
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md">
        <h3 className="text-lg font-bold text-cyan-400 mb-2">👤 Smart Profile & System Personalization</h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Configure your academic core parameters. UniCortex will adapt its scheduling and code analysis based on these preferences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form onSubmit={handleSave} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md space-y-4">
          <h4 className="font-bold text-slate-200 text-sm">Personalization Setup</h4>
          
          <div className="space-y-2">
            <label className="text-xs text-slate-400">Academic Major</label>
            <input 
              type="text" 
              value={profile.major}
              onChange={(e) => setProfile({...profile, major: e.target.value})}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-200 focus:border-cyan-500 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs text-slate-400">Focus Days (Work Days)</label>
            <input 
              type="text" 
              value={profile.workDays}
              onChange={(e) => setProfile({...profile, workDays: e.target.value})}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-200 focus:border-cyan-500 outline-none"
            />
          </div>

          <button className="w-full py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-sm transition-colors">
            Save Configuration
          </button>
        </form>

        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md space-y-4">
          <h4 className="font-bold text-slate-200 text-sm">System Kernel Status</h4>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs text-slate-400">Core Engine</span>
              <h5 className="font-medium text-slate-200 text-sm">UniCortex v2.4-Stable</h5>
            </div>
            <span className="text-xs px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-medium">Active</span>
          </div>
          
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-xs text-slate-400">Current AI Mode</span>
            <h5 className="font-medium text-slate-200 text-sm mt-1">Autonomous Co-Pilot</h5>
          </div>
        </div>
      </div>
    </div>
  );
}