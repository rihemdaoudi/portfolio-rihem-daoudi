import SectionTitle from './SectionTitle'
import { skillCategories } from '@/data/skills'
import SkillIcon from './SkillIcon'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Skills" subtitle="Technical expertise" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white/80 dark:bg-darkCard/60 rounded-2xl p-6 border border-leaf/10 dark:border-white/6 shadow-card dark:shadow-card-dark hover:shadow-glow dark:hover:shadow-glow-dark hover:border-leaf/25 dark:hover:border-leaf/20 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1.5 h-6 rounded-full bg-gradient-accent" />
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-forest dark:text-white/80">
                  {category.title}
                </h3>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {category.skills.map((skill) => (
                  <SkillIcon key={skill} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
