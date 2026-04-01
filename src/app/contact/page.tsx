'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CALENDLY_URL } from '@/config'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

const contactLinks = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Book a Call',
    value: 'calendly.com/rihem-daoudi',
    href: CALENDLY_URL,
    external: true,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'daoudirihem3@gmail.com',
    href: 'mailto:daoudirihem3@gmail.com',
    external: false,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/rihemdaoudi',
    href: 'https://linkedin.com/in/rihemdaoudi',
    external: true,
  },
]

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('https://formsubmit.co/ajax/daoudirihem3@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Portfolio: ${form.subject}` }),
      })
      setStatus(res.ok ? 'success' : 'error')
      if (res.ok) setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    /* Light: soft lavender — Dark: deep navy */
    <div className="min-h-screen bg-mint dark:bg-darkBg transition-colors">

      {/* Dot grid */}
      <div className="fixed inset-0 dot-grid opacity-40 dark:opacity-60 pointer-events-none" />

      {/* Orbs */}
      <div className="fixed -top-40 right-0 w-[500px] h-[500px] rounded-full bg-accent/8 dark:bg-accent/12 blur-[140px] pointer-events-none" />
      <div className="fixed bottom-0 -left-40 w-[500px] h-[500px] rounded-full bg-leaf/10 dark:bg-leaf/12 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24">

        {/* ── Page header ─────────────────────── */}
        <div className="mb-14">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-forest/50 dark:text-white/40 hover:text-leaf dark:hover:text-white/70 mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back home
          </Link>
          <p className="text-xs font-black text-accent uppercase tracking-[0.22em] mb-3">Let&apos;s talk</p>
          <h1 className="font-display font-black text-4xl sm:text-5xl text-forest dark:text-white leading-tight">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <div className="accent-line mt-5" />
          <p className="mt-5 text-forest/55 dark:text-white/50 max-w-lg text-sm leading-relaxed">
            Have a project, collaboration, or just want to say hello? Send me a message and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* ── Form ─────────────────────────── */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-leaf to-accent flex items-center justify-center mb-6 shadow-glow">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="font-display font-black text-2xl text-forest dark:text-white mb-3">Message sent!</h2>
                <p className="text-forest/55 dark:text-white/50 text-sm max-w-xs">
                  Thanks for reaching out. I&apos;ll reply to your email shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-8 btn-gradient px-6 py-2.5 text-sm rounded-lg"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-forest/50 dark:text-white/50 uppercase tracking-wider">Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required placeholder="Your name" className="form-field" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-forest/50 dark:text-white/50 uppercase tracking-wider">Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className="form-field" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-forest/50 dark:text-white/50 uppercase tracking-wider">Subject *</label>
                  <input name="subject" value={form.subject} onChange={handleChange} required placeholder="Project inquiry, collaboration..." className="form-field" />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-forest/50 dark:text-white/50 uppercase tracking-wider">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={6} placeholder="Tell me about your project or idea..." className="form-field resize-none" />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 dark:text-red-400 text-sm flex items-center gap-2">
                    <span>⚠</span> Something went wrong — try emailing me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-gradient w-full py-4 text-sm rounded-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* ── Sidebar ───────────────────────── */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <p className="text-xs font-black text-forest/35 dark:text-white/35 uppercase tracking-wider mb-1">Or reach me directly</p>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-4 p-4 rounded-xl bg-white/70 dark:bg-white/4 hover:bg-white dark:hover:bg-white/8 border border-leaf/12 dark:border-white/8 hover:border-leaf/30 dark:hover:border-leaf/30 transition-all duration-200 shadow-card dark:shadow-none group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-leaf/15 to-accent/15 dark:from-leaf/20 dark:to-accent/20 flex items-center justify-center text-leaf dark:text-lime group-hover:from-leaf/25 group-hover:to-accent/25 transition-all shrink-0">
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-black text-forest/40 dark:text-white/40 uppercase tracking-wider mb-0.5">{link.label}</p>
                  <p className="text-sm font-semibold text-forest dark:text-white/80 group-hover:text-leaf dark:group-hover:text-white transition-colors truncate">{link.value}</p>
                </div>
                <svg className="w-4 h-4 text-forest/20 dark:text-white/20 group-hover:text-accent ml-auto shrink-0 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}

            {/* Fact card */}
            <div className="mt-3 p-5 rounded-2xl bg-gradient-to-br from-leaf/8 to-accent/8 dark:from-leaf/10 dark:to-accent/10 border border-leaf/15 dark:border-leaf/15">
              <p className="text-xs font-black text-leaf dark:text-lime uppercase tracking-wider mb-2">Quick fact</p>
              <p className="text-forest/65 dark:text-white/65 text-sm leading-relaxed">
                I typically respond within <strong className="text-forest dark:text-white">24 hours</strong>.
                For urgent requests, booking a call is the fastest way to connect!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
