import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Web Projects"
          subtitle="Sites I developed and deployed"
        />
        <p className="text-forest/70 dark:text-mint/70 max-w-2xl mb-12">
          Discover the websites I&apos;ve developed or contributed to. 
          Most are built with Next.js, React and Node.js. 🚀
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
