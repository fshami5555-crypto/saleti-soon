
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getGeminiResponse } from '../services/geminiService';

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'مرحباً بك! أنا مساعد سلتي الذكي. هل لديك أي استفسار حول موعد عودتنا؟' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg);
    setMessages(prev => [...prev, { role: 'model', text: response || '' }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {isOpen ? (
        <div className="w-[320px] md:w-[360px] h-[450px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col border border-slate-100 overflow-hidden animate-in zoom-in duration-300">
          <div className="bg-[#1e3a8a] p-5 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-bold text-white text-base">مساعد سلتي</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 p-5 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-[#1e3a8a] text-white rounded-tr-none shadow-md shadow-blue-900/10' 
                    : 'bg-white text-slate-700 rounded-tl-none border border-slate-100 shadow-sm'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="كيف يمكنني مساعدتك؟"
                className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a8a]/20 focus:border-[#1e3a8a] transition-all"
              />
              <button 
                onClick={handleSend}
                className="bg-[#1e3a8a] p-3 rounded-2xl hover:bg-[#1e40af] transition-colors shadow-lg shadow-blue-900/10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-180 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#1e3a8a] w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform animate-bounce group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChatBot;
