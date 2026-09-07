import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { useApp } from '../../context/AppContext'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certificates', label: 'Certificates' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const { theme, toggleTheme } = useApp()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (href) => {
    setMobileOpen(false)
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(3,3,8,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(99,102,241,0.15)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={() => scrollTo('#hero')}>
            <div className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg,#6366f1,#22d3ee)', boxShadow: '0 0 20px rgba(99,102,241,0.5)' }}>
              <span className="text-base">🧠</span>
            </div>
            <div>
              <span className="font-display font-bold text-white text-base leading-none">Fuzail</span>
              <div className="text-xs font-mono" style={{ color: '#6366f1', letterSpacing: 1 }}>AI · DEV</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href)}
                className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-white/5"
                style={{ color: '#94a3b8' }}>
                {l.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button onClick={toggleTheme}
              className="p-2 rounded-xl hover:bg-white/5 transition-colors"
              style={{ color: '#94a3b8' }}>
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo('#contact')}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white"
              style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)', boxShadow: '0 0 20px rgba(99,102,241,0.35)' }}
            >
              Let's Talk
            </motion.button>

            <button onClick={() => setMobileOpen(o => !o)}
              className="lg:hidden p-2 rounded-xl hover:bg-white/5" style={{ color: '#94a3b8' }}>
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-50 py-4 px-6"
            style={{ background: 'rgba(3,3,8,0.97)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(99,102,241,0.15)' }}
          >
            <div className="flex flex-col gap-1">
              {links.map(l => (
                <button key={l.href} onClick={() => scrollTo(l.href)}
                  className="text-left px-4 py-3 rounded-xl text-sm font-medium hover:bg-white/5 transition-colors"
                  style={{ color: '#94a3b8' }}>
                  {l.label}
                </button>
              ))}
              <button onClick={() => scrollTo('#contact')}
                className="mt-2 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)' }}>
                Let's Talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
