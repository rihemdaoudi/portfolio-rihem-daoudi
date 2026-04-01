import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

const statusConfig = {
  deployed: {
    label: 'Live',
    cls: 'bg-emerald-400/12 text-emerald-600 dark:text-emerald-400 border border-emerald-400/25',
    dot: 'bg-emerald-400',
    pulse: true,
  },
  'in-progress': {
    label: 'In Development',
    cls: 'bg-amber-400/12 text-amber-600 dark:text-amber-400 border border-amber-400/25',
    dot: 'bg-amber-400',
    pulse: false,
  },
  collaboration: {
    label: 'Collaboration',
    cls: 'bg-sky-400/12 text-sky-600 dark:text-sky-400 border border-sky-400/25',
    dot: 'bg-sky-400',
    pulse: false,
  },
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const status = statusConfig[project.status]

  return (
    <article className="group relative flex flex-col bg-white/80 dark:bg-darkCard/70 rounded-2xl overflow-hidden border border-leaf/10 dark:border-white/6 shadow-card dark:shadow-card-dark hover:shadow-glow dark:hover:shadow-glow-dark hover:border-leaf/25 dark:hover:border-leaf/20 transition-all duration-400 hover:-translate-y-1">

      {/* Top accent gradient bar */}
      <div className="h-[3px] w-full bg-gradient-accent opacity-70 group-hover:opacity-100 transition-opacity" />

      <div className="p-6 flex flex-col flex-grow">

        {/* Number + status */}
        <div className="flex items-start justify-between mb-5">
          <span className="font-display font-black text-4xl leading-none text-leaf/10 dark:text-leaf/12 select-none group-hover:text-leaf/18 transition-colors">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="flex flex-col items-end gap-2">
            <span className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${status.cls}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${status.dot} ${status.pulse ? 'animate-pulse' : ''}`} />
              {status.label}
            </span>
            {project.featured && (
              <span className="px-2.5 py-0.5 text-xs font-bold text-leaf dark:text-lime bg-leaf/8 dark:bg-leaf/12 border border-leaf/20 rounded-full">
                Featured
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="font-display font-bold text-lg leading-snug text-forest dark:text-white mb-3 group-hover:text-leaf dark:group-hover:text-lime transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-forest/60 dark:text-slate-400 leading-relaxed flex-grow mb-5">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-leaf/8 dark:border-white/5">
          <p className="text-xs text-forest/40 dark:text-slate-600 italic truncate mr-3">
            {project.role}
          </p>
          {project.url && project.url !== '#' && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-bold text-leaf dark:text-lime hover:text-sage dark:hover:text-lime/80 bg-leaf/8 dark:bg-leaf/12 hover:bg-leaf/15 dark:hover:bg-leaf/18 px-3 py-1.5 rounded-lg transition-all duration-200 shrink-0"
            >
              View site
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
