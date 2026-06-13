import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-mono text-sm text-accent-green mb-2">03. Projetos</h2>
          <h3 className="text-3xl font-bold mb-10">Ciência de Dados na prática</h3>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {[...featured, ...rest].map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08} className={project.featured ? 'sm:col-span-2' : ''}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
