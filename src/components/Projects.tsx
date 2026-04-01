import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Selected Projects" subtitle="Work I'm proud of" />
        <p className="text-forest/60 dark:text-slate-400 max-w-xl mb-12 text-sm leading-relaxed -mt-4">
          Production websites I&apos;ve built, launched, or contributed to — each crafted for
          performance, clean design, and real-world impact.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
