'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import HijabIllustration from './HijabIllustration'

const TypeWriter = dynamic(() => import('./TypeWriter'), { ssr: false })

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden"
    >
      {/* Dark bg override for hero */}
      <div className="absolute inset-0 bg-[#080615] dark:bg-[#080615]" />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-70" />

      {/* Gradient orbs */}
      <div className="absolute -top-40 -left-56 w-[700px] h-[700px] rounded-full bg-leaf/20 blur-[140px] animate-orb pointer-events-none" />
      <div className="absolute -bottom-40 -right-56 w-[600px] h-[600px] rounded-full bg-accent/15 blur-[120px] animate-orb-slow pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-emerald/10 blur-[90px] pointer-events-none" />

      {/* ── Big background name ───────────────── */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="bg-name font-display">RIHEM</span>
        <span className="bg-name font-display">DAOUDI</span>
      </div>

      {/* ── Content ──────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-4">

        {/* ── Left: text ──── */}
        <div className="flex-1 text-center lg:text-left order-2 lg:order-1">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-leaf/15 border border-leaf/30 mb-7 animate-fade-in opacity-0"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-black text-lime uppercase tracking-widest">
              Open to opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl leading-[1.08] text-white animate-slide-up opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            Hi, I&apos;m{' '}
            <span className="gradient-text">Rihem Daoudi</span>
          </h1>

          {/* Typewriter */}
          <p
            className="mt-5 font-display font-bold text-xl sm:text-2xl text-white/70 animate-slide-up opacity-0 min-h-[2rem]"
            style={{ animationDelay: '0.35s' }}
          >
            <TypeWriter />
          </p>

          {/* Description */}
          <p
            className="mt-5 text-base sm:text-lg text-white/55 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-slide-up opacity-0"
            style={{ animationDelay: '0.5s' }}
          >
            I design and ship polished web applications — from architecture to deployment.
            Powered by <span className="text-lime font-semibold">Next.js</span>,{' '}
            <span className="text-lime font-semibold">React</span> &amp;{' '}
            <span className="text-lime font-semibold">Node.js</span>.
          </p>

          {/* CTAs */}
          <div
            className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up opacity-0"
            style={{ animationDelay: '0.65s' }}
          >
            <Link
              href="/projects"
              className="btn-gradient w-full sm:w-auto px-8 py-3.5 text-center text-sm"
            >
              View my work ✦
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 border-2 border-white/20 text-white/80 font-bold rounded-xl hover:border-accent hover:text-accent transition-all duration-200 text-sm text-center"
            >
              Get in touch
            </Link>
          </div>

          {/* Stats */}
          <div
            className="mt-12 flex items-center justify-center lg:justify-start gap-8 animate-fade-in opacity-0"
            style={{ animationDelay: '0.85s' }}
          >
            {[
              { value: '5+', label: 'Live Projects' },
              { value: '3+', label: 'Years Coding' },
              { value: 'Honours', label: 'Degree' },
            ].map((s, i, arr) => (
              <div key={s.label} className="flex items-center gap-8">
                <div className="text-center lg:text-left">
                  <p className="font-display font-black text-2xl text-white">{s.value}</p>
                  <p className="text-xs font-medium text-white/40 mt-0.5">{s.label}</p>
                </div>
                {i < arr.length - 1 && <div className="w-px h-8 bg-white/10 shrink-0" />}
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: illustration ── */}
        <div
          className="flex-1 flex justify-center items-center order-1 lg:order-2 animate-float"
        >
          <div className="relative w-72 h-80 sm:w-96 sm:h-[420px] lg:w-[440px] lg:h-[480px]">
            {/* Glow ring behind illustration */}
            <div className="absolute inset-0 rounded-full bg-leaf/20 blur-3xl scale-90" />
            <HijabIllustration />
          </div>
        </div>
      </div>

      {/* ── Scroll hint ───────────────────────── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
