import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu } from 'lucide-react'
import { SKILLS } from '../../data/mockData'

const CATEGORIES = ['All', 'Backend', 'Frontend', 'Database', 'Architecture', 'Tools']

function SkillOrb({ skill, index }) {
  const size = 70 + skill.level * 0.5
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotate: -90 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.08, duration: 0.6, type: 'spring', stiffness: 120 }}
      whileHover={{ scale: 1.15, zIndex: 10 }}
      className="relative flex flex-col items-center justify-center rounded-full cursor-pointer animate-float"
      style={{
        width: size, height: size,
        background: `radial-gradient(circle at 35% 30%, ${skill.color}30, ${skill.color}08 70%)`,
        border: `1.5px solid ${skill.color}50`,
        boxShadow: `0 0 25px ${skill.color}25`,
        animationDelay: `${index * 0.3}s`,
        animationDuration: `${5 + (index % 4)}s`,
      }}
    >
      <span className="text-2xl mb-0.5">{skill.icon}</span>
      <span className="text-xs font-bold text-white text-center px-2 leading-tight">{skill.name}</span>
      <span className="text-xs font-mono mt-0.5" style={{ color: skill.color }}>{skill.level}%</span>
    </motion.div>
  )
}

export default function Skills() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? SKILLS : SKILLS.filter(s => s.category === filter)

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.08), transparent 70%)' }} />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-tag mb-5 inline-flex"><Cpu size={12} /> Tech Arsenal</span>
          <h2 className="font-display font-bold text-white mt-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Skill <span className="gradient-text">Galaxy</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: '#64748b' }}>
            A constellation of technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-14"
        >
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: filter === cat ? 'linear-gradient(135deg,#6366f1,#a855f7)' : 'rgba(255,255,255,0.04)',
                color: filter === cat ? '#fff' : '#64748b',
                border: filter === cat ? 'none' : '1px solid rgba(255,255,255,0.08)',
                boxShadow: filter === cat ? '0 0 20px rgba(99,102,241,0.4)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skill orbs */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="flex flex-wrap justify-center items-center gap-6 md:gap-10 min-h-[280px]"
          >
            {filtered.map((skill, i) => <SkillOrb key={skill.name} skill={skill} index={i} />)}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
