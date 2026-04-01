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

  const fallback = (
    <div className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl hover:bg-leaf/8 dark:hover:bg-leaf/10 transition-colors cursor-default">
      <div className="w-10 h-10 rounded-lg bg-leaf/12 dark:bg-leaf/15 flex items-center justify-center">
        <span className="text-xs font-black text-leaf dark:text-lime">{skill.slice(0, 2)}</span>
      </div>
      <span className="text-[10px] font-semibold text-forest/60 dark:text-slate-500 truncate max-w-[72px] text-center leading-tight">
        {skill}
      </span>
    </div>
  )

  if (!iconCode || hasError) return fallback

  return (
    <div className="flex flex-col items-center gap-1.5 p-2.5 rounded-xl hover:bg-leaf/8 dark:hover:bg-leaf/10 transition-colors cursor-default group">
      <div className="relative w-10 h-10">
        <Image
          src={`https://skillicons.dev/icons?i=${iconCode}`}
          alt={skill}
          fill
          className="object-contain group-hover:scale-110 transition-transform duration-200"
          unoptimized
          onError={() => setHasError(true)}
        />
      </div>
      <span className="text-[10px] font-semibold text-forest/60 dark:text-slate-500 truncate max-w-[72px] text-center leading-tight">
        {skill}
      </span>
    </div>
  )
}
