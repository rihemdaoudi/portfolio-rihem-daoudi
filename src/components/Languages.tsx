import SectionTitle from './SectionTitle'

const languages = [
  {
    name: 'Arabic',
    level: 'Native',
    label: 'Mother tongue',
    proficiency: 100,
    flag: '🇹🇳',
    gradient: 'from-red-500 to-rose-600',
  },
  {
    name: 'English',
    level: 'B2',
    label: 'Upper Intermediate',
    proficiency: 70,
    flag: '🇬🇧',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    name: 'French',
    level: 'B2',
    label: 'Upper Intermediate',
    proficiency: 70,
    flag: '🇫🇷',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    name: 'German',
    level: 'A1',
    label: 'Beginner',
    proficiency: 20,
    flag: '🇩🇪',
    gradient: 'from-amber-500 to-yellow-600',
  },
]

export default function Languages() {
  return (
    <section id="languages" className="py-24 px-6 section-alt">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Languages" subtitle="Communication across cultures" />

        <div className="grid sm:grid-cols-2 gap-5">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="bg-white/80 dark:bg-darkCard/70 rounded-2xl p-5 border border-leaf/10 dark:border-white/6 shadow-card dark:shadow-card-dark hover:border-leaf/20 dark:hover:border-leaf/20 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{lang.flag}</span>
                  <div>
                    <p className="font-display font-bold text-forest dark:text-white text-sm">{lang.name}</p>
                    <p className="text-[11px] text-forest/45 dark:text-white/35 mt-0.5">{lang.label}</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full bg-leaf/8 dark:bg-leaf/12 border border-leaf/15 dark:border-leaf/20 text-xs font-black text-leaf dark:text-lime tracking-wide">
                  {lang.level}
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 rounded-full bg-black/6 dark:bg-white/8 overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${lang.gradient}`}
                  style={{ width: `${lang.proficiency}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
