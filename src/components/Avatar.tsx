'use client'

import { useState } from 'react'
import { PHOTO_PATH } from '@/config'

export default function Avatar() {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full flex items-center justify-center bg-emerald/30 dark:bg-darkGreen/30 text-forest dark:text-darkMint font-display font-bold text-5xl ring-4 ring-emerald/30 dark:ring-darkGreen/40 shadow-glow">
        RD
      </div>
    )
  }

  return (
    <div className="relative w-48 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden ring-4 ring-emerald/30 dark:ring-darkGreen/40 shadow-glow">
      <img
        src={PHOTO_PATH}
        alt="Rihem Daoudi"
        className="w-full h-full object-cover"
        onError={() => setHasError(true)}
      />
    </div>
  )
}
