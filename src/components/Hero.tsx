import { useRef, useState, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import Avatar from './Avatar'
import Terminal from './Terminal'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)
  const [glow, setGlow] = useState({ x: 50, y: 50, opacity: 0 })
  const { t } = useLanguage()

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      opacity: 1,
    })
  }

  return (
    <section
      id="topo"
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setGlow((g) => ({ ...g, opacity: 0 }))}
      className="relative pt-40 pb-28 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-accent-indigo/10 blur-3xl animate-glow" />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: glow.opacity * 0.12,
          background: `radial-gradient(600px circle at ${glow.x}% ${glow.y}%, #6366f1, transparent 70%)`,
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Avatar size="lg" />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-sm text-accent-indigo mb-4"
        >
          {'// '}{t.hero.role}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6"
        >
          {t.hero.greeting} <span className="text-gradient">{profile.name}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto mb-10"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-10"
        >
          <Terminal />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projetos"
            className="px-6 py-3 rounded-lg bg-accent-indigo text-white font-semibold hover:bg-accent-teal transition-colors shadow-lg shadow-accent-indigo/20"
          >
            {t.hero.ctaProjects}
          </a>
          <a
            href="#contato"
            className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:border-accent-indigo hover:text-accent-indigo transition-colors"
          >
            {t.hero.ctaContact}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
