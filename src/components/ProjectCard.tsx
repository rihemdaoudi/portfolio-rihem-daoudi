import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
}

const statusLabels = {
  deployed: { label: 'Live', color: 'bg-emerald-500/20 text-emerald-700 dark:bg-emerald-500/30 dark:text-emerald-400' },
  'in-progress': { label: 'In development', color: 'bg-amber-500/20 text-amber-700 dark:bg-amber-500/30 dark:text-amber-400' },
  collaboration: { label: 'Collaboration', color: 'bg-blue-500/20 text-blue-700 dark:bg-blue-500/30 dark:text-blue-400' },
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const status = statusLabels[project.status]

  return (
    <article className="group bg-white/70 dark:bg-darkCard/70 rounded-2xl p-6 shadow-card dark:shadow-card-dark border border-emerald/10 dark:border-darkGreen/20 hover:shadow-glow dark:hover:shadow-glow-dark hover:border-leaf/30 dark:hover:border-darkGreen/40 transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between gap-3 mb-4">
          <h3 className="font-display font-semibold text-lg text-forest dark:text-darkMint group-hover:text-leaf dark:group-hover:text-darkMint transition-colors">
            {project.title}
          </h3>
          <span className={`px-3 py-1 rounded-full text-xs font-medium shrink-0 ${status.color}`}>
            {status.label}
          </span>
        </div>

        <p className="text-forest/70 dark:text-mint/70 text-sm leading-relaxed mb-4 flex-grow">
          {project.description}
        </p>

        <div className="space-y-3">
          <p className="text-xs text-forest/60 dark:text-mint/60">
            <span className="font-medium">Role:</span> {project.role}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 bg-emerald/10 dark:bg-darkGreen/20 rounded-md text-xs text-forest/80 dark:text-mint/80"
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
              className="inline-flex items-center gap-1.5 text-sm font-medium text-leaf dark:text-darkMint hover:text-emerald dark:hover:text-darkMint transition-colors mt-2"
            >
              Visit the site
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
