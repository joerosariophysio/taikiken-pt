import Image from 'next/image'
import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/ornaments'

export const metadata: Metadata = {
  title: 'O que é Taikiken',
  description:
    'O Taikiken (太氣拳), uma arte marcial japonesa com raízes profundas na filosofia oriental. História do Mestre Kenichi Sawai e do Yiquan de Sifu Wang Xiangzhai.',
}

export default function OQueEPage() {
  return (
    <>
      <PageHero
        kanji="太氣拳"
        hanko="太"
        eyebrow="A arte"
        title="O que é Taikiken"
        subtitle="太氣拳 — o Punho da Grande Energia"
      />

      <article className="container max-w-prose py-20 md:py-24">
        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              O Taikiken (太氣拳), uma arte marcial japonesa com raízes profundas na filosofia
              oriental, é um sistema de treino que visa o desenvolvimento integral do praticante. O
              Taikiken combina elementos de artes marciais tradicionais internas, que trabalham o
              fluxo de energia ou Ki (氣), com técnicas de meditação e respiração, resultando em uma
              abordagem forte e eficiente no âmbito marcial e também voltada para o bem-estar físico
              e mental.
            </p>
            <p>
              Este método foi desenvolvido pelo Mestre Kenichi Sawai no século XX, com a influência
              de várias tradições japonesas e chinesas, e é caracterizado pela ênfase na conexão
              entre mente e corpo.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <figure className="my-12">
            <Image
              src="/images/joe-ritsu-zen.jpg"
              alt="Joe Rosario-Sensei em Ritsu Zen — postura de pé fundamental do Taikiken"
              width={711}
              height={711}
              className="aspect-square w-full object-cover"
            />
            <figcaption className="mt-3 text-sm text-muted-foreground">
              Ritsu Zen — postura de pé fundamental do Taikiken.
            </figcaption>
          </figure>
        </Reveal>

        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed">
            <h2 className="pt-2 font-serif text-3xl">Sawai-Sensei</h2>
            <p>
              Sawai-Sensei nasceu em 1902 em Tóquio, Japão, e desde jovem demonstrou grande
              interesse em artes marciais. Sawai-Sensei começou sua jornada no mundo das artes
              marciais praticando Kendo, Karate e Judo, mas sua busca pela compreensão mais profunda
              do corpo humano e da mente o levou a explorar as tradições chinesas, como o I Chuan.
            </p>
            <p>
              Foi durante uma visita à China que Sawai-Sensei, militar e lutador imbatível, foi
              finalmente vencido em combate por quem seria seu futuro mestre. Sifu Wang Xiangzhai,
              fundador do I Chuan ou “Boxe da Mente”, o aceitou como aluno. Essa experiência
              enriqueceu sua compreensão das filosofias e práticas subjacentes as artes marciais
              internas, que enfatizam a conexão entre o corpo, a mente e a energia vital, usado tanto
              para saúde, batalha e tratamento.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <figure className="my-12">
            <Image
              src="/images/takagi-sensei.jpg"
              alt="Takagi-Sensei, 7º Dan Kyoshi de Taikiken"
              width={800}
              height={533}
              className="w-full object-cover"
            />
            <figcaption className="mt-3 text-sm text-muted-foreground">
              Takagi-Sensei, 7º Dan Kyoshi de Taikiken (escola Shiseijuku).
            </figcaption>
          </figure>
        </Reveal>

        <Reveal>
          <div className="space-y-6 text-lg leading-relaxed">
            <h2 className="pt-2 font-serif text-3xl">A fundação do Taikiken</h2>
            <p>
              Ao retornar ao Japão, Sawai-Sensei fundou o Taikiken, que significa “Punho da Grande
              Energia”. Ele procurou combinar o conhecimento adquirido tanto no Japão como na China
              para criar um sistema de treino completo que atendesse não apenas à defesa pessoal, mas
              também ao bem-estar físico e mental.
            </p>
            <p>
              O Taikiken rapidamente ganhou adeptos no Japão. Sawai-Sensei dedicou sua vida ao
              desenvolvimento e disseminação do Taikiken, treinando numerosos discípulos e
              instrutores. Sua influência continua na comunidade de artes marciais e naqueles que
              buscam um caminho de crescimento pessoal, equilíbrio e harmonia.
            </p>

            <h2 className="pt-6 font-serif text-3xl">O Taikiken hoje</h2>
            <p>
              Hoje, o Taikiken permanece como uma arte marcial única e que é valorizada tanto por sua
              eficácia nas técnicas de autodefesa quanto por sua ênfase na saúde, bem-estar e
              crescimento espiritual. A história do Taikiken é, portanto, uma história de dedicação e
              busca constante por conhecimento e aprimoramento pessoal, que continua a inspirar e
              transformar aqueles que seguem esse caminho.
            </p>
            <p>
              No Taikiken, os praticantes também exploram técnicas de autodefesa, com uma abordagem
              mais suave e focada na utilização da energia e da técnica em vez da força bruta. Isso
              torna o Taikiken uma opção acessível para pessoas de todas as idades e níveis de
              aptidão.
            </p>
          </div>
        </Reveal>
      </article>
    </>
  )
}
