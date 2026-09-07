import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, MapPin, CheckCircle2 } from 'lucide-react'
import { EXPERIENCE } from '../../data/mockData'

const fadeUp = {
  hidden: { opacity: 0, x: -40 },
  visible: (i = 0) => ({ opacity: 1, x: 0, transition: { delay: i * 0.15, duration: 0.6, ease: [0.22,1,0.36,1] } }),
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(99,102,241,0.06) 0%, transparent 60%)' }} />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-5 inline-flex"><Briefcase size={12} /> Career Journey</span>
          <h2 className="font-display font-bold text-white mt-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="relative pl-12">
          <div className="timeline-line" />

          {EXPERIENCE.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp} custom={i}
              className="relative mb-10 last:mb-0"
            >
              <div className="timeline-dot absolute" style={{ left: -42, top: 28 }} />

              <div className="glass rounded-2xl p-7 hover-glow">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-display font-bold text-white text-xl">{exp.role}</h3>
                      {exp.current && <span className="badge badge-green">CURRENT</span>}
                    </div>
                    <p className="font-semibold" style={{ color: exp.color }}>{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-mono" style={{ color: '#64748b' }}>{exp.duration}</p>
                    <div className="flex items-center gap-1 justify-end mt-1">
                      <MapPin size={12} style={{ color: '#475569' }} />
                      <p className="text-xs" style={{ color: '#475569' }}>{exp.location}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2.5 mb-5">
                  {exp.highlights.map((h, hi) => (
                    <div key={hi} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: exp.color }} />
                      <p className="text-sm leading-relaxed" style={{ color: '#94a3b8' }}>{h}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <span key={t} className="skill-pill text-xs">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
