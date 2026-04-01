import SectionTitle from './SectionTitle'
import { CALENDLY_URL } from '@/config'

const links = [
  {
    href: CALENDLY_URL,
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Book a Meeting',
    value: 'Schedule a call',
  },
  {
    href: 'mailto:daoudirihem3@gmail.com',
    external: false,
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'daoudirihem3@gmail.com',
  },
  {
    href: 'https://linkedin.com/in/rihemdaoudi',
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'Rihem Daoudi',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-forest dark:bg-darkBg" />
      <div className="absolute inset-0 dot-grid opacity-10" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-leaf/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <SectionTitle title="Let's Work Together" subtitle="Contact" />

        <p className="text-mint/65 mb-12 max-w-lg text-sm leading-relaxed -mt-4">
          Have a project in mind or want to explore a collaboration? Reach out — I&apos;m always happy to connect.
        </p>

        <div className="grid sm:grid-cols-3 gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/6 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl bg-white/10 group-hover:bg-leaf/20 flex items-center justify-center text-mint group-hover:text-lime transition-colors shrink-0">
                {link.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-mint/50 uppercase tracking-wider mb-0.5">{link.label}</p>
                <p className="text-sm font-semibold text-mint truncate">{link.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
