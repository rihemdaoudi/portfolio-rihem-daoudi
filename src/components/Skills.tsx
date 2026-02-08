import SectionTitle from './SectionTitle'
import { skillCategories } from '@/data/skills'
import SkillIcon from './SkillIcon'

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Skills" subtitle="My technical expertise" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white/70 dark:bg-darkCard/70 rounded-2xl p-6 shadow-card dark:shadow-card-dark border border-emerald/10 dark:border-darkGreen/20 hover:shadow-glow dark:hover:shadow-glow-dark transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-forest dark:text-darkMint mb-5">
                {category.title}
              </h3>
              <div className="grid grid-cols-3 gap-3">
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
