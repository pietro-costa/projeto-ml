import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const TYPE_SPEED = 28
const LINE_PAUSE = 450

export default function Terminal() {
  const { t, language } = useLanguage()
  const lines = t.hero.terminalLines
  const [displayed, setDisplayed] = useState<string[]>([])
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    setDisplayed([])
    setLineIndex(0)
    setCharIndex(0)
  }, [language])

  useEffect(() => {
    if (lineIndex >= lines.length) return

    const currentLine = lines[lineIndex]

    if (charIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev]
          next[lineIndex] = currentLine.slice(0, charIndex + 1)
          return next
        })
        setCharIndex((c) => c + 1)
      }, TYPE_SPEED)
      return () => clearTimeout(timeout)
    }

    const timeout = setTimeout(() => {
      setLineIndex((l) => l + 1)
      setCharIndex(0)
    }, LINE_PAUSE)
    return () => clearTimeout(timeout)
  }, [charIndex, lineIndex, lines])

  const isDone = lineIndex >= lines.length

  return (
    <div className="w-full max-w-xl mx-auto rounded-xl border border-white/10 bg-bg-card/80 backdrop-blur-sm shadow-2xl shadow-black/40 text-left overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-white/[0.02]">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
        <span className="h-3 w-3 rounded-full bg-green-400/70" />
        <span className="ml-3 font-mono text-xs text-slate-500">portfolio.py — bash</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed min-h-[200px]">
        {lines.map((line, i) => {
          const isCommand = line.startsWith('$')
          const text = displayed[i] ?? ''
          if (!text) return null
          return (
            <div key={i} className={isCommand ? 'text-slate-200' : 'text-accent-teal pl-4'}>
              {text}
              {i === lineIndex && !isDone && (
                <span className="inline-block w-2 h-4 ml-0.5 bg-accent-indigo animate-pulse align-middle" />
              )}
            </div>
          )
        })}
        {isDone && <span className="inline-block w-2 h-4 ml-1 bg-accent-indigo animate-pulse align-middle" />}
      </div>
    </div>
  )
}
