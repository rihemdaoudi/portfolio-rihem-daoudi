import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white/60 dark:bg-darkCard/50">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="About Me" subtitle="Who am I?" />
        <div className="prose prose-lg text-forest/90 dark:text-mint/90 max-w-none">
          <p className="leading-relaxed">
            Graduated from <strong>TEK-UP School of Engineering</strong> in Software Engineering and Information Systems 
            (Honors), I currently work as an <strong>IT Support Engineer</strong> at 
            Blue Fish Consulting in Tunis.
          </p>
          <p className="leading-relaxed mt-4">
            My expertise covers full-stack development with a focus on modern technologies: 
            Next.js, React, Node.js and TypeScript. I also manage hosting on OVH Cloud, 
            deployment and maintenance of websites.
          </p>
          <p className="leading-relaxed mt-4">
            Beyond code, I&apos;m passionate about community involvement: Vice President at JCI El Médina, 
            former Treasurer at IEEE TEK-UP, and TEDx ambassador. A sports enthusiast (Chinese boxing) and 
            design lover (Canva, Photoshop), I enjoy creating experiences that are both technical and beautiful. ✨
          </p>
        </div>
      </div>
    </section>
  )
}
