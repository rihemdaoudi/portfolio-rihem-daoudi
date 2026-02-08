import SectionTitle from './SectionTitle'

const achievements = [
  {
    title: 'IEEE Xtreme 18.0',
    description: 'Ranked 2079/8785 globally and 182/1076 nationally. 2nd place among 17 TEK-UP teams.',
  },
  {
    title: 'Community Involvement',
    items: [
      'Vice President of Programs & External Relations — JCI El Médina (2025)',
      'Vice President of Training & Development — JCI El Médina (2024)',
      'Treasurer — IEEE TEK-UP (2024)',
      'Ambassador — TSYP11 (2023)',
      'Volunteer — TEDx Street Pasha (2023)',
    ],
  },
  {
    title: 'Participations',
    items: [
      'Officers Academy Zone A – JCI EL Médina (2025, 2024)',
      'TSYP12, TSYP11 (2024, 2023)',
      'CSTAM (2024)',
      'IEEE Tunisian Student Leadership Workshop (2024)',
      'Digital Congress – TEK-UP (2023)',
    ],
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Achievements & Engagement" subtitle="Beyond the code" />
        <div className="space-y-8">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 dark:bg-darkCard/70 rounded-2xl p-6 shadow-card dark:shadow-card-dark border border-emerald/10 dark:border-darkGreen/20"
            >
              <h3 className="font-display font-semibold text-forest dark:text-darkMint mb-3">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-forest/70 dark:text-mint/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              )}
              {item.items && (
                <ul className="space-y-2 text-forest/70 dark:text-mint/70 text-sm">
                  {item.items.map((i, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="text-leaf dark:text-darkGreen shrink-0">•</span>
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
