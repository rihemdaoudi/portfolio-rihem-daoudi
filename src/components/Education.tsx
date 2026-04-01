import SectionTitle from './SectionTitle'

const education = [
  {
    degree: 'National Engineering Degree',
    field: 'Software Engineering & Information Systems',
    institution: 'TEK-UP School of Engineering',
    location: 'Tunis, Tunisia',
    period: 'Sep 2021 – May 2024',
    mention: 'Honours',
    icon: '🎓',
    gradient: 'from-violet-500/12 to-purple-500/6',
    border: 'border-violet-400/20',
    accent: 'bg-violet-500',
  },
  {
    degree: "Bachelor's Degree",
    field: 'Applied Computer Science & Management',
    institution: 'FSEGN — Faculty of Economic Sciences and Management of Nabeul',
    location: 'Nabeul, Tunisia',
    period: 'Sep 2018 – Jun 2021',
    mention: 'Good',
    icon: '📚',
    gradient: 'from-sky-500/12 to-cyan-500/6',
    border: 'border-sky-400/20',
    accent: 'bg-sky-500',
  },
  {
    degree: 'High School Diploma — Mathematics',
    field: 'Mathematics',
    institution: 'Lycée Abdelaziz Khouja',
    location: 'Kélibia, Tunisia',
    period: 'Jun 2018',
    mention: null,
    icon: '📐',
    gradient: 'from-amber-500/12 to-orange-500/6',
    border: 'border-amber-400/20',
    accent: 'bg-amber-500',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Education" subtitle="Academic background" />

        <div className="space-y-5">
          {education.map((edu, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${edu.gradient} border ${edu.border} p-6 hover:scale-[1.01] transition-transform duration-200`}
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${edu.accent} opacity-70`} />

              <div className="flex gap-4 items-start">
                <span className="text-2xl shrink-0 mt-0.5">{edu.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="font-display font-bold text-forest dark:text-white text-sm leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-xs font-semibold text-leaf dark:text-lime mt-0.5">{edu.field}</p>
                    </div>
                    <span className="shrink-0 text-[10px] font-black text-forest/40 dark:text-white/35 uppercase tracking-wider bg-black/5 dark:bg-white/8 px-2.5 py-1 rounded-lg">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-xs text-forest/60 dark:text-white/50 mt-1.5">{edu.institution}</p>
                  <p className="text-[11px] text-forest/40 dark:text-white/30 mt-0.5">{edu.location}</p>
                  {edu.mention && (
                    <span className="inline-block mt-3 px-2.5 py-0.5 bg-black/6 dark:bg-white/8 border border-black/8 dark:border-white/10 rounded-md text-[11px] font-bold text-forest/70 dark:text-white/60">
                      {edu.mention}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
