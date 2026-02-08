'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import Avatar from './Avatar'

const Scene3D = dynamic(() => import('./Scene3D'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 -z-10 bg-gradient-to-br from-mint to-lime" />,
})

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      <Scene3D />
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Photo */}
        <div className="animate-float flex-shrink-0">
          <Avatar />
        </div>

        {/* Content */}
        <div className="text-center lg:text-left">
          <p className="text-leaf dark:text-darkMint font-medium text-sm uppercase tracking-widest mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
            Software Engineer
          </p>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-forest dark:text-darkMint leading-tight animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
            Hi, I&apos;m Rihem Daoudi ✨
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-forest/80 dark:text-mint/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
            I design and build performant web solutions with Next.js, React and Node.js. 
            Passionate about creating digital experiences that blend innovation with quality — and a touch of joy! 🌟
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
            <Link
              href="#projects"
              className="px-8 py-3 bg-leaf dark:bg-darkGreen text-white font-medium rounded-full hover:bg-emerald dark:hover:bg-darkMint transition-colors shadow-lg shadow-leaf/30"
            >
              View my projects
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border-2 border-forest/30 dark:border-emerald/30 text-forest dark:text-mint font-medium rounded-full hover:border-leaf hover:text-leaf dark:hover:text-darkMint transition-colors"
            >
              Get in touch
            </Link>
          </div>
          <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-forest/60 dark:text-mint/60 text-sm animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            <span>Next.js</span>
            <span>React</span>
            <span>Node.js</span>
            <span>TypeScript</span>
          </div>
        </div>
      </div>
    </section>
  )
}
