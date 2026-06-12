import { profile } from '../data/profile'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-bg-panel border-y border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-sm text-accent-green mb-2">02. Stack</h2>
        <h3 className="text-3xl font-bold mb-10">Ferramentas e tecnologias</h3>

        <div className="grid sm:grid-cols-2 gap-6">
          {Object.entries(profile.skills).map(([category, items]) => (
            <div key={category} className="bg-bg-card border border-white/5 rounded-2xl p-6">
              <h4 className="font-semibold text-accent-cyan mb-4">{category}</h4>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
