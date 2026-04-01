'use client'

import { useState } from 'react'

interface DesktopMockupProps {
  url: string
  title: string
  accent?: string
}

// Gradient placeholders per site index
const gradients = [
  'from-violet-600 via-purple-600 to-indigo-700',
  'from-sky-500 via-cyan-500 to-teal-600',
  'from-pink-500 via-rose-500 to-red-500',
  'from-amber-500 via-orange-500 to-rose-500',
  'from-emerald-500 via-teal-500 to-cyan-600',
]

export default function DesktopMockup({ url, title, accent = '0' }: DesktopMockupProps) {
  const [loaded, setLoaded] = useState(false)
  const [err, setErr] = useState(false)
  const grad = gradients[parseInt(accent) % gradients.length]

  const screenshotUrl = `https://api.microlink.io?url=${encodeURIComponent(url)}&screenshot=true&embed=screenshot.url&waitFor=3000`

  return (
    <div className="relative w-full">
      {/* Monitor bezel */}
      <div className="relative rounded-xl overflow-hidden bg-[#0d0a1f] border border-white/10 shadow-[0_8px_40px_rgba(124,58,237,0.2)]">

        {/* Browser chrome bar */}
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1535] border-b border-white/8">
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/70" />
            <div className="w-3 h-3 rounded-full bg-amber-400/70" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
          </div>
          {/* URL bar */}
          <div className="flex-1 mx-3 px-3 py-1 bg-[#0d0a1f] rounded-md flex items-center gap-2">
            <svg className="w-3 h-3 text-emerald-400/60 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
            <span className="text-white/40 text-xs truncate font-mono">{url.replace(/^https?:\/\//, '')}</span>
          </div>
          {/* Reload icon */}
          <svg className="w-3.5 h-3.5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        </div>

        {/* Screen content */}
        <div className="relative w-full aspect-[16/9] bg-[#0a0818] overflow-hidden">
          {/* Gradient placeholder (always visible behind screenshot) */}
          <div className={`absolute inset-0 bg-gradient-to-br ${grad} opacity-40`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/20 font-display font-black text-2xl text-center px-4">{title}</span>
          </div>

          {/* Screenshot */}
          {!err && (
            <img
              src={screenshotUrl}
              alt={`Screenshot of ${title}`}
              className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setLoaded(true)}
              onError={() => setErr(true)}
            />
          )}

          {/* Loading shimmer */}
          {!loaded && !err && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer" />
          )}

          {/* Visit overlay */}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200 bg-[#080615]/60 backdrop-blur-sm"
          >
            <span className="flex items-center gap-2 px-5 py-2.5 btn-gradient rounded-lg text-sm font-bold">
              Open site
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/* Monitor stand */}
      <div className="flex justify-center">
        <div className="w-16 h-4 bg-[#1a1535] rounded-b-lg border border-white/8 border-t-0" />
      </div>
      <div className="flex justify-center">
        <div className="w-28 h-2 bg-[#1a1535] rounded-lg border border-white/8" />
      </div>
    </div>
  )
}
