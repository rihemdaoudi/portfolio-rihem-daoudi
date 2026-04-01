import SectionTitle from './SectionTitle'

const certifications = [
  {
    title: 'Hashgraph Developer Course',
    issuer: 'Hedera',
    year: '2025',
    icon: '🔗',
  },
  {
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    year: '2024',
    icon: '🤖',
  },
  {
    title: 'Personal Branding Certificate',
    issuer: '4ST',
    year: '2023',
    icon: '🏅',
  },
  {
    title: 'Python',
    issuer: 'Simplilearn',
    year: '2022',
    icon: '🐍',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 section-alt">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Certifications" subtitle="Recognised training" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="relative overflow-hidden bg-white/80 dark:bg-darkCard/70 rounded-2xl p-6 border border-leaf/10 dark:border-white/6 shadow-card dark:shadow-card-dark hover:shadow-glow dark:hover:shadow-glow-dark hover:border-leaf/25 dark:hover:border-leaf/20 transition-all duration-300"
            >
              {/* Subtle top gradient */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-accent opacity-60" />

              <div className="text-3xl mb-4">{cert.icon}</div>
              <h3 className="font-display font-bold text-forest dark:text-white text-sm leading-snug">
                {cert.title}
              </h3>
              <p className="text-leaf dark:text-lime text-xs font-semibold mt-2">{cert.issuer}</p>
              <span className="inline-block mt-3 px-2.5 py-0.5 bg-leaf/8 dark:bg-leaf/12 border border-leaf/15 dark:border-leaf/20 rounded-md text-xs font-bold text-leaf/80 dark:text-lime/70">
                {cert.year}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
