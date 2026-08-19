import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardView from './views/DashboardViews';
import TimeShieldView from './views/TimeShieldView';
import CodingLabView from './views/CodingLabView';
import ResearchDeskView from './views/ResearchDeskView';
import StudyCoachView from './views/StudyCoachView';
import ProfileView from './views/ProfileView';
import ChatView from './views/ChatView'; 

export default function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderView = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardView />;
      case 'time-shield':
        return <TimeShieldView />;
      case 'coding-lab':
        return <CodingLabView />;
      case 'research-desk':
        return <ResearchDeskView />;
      case 'study-coach':
        return <StudyCoachView />;
      case 'profile':
        return <ProfileView />;
      case 'chat':
        return <ChatView />; 
      default:
        return <DashboardView />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-100 overflow-hidden font-sans">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col overflow-hidden bg-slate-950">
        <Header activeTab={activeTab} />
        
        <div className="flex-1 overflow-y-auto p-6">
          <div className="max-w-5xl mx-auto">
            {renderView()}
          </div>
        </div>
      </main>
    </div>
  );
}