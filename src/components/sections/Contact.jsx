import React, { useState } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react'
import { PROFILE } from '../../data/mockData'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill all fields')
      return
    }
    setSending(true)
    setTimeout(() => {
      setSending(false)
      toast.success("Message received! I'll get back to you soon 🚀")
      setForm({ name: '', email: '', message: '' })
    }, 1400)
  }

  const contactItems = [
    { icon: Mail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}`, color: '#6366f1' },
    { icon: Phone, label: 'Phone', value: `+91 ${PROFILE.phone}`, href: `tel:${PROFILE.phone}`, color: '#22d3ee' },
    { icon: MapPin, label: 'Location', value: PROFILE.location, href: null, color: '#a855f7' },
  ]

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.1) 0%, transparent 60%)' }} />
      <div className="max-w-5xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-5 inline-flex"><MessageCircle size={12} /> Get In Touch</span>
          <h2 className="font-display font-bold text-white mt-5" style={{ fontSize: 'clamp(2rem,4vw,3rem)' }}>
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: '#64748b' }}>
            Have a project in mind or just want to connect? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactItems.map(item => (
              <a key={item.label} href={item.href} target={item.href ? '_blank' : undefined} rel="noreferrer"
                className="glass rounded-2xl p-5 flex items-center gap-4 hover-glow block"
                style={{ cursor: item.href ? 'pointer' : 'default' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${item.color}18`, border: `1px solid ${item.color}35` }}>
                  <item.icon size={18} style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider" style={{ color: '#475569' }}>{item.label}</p>
                  <p className="text-sm font-semibold text-white">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="glass rounded-2xl p-5">
              <p className="text-xs font-mono uppercase tracking-wider mb-3" style={{ color: '#475569' }}>Connect Online</p>
              <div className="flex gap-3">
                <a href={PROFILE.github} target="_blank" rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm hover:scale-105 transition-transform"
                  style={{ background: 'rgba(255,255,255,0.05)', color: '#e2e8f0', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <Github size={16} /> GitHub
                </a>
                <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-medium text-sm text-white hover:scale-105 transition-transform"
                  style={{ background: 'linear-gradient(135deg,#0077b5,#00a0dc)' }}>
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass rounded-2xl p-7 space-y-5"
          >
            <div>
              <label className="text-xs font-mono uppercase tracking-wider mb-2 block" style={{ color: '#475569' }}>Your Name</label>
              <input
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                placeholder="John Doe" className="ai-input w-full px-4 py-3 text-sm" />
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-wider mb-2 block" style={{ color: '#475569' }}>Email Address</label>
              <input
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                type="email" placeholder="john@example.com" className="ai-input w-full px-4 py-3 text-sm" />
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-wider mb-2 block" style={{ color: '#475569' }}>Message</label>
              <textarea
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                rows={5} placeholder="Tell me about your project..." className="ai-input w-full px-4 py-3 text-sm resize-none" />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              type="submit" disabled={sending}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white text-sm"
              style={{ background: 'linear-gradient(135deg,#6366f1,#a855f7)', boxShadow: '0 0 25px rgba(99,102,241,0.4)', opacity: sending ? 0.7 : 1 }}>
              {sending ? (
                <>
                  <span className="ai-dot" /><span className="ai-dot" /><span className="ai-dot" />
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center mt-20 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-sm" style={{ color: '#475569' }}>
            © 2026 Fuzail Ahmed. Built with React, Three.js & Framer Motion.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
