import { Mail } from 'lucide-react'
import { profile } from '../data/profile'
import { useLanguage } from '../i18n/LanguageContext'
import Reveal from './Reveal'
import { GithubIcon, LinkedinIcon } from './icons/BrandIcons'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer id="contato" className="py-24 px-6 border-t border-white/5">
      <Reveal className="max-w-4xl mx-auto text-center">
        <h2 className="font-mono text-sm text-accent-teal mb-2">{t.footer.sectionLabel}</h2>
        <h3 className="text-3xl font-bold mb-4">{t.footer.title}</h3>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">{t.footer.description}</p>
        <div className="flex justify-center gap-6 font-mono text-sm">
          <a
            href={`mailto:${profile.links.email}`}
            className="flex items-center gap-2 hover:text-accent-indigo transition-colors"
          >
            <Mail className="h-4 w-4" /> {t.footer.email}
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-accent-indigo transition-colors"
          >
            <LinkedinIcon /> {t.footer.linkedin}
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-accent-indigo transition-colors"
          >
            <GithubIcon /> {t.footer.github}
          </a>
        </div>
        <p className="mt-12 text-xs text-slate-500">
          © {new Date().getFullYear()} {profile.name}. {t.footer.builtWith}
        </p>
      </Reveal>
    </footer>
  )
}
