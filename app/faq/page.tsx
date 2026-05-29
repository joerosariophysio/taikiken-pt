import Link from 'next/link'
import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/ornaments'

const DESC =
  'Perguntas frequentes sobre o Taikiken no Porto: é combate ou saúde, se precisa de experiência, onde são as aulas e como marcar a primeira aula experimental.'

export const metadata: Metadata = {
  title: 'Perguntas frequentes',
  description: DESC,
  alternates: { canonical: '/faq' },
  openGraph: { title: 'Perguntas frequentes — Taikiken Portugal', description: DESC, url: '/faq' },
}

type QA = { pergunta: string; resposta: string }

const FAQ: QA[] = [
  {
    pergunta: 'O Taikiken é arte marcial de combate ou prática de saúde?',
    resposta:
      'É os dois. O Taikiken (太氣拳) é uma arte marcial interna completa: trabalha a autodefesa e o Kumite (luta) e, ao mesmo tempo, o fluxo de energia (Ki, 氣), a respiração e a postura — promovendo saúde de ferro e bem-estar. Sawai-Sensei criou a arte justamente unindo combate e saúde.',
  },
  {
    pergunta: 'Preciso de experiência prévia em artes marciais?',
    resposta:
      'Não. O Taikiken é acessível a pessoas de todas as idades e níveis de aptidão. A abordagem é suave e focada na utilização da energia e da técnica em vez da força bruta, por isso pode começar do zero, mesmo sem qualquer prática anterior.',
  },
  {
    pergunta: 'Onde são as aulas?',
    resposta:
      'No Porto, em Vila Nova de Gaia, próximo ao Metro Dom João II (área metropolitana do Porto).',
  },
  {
    pergunta: 'Posso experimentar uma aula? Quanto custa?',
    resposta:
      'Pode — há uma primeira aula experimental. Para saber valores, horários e marcar, entre em contacto por e-mail: joerosariosensei@gmail.com.',
  },
  {
    pergunta: 'Quem ensina Taikiken em Portugal?',
    resposta:
      'Joe Rosario-Sensei, instrutor com mais de 20 anos de prática e linhagem direta de Masamichi Fukushima-Sensei. A linhagem da arte é Sifu Wang Xiangzhai → Sawai-Sensei → Fukushima-Sensei → Joe Rosario-Sensei.',
  },
  {
    pergunta: 'O que significa “Taikiken”?',
    resposta:
      'Taikiken (太氣拳) significa “Punho da Grande Energia”. Foi fundado em 1947 pelo Mestre Kenichi Sawai, a partir do Yiquan (I Chuan) chinês e de tradições marciais japonesas.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map((qa) => ({
    '@type': 'Question',
    name: qa.pergunta,
    acceptedAnswer: { '@type': 'Answer', text: qa.resposta },
  })),
}

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <PageHero
        kanji="問答"
        hanko="問"
        eyebrow="Dúvidas comuns"
        title="Perguntas frequentes"
        subtitle="As perguntas que mais ouvimos antes da primeira aula de Taikiken no Porto."
      />

      <div className="container max-w-prose py-20 md:py-24">
        <dl className="space-y-12">
          {FAQ.map((qa, i) => (
            <Reveal key={qa.pergunta} delay={i % 3 === 0 ? 0 : (i % 3) * 100}>
              <div className="border-t border-border pt-6">
                <dt className="font-serif text-2xl leading-snug">{qa.pergunta}</dt>
                <dd className="mt-3 text-lg leading-relaxed text-muted-foreground">{qa.resposta}</dd>
              </div>
            </Reveal>
          ))}
        </dl>

        <Reveal>
          <div className="mt-16 border-t border-border pt-10 text-center">
            <p className="font-serif text-2xl">Ainda com dúvidas?</p>
            <Link
              href="/contacto"
              className="mt-5 inline-flex items-center bg-accent px-7 py-3.5 text-sm uppercase tracking-[0.2em] text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Marcar aula
            </Link>
          </div>
        </Reveal>
      </div>
    </>
  )
}
