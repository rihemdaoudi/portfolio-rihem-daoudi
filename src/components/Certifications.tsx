import SectionTitle from './SectionTitle'

const certifications = [
  {
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    year: '2024',
  },
  {
    title: 'Personal Branding Certificate',
    issuer: '4ST',
    year: '2023',
  },
  {
    title: 'Python',
    issuer: 'Simplilearn',
    year: '2022',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 bg-white/60 dark:bg-darkCard/50">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Certifications" subtitle="Recognized training" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="p-6 rounded-2xl border border-emerald/20 dark:border-darkGreen/30 bg-white/50 dark:bg-darkCard/30 hover:border-leaf/40 dark:hover:border-darkGreen/50 hover:shadow-glow transition-all"
            >
              <h3 className="font-display font-semibold text-forest dark:text-darkMint">
                {cert.title}
              </h3>
              <p className="text-leaf dark:text-darkMint text-sm mt-1">{cert.issuer}</p>
              <p className="text-forest/60 dark:text-mint/60 text-sm mt-2">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
