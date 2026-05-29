import { Hanko, BrushDivider } from '@/components/ornaments'

type PageHeroProps = {
  /** Kanji da marca d'água vertical (ex.: "師" ou "太氣拳"). */
  kanji: string
  /** Kanji único do selo hanko. */
  hanko: string
  eyebrow?: string
  title: string
  subtitle?: string
}

/** Cabeçalho sumi compartilhado das páginas internas — kanji vertical, hanko e pincel. */
export function PageHero({ kanji, hanko, eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="sumi relative isolate overflow-hidden">
      <span
        aria-hidden="true"
        className="kanji-vertical pointer-events-none absolute -top-6 right-2 text-[9rem] leading-none text-white/[0.05] md:right-10 md:text-[13rem]"
      >
        {kanji}
      </span>
      <div className="container relative py-20 md:py-28">
        <div className="flex items-center gap-4">
          <Hanko kanji={hanko} />
          {eyebrow && (
            <span className="text-xs uppercase tracking-[0.35em] text-white/60">{eyebrow}</span>
          )}
        </div>
        <h1 className="mt-6 font-serif text-5xl leading-[1.0] tracking-tight md:text-7xl">
          {title}
        </h1>
        {subtitle && <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/75">{subtitle}</p>}
      </div>
      <BrushDivider className="text-accent/70" />
    </section>
  )
}
