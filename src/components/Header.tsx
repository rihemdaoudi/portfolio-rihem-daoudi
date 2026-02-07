'use client'

import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#experience', label: 'Expérience' },
  { href: '#projets', label: 'Projets' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#realisations', label: 'Réalisations' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sandstone/95 backdrop-blur-md border-b border-charcoal/5">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="#accueil" className="font-display font-bold text-xl text-charcoal hover:text-accent transition-colors">
          RD
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-charcoal/80 hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-charcoal"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-sandstone border-t border-charcoal/5">
          <ul className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-charcoal/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
