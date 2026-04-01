'use client'

import Image from 'next/image'

const companies = [
  {
    name: 'Blue Fish Consulting',
    //role: 'IT Support Engineer',
    logo: '/Blue Fish logo.png',
    border: 'border-sky-400/30',
    bg: 'bg-white dark:bg-white/10',
  },
  {
    name: 'Ultra Mirage',
    //role: 'Full-Stack Developer',
    logo: '/ultramirage-logo.jpg',
    border: 'border-orange-400/30',
    bg: 'bg-white dark:bg-white/10',
  },
  {
    name: 'Dar Ben Gacem',
    //role: 'Web Development',
    logo: '/dar-ben-gacem.png',
    border: 'border-amber-400/30',
    bg: 'bg-white dark:bg-white/10',
  },
  {
    name: 'Mdinti',
    //role: 'Feature Development',
    logo: '/mdinti-logo.png',
    border: 'border-emerald-400/30',
    bg: 'bg-white dark:bg-white/10',
  },
  {
    name: 'Tunistoric',
    //role: 'Development & Deployment',
    logo: '/TUNISTORIC.png',
    border: 'border-violet-400/30',
    bg: 'bg-white dark:bg-white/10',
  },
]

// Quadruple for a seamless infinite loop on all screen sizes
const items = [...companies, ...companies, ...companies, ...companies]

const CARD_W = 200  // px — keep in sync with the w-[200px] below
const GAP = 24      // mx-3 = 12px each side

function Card({ c }: { c: typeof companies[0] }) {
  return (
    <div className={`
      flex items-center gap-3 px-4 py-3 mx-3
      rounded-2xl border ${c.border} ${c.bg}
      shadow-card dark:shadow-none
      shrink-0 w-[200px]
      transition-transform duration-200 hover:scale-105
    `}>
      <div className="relative w-10 h-10 shrink-0 rounded-lg overflow-hidden bg-white">
        <Image
          src={c.logo}
          alt={c.name}
          fill
          className="object-contain p-0.5"
          unoptimized
        />
      </div>
      <div className="min-w-0">
        <p className="text-[11px] font-black text-forest dark:text-white/85 truncate leading-tight">
          {c.name}
        </p>
        {/* <p className="text-[10px] text-forest/40 dark:text-white/35 truncate mt-0.5">
          {c.role}
        </p> */}
      </div>
    </div>
  )
}

export default function CompanyBand() {
  const totalWidth = companies.length * (CARD_W + GAP)

  return (
    <section className="py-12 overflow-hidden">
      {/* Label */}
      <p className="text-center text-[11px] font-black text-forest/30 dark:text-white/25 uppercase tracking-[0.3em] mb-8">
        Companies &amp; organisations I&apos;ve worked with
      </p>

      {/* Masked scrolling track */}
      <div
        style={{
          maskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)',
        }}
      >
        <div
          className="flex"
          style={{ animation: `marqueeScroll ${companies.length * 4}s linear infinite` }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = 'paused' }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.animationPlayState = 'running' }}
        >
          {items.map((c, i) => (
            <Card key={i} c={c} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes marqueeScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${totalWidth}px); }
        }
      `}</style>
    </section>
  )
}
