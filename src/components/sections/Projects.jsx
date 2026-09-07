import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Folder, Star, CheckCircle2 } from 'lucide-react'
import { PROJECTS } from '../../data/mockData'
import ProjectThumbnail from './ProjectThumbnail'

const statusColors = {
  Live: '#00ff88',
  Featured: '#fbbf24',
  'In Development': '#22d3ee',
  Planning: '#a855f7',
}

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const [transform, setTransform] = useState('')

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotateX = ((y - cy) / cy) * -4
    const rotateY = ((x - cx) / cx) * 4
    setTransform(`perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`)
  }
  const handleMouseLeave = () => setTransform('perspective(1200px) rotateX(0) rotateY(0) translateY(0)')

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ delay: index * 0.08, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform, transition: 'transform 0.2s ease-out' }}
      className="project-card group"
    >
      {/* animated rotating gradient border */}
      <div className="project-card-border" style={{ '--card-color': project.color }} />

      <div className="project-card-inner glass">
        {/* glow on hover */}
        <div
          className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
          style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}35, transparent 70%)` }}
        />

        {/* Large screenshot */}
        <div className="relative overflow-hidden rounded-t-2xl">
          <ProjectThumbnail project={project} />
          <div className="absolute top-3 left-3">
            <span className="badge" style={{ background: 'rgba(3,3,8,0.65)', color: '#e2e8f0', border: '1px solid rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)' }}>
              {project.category}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span
              className="badge"
              style={{
                background: `${statusColors[project.status]}18`,
                color: statusColors[project.status],
                border: `1px solid ${statusColors[project.status]}40`,
                backdropFilter: 'blur(8px)',
              }}
            >
              {project.status === 'Featured' && <Star size={10} />}
              {project.status}
            </span>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-2 gap-3">
            <h3 className="font-display font-bold text-white text-lg leading-tight">{project.name}</h3>
            <span className="text-xs font-mono whitespace-nowrap pt-1" style={{ color: '#475569' }}>{project.year}</span>
          </div>
          <p className="text-xs font-mono mb-3" style={{ color: project.color }}>{project.tagline}</p>
          <p className="text-sm leading-relaxed mb-5" style={{ color: '#94a3b8' }}>{project.description}</p>

          {/* Features list */}
          <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5 mb-5">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-1.5 text-xs" style={{ color: '#94a3b8' }}>
                <CheckCircle2 size={12} style={{ color: project.color, flexShrink: 0 }} />
                <span className="truncate">{f}</span>
              </li>
            ))}
          </ul>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span key={t} className="skill-pill text-xs">{t}</span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {project.live && (
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={project.live}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white"
                style={{ background: `linear-gradient(135deg, ${project.color}, #22d3ee)`, boxShadow: `0 0 20px ${project.color}35` }}
              >
                <ExternalLink size={15} /> Live Demo
              </motion.a>
            )}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className={`flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-colors ${project.live ? 'px-4' : 'flex-1'}`}
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0' }}
            >
              <Github size={15} /> {project.live ? '' : 'GitHub'}
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 70% 30%, rgba(34,211,238,0.06) 0%, transparent 60%)' }} />
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-5 inline-flex"><Folder size={12} /> Portfolio</span>
          <h2 className="font-display font-bold text-white mt-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: '#64748b' }}>
            AI-powered products, enterprise Java/Spring Boot systems, and modern MERN-stack applications
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {PROJECTS.map((p, i) => <ProjectCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  )
}
