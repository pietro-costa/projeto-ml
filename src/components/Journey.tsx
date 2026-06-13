import { profile } from '../data/profile'
import Reveal from './Reveal'

export default function Journey() {
  return (
    <div className="mt-12">
      <h4 className="font-semibold text-accent-cyan mb-6 font-mono text-sm">// minha trajetória</h4>
      <ol className="relative border-l border-white/10 ml-3 space-y-10">
        {profile.journey.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.1}>
            <li className="relative pl-8">
              <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full bg-bg border-2 border-accent-cyan" />
              <span className="font-mono text-xs text-accent-green">{step.year}</span>
              <h5 className="text-lg font-bold mt-1 mb-1">{step.title}</h5>
              <p className="text-slate-400 leading-relaxed">{step.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </div>
  )
}
