import { motion } from 'framer-motion';
import { fadeUp } from '../utils/motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';

export default function Contact() {
  const links = [
    { label: "Email", value: "rontymazumdar@gmail.com", href: "mailto:rontymazumdar@gmail.com", icon: <FaEnvelope /> },
    { label: "LinkedIn", value: "linkedin.com/in/avradip-mazumdar", href: "https://linkedin.com/in/avradip-mazumdar", icon: <FaLinkedin /> },
    { label: "GitHub", value: "github.com/avradip", href: "https://github.com/avradip", icon: <FaGithub /> },
    { label: "Resume", value: "Download CV", href: "/resume.pdf", icon: <FaFileAlt /> }
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
          07 — Connection
        </p>
        <h2 className="font-display text-2xl md:text-3xl font-semibold tracking-tight text-slate-100">
          Get in touch
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl pt-4">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center space-x-4 rounded-xl border border-slate-800 bg-slate-900/40 p-4 transition-all duration-300 hover:border-violet-500/40 hover:bg-slate-900/60"
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 bg-gradient-to-br from-violet-500/5 to-transparent pointer-events-none transition-opacity duration-300" />
              <div className="p-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-400 group-hover:text-violet-400 transition-colors">
                {link.icon}
              </div>
              <div>
                <span className="font-mono text-[10px] text-slate-500 uppercase block">{link.label}</span>
                <span className="text-xs md:text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">{link.value}</span>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}