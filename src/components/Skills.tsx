import { Code2, Brain, Sparkles, BarChart3, type LucideIcon } from 'lucide-react'
import { profile, type SkillCategory } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from './Reveal'

const categoryIcons: Record<SkillCategory, LucideIcon> = {
  languages: Code2,
  ml: Brain,
  nlp: Sparkles,
  viz: BarChart3,
}

export default function Skills() {
  const { t } = useLanguage()

  return (
    <section id="skills" className="py-24 px-6 bg-bg-panel border-y border-slate-200">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-mono text-sm text-accent-teal mb-2">{t.skills.sectionLabel}</h2>
          <h3 className="text-3xl font-bold mb-10">{t.skills.title}</h3>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {(Object.entries(profile.skills) as [SkillCategory, readonly string[]][]).map(([category, items], i) => {
            const Icon = categoryIcons[category]
            return (
              <Reveal key={category} delay={i * 0.08}>
                <div className="bg-bg-card border border-slate-200 shadow-sm rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-indigo/10 text-accent-indigo ring-1 ring-accent-indigo/20">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <h4 className="font-semibold text-accent-indigo">{t.skills.categories[category]}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono px-3 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
