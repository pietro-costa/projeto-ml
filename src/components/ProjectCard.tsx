import { motion } from 'framer-motion'
import { Bot, ShieldAlert, CreditCard, Users, Ship, type LucideIcon } from 'lucide-react'
import type { Project } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'

const icons: Record<Project['icon'], LucideIcon> = {
  Bot,
  ShieldAlert,
  CreditCard,
  Users,
  Ship,
}

export default function ProjectCard({ project }: { project: Project }) {
  const { t } = useLanguage()
  const Icon = icons[project.icon]
  const text = t.projects.items[project.slug]

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`group relative flex flex-col rounded-2xl border border-slate-200 bg-bg-card p-6 shadow-sm transition-colors hover:border-accent-indigo/40 hover:shadow-xl hover:shadow-accent-indigo/10 ${
        project.featured ? 'sm:col-span-2 ring-1 ring-accent-violet/30' : ''
      }`}
    >
      {project.featured && (
        <span className="absolute -top-3 left-6 px-3 py-1 text-xs font-mono font-semibold rounded-full bg-accent-violet text-white">
          {t.projects.featuredBadge}
        </span>
      )}

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-indigo/10 text-accent-indigo ring-1 ring-accent-indigo/20 group-hover:bg-accent-indigo/20 group-hover:scale-110 transition-all">
            <Icon className="h-5 w-5" strokeWidth={2} />
          </span>
          <span className="font-mono text-xs text-accent-teal">{text.category}</span>
        </div>
        <div className="flex gap-3 text-slate-500">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-indigo transition-colors"
              aria-label="Repositório no GitHub"
            >
              {t.projects.githubLink}
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-indigo transition-colors"
              aria-label="Demo do projeto"
            >
              {t.projects.demoLink}
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-accent-indigo transition-colors">{text.title}</h3>
      <p className="text-slate-600 mb-4 leading-relaxed">{text.description}</p>

      <ul className="space-y-1.5 mb-5 text-sm text-slate-500">
        {text.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span className="text-accent-indigo">▸</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 border border-slate-200 text-slate-600"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
