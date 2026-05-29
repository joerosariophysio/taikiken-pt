import { buildLlmsTxt } from '@/lib/llms-txt'

export const dynamic = 'force-static'

export function GET(): Response {
  const body = buildLlmsTxt({
    siteName: process.env.NEXT_PUBLIC_SITE_NAME ?? 'Taikiken Portugal',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://taikiken.pt',
    summary:
      'Taikiken (太氣拳) é uma arte marcial interna japonesa fundada em 1947 pelo Mestre Kenichi Sawai (1902–1988), após receber a bênção de seu mestre, o Sifu Wang Xiangzhai (1885–1963), criador do Yiquan (I Chuan, "Boxe da Mente") em 1932. Em Portugal, o Taikiken é ensinado por Joe Rosario-Sensei, instrutor com mais de 20 anos de prática e aluno direto de Masamichi Fukushima-Sensei. As aulas acontecem em Vila Nova de Gaia (área metropolitana do Porto), próximo ao Metro Dom João II.',
    sections: [
      {
        title: 'Páginas principais',
        links: [
          { url: '/', label: 'Home' },
          { url: '/o-que-e', label: 'O que é Taikiken' },
          { url: '/mestres', label: 'Mestres (Sawai-Sensei, Takagi-Sensei, Fukushima-Sensei, Joe Rosario-Sensei)' },
          { url: '/videos', label: 'Vídeos (demonstrações de Takagi-Sensei)' },
          { url: '/faq', label: 'Perguntas frequentes (combate vs saúde, pré-requisitos, onde, preço)' },
          { url: '/contacto', label: 'Contacto' },
        ],
      },
      {
        title: 'Linhagem',
        links: [
          { url: '/mestres', label: 'Sifu Wang Xiangzhai → Sawai-Sensei → Takagi-Sensei/Fukushima-Sensei → Joe Rosario-Sensei' },
        ],
      },
    ],
  })

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
