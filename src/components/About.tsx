import { useLanguage } from '../i18n/LanguageContext'
import Avatar from './Avatar'
import Journey from './Journey'
import Reveal from './Reveal'

export default function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-mono text-sm text-accent-teal mb-2">{t.about.sectionLabel}</h2>
          <h3 className="text-3xl font-bold mb-6">{t.about.title}</h3>
          <div className="bg-bg-card border border-white/5 rounded-2xl p-8 flex flex-col sm:flex-row gap-6 items-start">
            <Avatar size="md" />
            <p className="leading-relaxed text-slate-300">{t.about.bio}</p>
          </div>
        </Reveal>

        <Journey />
      </div>
    </section>
  )
}
