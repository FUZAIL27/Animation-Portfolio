import React from 'react'
import { motion } from 'framer-motion'
import { Award, ExternalLink, Download } from 'lucide-react'
import { CERTIFICATIONS } from '../../data/mockData'

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-5 inline-flex"><Award size={12} /> Verified Credentials</span>
          <h2 className="font-display font-bold mt-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)', color: 'var(--text)' }}>
            Certifications <span className="gradient-text">&amp; Achievements</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Continuous learning across cloud, AI, security, and software engineering.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8 }}
              className="cert-card glass rounded-2xl overflow-hidden hover-glow relative flex flex-col"
              style={{ '--card-color': cert.color }}
            >
              <div className="cert-card-border" />

              {/* Certificate preview image */}
              <div className="cert-thumb">
                <img src={cert.image} alt={`${cert.name} certificate`} loading="lazy" />
                <div className="cert-thumb-overlay" />
              </div>

              <div className="relative flex-1 flex flex-col p-6">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}35` }}>
                    {cert.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-base leading-snug" style={{ color: 'var(--text)' }}>
                      {cert.name}
                    </h3>
                    <p className="text-sm font-semibold mt-1" style={{ color: cert.color }}>{cert.issuer}</p>
                  </div>
                </div>

                <div className="mt-1 mb-5 font-mono text-xs" style={{ color: 'var(--text-muted)' }}>
                  {cert.date}
                </div>

                <div className="mt-auto flex items-center gap-2 pt-4" style={{ borderTop: '1px solid var(--border)' }}>
                  <a
                    href={cert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-btn flex-1"
                    style={{ '--btn-color': cert.color }}
                  >
                    <ExternalLink size={14} /> View
                  </a>
                  <a
                    href={cert.file}
                    download
                    className="cert-btn cert-btn-outline flex-1"
                    style={{ '--btn-color': cert.color }}
                  >
                    <Download size={14} /> Download
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
