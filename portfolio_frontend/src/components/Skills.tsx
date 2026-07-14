import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/motion';

export default function Skills() {
  const skillCategories = [
    { name: "Languages", items: ["Python", "SQL", "Java", "C#", "TypeScript"] },
    { name: "Backend / Cloud", items: ["FastAPI", "Docker", "Azure", "CI/CD", "PostgreSQL"] },
    // Replace the "AI & ML" category in your skillCategories array inside Skills.tsx:
    { name: "Frontend", items:["React.js", "JavaScript", "TypeScript", "HTML5", "CSS3"]},
    { name: "AI & ML", items: ["PyTorch", "OpenCV", "LangChain", "LangGraph", "pgvector (RAG)", "scikit-learn", "Deep Learning"] },
    { name: "Systems / Web", items: ["React", "Camunda", "REST APIs", "Git", "GitLab"] }
  ];

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
          05 — Stack
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-slate-100">
          Core Skills Matrix
        </h2>

        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="bg-slate-900/20 border border-slate-800/60 p-5 rounded-xl space-y-4"
            >
              <h4 className="font-mono text-xs font-semibold uppercase tracking-widest text-slate-400 border-b border-slate-800/80 pb-2">
                {cat.name}
              </h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/40 text-xs font-mono text-slate-300 hover:border-violet-500/40 hover:text-violet-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}