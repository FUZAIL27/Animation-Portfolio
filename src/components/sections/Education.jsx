import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, CheckCircle, Clock } from 'lucide-react'
import { EDUCATION } from '../../data/mockData'

export default function Education() {
  return (
    <section id="education" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-5 inline-flex"><GraduationCap size={12} /> Academic Path</span>
          <h2 className="font-display font-bold text-white mt-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Education <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22,1,0.36,1] }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 hover-glow relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full"
                style={{ background: `radial-gradient(circle, ${edu.color}25, transparent 70%)` }} />

              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: `${edu.color}18`, border: `1px solid ${edu.color}35` }}>
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-white text-base leading-snug mb-1">{edu.degree}</h3>
                  <p className="text-sm font-semibold mb-2" style={{ color: edu.color }}>{edu.institution}</p>
                  <div className="flex items-center gap-3 text-xs" style={{ color: '#64748b' }}>
                    <span className="font-mono">{edu.year}</span>
                    <span>·</span>
                    <span>{edu.mode}</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-4 flex items-center gap-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                {edu.status === 'Pursuing' ? (
                  <>
                    <Clock size={14} style={{ color: '#fbbf24' }} />
                    <span className="text-xs font-semibold" style={{ color: '#fbbf24' }}>Currently Pursuing</span>
                  </>
                ) : (
                  <>
                    <CheckCircle size={14} style={{ color: '#00ff88' }} />
                    <span className="text-xs font-semibold" style={{ color: '#00ff88' }}>Completed</span>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
