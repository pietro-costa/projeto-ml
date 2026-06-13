import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#sobre', label: t.nav.sobre },
    { href: '#skills', label: t.nav.skills },
    { href: '#projetos', label: t.nav.projetos },
    { href: '#contato', label: t.nav.contato },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/90 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#topo" className="font-mono text-lg font-bold text-gradient">
          &lt;dev/data&gt;
        </a>
        <div className="flex items-center gap-8">
          <ul className="hidden sm:flex gap-8 text-sm font-medium text-slate-300">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-accent-indigo transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle />
        </div>
      </nav>
    </header>
  )
}
