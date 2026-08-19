import { useState } from 'react';
import { useApp } from '../context/AppContext';

interface Message {
  id: number;
  sender: 'user' | 'ai';
  text: string;
}

export default function ChatView() {
  const { profile } = useApp();
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: 'ai', text: `Hello! I am UniCortex Assistant. I see your active major is ${profile.major}. How can I help you with your studies or code today?` }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now(), sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const aiResponse: Message = { 
        id: Date.now() + 1, 
        sender: 'ai', 
        text: `Based on your profile in ${profile.major}, I've analyzed your query. This is a simulated response tailored to your focus days (${profile.workDays}). Once connected to the backend API, real intelligent responses will appear here!` 
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-md">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
        <div>
          <h3 className="text-lg font-bold text-cyan-400">🤖 Cortex AI Assistant</h3>
          <p className="text-xs text-slate-400">Connected to profile: <span className="text-cyan-300 font-medium">{profile.major}</span></p>
        </div>
        <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
          Simulated Mode
        </span>
      </div>

      <div className="flex-1 overflow-y-auto space-y-4 pr-2 mb-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
              msg.sender === 'user' 
                ? 'bg-cyan-600 text-slate-950 font-medium rounded-br-none' 
                : 'bg-slate-900/80 border border-slate-800 text-slate-200 rounded-bl-none'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="flex gap-3 pt-2 border-t border-slate-800">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask anything about your courses, code, or deadlines..." 
          className="flex-1 bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-200 focus:border-cyan-500 outline-none"
        />
        <button className="px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-sm transition-colors">
          Send
        </button>
      </form>
    </div>
  );
}