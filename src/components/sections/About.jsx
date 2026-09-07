import React from 'react'
import { motion } from 'framer-motion'
import { Code2, Briefcase, GraduationCap, Sparkles, MapPin } from 'lucide-react'
import { PROFILE } from '../../data/mockData'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6, ease: [0.22,1,0.36,1] } }),
}

const facts = [
  { icon: Briefcase, label: 'Current Role', value: 'Full Stack Developer @ Technas Solution', color: '#6366f1' },
  { icon: GraduationCap, label: 'Education', value: 'MCA — SRM University (Pursuing)', color: '#22d3ee' },
  { icon: MapPin, label: 'Location', value: 'Chennai, Tamil Nadu, India', color: '#a855f7' },
  { icon: Sparkles, label: 'Focus', value: 'Java · Spring Boot · React · AI', color: '#00ff88' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp} className="text-center mb-16"
        >
          <span className="section-tag mb-5 inline-flex"><Code2 size={12} /> About Me</span>
          <h2 className="font-display font-bold text-white mt-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Engineering <span className="gradient-text">Digital Solutions</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio card */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp} custom={1}
            className="glass rounded-3xl p-8 hover-glow relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%)' }} />
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6"
                style={{ background: 'linear-gradient(135deg,#6366f1,#22d3ee)', boxShadow: '0 0 30px rgba(99,102,241,0.4)' }}>
                👨‍💻
              </div>
              <h3 className="font-display font-bold text-white text-2xl mb-4">Fuzail Ahmed</h3>
              <p className="leading-relaxed mb-6" style={{ color: '#94a3b8' }}>{PROFILE.bio}</p>
              <p className="leading-relaxed mb-6" style={{ color: '#94a3b8' }}>
                I thrive on solving complex problems through clean architecture — whether it's designing
                <span style={{ color: '#818cf8' }}> RESTful microservices</span> in Spring Boot or crafting
                <span style={{ color: '#22d3ee' }}> pixel-perfect interfaces</span> in React. My curiosity about
                AI continually pushes me to explore how intelligent systems can enhance everyday software.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Problem Solver', 'Fast Learner', 'Team Player', 'Detail Oriented'].map(tag => (
                  <span key={tag} className="skill-pill">{tag}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Facts grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {facts.map((f, i) => (
              <motion.div
                key={f.label}
                initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp} custom={i + 2}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-5 hover-glow"
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${f.color}20`, border: `1px solid ${f.color}40` }}>
                  <f.icon size={18} style={{ color: f.color }} />
                </div>
                <p className="text-xs font-mono uppercase tracking-wider mb-1.5" style={{ color: '#475569' }}>{f.label}</p>
                <p className="text-sm font-semibold text-white leading-snug">{f.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
