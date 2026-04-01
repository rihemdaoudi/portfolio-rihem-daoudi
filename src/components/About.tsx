import SectionTitle from './SectionTitle'

const cards = [
  {
    emoji: '⚡',
    label: 'What I build',
    value: 'Full-Stack Web Apps',
    sub: 'Next.js · React · Node.js · TypeScript',
    gradient: 'from-violet-500/15 to-purple-500/10',
    border: 'border-violet-400/25',
  },
  {
    emoji: '🌍',
    label: 'Where I lead',
    value: 'VP · JCI El Médina',
    sub: 'Community builder & TEDx Ambassador',
    gradient: 'from-sky-500/15 to-cyan-500/10',
    border: 'border-sky-400/25',
  },
  {
    emoji: '🥊',
    label: 'Outside the screen',
    value: 'Chinese Boxing',
    sub: 'Design lover · Canva & Photoshop',
    gradient: 'from-pink-500/15 to-rose-500/10',
    border: 'border-pink-400/25',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 section-alt">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="About Me" subtitle="Who am I?" />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Text column */}
          <div className="lg:col-span-3 space-y-5 text-forest/70 dark:text-slate-400 leading-relaxed text-[0.97rem]">
            <p>
              I&apos;m a <strong className="text-forest dark:text-white font-bold">Fullstack Software Engineer</strong> at{' '}
              <strong className="text-forest dark:text-white font-bold">Blue Fish Consulting</strong>, working in the heart of the Medina of Tunis —
              where old-city charm meets cutting-edge web technology.
            </p>
            <p>
              Graduated with <strong className="text-forest dark:text-white font-bold">Honours</strong> from{' '}
              <strong className="text-forest dark:text-white font-bold">TEK-UP School of Engineering</strong> in Software Engineering &amp; Information Systems,
              I specialise in building performant, user-obsessed digital products with Next.js, React, Node.js and TypeScript —
              from the first line of code to production deployment.
            </p>
            <p>
              I don&apos;t just write code — I craft experiences. Whether it&apos;s an ultra-marathon registration platform running in the Sahara desert,
              a heritage showcase for Tunisian ceramics, or a community non-profit portal, I bring the same obsessive attention to detail to everything I ship.
            </p>
            <p>
              Off-screen, I channel that same discipline into{' '}
              <span className="text-forest dark:text-white font-semibold">Chinese boxing</span> and community leadership.
              As Vice President of JCI El Médina, I believe that the best engineers are also the ones who lift others up.
            </p>
          </div>

          {/* Cards column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {cards.map((c) => (
              <div
                key={c.label}
                className={`flex gap-4 p-4 rounded-2xl bg-gradient-to-br ${c.gradient} border ${c.border} backdrop-blur-sm`}
              >
                <div className="text-2xl shrink-0 mt-0.5">{c.emoji}</div>
                <div>
                  <p className="text-[10px] font-black text-forest/40 dark:text-white/35 uppercase tracking-widest mb-0.5">{c.label}</p>
                  <p className="text-sm font-bold text-forest dark:text-white">{c.value}</p>
                  <p className="text-xs text-forest/50 dark:text-white/40 mt-0.5">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
