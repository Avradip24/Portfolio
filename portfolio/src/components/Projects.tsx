import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects() {
  const projectList = [
    {
      title: "CNN Object Detection Pipeline",
      tech: ["Python", "PyTorch", "OpenCV"],
      desc: "End-to-end computer vision pipeline executing structural transformations, training epochs, and real-time image validation metrics.",
      category: "Computer Vision"
    },
    {
      title: "Recruitment Workflow Platform",
      tech: ["React", "Java", "Camunda"],
      desc: "Asynchronous transactional web system orchestrating multi-stage state transitions connected directly to dynamic frontend components.",
      category: "Enterprise System"
    },
    {
      title: "Input Reconstruction Engine",
      tech: ["C#", "Docker", "Azure"],
      desc: "Algorithmic pipelines containerized inside robust Docker environments and launched across scalable cloud compute instances.",
      category: "Cloud Architecture"
    }
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
          04 — Projects
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-slate-100">
          Systems &amp; Models I've Engineered
        </h2>

        <motion.div 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6"
        >
          {projectList.map((p, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group relative rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6 flex flex-col justify-between transition-all duration-300 hover:border-violet-500/40 hover:bg-slate-900/60"
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none transition-opacity duration-300" />
              
              <div className="space-y-3 relative z-10">
                <span className="font-mono text-[10px] text-violet-400 uppercase tracking-wider">{p.category}</span>
                <h3 className="font-display text-lg font-semibold text-slate-100 group-hover:text-violet-300 transition-colors">{p.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{p.desc}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/60 flex flex-wrap gap-1.5 relative z-10">
                {p.tech.map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded border border-slate-800 bg-slate-950 text-[10px] font-mono text-slate-400">
                    {t}
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