import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/ornaments'

export const metadata: Metadata = {
  title: 'Vídeos',
  description:
    'Demonstrações de Toishou (Pushing Hands) e Menarachi Kumite pelo Takagi-Sensei — escola Shiseijuku.',
}

type Video = { id: string; titulo: string }

const VIDEOS: Video[] = [
  { id: 'kVYwYYtBIQI', titulo: 'Takagi-Sensei demonstrando Toishou (Pushing Hands)' },
  { id: 'RU1BFuocvMA', titulo: 'Takagi-Sensei demonstrando Menarachi Kumite (luta com mãos abertas, “brincadeira de tigre”)' },
  { id: 'Icyj8W5uxUU', titulo: 'Takagi-Sensei demonstrando Menarachi Kumite' },
  { id: '0d4mM9PYg0g', titulo: 'Takagi-Sensei demonstrando Menarachi Kumite' },
]

export default function VideosPage() {
  return (
    <>
      <PageHero
        kanji="動"
        hanko="動"
        eyebrow="Movimento"
        title="Vídeos"
        subtitle="Demonstrações de Toishou e Menarachi Kumite pelo Takagi-Sensei — escola Shiseijuku."
      />

      <div className="container max-w-5xl py-20 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {VIDEOS.map((v) => (
            <Reveal key={v.id}>
              <figure className="space-y-3">
                <div className="aspect-video w-full overflow-hidden border border-border bg-foreground/5">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${v.id}`}
                    title={v.titulo}
                    loading="lazy"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>
                <figcaption className="text-sm text-muted-foreground">{v.titulo}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </>
  )
}
