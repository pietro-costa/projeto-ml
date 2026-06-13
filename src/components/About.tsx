import { profile } from '../data/profile'
import Journey from './Journey'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-mono text-sm text-accent-green mb-2">01. Sobre mim</h2>
          <h3 className="text-3xl font-bold mb-6">Da análise à ciência de dados</h3>
          <div className="bg-bg-card border border-white/5 rounded-2xl p-8 leading-relaxed text-slate-300">
            <p>{profile.bio}</p>
          </div>
        </Reveal>

        <Journey />
      </div>
    </section>
  )
}
