import SectionTitle from './SectionTitle'

const certifications = [
  {
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud',
    year: '2024',
  },
  {
    title: 'Certificat de Personal Branding',
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
    <section id="certifications" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Certifications" subtitle="Formations reconnues" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="p-6 rounded-2xl border border-charcoal/10 hover:border-accent/30 hover:shadow-md transition-all"
            >
              <h3 className="font-display font-semibold text-charcoal">
                {cert.title}
              </h3>
              <p className="text-accent text-sm mt-1">{cert.issuer}</p>
              <p className="text-charcoal/60 text-sm mt-2">{cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
