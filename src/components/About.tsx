import SectionTitle from './SectionTitle'

const highlights = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    label: 'Education',
    value: 'TEK-UP School of Engineering',
    sub: 'Software Engineering & Information Systems — Honours',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Current Role',
    value: 'IT Support Engineer',
    sub: 'Blue Fish Consulting · Tunis',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Community',
    value: 'VP · JCI El Médina',
    sub: 'IEEE TEK-UP · TEDx Ambassador',
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 section-alt">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="About Me" subtitle="Who am I?" />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Text column */}
          <div className="lg:col-span-3 space-y-5 text-forest/75 dark:text-slate-400 leading-relaxed text-[0.97rem]">
            <p>
              Graduated from <strong className="font-semibold text-forest dark:text-white">TEK-UP School of Engineering</strong> in
              Software Engineering and Information Systems with Honours. Currently working as an{' '}
              <strong className="font-semibold text-forest dark:text-white">IT Support Engineer</strong> at Blue Fish Consulting in Tunis.
            </p>
            <p>
              My expertise is in full-stack development with modern technologies — Next.js, React,
              Node.js and TypeScript. I also manage hosting on OVH Cloud and handle deployment and
              maintenance of production websites.
            </p>
            <p>
              Beyond the code, I&apos;m involved in community building as Vice President at JCI El Médina,
              former Treasurer at IEEE TEK-UP, and TEDx Ambassador. Sports enthusiast (Chinese boxing)
              and design lover — I enjoy creating experiences that are both technical and beautiful.
            </p>
          </div>

          {/* Highlights column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex gap-4 p-4 rounded-xl bg-white/70 dark:bg-darkCard/70 border border-leaf/10 dark:border-white/6 shadow-card dark:shadow-card-dark"
              >
                <div className="w-10 h-10 rounded-lg bg-leaf/10 dark:bg-leaf/15 flex items-center justify-center text-leaf dark:text-lime shrink-0">
                  {h.icon}
                </div>
                <div>
                  <p className="text-xs font-bold text-leaf/70 dark:text-lime/60 uppercase tracking-wider mb-0.5">{h.label}</p>
                  <p className="text-sm font-semibold text-forest dark:text-white">{h.value}</p>
                  <p className="text-xs text-forest/55 dark:text-slate-500 mt-0.5">{h.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
