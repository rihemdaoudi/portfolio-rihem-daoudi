import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section id="apropos" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="À propos" subtitle="Qui suis-je ?" />
        <div className="prose prose-lg text-charcoal/80 max-w-none">
          <p className="leading-relaxed">
            Diplômée de l&apos;<strong>École d&apos;Ingénieurs TEK-UP</strong> en Génie Logiciel et Systèmes d&apos;information 
            (Mention Très Bien), je travaille actuellement comme <strong>Ingénieure Support Informatique</strong> chez 
            Blue Fish Consulting à Tunis.
          </p>
          <p className="leading-relaxed mt-4">
            Mon expertise couvre le développement full-stack avec une prédilection pour les technologies 
            modernes : Next.js, React, Node.js et TypeScript. J&apos;assure également la gestion d&apos;hébergements 
            sur OVH Cloud, le déploiement et la maintenance de sites web.
          </p>
          <p className="leading-relaxed mt-4">
            Au-delà du code, je m&apos;investis dans la vie associative : Vice-Présidente à JCI El Médina, 
            ancienne Trésorière IEEE TEK-UP, et ambassadrice TEDx. Sportive (boxe chinoise) et passionnée 
            de design (Canva, Photoshop), j&apos;aime créer des expériences à la fois techniques et esthétiques.
          </p>
        </div>
      </div>
    </section>
  )
}
