import Link from 'next/link'

export default function Hero() {
  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-accent font-medium text-sm uppercase tracking-widest mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.1s' }}>
          Ingénieure en Génie Logiciel
        </p>
        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal leading-tight animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>
          Rihem Daoudi
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-charcoal/70 max-w-2xl mx-auto leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
          Je conçois et développe des solutions web performantes avec Next.js, React et Node.js. 
          Passionnée par la création d&apos;expériences numériques qui allient innovation et qualité.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
          <Link
            href="#projets"
            className="px-8 py-3 bg-accent text-white font-medium rounded-full hover:bg-accentLight transition-colors shadow-lg shadow-accent/25"
          >
            Voir mes projets
          </Link>
          <Link
            href="#contact"
            className="px-8 py-3 border-2 border-charcoal/20 text-charcoal font-medium rounded-full hover:border-accent hover:text-accent transition-colors"
          >
            Me contacter
          </Link>
        </div>
        <div className="mt-16 flex items-center justify-center gap-8 text-charcoal/50 text-sm animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
          <span>Next.js</span>
          <span>React</span>
          <span>Node.js</span>
          <span>TypeScript</span>
        </div>
      </div>
    </section>
  )
}
