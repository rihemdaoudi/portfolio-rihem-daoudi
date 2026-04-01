import { projects } from '@/data/projects'
import DesktopMockup from '@/components/DesktopMockup'
import Link from 'next/link'

export const metadata = {
  title: 'Projects — Rihem Daoudi',
  description: 'Discover the web projects built and deployed by Rihem Daoudi — Full-Stack Engineer.',
}

const statusConfig = {
  deployed: {
    label: 'Live',
    cls: 'bg-emerald-500/12 text-emerald-700 dark:text-emerald-400 border border-emerald-500/25',
    dot: 'bg-emerald-500 animate-pulse',
  },
  'in-progress': {
    label: 'In Development',
    cls: 'bg-amber-500/12 text-amber-700 dark:text-amber-400 border border-amber-500/25',
    dot: 'bg-amber-500',
  },
  collaboration: {
    label: 'Collaboration',
    cls: 'bg-sky-500/12 text-sky-700 dark:text-sky-400 border border-sky-500/25',
    dot: 'bg-sky-500',
  },
}

export default function ProjectsPage() {
  return (
    /* Light: soft lavender — Dark: deep navy */
    <div className="min-h-screen bg-mint dark:bg-darkBg transition-colors">

      {/* Subtle dot grid */}
      <div className="fixed inset-0 dot-grid opacity-40 dark:opacity-60 pointer-events-none" />

      {/* Gradient orbs — barely visible in light, vivid in dark */}
      <div className="fixed -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-leaf/10 dark:bg-leaf/15 blur-[140px] pointer-events-none" />
      <div className="fixed -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-accent/8 dark:bg-accent/12 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24">

        {/* ── Page header ─────────────────────── */}
        <div className="mb-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-forest/50 dark:text-white/40 hover:text-leaf dark:hover:text-white/70 mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back home
          </Link>

          <p className="text-xs font-black text-accent uppercase tracking-[0.22em] mb-3">
            Work I&apos;m proud of
          </p>
          <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-forest dark:text-white leading-tight">
            Selected <span className="gradient-text">Projects</span>
          </h1>
          <div className="accent-line mt-5" />
          <p className="mt-6 text-forest/55 dark:text-white/50 max-w-xl text-sm leading-relaxed">
            Production websites I&apos;ve built, launched, or contributed to — crafted for performance,
            clean design, and real-world impact. Hover the screen to visit the live site.
          </p>
        </div>

        {/* ── Projects list ────────────────────── */}
        <div className="space-y-20">
          {projects.map((project, index) => {
            const status = statusConfig[project.status]
            const isEven = index % 2 === 0

            return (
              <div
                key={project.title}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-10 lg:gap-16 items-center`}
              >
                {/* Desktop mockup */}
                <div className="w-full lg:w-3/5 flex-shrink-0">
                  {project.url && project.url !== '#' ? (
                    <DesktopMockup url={project.url} title={project.title} accent={String(index)} />
                  ) : (
                    <div className="relative rounded-xl overflow-hidden bg-forest/8 dark:bg-white/4 border border-leaf/15 dark:border-white/10 aspect-[16/9] flex items-center justify-center">
                      <span className="text-forest/20 dark:text-white/20 font-display font-black text-2xl">{project.title}</span>
                    </div>
                  )}
                </div>

                {/* Project details */}
                <div className="flex-1 min-w-0">
                  {/* Index */}
                  <span className="font-display font-black text-5xl text-leaf/10 dark:text-white/8 leading-none select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Badges */}
                  <div className="flex items-center gap-3 mt-2 mb-4 flex-wrap">
                    <span className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${status.cls}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                      {status.label}
                    </span>
                    {project.featured && (
                      <span className="px-3 py-1 text-xs font-black text-accent bg-accent/10 border border-accent/25 rounded-full">
                        ✦ Featured
                      </span>
                    )}
                  </div>

                  <h2 className="font-display font-black text-2xl sm:text-3xl text-forest dark:text-white mb-3 leading-tight">
                    {project.title}
                  </h2>

                  <p className="text-forest/60 dark:text-white/55 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>

                  {/* Role + CTA */}
                  <div className="flex items-center gap-4 flex-wrap">
                    <p className="text-xs text-forest/40 dark:text-white/30 italic">{project.role}</p>
                    {project.url && project.url !== '#' && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-gradient flex items-center gap-2 text-sm font-bold px-5 py-2 rounded-lg"
                      >
                        Visit site
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
