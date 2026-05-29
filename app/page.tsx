import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { organizationJsonLd, personJsonLd } from '@joerosariophysio/site-toolkit/seo'
import { BrushDivider, Enso, Hanko, Reveal } from '@/components/ornaments'

export const metadata: Metadata = {
  title: 'Taikiken Portugal — Arte Marcial Interna no Porto',
  description:
    'O Taikiken (太氣拳), uma arte marcial interna que trabalha o fluxo de energia ou Ki (氣). Ensinada por Joe Rosario-Sensei no Porto e Vila Nova de Gaia.',
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://taikiken.pt'

const orgSchema = organizationJsonLd({
  name: 'Taikiken Portugal',
  url: SITE_URL,
})

const personSchema = personJsonLd({
  name: 'Joe Rosario-Sensei',
  url: `${SITE_URL}/mestres`,
  jobTitle: 'Instrutor de Taikiken',
  knowsAbout: ['Taikiken', 'Yiquan', 'I Chuan', 'Medicina Tradicional Chinesa', 'Artes Marciais Internas'],
})

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([orgSchema, personSchema]) }}
      />

      {/* HERO — sumi, cinematográfico */}
      <section className="sumi relative isolate flex min-h-[88vh] items-end overflow-hidden">
        <Image
          src="/images/treino-faca.jpg"
          alt="Joe Rosario-Sensei em treino de defesa de faca"
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        {/* gradiente sumi para legibilidade e profundidade */}
        <div
          className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/45 to-black/35"
          aria-hidden="true"
        />
        {/* kanji vertical gigante — coluna decorativa (desktop) */}
        <span
          className="kanji-vertical pointer-events-none absolute right-6 top-10 -z-10 hidden text-[12rem] leading-none text-white/10 lg:block xl:text-[15rem]"
          aria-hidden="true"
        >
          太氣拳
        </span>

        <div className="container fade-in pb-14 pt-32 md:pb-20">
          <div className="max-w-2xl space-y-6">
            <span className="inline-flex items-center gap-3">
              <Hanko kanji="氣" />
              <span className="text-xs uppercase tracking-[0.35em] text-white/70">
                Arte Marcial Interna
              </span>
            </span>
            <h1 className="font-serif text-6xl leading-[0.95] tracking-tight text-white md:text-8xl">
              Taikiken
              <span className="kanji mt-4 block text-5xl text-white/90 md:text-7xl">太氣拳</span>
            </h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/80">
              O Punho da Grande Energia. Linhagem direta do Mestre Kenichi Sawai, transmitida em
              Portugal por Joe Rosario-Sensei.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                href="/contacto"
                className="inline-flex items-center bg-accent px-7 py-3.5 text-sm uppercase tracking-[0.2em] text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Marcar aula
              </Link>
              <Link
                href="/o-que-e"
                className="inline-flex items-center border border-white/50 px-7 py-3.5 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:bg-white hover:text-black"
              >
                O que é Taikiken
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO — washi, com seigaiha e ensō */}
      <section className="pattern-seigaiha relative overflow-hidden border-b border-border">
        <Enso
          className="pointer-events-none absolute -right-16 -top-16 h-80 w-80 text-accent/10"
          aria-hidden="true"
        />
        <div className="container grid items-center gap-12 py-24 md:grid-cols-[2fr_3fr] md:gap-16">
          <Reveal>
            <figure className="relative mx-auto max-w-[320px] md:mx-0">
              {/* moldura cinábrio deslocada — dá camada e interesse */}
              <div
                className="absolute -bottom-3 -left-3 -z-10 h-full w-full border border-accent/60"
                aria-hidden="true"
              />
              <Image
                src="/images/joe-mestre-ritsu-zen.jpg"
                alt="Joe Rosario-Sensei e o seu mestre Fukushima-Sensei em Ritsu Zen, no Ibirapuera"
                width={325}
                height={260}
                quality={95}
                unoptimized
                className="aspect-[5/4] w-full object-cover"
              />
              <figcaption className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Joe Rosario-Sensei e Fukushima-Sensei · Ritsu Zen, Ibirapuera
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120}>
            <div className="max-w-prose space-y-6">
              <div className="flex items-center gap-4">
                <Hanko kanji="太" />
                <h2 className="font-serif text-4xl">
                  Taikiken <span className="kanji text-3xl text-muted-foreground">太氣拳</span>
                </h2>
              </div>
              <p className="text-lg leading-relaxed">
                O Taikiken (太氣拳), uma arte marcial interna que trabalha o fluxo de energia ou Ki
                (氣). Eu sou Joe Rosario-Sensei e escolhi esta arte marcial a mais de 20 anos atrás
                para entender o fluxo de energia no meu próprio corpo quando estudei acupuntura e
                Medicina Tradicional Chinesa.
              </p>
              <p className="text-lg leading-relaxed">
                Desta forma, o Taikiken, mais do que uma arte marcial, promove saúde de ferro e bem
                estar dos seus praticantes.
              </p>
              <p className="text-lg leading-relaxed">
                Descubra mais sobre esta arte aqui em nosso sítio da web e venha conhecer
                pessoalmente no Porto as raízes e essência dos treinamentos milenares de energia para
                saúde e combate.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DRAGÃO — seção sumi, tinta viva */}
      <section className="sumi relative overflow-hidden">
        <div className="container grid items-center gap-10 py-24 md:grid-cols-2 md:py-32">
          <Reveal>
            <div className="relative aspect-square">
              <Image
                src="/images/dragon.webp"
                alt="Dragão em tinta sumi-e — símbolo do Ki no Taikiken"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-contain opacity-90 [filter:invert(1)] mix-blend-screen"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="space-y-6">
              <span className="kanji text-5xl text-accent md:text-6xl">氣</span>
              <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                O fluxo do Ki, do combate à saúde
              </h2>
              <p className="max-w-prose text-lg leading-relaxed text-white/75">
                Sawai Sensei criou o Taikiken — “Punho da Grande Energia” — combinando o que aprendeu
                no Japão e na China. Não é qigong de salão nem mística: é trabalho real de postura,
                respiração e intenção, que serve tanto para o Kumite quanto para uma saúde de ferro.
              </p>
              <Link
                href="/o-que-e"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-accent transition-opacity hover:opacity-80"
              >
                A história da arte <span aria-hidden="true">→</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CARDS — washi */}
      <section className="border-t border-border">
        <div className="container py-24">
          <BrushDivider className="mx-auto mb-16 max-w-xs text-accent/70" />
          <div className="grid gap-12 md:grid-cols-3">
            <Reveal>
              <CardLink
                href="/o-que-e"
                kanji="意"
                title="O que é"
                description="História, princípios e a linhagem Sawai → Wang Xiangzhai → Fukushima."
              />
            </Reveal>
            <Reveal delay={120}>
              <CardLink
                href="/mestres"
                kanji="師"
                title="Mestres"
                description="Sawai, Takagi, Fukushima e Joe Rosario-Sensei — a linhagem viva do Taikiken."
              />
            </Reveal>
            <Reveal delay={240}>
              <CardLink
                href="/videos"
                kanji="動"
                title="Vídeos"
                description="Demonstrações de Toishou e Menarachi Kumite por Takagi Sensei."
              />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

function CardLink({
  href,
  kanji,
  title,
  description,
}: {
  href: string
  kanji: string
  title: string
  description: string
}) {
  return (
    <Link
      href={href}
      className="group relative block pt-8 transition-colors"
    >
      <span className="absolute left-0 top-0 h-px w-12 bg-accent transition-all duration-300 group-hover:w-full" />
      <span className="kanji block text-5xl text-foreground/20 transition-colors group-hover:text-accent">
        {kanji}
      </span>
      <h3 className="mt-4 font-serif text-2xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <span className="mt-5 inline-block text-xs uppercase tracking-[0.2em] text-foreground/60 group-hover:text-accent">
        Ler →
      </span>
    </Link>
  )
}
