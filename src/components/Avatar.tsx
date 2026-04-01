'use client'

import { useState } from 'react'
import { PHOTO_PATH } from '@/config'

export default function Avatar() {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="w-44 h-44 sm:w-60 sm:h-60 rounded-full flex items-center justify-center bg-gradient-to-br from-leaf to-emerald text-white font-display font-black text-5xl shadow-glow ring-4 ring-leaf/30">
        RD
      </div>
    )
  }

  return (
    <div className="relative w-44 h-44 sm:w-60 sm:h-60">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-20 blur-xl scale-110" />
      {/* Photo */}
      <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-leaf/40 dark:ring-leaf/50 shadow-glow">
        <img
          src={PHOTO_PATH}
          alt="Rihem Daoudi"
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      </div>
    </div>
  )
}
