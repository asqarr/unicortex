import { useState } from 'react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Central Dashboard', icon: '⚡' },
    { id: 'time-shield', label: 'Time Shield', icon: '⏳' },
    { id: 'coding-lab', label: 'Coding Lab', icon: '💻' },
    { id: 'research-desk', label: 'Research Desk', icon: '📚' },
    { id: 'study-coach', label: 'Study Coach', icon: '🎯' },
    { id: 'profile', label: 'Smart Profile', icon: '👤' }, 
    { id: 'chat', label: 'Cortex Chat', icon: '💬' }, 
  ];

  return (
    <aside className={`transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'} border-r border-slate-800 bg-slate-900/50 backdrop-blur-xl flex flex-col justify-between p-4 relative`}>
      <div>
        <div className="flex items-center justify-between px-2 py-4 mb-6 border-b border-slate-800">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-8 h-8 shrink-0 rounded-lg bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center text-cyan-400 font-bold shadow-[0_0_15px_rgba(6,182,212,0.3)] animate-pulse">
              U
            </div>
            {!isCollapsed && (
              <div>
                <h1 className="font-bold text-lg tracking-wide bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  UniCortex
                </h1>
                <p className="text-[10px] text-slate-400">Academic AI Kernel</p>
              </div>
            )}
          </div>
          
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-slate-200 transition-colors border border-slate-700/50"
            title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
          >
            {isCollapsed ? '➡️' : '⬅️'}
          </button>
        </div>

        <nav className="space-y-1.5">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              title={isCollapsed ? item.label : undefined}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === item.id
                  ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.1)]'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              <span className="text-lg shrink-0">{item.icon}</span>
              {!isCollapsed && <span className="truncate">{item.label}</span>}
            </button>
          ))}
        </nav>
      </div>

      {!isCollapsed && (
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400">
          <div className="flex items-center justify-between mb-1">
            <span className="font-semibold text-slate-300">System Ready</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          </div>
          <p className="text-[11px] text-slate-500">Status: Active & Connected</p>
        </div>
      )}
    </aside>
  );
}