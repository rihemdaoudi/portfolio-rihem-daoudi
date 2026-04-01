import type { Metadata } from 'next'
import { Outfit, Syne } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'
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
  title: 'Rihem Daoudi | Software Engineer',
  description: 'Professional portfolio of Rihem Daoudi - Software Engineer specializing in Full-Stack Development. Discover my web projects, experience and skills in Next.js, React and Node.js.',
  keywords: ['Software Engineer', 'Full-Stack', 'Next.js', 'React', 'Node.js', 'Web Development', 'Tunisia'],
  icons: {
    icon: '/rihemdaoudi.jpeg',
    apple: '/rihemdaoudi.jpeg',
  },
  openGraph: {
    title: 'Rihem Daoudi | Software Engineer',
    description: 'Professional portfolio - Full-stack developer passionate about creating innovative web solutions.',
    images: [{ url: '/rihemdaoudi.jpeg' }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${outfit.variable} ${syne.variable}`}>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
