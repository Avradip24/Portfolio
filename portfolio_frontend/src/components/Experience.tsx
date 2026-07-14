import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../utils/motion';

export default function Experience() {
  const experiences = [

    // Add this object to your experiences array in Experience.tsx:
    {
      role: "Programmer Analyst Intern",
      company: "Cognizant Technology Solutions",
      period: "02/2022 - 06/2022",
      desc: "Contributed to large-scale distributed data processing systems using Apache Spark, wrote thorough module documentation, and participated in structured team code reviews.",
      skills: ["Java", "Apache Spark", "SQL", "SparkSQL"]
    },
    {
      role: "Backend & Data Engineer",
      company: "Cognizant Technology Solutions",
      period: "2022 - 2024",
      desc: "Engineered robust FastAPI backend endpoints, modular data pipelines, and optimized complex SQL transactional systems inside strict Docker container bounds.",
      skills: ["Python", "FastAPI", "PostgreSQL", "Docker", "CI/CD"]
    },
    {
      role: "Master's Student in IT",
      company: "Frankfurt University of Applied Sciences",
      period: "2024 - Present",
      desc: "Deepening theoretical and structural frameworks of Applied AI, complex neural architectures in PyTorch, computer vision solutions, and modern LLM engineering.",
      skills: ["PyTorch", "Computer Vision", "OpenCV", "Deep Learning", "LLMs"]
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
          03 — Experience
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-slate-100 mb-10">
          Where I've refined my code
        </h2>

        <motion.div 
          variants={staggerContainer}
          className="space-y-6 max-w-3xl"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              className="group relative rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm p-6 transition-all duration-300 hover:border-violet-500/40 hover:bg-slate-900/60"
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none transition-opacity duration-300" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3 mb-4">
                <div>
                  <h3 className="font-display text-lg font-semibold text-slate-100">{exp.role}</h3>
                  <p className="text-sm text-violet-400 font-medium">{exp.company}</p>
                </div>
                <span className="font-mono text-xs text-slate-500">{exp.period}</span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-4">{exp.desc}</p>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span key={skill} className="px-2.5 py-1 rounded-full border border-slate-800 bg-slate-950 text-[10px] font-mono text-slate-400 hover:border-violet-500/40 hover:text-violet-300 transition-colors">
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