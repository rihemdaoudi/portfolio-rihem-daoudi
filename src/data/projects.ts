export interface Project {
  title: string
  description: string
  url?: string
  status: 'deployed' | 'in-progress' | 'collaboration'
  technologies: string[]
  role: string
  image?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Ultra Mirage El Djerid Desert Trail',
    description: 'Official website for the ultra trail in the Sahara desert in Tozeur. Complete platform with race registration (100km, 50km, 25km), gallery past editions information and paiement integration.',
    url: 'https://www.ultramirage.tn',
    status: 'deployed',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    role: 'Full-stack development',
    featured: true,
  },
  {
    title: 'Tunistoric',
    description: 'Website dedicated to promoting Tunisian heritage and history. Interactive presentation of Tunisia\'s rich cultural heritage.',
    url: 'https://tunistoric.com/',
    status: 'deployed',
    technologies: ['Next.js', 'React', 'Node.js'],
    role: 'Development and deployment',
  },
  {
    title: 'Dehliz El Zliz',
    description: 'Platform showcasing the art of Zliz (traditional Tunisian ceramics) and Tunisian craft heritage.',
    url: 'https://www.dehlizelzliz.darbengacem.com/',
    status: 'deployed',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    role: 'Development and deployment',
  },
  {
    title: 'Midinti.org',
    description: 'Educational non-profit website. Contribution to feature development and continuous platform improvements.',
    url: 'https://www.mdinti.org/',
    status: 'collaboration',
    technologies: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    role: 'Additional feature development',
  },
  // {
  //   title: 'TEDxPasha Street',
  //   description: 'Official website for the TEDx Pasha Street event held in the Medina of Tunis. Inspiring event around the theme "Brand Legacy".',
  //   url: 'https://www.tedxpashastreet.com',
  //   status: 'collaboration',
  //   technologies: ['Next.js', 'React', 'Node.js'],
  //   role: 'Feature development and integrations',
  // },
]
