import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/ornaments'

const DESC =
  'Fale conosco — Taikiken Portugal. Aulas no Porto, em Vila Nova de Gaia, próximo ao Metro Dom João II.'

export const metadata: Metadata = {
  title: 'Contacto',
  description: DESC,
  alternates: { canonical: '/contacto' },
  openGraph: { title: 'Contacto — Taikiken Portugal', description: DESC, url: '/contacto' },
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://taikiken.pt'

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  '@id': `${SITE_URL}/#dojo`,
  name: 'Taikiken Portugal',
  description: 'Aulas presenciais de Taikiken (arte marcial interna japonesa) no Porto e Vila Nova de Gaia, com Joe Rosario-Sensei.',
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.jpg`,
  email: 'joerosariosensei@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vila Nova de Gaia',
    addressRegion: 'Porto',
    addressCountry: 'PT',
  },
  areaServed: ['Porto', 'Vila Nova de Gaia', 'Portugal'],
}

export default function ContactoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <PageHero
        kanji="連絡"
        hanko="連"
        eyebrow="Contacto"
        title="Fale conosco"
        subtitle="Aulas no Porto, em Vila Nova de Gaia. Marque a sua aula experimental."
      />

      <div className="container max-w-2xl py-20 md:py-24">
        <Reveal>
          <div className="space-y-10">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Para marcar uma aula experimental ou esclarecer dúvidas sobre o Taikiken no Porto,
              escreva diretamente por e-mail. Respondo pessoalmente.
            </p>

            <div className="space-y-2">
              <h2 className="text-xs uppercase tracking-[0.2em] text-accent">E-mail</h2>
              <a
                href="mailto:joerosariosensei@gmail.com"
                className="font-serif text-2xl transition-colors hover:text-accent"
              >
                joerosariosensei@gmail.com
              </a>
            </div>

            <div>
              <a
                href="mailto:joerosariosensei@gmail.com"
                className="inline-flex items-center bg-accent px-7 py-3.5 text-sm uppercase tracking-[0.2em] text-accent-foreground transition-transform hover:-translate-y-0.5"
              >
                Enviar e-mail
              </a>
            </div>

            <div className="space-y-2 border-t border-border pt-8">
              <h2 className="text-xs uppercase tracking-[0.2em] text-accent">Local</h2>
              <p className="text-muted-foreground">
                Vila Nova de Gaia, próximo ao Metro Dom João II
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  )
}
