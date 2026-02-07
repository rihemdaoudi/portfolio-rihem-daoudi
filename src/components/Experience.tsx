import SectionTitle from './SectionTitle'

const experiences = [
  {
    title: 'Ingénieure Support Informatique',
    company: 'Blue Fish Consulting',
    location: 'Tunis, Tunisie',
    period: 'Présent',
    description: [
      'Gestion et administration des hébergements et serveurs virtuels sur OVH Cloud',
      'Support IT global incluant la correction de bugs, l\'optimisation et l\'intégration',
      'Déploiement, mise à jour et maintenance de sites web',
    ],
  },
  {
    title: 'Stage Ingénieur de fin d\'études',
    company: 'PLM Ressources SARL',
    location: 'Bizerte, Tunisie',
    period: 'Février 2024 – Août 2024',
    description: [
      'Conception et implémentation d\'un système de gestion des stocks avec .NET Core et SQL Server',
      'Intégration de SignalR pour la synchronisation en temps réel des niveaux de stock',
      'Développement de tableaux de bord adaptés aux rôles des utilisateurs',
    ],
  },
  {
    title: 'Stage Ingénieur .NET',
    company: 'All Circuits',
    location: 'Ben Arous, Tunisie',
    period: 'Juillet 2023 – Août 2023',
    description: [
      'Création d\'une solution web pour digitaliser les demandes de matériel',
    ],
  },
  {
    title: 'Stage fin d\'études de la licence',
    company: 'La Poste Tunisienne',
    location: 'Kélibia, Tunisie',
    period: 'Janvier 2021 – Avril 2021',
    description: [
      'Développement d\'une solution web pour la gestion des colis contre-remboursement',
      'Amélioration de la satisfaction client',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Expérience professionnelle" subtitle="Parcours" />
        <div className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-accent/30">
              <div className="absolute -left-2 top-0 w-3 h-3 rounded-full bg-accent" />
              <h3 className="font-display font-semibold text-lg text-charcoal">
                {exp.title}
              </h3>
              <p className="text-accent font-medium text-sm mt-1">
                {exp.company} · {exp.location}
              </p>
              <p className="text-charcoal/60 text-sm mt-1">{exp.period}</p>
              <ul className="mt-3 space-y-1 text-charcoal/80 text-sm">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-accent">•</span>
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
