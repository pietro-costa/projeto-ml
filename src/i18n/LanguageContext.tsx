import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { translations, type Language, type Translations } from './translations'

type LanguageContextValue = {
  language: Language
  toggleLanguage: () => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'portfolio-language'

function getInitialLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'pt' || stored === 'en') return stored
  return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language)
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'))

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
