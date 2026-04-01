import SectionTitle from './SectionTitle'

const achievements = [
  {
    icon: '🏆',
    title: 'IEEE Xtreme 18.0',
    description: 'Ranked 2079/8785 globally and 182/1076 nationally. 2nd place among 17 TEK-UP teams.',
    items: null,
  },
  {
    icon: '🎯',
    title: 'Community Leadership',
    description: null,
    items: [
      'Vice President of Programs & External Relations — JCI El Médina (2025)',
      'Media Advisor — JCI El Médina (2026)',
      'Vice President of Training & Development — JCI El Médina (2024)',
      'Treasurer — IEEE TEK-UP (2024)',
      'Ambassador — TSYP11 (2023)',
      'Volunteer — TEDx Street Pasha (2023)',
      'Member — AEK · Association de l\'Environnement de Kélibia',
      'Observer Member — JCI El Médina (2021)',
    ],
  },
  {
    icon: '📌',
    title: 'Events & Participations',
    description: null,
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
        <div className="space-y-5">
          {achievements.map((item, index) => (
            <div
              key={index}
              className="bg-white/80 dark:bg-darkCard/70 rounded-2xl p-6 border border-leaf/10 dark:border-white/6 shadow-card dark:shadow-card-dark hover:border-leaf/20 dark:hover:border-leaf/20 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{item.icon}</span>
                <h3 className="font-display font-bold text-forest dark:text-white">{item.title}</h3>
              </div>
              {item.description && (
                <p className="text-forest/65 dark:text-slate-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              )}
              {item.items && (
                <ul className="space-y-2">
                  {item.items.map((i, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-forest/65 dark:text-slate-400">
                      <span className="text-leaf dark:text-lime shrink-0 mt-0.5">›</span>
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
