import React, { useState, useEffect, useRef, Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Phone, ChevronDown, Zap, Code2, Brain } from 'lucide-react'
import { PROFILE } from '../../data/mockData'
import HeroPhotoSplit from './HeroPhotoSplit'
import MobileHeroShowcase from './MobileHeroShowcase'
import heroMobileBg from '../../assets/hero/panel-hologram.jpg'

const ParticleField = lazy(() => import('../three/ParticleField'))

const TYPING_ROLES = PROFILE.roles
const TECH_ICONS = ['☕ Java', '🍃 Spring Boot', '⚛️ React', '🗄️ MySQL', '🔧 Microservices', '🤖 AI']

function TypingText() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const full = TYPING_ROLES[roleIdx]
    let timeout

    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 80)
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setRoleIdx(i => (i + 1) % TYPING_ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, deleting, roleIdx])

  return (
    <span className="gradient-text font-display">
      {displayed}
      <span className="animate-typing" style={{ borderRight: '3px solid #6366f1', marginLeft: 2 }}>&nbsp;</span>
    </span>
  )
}

function FloatingTechIcon({ icon, delay, x, y }) {
  return (
    <motion.div
      className="absolute glass rounded-xl px-3 py-2 text-xs font-mono font-semibold hidden lg:flex items-center gap-2 whitespace-nowrap"
      style={{ left: x, top: y, color: '#818cf8', border: '1px solid rgba(99,102,241,0.2)', zIndex: 5 }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: [0.7, 1, 0.7], y: [0, -10, 0], scale: 1 }}
      transition={{ delay, duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      {icon}
    </motion.div>
  )
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  useEffect(() => {
    const fn = (e) => {
      if (!containerRef.current) return
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - left) / width - 0.5) * 20,
        y: ((e.clientY - top) / height - 0.5) * 20,
      })
    }
    window.addEventListener('mousemove', fn)
    return () => window.removeEventListener('mousemove', fn)
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(99,102,241,0.08) 0%, transparent 70%), var(--bg)' }}
    >
      {/* Mobile-only background image (hidden md and up) */}
      <div
        className="md:hidden absolute inset-0 bg-cover"
        style={{ backgroundImage: `url(${heroMobileBg})`, backgroundPosition: 'center 15%', zIndex: 0 }}
      >
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(3,3,8,0.45) 0%, rgba(3,3,8,0.82) 55%, var(--bg) 100%)' }}
        />
      </div>

      {/* Particle background */}
      <Suspense fallback={null}>
        <ParticleField />
      </Suspense>

      {/* Mouse-follow glow */}
      <motion.div
        className="pointer-events-none fixed rounded-full"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(99,102,241,0.07) 0%, transparent 70%)',
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 1,
        }}
        animate={{ x: mousePos.x * 8, y: mousePos.y * 8 }}
        transition={{ type: 'spring', stiffness: 60, damping: 20 }}
      />

      {/* Ambient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
        <motion.div
          className="absolute rounded-full"
          style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', top: '10%', right: '-10%' }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)', bottom: '5%', left: '-5%' }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)', top: '60%', right: '20%' }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
      </div>

      {/* Floating tech icons */}
      {[
        { icon: '☕ Java',          x: '5%',  y: '25%', delay: 0.5 },
        { icon: '🍃 Spring Boot',   x: '3%',  y: '55%', delay: 1.2 },
        { icon: '⚛️ React',         x: '78%', y: '18%', delay: 0.8 },
        { icon: '🗄️ MySQL',         x: '80%', y: '72%', delay: 1.6 },
        { icon: '🔧 Microservices', x: '72%', y: '45%', delay: 2.0 },
        { icon: '🤖 AI Enthusiast', x: '6%',  y: '78%', delay: 1.4 },
      ].map((item, i) => (
        <FloatingTechIcon key={i} {...item} />
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <div>
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass"
              style={{ border: '1px solid rgba(0,255,136,0.2)' }}>
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-mono font-semibold" style={{ color: '#4ade80', letterSpacing: 1 }}>
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="text-lg font-mono mb-3"
            style={{ color: '#6366f1' }}
          >
            👋 Hello, I'm
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="font-display font-bold text-white leading-none mb-4"
            style={{ fontSize: 'clamp(2.6rem,6vw,5rem)' }}
          >
            Fuzail{' '}
            <span className="gradient-text">Ahmed</span>
          </motion.h1>

          {/* Typing role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-2xl md:text-3xl font-display font-semibold mb-6 h-10"
          >
            <TypingText />
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            className="text-base leading-relaxed mb-8 max-w-lg"
            style={{ color: '#94a3b8' }}
          >
            Crafting scalable enterprise applications with{' '}
            <span style={{ color: '#818cf8' }}>Java Spring Boot</span> &{' '}
            <span style={{ color: '#22d3ee' }}>React</span>. Based in{' '}
            <span style={{ color: '#a855f7' }}>Chennai, India</span> 🇮🇳 — building the future of software one commit at a time.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="grid grid-cols-3 gap-4 mb-8"
          >
            {[
              { val: '2+', label: 'Years Exp' },
              { val: '10+', label: 'Projects' },
              { val: '5+', label: 'Technologies' },
            ].map(s => (
              <div key={s.label} className="glass rounded-xl p-3 text-center">
                <div className="font-display font-bold text-xl gradient-text">{s.val}</div>
                <div className="text-xs mt-0.5" style={{ color: '#64748b' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white text-sm"
              style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)', boxShadow: '0 0 30px rgba(99,102,241,0.4)' }}
            >
              <Code2 size={16} />
              View Projects
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm neon-border"
              style={{ color: '#818cf8' }}
            >
              <Brain size={16} />
              Contact Me
            </motion.button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex items-center gap-4"
          >
            {[
              { href: PROFILE.github, icon: Github, label: 'GitHub', color: '#e2e8f0' },
              { href: PROFILE.linkedin, icon: Linkedin, label: 'LinkedIn', color: '#0077b5' },
              { href: `mailto:${PROFILE.email}`, icon: Mail, label: 'Email', color: '#6366f1' },
              { href: `tel:${PROFILE.phone}`, icon: Phone, label: 'Phone', color: '#22d3ee' },
            ].map(({ href, icon: Icon, label, color }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer"
                title={label}
                className="p-2.5 rounded-xl glass hover:scale-110 transition-all"
                style={{ color, border: '1px solid rgba(255,255,255,0.08)' }}>
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: Hero photo split (replaces 3D avatar) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex items-center justify-center h-[300px] sm:h-[360px] md:h-[420px] lg:h-[480px]"
        >
          {/* Glowing ring behind */}
          <div className="absolute w-80 h-80 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', animation: 'glowPulse 4s ease-in-out infinite' }} />

          <Suspense fallback={
            <div className="w-64 h-64 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)' }}>
              <span className="text-6xl animate-pulse">🧠</span>
            </div>
          }>
            <HeroPhotoSplit />
          </Suspense>

          {/* Info cards floating around (unchanged, large screens only as before) */}
          <motion.div
            className="hidden lg:flex absolute glass rounded-xl p-3 items-center gap-2"
            style={{ bottom: '15%', left: '-5%', border: '1px solid rgba(99,102,241,0.2)', zIndex: 6 }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <div className="w-7 h-7 rounded-lg bg-indigo-500/20 flex items-center justify-center text-sm">☕</div>
            <div>
              <p className="text-xs font-semibold text-white">Java Expert</p>
              <p className="text-xs" style={{ color: '#64748b' }}>Spring Boot · JDBC</p>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:flex absolute glass rounded-xl p-3 items-center gap-2"
            style={{ top: '15%', right: '-8%', border: '1px solid rgba(34,211,238,0.2)', zIndex: 6 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          >
            <div className="w-7 h-7 rounded-lg flex items-center justify-center text-sm" style={{ background: 'rgba(34,211,238,0.2)' }}>⚛️</div>
            <div>
              <p className="text-xs font-semibold text-white">React Dev</p>
              <p className="text-xs" style={{ color: '#64748b' }}>Frontend · UI/UX</p>
            </div>
          </motion.div>

          <motion.div
            className="hidden lg:block absolute glass rounded-xl p-3"
            style={{ top: '55%', right: '-12%', border: '1px solid rgba(168,85,247,0.2)', zIndex: 6 }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1.5 }}
          >
            <div className="flex items-center gap-1.5 mb-1">
              <Zap size={12} style={{ color: '#fbbf24' }} />
              <span className="text-xs font-semibold text-white">AI Enthusiast</span>
            </div>
            <div className="flex gap-1">
              {['🤖', '🧠', '⚡'].map(e => (
                <span key={e} className="text-sm">{e}</span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile-only: 3D cube -> 3D ring -> secondary image (new, additive, hidden md+) */}
        <MobileHeroShowcase />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer z-10"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs font-mono" style={{ color: '#4a5568' }}>SCROLL</span>
        <ChevronDown size={20} style={{ color: '#6366f1' }} />
      </motion.div>
    </section>
  )
}
