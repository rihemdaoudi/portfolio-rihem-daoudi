import SectionTitle from './SectionTitle'
import { CALENDLY_URL } from '@/config'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-forest dark:bg-darkBg text-mint">
      <div className="max-w-4xl mx-auto">
        <SectionTitle title="Contact" subtitle="Let&apos;s work together" />
        <p className="text-mint/80 mb-10 max-w-xl">
          Have a project in mind? I&apos;d love to chat! Feel free to reach out through the channels below. 
          Or book a meeting directly — I&apos;m always happy to connect! 💚
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-6">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-mint/70">Book a Meeting</p>
              <p className="font-medium">Schedule a call with me</p>
            </div>
          </a>
          <a
            href="mailto:daoudirihem3@gmail.com"
            className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-mint/70">Email</p>
              <p className="font-medium">daoudirihem3@gmail.com</p>
            </div>
          </a>
          <a
            href="tel:+21626966356"
            className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-mint/70">Phone</p>
              <p className="font-medium">+216 26 966 356</p>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/rihemdaoudi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <svg className="w-6 h-6 text-mint" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </div>
            <div>
              <p className="text-sm text-mint/70">LinkedIn</p>
              <p className="font-medium">Rihem Daoudi</p>
            </div>
          </a>
        </div>
        <p className="mt-8 text-mint/60 text-sm">
          📍 Kélibia, Tunisia
        </p>
      </div>
    </section>
  )
}
