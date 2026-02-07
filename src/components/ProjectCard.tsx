import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

const statusLabels = {
  deployed: { label: 'En ligne', color: 'bg-emerald-500/20 text-emerald-700' },
  'in-progress': { label: 'En développement', color: 'bg-amber-500/20 text-amber-700' },
  collaboration: { label: 'Collaboration', color: 'bg-blue-500/20 text-blue-700' },
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const status = statusLabels[project.status]

  return (
    <article className="group bg-white rounded-2xl p-6 shadow-sm border border-charcoal/5 hover:shadow-lg hover:border-accent/20 transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="font-display font-semibold text-lg text-charcoal group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 ${status.color}`}>
            {status.label}
          </span>
        </div>

        <p className="text-charcoal/70 text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        <div className="space-y-3">
          <p className="text-xs text-charcoal/60">
            <span className="font-medium">Rôle :</span> {project.role}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 bg-charcoal/5 rounded-md text-xs text-charcoal/80"
              >
                {tech}
              </span>
            ))}
          </div>
          {project.url && project.url !== '#' && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accentLight transition-colors mt-2"
            >
              Visiter le site
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
