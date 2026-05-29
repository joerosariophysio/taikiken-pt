import Link from 'next/link'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col gap-4 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
        <div className="flex items-baseline gap-3">
          <span className="font-serif text-lg text-foreground">Taikiken</span>
          <span className="kanji text-foreground/70">太氣拳</span>
          <span>· Portugal</span>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          <Link href="/o-que-e" className="hover:text-accent">
            O que é
          </Link>
          <Link href="/mestres" className="hover:text-accent">
            Mestres
          </Link>
          <Link href="/videos" className="hover:text-accent">
            Vídeos
          </Link>
          <Link href="/faq" className="hover:text-accent">
            Dúvidas
          </Link>
          <Link href="/contacto" className="hover:text-accent">
            Contacto
          </Link>
          <Link href="/privacidade" className="hover:text-accent">
            Privacidade
          </Link>
        </div>
        <p>© {year} Taikiken Portugal</p>
      </div>
    </footer>
  )
}
