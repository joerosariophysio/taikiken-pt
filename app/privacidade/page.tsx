import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Como o Taikiken Portugal trata os seus dados pessoais (RGPD).',
  robots: { index: true, follow: true },
}

export default function PrivacidadePage() {
  return (
    <article className="container max-w-prose py-20">
      <header className="space-y-4 border-b border-border pb-8">
        <span className="selo">RGPD</span>
        <h1 className="font-serif text-4xl leading-[1.1] tracking-tight">Política de Privacidade</h1>
      </header>

      <div className="mt-10 space-y-6 text-base leading-relaxed">
        <p>
          Este sítio (<strong>taikiken.pt</strong>) é operado pela equipa do Taikiken Portugal (Joe
          Rosario-Sensei). Recolhemos apenas os dados necessários para responder a contactos e medir o
          tráfego de forma agregada e anónima.
        </p>

        <h2 className="pt-4 font-serif text-2xl">Dados que recolhemos</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Formulário de contacto:</strong> nome, e-mail e mensagem — apenas para responder ao
            contacto.
          </li>
          <li>
            <strong>Analytics:</strong> dados agregados de tráfego (página visitada, país, dispositivo),
            sem identificadores pessoais.
          </li>
        </ul>

        <h2 className="pt-4 font-serif text-2xl">Base legal (RGPD)</h2>
        <p>
          O tratamento dos dados do formulário tem como base o seu consentimento expresso ao submeter a
          mensagem. Pode pedir a remoção dos seus dados a qualquer momento por e-mail.
        </p>

        <h2 className="pt-4 font-serif text-2xl">Conservação</h2>
        <p>
          Mensagens de contacto são conservadas pelo tempo necessário para resolver a comunicação.
          Posteriormente são eliminadas.
        </p>

        <h2 className="pt-4 font-serif text-2xl">Os seus direitos</h2>
        <p>
          Tem direito a aceder, corrigir, eliminar e portabilizar os seus dados pessoais. Para exercer
          qualquer destes direitos, contacte-nos pelo e-mail indicado em{' '}
          <a href="/contacto" className="text-accent underline">
            /contacto
          </a>
          .
        </p>

        <p className="pt-6 text-sm text-muted-foreground">
          Última atualização: 27 de maio de 2026.
        </p>
      </div>
    </article>
  )
}
