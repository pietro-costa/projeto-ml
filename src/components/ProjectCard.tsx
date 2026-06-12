import type { Project } from '../data/projects'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={`group relative flex flex-col rounded-2xl border border-white/5 bg-bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent-cyan/40 hover:shadow-xl hover:shadow-accent-cyan/10 ${
        project.featured ? 'sm:col-span-2 ring-1 ring-accent-purple/30' : ''
      }`}
    >
      {project.featured && (
        <span className="absolute -top-3 left-6 px-3 py-1 text-xs font-mono font-semibold rounded-full bg-accent-purple text-bg">
          Projeto em destaque
        </span>
      )}

      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-xs text-accent-green">{project.category}</span>
        <div className="flex gap-3 text-slate-400">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-cyan transition-colors"
              aria-label="Repositório no GitHub"
            >
              GitHub ↗
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent-cyan transition-colors"
              aria-label="Demo do projeto"
            >
              Demo ↗
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-accent-cyan transition-colors">
        {project.title}
      </h3>
      <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>

      <ul className="space-y-1.5 mb-5 text-sm text-slate-400">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2">
            <span className="text-accent-cyan">▸</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  )
}
