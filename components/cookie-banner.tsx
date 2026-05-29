'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'cookie-consent.v1'

type Consent = {
  essential: true
  analytics: boolean
  marketing: boolean
  decidedAt: string | null
}

const defaultConsent: Consent = {
  essential: true,
  analytics: false,
  marketing: false,
  decidedAt: null,
}

function readConsent(): Consent {
  if (typeof window === 'undefined') return defaultConsent
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultConsent
    const parsed = JSON.parse(raw) as Partial<Consent>
    return {
      essential: true,
      analytics: Boolean(parsed.analytics),
      marketing: Boolean(parsed.marketing),
      decidedAt: parsed.decidedAt ?? null,
    }
  } catch {
    return defaultConsent
  }
}

function writeConsent(consent: Consent): void {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(consent))
}

type Strings = {
  title: string
  body: string
  acceptAll: string
  rejectAll: string
  customize: string
  savePreferences: string
  analyticsLabel: string
  marketingLabel: string
}

const DEFAULT_STRINGS: Strings = {
  title: 'Privacidade',
  body: 'Usamos cookies essenciais para o funcionamento do site e cookies opcionais para análise e marketing. Você decide.',
  acceptAll: 'Aceitar tudo',
  rejectAll: 'Só essenciais',
  customize: 'Personalizar',
  savePreferences: 'Salvar preferências',
  analyticsLabel: 'Analytics',
  marketingLabel: 'Marketing',
}

type CookieBannerProps = {
  privacyPolicyHref?: string
  className?: string
  strings?: Partial<Strings>
}

export function CookieBanner(props: CookieBannerProps) {
  const strings = { ...DEFAULT_STRINGS, ...(props.strings ?? {}) }
  const [open, setOpen] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [analytics, setAnalytics] = useState(false)
  const [marketing, setMarketing] = useState(false)

  useEffect(() => {
    const consent = readConsent()
    setOpen(consent.decidedAt === null)
    setAnalytics(consent.analytics)
    setMarketing(consent.marketing)
  }, [])

  if (!open) return null

  const decide = (next: { analytics: boolean; marketing: boolean }) => {
    writeConsent({
      essential: true,
      analytics: next.analytics,
      marketing: next.marketing,
      decidedAt: new Date().toISOString(),
    })
    setOpen(false)
  }

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-banner-title"
      className={`fixed inset-x-4 bottom-4 z-50 mx-auto max-w-2xl border bg-background p-5 shadow-2xl md:inset-x-auto md:bottom-6 md:right-6 ${props.className ?? ''}`}
    >
      <h2 id="cookie-banner-title" className="font-serif text-lg">
        {strings.title}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        {strings.body}{' '}
        {props.privacyPolicyHref ? (
          <a href={props.privacyPolicyHref} className="underline hover:text-accent">
            Política de privacidade
          </a>
        ) : null}
      </p>

      {expanded ? (
        <div className="mt-4 space-y-2 text-sm">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={analytics}
              onChange={(e) => setAnalytics(e.target.checked)}
            />
            {strings.analyticsLabel}
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={marketing}
              onChange={(e) => setMarketing(e.target.checked)}
            />
            {strings.marketingLabel}
          </label>
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => decide({ analytics: true, marketing: true })}
          className="bg-accent px-4 py-2 text-sm uppercase tracking-[0.15em] text-accent-foreground transition-opacity hover:opacity-90"
        >
          {strings.acceptAll}
        </button>
        <button
          type="button"
          onClick={() => decide({ analytics: false, marketing: false })}
          className="border px-4 py-2 text-sm uppercase tracking-[0.15em] transition-colors hover:bg-secondary"
        >
          {strings.rejectAll}
        </button>
        {expanded ? (
          <button
            type="button"
            onClick={() => decide({ analytics, marketing })}
            className="border px-4 py-2 text-sm uppercase tracking-[0.15em] transition-colors hover:bg-secondary"
          >
            {strings.savePreferences}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="border px-4 py-2 text-sm uppercase tracking-[0.15em] transition-colors hover:bg-secondary"
          >
            {strings.customize}
          </button>
        )}
      </div>
    </div>
  )
}
