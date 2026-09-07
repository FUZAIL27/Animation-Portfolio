import React from 'react'
import { motion } from 'framer-motion'
import panelHologram from '../../assets/hero/panel-hologram.jpg'
import panelCard from '../../assets/hero/panel-card.jpg'
import panelPortrait from '../../assets/hero/panel-portrait.jpg'

/**
 * Hero split-image composition — 3 images, used exactly as provided
 * (no cropping/distortion; each panel's aspect-ratio matches its source
 * image so object-fit never has to crop anything).
 *
 * Replaces the 3D FloatingAvatar in the Hero's right column.
 * - Primary panel (hologram shot): visible at all breakpoints ("Image 1" on mobile).
 * - Secondary + tertiary panels: hidden below md (tablet), shown md and up.
 */
export default function HeroPhotoSplit() {
  return (
    <div className="relative w-full h-full">
      {/* Primary — Image 1, always visible */}
      <motion.div
        className="absolute rounded-2xl overflow-hidden glass"
        style={{
          width: '56%',
          aspectRatio: '838 / 945',
          left: '20%',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 3,
          border: '1px solid rgba(99,102,241,0.25)',
          boxShadow: '0 30px 60px -20px rgba(0,0,0,0.6), 0 0 40px rgba(99,102,241,0.12)',
        }}
        animate={{ y: ['-50%', 'calc(-50% - 8px)', '-50%'] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={panelHologram}
          alt="Fuzail Ahmed"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </motion.div>

      {/* Secondary — Image 2, tablet and up */}
      <motion.div
        className="hidden md:block absolute rounded-2xl overflow-hidden glass"
        style={{
          width: '36%',
          aspectRatio: '1122 / 1402',
          left: '-6%',
          bottom: '0%',
          zIndex: 4,
          border: '1px solid rgba(34,211,238,0.25)',
          boxShadow: '0 24px 50px -18px rgba(0,0,0,0.6), 0 0 30px rgba(34,211,238,0.1)',
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
      >
        <img
          src={panelCard}
          alt="Fuzail Ahmed working"
          className="w-full h-full object-contain"
          loading="eager"
          decoding="async"
        />
      </motion.div>

      {/* Tertiary — Image 3, tablet and up */}
      <motion.div
        className="hidden md:block absolute rounded-2xl overflow-hidden glass"
        style={{
          width: '34%',
          aspectRatio: '1024 / 1536',
          right: '-4%',
          top: '2%',
          zIndex: 4,
          border: '1px solid rgba(168,85,247,0.25)',
          boxShadow: '0 24px 50px -18px rgba(0,0,0,0.6), 0 0 30px rgba(168,85,247,0.1)',
        }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.7 }}
      >
        <img
          src={panelPortrait}
          alt="Fuzail Ahmed portrait"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </motion.div>
    </div>
  )
}
