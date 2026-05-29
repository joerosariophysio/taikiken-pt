'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

/** Divisor em pincelada sumi-e — substitui as hairlines secas de 1px. */
export function BrushDivider({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 36"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`h-6 w-full ${className}`}
    >
      <path
        d="M8 20 C 180 11 360 25 560 18 C 760 11 980 23 1192 17 C 980 31 760 34 560 28 C 360 22 180 28 8 20 Z"
        fill="currentColor"
      />
      <path
        d="M40 22 C 300 18 700 24 1100 19"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
        opacity="0.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Ensō — círculo de tinta aberto, elemento decorativo zen. */
export function Enso({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={className}>
      <path
        d="M150 38 C 110 18 60 28 38 70 C 14 116 30 168 84 178 C 140 188 182 150 178 100 C 175 64 150 44 120 40"
        stroke="currentColor"
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Carimbo de mestre (hanko) com um kanji. */
export function Hanko({ kanji = '氣', className = '' }: { kanji?: string; className?: string }) {
  return (
    <span className={`hanko ${className}`} aria-hidden="true">
      {kanji}
    </span>
  )
}

/** Revela o conteúdo com fade suave quando entra na viewport. */
export function Reveal({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  )
}
