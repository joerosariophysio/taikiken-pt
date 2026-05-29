'use client'

import { useState } from 'react'

type Status = 'idle' | 'submitting' | 'ok' | 'error'

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    setStatus('submitting')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('request failed')
      setStatus('ok')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <Field name="name" label="Nome" required />
      <Field name="email" type="email" label="E-mail" required />
      <Field name="message" label="Mensagem" required multiline />

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center bg-foreground px-6 py-3 text-sm uppercase tracking-[0.2em] text-background transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === 'submitting' ? 'A enviar…' : 'Enviar'}
      </button>

      {status === 'ok' && (
        <p className="text-sm text-accent">Mensagem enviada. Obrigado — responderemos em breve.</p>
      )}
      {status === 'error' && (
        <p className="text-sm text-destructive">
          Falha no envio. Tente novamente ou contacte por WhatsApp.
        </p>
      )}
    </form>
  )
}

function Field({
  name,
  label,
  type = 'text',
  required,
  multiline,
}: {
  name: string
  label: string
  type?: string
  required?: boolean
  multiline?: boolean
}) {
  return (
    <label className="block space-y-2">
      <span className="text-xs uppercase tracking-[0.18em] text-foreground/70">{label}</span>
      {multiline ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          className="w-full border border-border bg-transparent px-3 py-2 text-base focus:border-accent focus:outline-none"
        />
      ) : (
        <input
          name={name}
          type={type}
          required={required}
          className="w-full border border-border bg-transparent px-3 py-2 text-base focus:border-accent focus:outline-none"
        />
      )}
    </label>
  )
}
