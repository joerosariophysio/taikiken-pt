import Image from 'next/image'
import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/ornaments'

export const metadata: Metadata = {
  title: 'Mestres',
  description:
    'Linhagem do Taikiken: Sawai Sensei, Takagi Sensei, Fukushima Sensei e Joe Rosario-Sensei (instrutor em Portugal).',
}

type Mestre = {
  nome: string
  kanji?: string
  papel: string
  texto: string
  foto: string
  fotoAlt: string
}

const MESTRES: Mestre[] = [
  {
    nome: 'Joe Rosario-Sensei',
    papel: 'Instrutor em Portugal · Porto / Vila Nova de Gaia',
    foto: '/images/joe-sensei.jpg',
    fotoAlt: 'Joe Rosario-Sensei',
    texto:
      'Fisioterapeuta, Osteopata, Quiropraxista, Naturapata e Acupunturista, faixa preta em Muay Thai, praticante de artes marciais desde criança, tinha interesse em artes marciais internas para aprofundar os conhecimentos em Medicina Tradicional Chinesa. Ao encontrar Fukushima-Sensei foi derrotado em Kumitê (luta) e começou seu treinamento em Taikiken há mais de 20 anos. Aprendeu também com seu mestre Chi Kung Médico (Kikou) e Nishino Ryu Kokyu Hou. Hoje ensina no Porto, em Vila Nova de Gaia.',
  },
  {
    nome: 'Masamichi Fukushima-Sensei',
    papel: 'Mestre direto · São Paulo, Brasil',
    foto: '/images/fukushima-sensei.jpg',
    fotoAlt: 'Masamichi Fukushima-Sensei',
    texto:
      'Desde a infância, pratica a arte marcial japonesa, tais como kendô, Shorinji kenpo, karatê de Shoutoukan, karatê Kyokushin. Dedica-se integralmente por decadas ao ensino e à prática de Taiki-ken, Respiração por método Nishino (Kokuy Hou), Tsukeikou (Kikou Médico), Zenmitsu Kikou (Kikou Budista de seita Mikkyo), Quiropraxia do estilo Imoto, U-shiki Sui-na (Sui-na estilo U). Atualmente, 5 Dan de Taikien, ensina em São Paulo, Brasil, buscando atingir o estágio limite de Ki e Bujutsu.',
  },
  {
    nome: 'Yasuhide Takagi-Sensei',
    papel: 'Fundador da escola Shiseijuku · 7º Dan Kyoshi',
    foto: '/images/takagi-sensei.jpg',
    fotoAlt: 'Yasuhide Takagi-Sensei',
    texto:
      'Takagi Sensei é o mais forte da segunda geração de alunos de Sawai Sensei. Era constantemente campeão dos kumites (lutas) promovidas por Sawai Sensei. Extremamente dedicado, fundador da escola de Taikiken Shiseijuku é um dos grandes expoentes das artes marciais do nosso tempo. É um dos pouquíssimos 7º Dan Kyoshi de Taikiken do mundo. Com 70 anos de idade, continua lutando e é um lutador extremamente habilidoso.',
  },
  {
    nome: 'Kenichi Sawai-Sensei',
    kanji: '澤井 健一',
    papel: 'Fundador do Taikiken · 1902–1988',
    foto: '/images/sawai-sensei.jpg',
    fotoAlt: 'Kenichi Sawai-Sensei (1902–1988)',
    texto:
      'Sawai Sensei aos 22 anos já era 5º Dan em Judo, 4º Dan em Kendo, 4º Dan em Iaido. Coronel japonês, serviu seu país na China onde lutou contra vários oponentes e sempre foi vitorioso até encontrar o Grão-Mestre Wang Xiangzhai (1885-1963), criador do Yi Chuan ou Yiquan em 1932. Mesmo com toda sua experiência, Sawai Sensei foi rapidamente e facilmente derrotado, resultando em total dedicação aos ensinamentos do mestre Wang Xiangzhai. Em 1947, com a bênção de seu mestre ele fundou o Taikiken.',
  },
]

export default function MestresPage() {
  return (
    <>
      <PageHero
        kanji="師"
        hanko="師"
        eyebrow="Linhagem"
        title="Mestres"
        subtitle="A linhagem viva do Taikiken — quatro gerações, de Sawai a Joe Rosario-Sensei."
      />

      <div className="container max-w-4xl py-20 md:py-24">
        <div className="space-y-20">
          {MESTRES.map((m) => (
            <Reveal key={m.nome}>
              <section className="grid gap-8 md:grid-cols-[1fr_2fr]">
                <Image
                  src={m.foto}
                  alt={m.fotoAlt}
                  width={500}
                  height={500}
                  className="aspect-square w-full object-cover"
                />
                <div className="space-y-4">
                  <div className="flex items-baseline justify-between gap-4 border-b border-border pb-3">
                    <h2 className="font-serif text-3xl">{m.nome}</h2>
                    {m.kanji && <span className="kanji text-2xl text-foreground/60">{m.kanji}</span>}
                  </div>
                  <p className="text-sm uppercase tracking-[0.18em] text-accent">{m.papel}</p>
                  <p className="text-lg leading-relaxed">{m.texto}</p>
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}
