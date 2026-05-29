import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/ornaments'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Fale conosco — Taikiken Portugal. Aulas no Porto, em Vila Nova de Gaia, próximo ao Metro Dom João II.',
}

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Taikiken Portugal',
  description: 'Aulas de Taikiken (arte marcial interna japonesa) em Portugal.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://taikiken.pt',
  email: 'joerosariosensei@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Vila Nova de Gaia',
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
