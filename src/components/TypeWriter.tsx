'use client'

import { useState, useEffect } from 'react'

const roles = [
  'Full-Stack Engineer',
  'Next.js Developer',
  'Node.js Builder',
  'UI/UX Enthusiast',
  'MongoDB Architect',
]

export default function TypeWriter() {
  const [idx, setIdx] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => {
        setPaused(false)
        setDeleting(true)
      }, 1800)
      return () => clearTimeout(t)
    }

    const target = roles[idx]
    const speed = deleting ? 45 : 95

    const t = setTimeout(() => {
      if (!deleting) {
        const next = target.slice(0, text.length + 1)
        setText(next)
        if (next === target) setPaused(true)
      } else {
        const next = text.slice(0, -1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setIdx((i) => (i + 1) % roles.length)
        }
      }
    }, speed)

    return () => clearTimeout(t)
  }, [text, deleting, idx, paused])

  return (
    <span>
      <span className="text-leaf dark:text-darkGreen">{text}</span>
      <span className="cursor-blink dark:[background:#a78bfa]" />
    </span>
  )
}
