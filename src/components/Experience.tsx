import SectionTitle from './SectionTitle'

const experiences = [
  {
    title: 'IT Support Engineer',
    company: 'Blue Fish Consulting',
    location: 'Tunis, Tunisia',
    period: 'Present',
    description: [
      'Management and administration of hosting and virtual servers on OVH Cloud',
      'Global IT support including bug fixes, optimization and integration',
      'Deployment, updates and maintenance of websites',
    ],
  },
  {
    title: 'Engineering Internship',
    company: 'PLM Ressources SARL',
    location: 'Bizerte, Tunisia',
    period: 'February 2024 – August 2024',
    description: [
      'Design and implementation of a stock management system with .NET Core and SQL Server',
      'Integration of SignalR for real-time synchronization of stock levels',
      'Development of dashboards adapted to user roles',
    ],
  },
  {
    title: '.NET Engineering Intern',
    company: 'All Circuits',
    location: 'Ben Arous, Tunisia',
    period: 'July 2023 – August 2023',
    description: [
      'Creation of a web solution to digitize material requests',
    ],
  },
  {
    title: 'Bachelor\'s Degree Internship',
    company: 'La Poste Tunisienne',
    location: 'Kélibia, Tunisia',
    period: 'January 2021 – April 2021',
    description: [
      'Development of a web solution for cash-on-delivery parcel management',
      'Improvement of customer satisfaction',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white/60 dark:bg-darkCard/50">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Professional Experience" subtitle="My journey" />
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-leaf/30 dark:border-darkGreen/30">
              <div className="absolute -left-2 top-0 w-3 h-3 rounded-full bg-leaf dark:bg-darkGreen" />
              <h3 className="font-display font-semibold text-lg text-forest dark:text-darkMint">
                {exp.title}
              </h3>
              <p className="text-leaf dark:text-darkMint font-medium text-sm mt-1">
                {exp.company} · {exp.location}
              </p>
              <p className="text-forest/60 dark:text-mint/60 text-sm mt-1">{exp.period}</p>
              <ul className="mt-3 space-y-1 text-forest/80 dark:text-mint/80 text-sm">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-leaf dark:text-darkGreen shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
