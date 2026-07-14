import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import axios from 'axios';
import { FaPaperPlane} from 'react-icons/fa';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const SUGGESTED_QUESTIONS = [
  "What backend work have you done?",
  "Which project involved Docker?",
  "Tell me about Cognizant.",
  "Why Merantix?"
];

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! 👋 Ask me anything about Avradip's background or tech experience." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;
    
    const userMsg: Message = { role: 'user', content: textToSend };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setIsLoading(true);

    try {
      const res = await axios.post('https://portfolio-8stu.onrender.com', { messages: updated });
      setMessages(prev => [...prev, { role: 'assistant', content: res.data.reply }]);
    } catch {
      setMessages(prev => [
        ...prev, 
        { role: 'assistant', content: "Failed to reach the backend brain. Is FastAPI server running?" }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  return (
    <section className="py-20 md:py-28">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={fadeUp}
        className="space-y-6"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400 mb-2">
          06 — Agent
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-slate-100">
          Query My Dossier
        </h2>

        <div className="bg-slate-900/40 border border-slate-800 rounded-xl overflow-hidden flex flex-col h-[400px] max-w-3xl">
          <div className="bg-slate-950 border-b border-slate-800 px-4 py-3 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">avradip_assistant_daemon</span>
            <span className="text-[10px] bg-violet-950/40 text-violet-400 font-mono px-2 py-0.5 rounded border border-violet-800/40">FastAPI</span>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`rounded-lg px-4 py-2.5 max-w-[85%] text-xs md:text-sm ${
                  m.role === 'user' ? 'bg-violet-600 text-white' : 'bg-slate-950 text-slate-300 border border-slate-800'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-xs font-mono text-slate-500 animate-pulse">Running reasoning pass...</div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="px-4 py-2 bg-slate-950/50 flex flex-wrap gap-2">
            {SUGGESTED_QUESTIONS.map((q, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(q)}
                className="text-[10px] font-mono bg-slate-900 border border-slate-800 hover:border-violet-500/40 text-slate-400 hover:text-violet-300 px-2 py-1 rounded transition-colors cursor-pointer"
              >
                {q}
              </button>
            ))}
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(input); }} className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me a background question..."
              className="flex-1 bg-slate-900 border border-slate-850 rounded-lg px-3 py-2 text-xs md:text-sm focus:outline-none focus:border-violet-500/50 text-slate-100"
            />
            <button type="submit" className="bg-violet-600 hover:bg-violet-500 text-white px-4 rounded-lg transition duration-200 cursor-pointer">
              <FaPaperPlane className="text-xs" />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}