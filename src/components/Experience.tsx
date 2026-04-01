import SectionTitle from './SectionTitle'

const experiences = [
  {
    title: 'IT Support Engineer',
    company: 'Blue Fish Consulting',
    location: 'Tunis, Tunisia',
    period: 'Present',
    current: true,
    description: [
      'Management and administration of hosting and virtual servers on OVH Cloud',
      'Global IT support including bug fixes, optimization and integration',
      'Deployment, updates and maintenance of production websites',
    ],
    technologies: ['Next.js', 'OVH Cloud', 'Linux', 'Nginx', 'GitHub'],
  },
  {
    title: 'Engineering Internship',
    company: 'PLM Ressources SARL',
    location: 'Bizerte, Tunisia',
    period: 'Feb 2024 – Aug 2024',
    current: false,
    description: [
      'Design and implementation of a stock management system with .NET Core and SQL Server',
      'Integration of SignalR for real-time synchronization of stock levels',
      'Development of dashboards adapted to user roles',
    ],
    technologies: ['.NET Core', 'C#', 'SQL Server', 'SignalR', 'Angular'],
  },
  {
    title: '.NET Engineering Intern',
    company: 'All Circuits',
    location: 'Ben Arous, Tunisia',
    period: 'Jul 2023 – Aug 2023',
    current: false,
    description: [
      'Creation of a web solution to digitize internal material requests',
    ],
    technologies: ['ASP.NET Core MVC', 'C#', 'SQL Server', 'JavaScript'],
  },
  {
    title: "Bachelor's Degree Internship",
    company: 'La Poste Tunisienne',
    location: 'Kélibia, Tunisia',
    period: 'Jan 2021 – Apr 2021',
    current: false,
    description: [
      'Development of a web solution for cash-on-delivery parcel management',
      'Improvement of internal workflows and customer satisfaction',
    ],
    technologies: ['Java', 'MySQL', 'HTML/CSS', 'JavaScript'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 section-alt">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Professional Experience" subtitle="My journey" />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-leaf via-leaf/40 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div key={index} className="sm:pl-10 relative">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 hidden sm:flex -translate-x-1/2">
                  <div className={`w-3 h-3 rounded-full border-2 border-leaf bg-white dark:bg-darkBg ${exp.current ? 'shadow-[0_0_8px_rgba(99,102,241,0.8)]' : ''}`} />
                </div>

                <div className="bg-white/80 dark:bg-darkCard/60 rounded-2xl p-6 border border-leaf/10 dark:border-white/6 shadow-card dark:shadow-card-dark hover:border-leaf/20 dark:hover:border-leaf/15 transition-all duration-200">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-display font-bold text-base text-forest dark:text-white">
                          {exp.title}
                        </h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 bg-leaf/10 dark:bg-leaf/15 text-leaf dark:text-lime text-xs font-bold rounded-full border border-leaf/20">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-leaf dark:text-lime font-semibold text-sm mt-1">
                        {exp.company}
                        <span className="text-forest/40 dark:text-white/30 font-normal"> · {exp.location}</span>
                      </p>
                    </div>
                    <span className="text-xs font-medium text-forest/45 dark:text-slate-500 shrink-0 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  {/* Description */}
                  <ul className="space-y-1.5 mb-5">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-forest/65 dark:text-slate-400">
                        <span className="text-leaf dark:text-lime shrink-0 mt-0.5 font-bold">›</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
