import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { CookieBanner } from '@joerosariophysio/site-toolkit/cookie-banner'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500'],
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600'],
  display: 'swap',
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://taikiken.pt'
const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? 'Taikiken Portugal'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s · ${siteName}`,
  },
  description:
    'Taikiken (太氣拳) em Portugal — arte marcial interna ensinada por Joe Rosario-Sensei no Porto e Vila Nova de Gaia.',
  applicationName: siteName,
  authors: [{ name: 'Joe Rosario-Sensei' }],
  keywords: [
    'Taikiken',
    'arte marcial interna',
    'Yiquan',
    'I Chuan',
    'Porto',
    'Vila Nova de Gaia',
    'Joe Rosario-Sensei',
    'Sawai-Sensei',
    'Fukushima-Sensei',
  ],
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#F5F1E8' },
    { media: '(prefers-color-scheme: dark)', color: '#0E0E0C' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? 'pt-PT'

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${cormorant.variable}`}
    >
      <body className="flex min-h-screen flex-col antialiased">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <CookieBanner
          privacyPolicyHref="/privacidade"
          strings={{
            title: 'Privacidade',
            body: 'Este sítio usa cookies essenciais para funcionar e cookies opcionais para análise de tráfego. Pode aceitar, recusar ou personalizar.',
            acceptAll: 'Aceitar tudo',
            rejectAll: 'Só essenciais',
            customize: 'Personalizar',
            savePreferences: 'Guardar preferências',
            analyticsLabel: 'Análise de tráfego',
            marketingLabel: 'Marketing',
          }}
        />
        <Analytics />
      </body>
    </html>
  )
}
