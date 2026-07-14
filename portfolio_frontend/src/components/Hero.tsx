import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import { FaArrowDown, FaCommentDots } from 'react-icons/fa';

interface HeroProps {
  setActiveTab: (tab: string) => void;
}

export default function Hero({ setActiveTab }: HeroProps) {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-start py-20 md:py-28">
      {/* Hero Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="space-y-6 max-w-3xl"
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-violet-400 block">
          01 — Welcome
        </span>

        <h1 className="font-display text-5xl md:text-6xl font-semibold tracking-tight text-slate-100">
          Hi 👋 I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-violet-500">Avradip Mazumdar</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-400 font-sans leading-relaxed">
          Software & AI Engineer with <span className="text-violet-400 font-semibold">2.5 Years of Industry Experience</span>. 
          Currently pursuing a Master's degree in IT at Frankfurt UAS.
        </h2>

        {/* Action Button Row */}
        <div className="flex flex-wrap gap-4 pt-6">
          <button 
            onClick={() => setActiveTab('projects')}
            className="px-5 py-2.5 rounded-lg bg-violet-600 text-white text-sm font-semibold hover:bg-violet-500 hover:shadow-[0_0_30px_-8px_rgba(139,92,246,0.35)] transition-all duration-300 cursor-pointer flex items-center gap-2"
          >
            <span>View Projects</span>
            <FaArrowDown className="text-xs" />
          </button>

          <button 
            onClick={() => setActiveTab('chat')}
            className="px-5 py-2.5 rounded-lg border border-slate-700 text-slate-300 hover:border-violet-500/50 hover:text-violet-300 transition-all duration-300 cursor-pointer flex items-center gap-2"
          >
            <FaCommentDots className="text-xs" />
            <span>Chat with AI</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}