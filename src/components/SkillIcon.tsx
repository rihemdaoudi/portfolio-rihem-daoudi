'use client'

import { useState } from 'react'
import Image from 'next/image'
import { skillIconMap } from '@/data/skills'

interface SkillIconProps {
  skill: string
}

export default function SkillIcon({ skill }: SkillIconProps) {
  const [hasError, setHasError] = useState(false)
  const iconCode = skillIconMap[skill]

  if (!iconCode || hasError) {
    return (
      <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/80 dark:bg-darkCard/80 hover:bg-emerald/10 dark:hover:bg-darkGreen/20 transition-colors">
        <div className="w-10 h-10 rounded-lg bg-emerald/20 dark:bg-darkGreen/20 flex items-center justify-center">
          <span className="text-sm font-bold text-forest dark:text-darkMint">
            {skill.slice(0, 2)}
          </span>
        </div>
        <span className="text-xs font-medium text-forest/80 dark:text-mint/80 truncate max-w-[80px] text-center">
          {skill}
        </span>
      </div>
    )
  }

  const iconUrl = `https://skillicons.dev/icons?i=${iconCode}`

  return (
    <div className="flex flex-col items-center gap-1.5 p-3 rounded-xl bg-white/80 dark:bg-darkCard/80 hover:bg-emerald/10 dark:hover:bg-darkGreen/20 transition-colors group">
      <div className="relative w-10 h-10">
        <Image
          src={iconUrl}
          alt={skill}
          fill
          className="object-contain group-hover:scale-110 transition-transform"
          unoptimized
          onError={() => setHasError(true)}
        />
      </div>
      <span className="text-xs font-medium text-forest/80 dark:text-mint/80 truncate max-w-[80px] text-center">
        {skill}
      </span>
    </div>
  )
}
