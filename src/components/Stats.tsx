import { useLanguage } from '../i18n/LanguageContext'
import Counter from './Counter'
import Reveal from './Reveal'

export default function Stats() {
  const { t } = useLanguage()

  return (
    <section className="py-16 px-6 border-y border-slate-200 bg-bg-panel">
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8 text-center">
        {t.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.1}>
            <div>
              <Counter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-xs sm:text-sm text-slate-500 font-mono">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
