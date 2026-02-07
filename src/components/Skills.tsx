import SectionTitle from './SectionTitle'

const skillCategories = [
  {
    title: 'Langages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C#', 'Java', 'PHP'],
  },
  {
    title: 'Frameworks & Technologies',
    skills: ['Next.js', 'React', 'Node.js', 'Angular', 'ASP.NET Core MVC', 'Spring Boot'],
  },
  {
    title: 'Bases de données',
    skills: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB'],
  },
  {
    title: 'Cloud & DevOps',
    skills: ['AWS', 'OVH Cloud', 'Jenkins', 'GitHub', 'Postman'],
  },
  {
    title: 'Méthodologies',
    skills: ['Agile', 'Scrum'],
  },
]

export default function Skills() {
  return (
    <section id="competences" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Compétences" subtitle="Mon expertise technique" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-charcoal/5 hover:shadow-md transition-shadow"
            >
              <h3 className="font-display font-semibold text-charcoal mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-charcoal/5 rounded-lg text-sm text-charcoal/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
