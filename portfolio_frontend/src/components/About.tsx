import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';

export default function About() {
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
          02 — About
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-slate-100">
          A bit about how I build
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div className="md:col-span-2 space-y-4 text-slate-400 leading-relaxed text-sm md:text-base">
            <p>
              I am a software engineer who bridges the gap between high-performance systems and practical AI applications. 
              My engineering journey started in the trenches of enterprise data development, where I spent <strong>2.5 years at Cognizant</strong> optimizing data models and building high-throughput backends.
            </p>
            <p>
              Driven by a desire to apply AI to real-world problems, I relocated to Germany to pursue my <strong>Master's in IT</strong> at Frankfurt UAS. This allowed me to pair my backend software development experience with deep learning, computer vision systems, and modern agentic engineering patterns.
            </p>
          </div>

          <div className="group relative rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-4 transition-all duration-300 hover:border-violet-500/40 hover:bg-slate-900/60">
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none transition-opacity duration-300" />
            <h4 className="font-mono text-xs uppercase tracking-wider text-violet-400 font-bold">Location</h4>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              📍 Based in <strong>Wiesbaden</strong> (Willing to relocate to Berlin) <br />
            </p>
          </div>

          <div className="space-y-4">
            <div className="group relative rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-4 transition-all duration-300 hover:border-violet-500/40 hover:bg-slate-900/60">
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none transition-opacity duration-300" />
              <h4 className="font-mono text-xs uppercase tracking-wider text-violet-400 font-bold">Backend Architecture</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Clean API design, schema validation, and secure container structures are my native elements.</p>
            </div>

            <div className="group relative rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-4 transition-all duration-300 hover:border-violet-500/40 hover:bg-slate-900/60">
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none transition-opacity duration-300" />
              <h4 className="font-mono text-xs uppercase tracking-wider text-violet-400 font-bold">Pragmatic AI</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">AI shouldn't live in a silo. I build integrations that scale reliably inside real microservices.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}