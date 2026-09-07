import React from 'react'
import { motion } from 'framer-motion'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Experience from '../components/sections/Experience'
import Skills from '../components/sections/Skills'
import Projects from '../components/sections/Projects'
import Education from '../components/sections/Education'
import Certificates from '../components/sections/Certificates'
import Contact from '../components/sections/Contact'
import CursorGlow from '../components/effects/CursorGlow'
import FloatingGradients from '../components/effects/FloatingGradients'

export default function Landing() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="scanline"
    >
      <FloatingGradients />
      <CursorGlow />
      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Certificates />
        <Contact />
      </div>
    </motion.div>
  )
}
