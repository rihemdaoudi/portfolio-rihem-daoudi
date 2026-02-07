import SectionTitle from './SectionTitle'

const achievements = [
  {
    title: 'IEEE Xtreme 18.0',
    description: 'Classée 2079/8785 au niveau mondial et 182/1076 au niveau national. 2ᵉ place parmi 17 équipes TEK-UP.',
  },
  {
    title: 'Vie associative',
    items: [
      'Vice-Présidente Programmes et Relations Extérieurs — JCI El Médina (2025)',
      'Vice-Présidente Formation et Développement — JCI El Médina (2024)',
      'Trésorière — IEEE TEK-UP (2024)',
      'Ambassadrice — TSYP11 (2023)',
      'Bénévole — TEDx Street Pasha (2023)',
    ],
  },
  {
    title: 'Participations',
    items: [
      'Académie des officiers Zone A – JCI EL Médina (2025, 2024)',
      'TSYP12, TSYP11 (2024, 2023)',
      'CSTAM (2024)',
      'IEEE Tunisian Student Leadership Workshop (2024)',
      'Congrès Digital – TEK-UP (2023)',
    ],
  },
]

export default function Achievements() {
  return (
    <section id="realisations" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Réalisations & engagement" subtitle="Hors du code" />
        <div className="space-y-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-charcoal/5"
            >
              <h3 className="font-display font-semibold text-charcoal mb-3">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-charcoal/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              )}
              {item.items && (
                <ul className="space-y-2 text-charcoal/70 text-sm">
                  {item.items.map((i, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-accent shrink-0">•</span>
                      {i}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
