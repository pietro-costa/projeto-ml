import { useLanguage } from '../i18n/LanguageContext'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle language"
      className="font-mono text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 text-slate-300 hover:border-accent-indigo hover:text-accent-indigo transition-colors"
    >
      <span className={language === 'pt' ? 'text-accent-indigo' : ''}>PT</span>
      <span className="text-slate-500 mx-1">/</span>
      <span className={language === 'en' ? 'text-accent-indigo' : ''}>EN</span>
    </button>
  )
}
