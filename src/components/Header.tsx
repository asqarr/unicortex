interface HeaderProps {
  activeTab: string;
}

export default function Header({ activeTab }: HeaderProps) {
  const getTitle = () => {
    switch (activeTab) {
      case 'dashboard': return 'Central OS Dashboard';
      case 'time-shield': return 'Time Shield & Workload Heatmap';
      case 'coding-lab': return 'Coding Lab & Code Analyzer';
      case 'research-desk': return 'Research Desk & Literature Map';
      case 'study-coach': return 'Study Coach & Cognitive Focus';
      default: return 'Dashboard';
    }
  };

  return (
    <header className="h-16 border-b border-slate-800 bg-slate-900/30 backdrop-blur-md px-6 flex items-center justify-between">
      <h2 className="text-lg font-semibold text-slate-200">{getTitle()}</h2>
      <div className="flex items-center gap-3">
        <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium">
          AI Status: Ready & Autonomous 🚀
        </span>
      </div>
    </header>
  );
}