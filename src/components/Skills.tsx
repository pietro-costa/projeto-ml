import { Code2, Brain, Sparkles, BarChart3, type LucideIcon } from 'lucide-react'
import { profile } from '../data/profile'
import Reveal from './Reveal'

const categoryIcons: Record<string, LucideIcon> = {
  'Linguagens & Ferramentas': Code2,
  'Machine Learning': Brain,
  'NLP & IA Generativa': Sparkles,
  'Visualização & Análise': BarChart3,
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-bg-panel border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-mono text-sm text-accent-green mb-2">02. Stack</h2>
          <h3 className="text-3xl font-bold mb-10">Ferramentas e tecnologias</h3>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {Object.entries(profile.skills).map(([category, items], i) => {
            const Icon = categoryIcons[category] ?? Code2
            return (
              <Reveal key={category} delay={i * 0.08}>
                <div className="bg-bg-card border border-white/5 rounded-2xl p-6 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-cyan/10 text-accent-cyan ring-1 ring-accent-cyan/20">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                    <h4 className="font-semibold text-accent-cyan">{category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
                      <span
                        key={item}
                        className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300"
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
