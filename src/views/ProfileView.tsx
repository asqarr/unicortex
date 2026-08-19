import { useState } from 'react';
import { useApp } from '../context/AppContext';

export default function ProfileView() {
  const { profile, updateProfile } = useApp();
  const [formData, setFormData] = useState(profile);
  const [savedMessage, setSavedMessage] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile(formData);
    setSavedMessage(true);
    setTimeout(() => setSavedMessage(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md">
        <h3 className="text-lg font-bold text-cyan-400 mb-2">👤 Smart Profile & System Personalization</h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          Configure your academic core parameters. UniCortex will adapt its scheduling and code analysis based on these preferences.
        </p>
        {savedMessage && (
          <div className="mt-3 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium animate-pulse">
            ✔ Configuration saved successfully! Global system synchronized.
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <form onSubmit={handleSave} className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md space-y-4">
          <h4 className="font-bold text-slate-200 text-sm">Personalization Setup</h4>
          
          <div className="space-y-2">
            <label className="text-xs text-slate-400">Academic Major</label>
            <input 
              type="text" 
              value={formData.major}
              onChange={(e) => setFormData({...formData, major: e.target.value})}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-200 focus:border-cyan-500 outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs text-slate-400">Focus Days (Work Days)</label>
            <input 
              type="text" 
              value={formData.workDays}
              onChange={(e) => setFormData({...formData, workDays: e.target.value})}
              className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-200 focus:border-cyan-500 outline-none"
            />
          </div>

          <button type="submit" className="w-full py-2.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-sm transition-colors">
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
            <span className="text-xs text-slate-400">Active Profile Context</span>
            <h5 className="font-medium text-cyan-400 text-sm mt-1">{profile.major} ({profile.workDays})</h5>
          </div>
        </div>
      </div>
    </div>
  );
}