// Gerador de /llms.txt — local ao site.

type LlmsLink = { url: string; label: string; description?: string }
type LlmsSection = { title: string; links: LlmsLink[] }

type LlmsTxtInput = {
  siteName: string
  siteUrl: string
  summary: string
  sections?: LlmsSection[]
}

export function buildLlmsTxt(input: LlmsTxtInput): string {
  const lines: string[] = []
  lines.push(`# ${input.siteName}`)
  lines.push('')
  lines.push(`> ${input.summary}`)
  lines.push('')
  for (const section of input.sections ?? []) {
    lines.push(`## ${section.title}`)
    lines.push('')
    for (const link of section.links) {
      const url = link.url.startsWith('http') ? link.url : `${input.siteUrl}${link.url}`
      lines.push(`- [${link.label}](${url})${link.description ? `: ${link.description}` : ''}`)
    }
    lines.push('')
  }
  return lines.join('\n')
}
