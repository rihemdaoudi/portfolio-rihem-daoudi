export interface Project {
  title: string
  description: string
  url?: string
  status: 'deployed' | 'in-progress' | 'collaboration'
  technologies: string[]
  role: string
  image?: string
}

export const projects: Project[] = [
  {
    title: 'Ultra Mirage Desert Marathon',
    description: 'Site officiel du marathon ultra dans le désert du Sahara à Tozeur. Plateforme complète avec inscription aux courses (100km, 50km, 25km), boutique, galerie et informations sur les éditions passées.',
    url: 'https://ultra-mirage.vercel.app/',
    status: 'in-progress',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    role: 'Développement full-stack',
  },
  {
    title: 'Tunistoric',
    description: 'Site web dédié à la valorisation du patrimoine et de l\'histoire tunisiens. Présentation interactive du riche héritage culturel de la Tunisie.',
    url: 'https://tunistoric.com/', 
    status: 'deployed',
    technologies: ['Next.js', 'React', 'Node.js'],
    role: 'Développement et déploiement',
  },
  {
    title: 'Dehliz El Zliz',
    description: 'Plateforme mettant en valeur l\'art du Zliz (céramique tunisienne traditionnelle) et le patrimoine artisanal tunisien.',
    url: 'https://www.dehlizelzliz.darbengacem.com/', 
    status: 'deployed',
    technologies: ['Next.js', 'React', 'Node.js'],
    role: 'Développement et déploiement',
  },
  {
    title: 'Midinti.org',
    description: 'Site associatif à vocation éducative. Contribution au développement de fonctionnalités et améliorations continues de la plateforme.',
    url: 'https://www.mdinti.org/',
    status: 'collaboration',
    technologies: ['Next.js', 'React', 'Node.js'],
    role: 'Développement de fonctionnalités supplémentaires',
  },
  {
    title: 'TEDxPasha Street',
    description: 'Site officiel de l\'événement TEDx Pasha Street organisé dans la Médina de Tunis. Événement inspirant autour du thème "Brand Legacy".',
    url: 'https://www.tedxpashastreet.com',
    status: 'collaboration',
    technologies: ['Next.js', 'React', 'Node.js'],
    role: 'Développement de fonctionnalités et intégrations',
  },
]
