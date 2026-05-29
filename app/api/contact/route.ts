import { handleContactSubmission } from '@joerosariophysio/site-toolkit/forms'

export const runtime = 'nodejs'

export async function POST(req: Request): Promise<Response> {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_EMAIL_TO
  const from = process.env.CONTACT_EMAIL_FROM

  if (!apiKey || !to || !from) {
    return Response.json(
      { ok: false, error: 'misconfigured' },
      { status: 500 },
    )
  }

  let raw: unknown
  try {
    raw = await req.json()
  } catch {
    return Response.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }

  const result = await handleContactSubmission(raw, {
    resendApiKey: apiKey,
    to,
    from,
    replyToFromInput: true,
  })

  return Response.json(result.body, { status: result.status })
}
