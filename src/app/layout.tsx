import type { Metadata } from 'next'
import { Outfit, Syne } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
})

export const metadata: Metadata = {
  title: 'Rihem Daoudi | Ingénieure en Génie Logiciel',
  description: 'Portfolio professionnel de Rihem Daoudi - Ingénieure Informatique spécialisée en Génie Logiciel. Découvrez mes projets web, mon expérience et mes compétences en Next.js, React et Node.js.',
  keywords: ['Ingénieur Informatique', 'Génie Logiciel', 'Next.js', 'React', 'Node.js', 'Développement Web', 'Tunisie'],
  openGraph: {
    title: 'Rihem Daoudi | Ingénieure en Génie Logiciel',
    description: 'Portfolio professionnel - Développeuse full-stack passionnée par la création de solutions web innovantes.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${outfit.variable} ${syne.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
