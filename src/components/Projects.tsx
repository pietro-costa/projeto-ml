import { projects } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'

export default function Projects() {
  const { t } = useLanguage()
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="font-mono text-sm text-accent-teal mb-2">{t.projects.sectionLabel}</h2>
          <h3 className="text-3xl font-bold mb-10">{t.projects.title}</h3>
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
