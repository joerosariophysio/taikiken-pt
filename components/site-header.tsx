'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const NAV = [
  { href: '/o-que-e', label: 'O que é' },
  { href: '/mestres', label: 'Mestres' },
  { href: '/videos', label: 'Vídeos' },
  { href: '/contacto', label: 'Contacto' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-sm">
      <div className="container flex items-center justify-between py-5">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Taikiken Portugal — início"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="kanji flex h-9 w-9 items-center justify-center rounded-[3px] bg-accent text-xl leading-none text-accent-foreground shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]"
          >
            氣
          </span>
          <span className="font-serif text-2xl tracking-tight">Taikiken</span>
          <span className="kanji text-xl text-muted-foreground transition-colors group-hover:text-accent">
            太氣拳
          </span>
        </Link>

        {/* Navegação desktop */}
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex gap-8 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-foreground/80 transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Botão hambúrguer (mobile) */}
        <button
          type="button"
          className="-mr-2 flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-4 w-6" aria-hidden="true">
            <span
              className={`absolute left-0 block h-px w-6 bg-foreground transition-all duration-300 ${
                open ? 'top-2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-2 block h-px w-6 bg-foreground transition-opacity duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-6 bg-foreground transition-all duration-300 ${
                open ? 'top-2 -rotate-45' : 'top-4'
              }`}
            />
          </span>
        </button>
      </div>

      {/* Painel mobile */}
      <div
        className={`overflow-hidden border-border bg-background transition-[max-height] duration-300 md:hidden ${
          open ? 'max-h-80 border-t' : 'max-h-0'
        }`}
      >
        <nav aria-label="Principal (mobile)" className="container py-4">
          <ul className="flex flex-col">
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-border/60 last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3 font-serif text-lg transition-colors hover:text-accent"
                >
                  {item.label}
                  <span className="text-accent" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
