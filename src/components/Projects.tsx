import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section id="projets" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Projets web"
          subtitle="Sites développés et déployés"
        />
        <p className="text-charcoal/70 max-w-2xl mb-12">
          Découvrez les sites web que j&apos;ai développés ou auxquels j&apos;ai contribué. 
          La plupart sont réalisés avec Next.js, React et Node.js.
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
