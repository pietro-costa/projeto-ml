import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="topo" className="relative pt-40 pb-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_60%,transparent_100%)]" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-accent-cyan/20 blur-3xl animate-glow" />

      <div className="relative max-w-4xl mx-auto text-center">
        <p className="font-mono text-sm text-accent-cyan mb-4 animate-fade-up">
          {'// '}{profile.role}
        </p>
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6 animate-fade-up [animation-delay:100ms]">
          Olá, eu sou <span className="text-gradient">{profile.name}</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 animate-fade-up [animation-delay:200ms]">
          {profile.tagline}
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-up [animation-delay:300ms]">
          <a
            href="#projetos"
            className="px-6 py-3 rounded-lg bg-accent-cyan text-bg font-semibold hover:bg-accent-green transition-colors shadow-lg shadow-accent-cyan/20"
          >
            Ver Projetos
          </a>
          <a
            href="#contato"
            className="px-6 py-3 rounded-lg border border-white/10 text-slate-200 font-semibold hover:border-accent-cyan hover:text-accent-cyan transition-colors"
          >
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  )
}
