import React from 'react'
import { motion } from 'framer-motion'
import panelSecondaryNew from '../../assets/hero/panel-secondary-new.jpg'

/**
 * MOBILE-ONLY hero add-on.
 * Renders directly under the existing mobile hero image, inside the
 * same hero grid, and is completely hidden at md and up so tablet/desktop
 * are 100% untouched.
 *
 * Shows the new secondary artwork in a glass/card treatment with a
 * subtle matching glow, shadow and depth.
 *
 * The backdrop here is intentionally understated: a faint, blurred,
 * UN-scaled echo of the same hero image at its natural size/position
 * (no zoom/maximize), just enough opacity to feel like the same
 * environment as the existing hero background — never competing with it.
 * This section is purely additive — it does not alter any existing
 * markup, background, text, or styles.
 */
export default function MobileHeroShowcase() {
  return (
    <div className="md:hidden relative w-full mt-10" style={{ minHeight: 420 }}>
      {/* ── Subtle background effect (inspired by existing portfolio bg) ── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl" style={{ zIndex: 0 }}>
        {/* faint echo of the same hero image — natural size (bg-cover, no scale/zoom), just dimmed + blurred */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${panelSecondaryNew})`,
            filter: 'blur(24px) brightness(0.3) saturate(110%)',
            opacity: 0.22,
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(3,3,8,0.25) 0%, rgba(3,3,8,0.8) 75%)' }}
        />

        {/* ambient glow blobs matching the portfolio palette — kept small/subtle */}
        <motion.div
          className="absolute rounded-full"
          style={{ width: 220, height: 220, left: '-15%', top: '2%', background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)' }}
          animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.1, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ width: 200, height: 200, right: '-12%', top: '30%', background: 'radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)' }}
          animate={{ opacity: [0.25, 0.55, 0.25], scale: [1.08, 1, 1.08] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{ width: 190, height: 190, left: '10%', bottom: '2%', background: 'radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%)' }}
          animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.08, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />

        {/* tiny drifting particles, same visual language as the rest of the hero */}
        {Array.from({ length: 14 }).map((_, i) => {
          const left = (i * 61) % 100
          const top = (i * 37) % 100
          const size = i % 3 === 0 ? 3 : 2
          const color = i % 3 === 0 ? '#22d3ee' : i % 3 === 1 ? '#a855f7' : '#6366f1'
          return (
            <motion.span
              key={i}
              className="absolute rounded-full"
              style={{ left: `${left}%`, top: `${top}%`, width: size, height: size, background: color, opacity: 0.5 }}
              animate={{ opacity: [0.15, 0.7, 0.15], y: [0, -12, 0] }}
              transition={{ duration: 3 + (i % 5), repeat: Infinity, ease: 'easeInOut', delay: i * 0.25 }}
            />
          )
        })}
      </div>

      {/* ── Foreground content ── */}
      <div className="relative flex flex-col items-center gap-9 py-10" style={{ zIndex: 1 }}>

        {/* Secondary image — new artwork, glass/card treatment with matching glow */}
        <motion.div
          className="relative rounded-2xl overflow-hidden glass"
          style={{
            width: '74%', maxWidth: 320, aspectRatio: '1122 / 1402',
            border: '1px solid rgba(34,211,238,0.28)',
            boxShadow: '0 24px 50px -18px rgba(0,0,0,0.65), 0 0 34px rgba(34,211,238,0.18)',
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <img src={panelSecondaryNew} alt="Fuzail Ahmed" className="w-full h-full object-cover" loading="lazy" decoding="async" />
        </motion.div>
      </div>
    </div>
  )
}
