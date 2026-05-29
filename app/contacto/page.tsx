import type { Metadata } from 'next'
import { ContactForm } from '@/components/contact-form'
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
  email: 'taikiken@mail.com',
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

      <div className="container max-w-3xl py-20 md:py-24">
        <Reveal>
          <div className="grid gap-12 md:grid-cols-[2fr_3fr]">
            <aside className="space-y-8 text-sm">
              <div>
                <h2 className="font-serif text-xl">E-mail</h2>
                <p className="mt-2 text-muted-foreground">
                  <a href="mailto:taikiken@mail.com" className="hover:text-accent">
                    taikiken@mail.com
                  </a>
                </p>
              </div>
              <div>
                <h2 className="font-serif text-xl">Local</h2>
                <p className="mt-2 text-muted-foreground">
                  Vila Nova de Gaia, próximo ao Metro Dom João II
                </p>
              </div>
            </aside>

            <ContactForm />
          </div>
        </Reveal>
      </div>
    </>
  )
}
