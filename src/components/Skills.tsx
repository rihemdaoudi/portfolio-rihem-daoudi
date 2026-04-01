import SectionTitle from './SectionTitle'
import { skillCategories, skillIconMap } from '@/data/skills'

const categoryMeta: Record<string, { emoji: string; gradient: string; border: string; accent: string }> = {
  'Languages': {
    emoji: '{ }',
    gradient: 'from-violet-500/10 to-purple-500/5',
    border: 'border-violet-400/20',
    accent: 'bg-violet-500',
  },
  'Frameworks & Technologies': {
    emoji: '⚙️',
    gradient: 'from-sky-500/10 to-cyan-500/5',
    border: 'border-sky-400/20',
    accent: 'bg-sky-500',
  },
  'Databases': {
    emoji: '🗄️',
    gradient: 'from-amber-500/10 to-orange-500/5',
    border: 'border-amber-400/20',
    accent: 'bg-amber-500',
  },
  'Cloud & DevOps': {
    emoji: '☁️',
    gradient: 'from-emerald-500/10 to-teal-500/5',
    border: 'border-emerald-400/20',
    accent: 'bg-emerald-500',
  },
  'Methodologies': {
    emoji: '🔄',
    gradient: 'from-pink-500/10 to-rose-500/5',
    border: 'border-pink-400/20',
    accent: 'bg-pink-500',
  },
}

function SkillPill({ skill }: { skill: string }) {
  const icon = skillIconMap[skill]
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/60 dark:bg-white/5 border border-black/6 dark:border-white/8 hover:border-leaf/30 dark:hover:border-leaf/25 hover:bg-white dark:hover:bg-white/10 transition-all duration-200 group">
      {icon ? (
        <img
          src={`https://skillicons.dev/icons?i=${icon}`}
          alt={skill}
          className="w-5 h-5 shrink-0 object-contain"
        />
      ) : (
        <span className="w-5 h-5 shrink-0 flex items-center justify-center text-xs font-black text-leaf dark:text-lime">✦</span>
      )}
      <span className="text-xs font-semibold text-forest/75 dark:text-white/70 group-hover:text-forest dark:group-hover:text-white transition-colors whitespace-nowrap">
        {skill}
      </span>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Skills" subtitle="Technical expertise" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category) => {
            const meta = categoryMeta[category.title] ?? {
              emoji: '✦',
              gradient: 'from-leaf/10 to-leaf/5',
              border: 'border-leaf/20',
              accent: 'bg-leaf',
            }
            return (
              <div
                key={category.title}
                className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${meta.gradient} border ${meta.border} p-5 hover:scale-[1.015] transition-transform duration-300`}
              >
                {/* Accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${meta.accent} opacity-60`} />

                {/* Header */}
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="text-lg leading-none">{meta.emoji}</span>
                  <h3 className="font-display font-black text-xs uppercase tracking-widest text-forest/60 dark:text-white/50">
                    {category.title}
                  </h3>
                </div>

                {/* Skill pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillPill key={skill} skill={skill} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
