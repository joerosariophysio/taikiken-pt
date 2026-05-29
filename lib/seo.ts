// Helpers de JSON-LD (Schema.org) — locais ao site.

type OrganizationInput = {
  name: string
  url: string
  logo?: string
  sameAs?: string[]
}

export function organizationJsonLd(input: OrganizationInput): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: input.name,
    url: input.url,
    ...(input.logo ? { logo: input.logo } : {}),
    ...(input.sameAs ? { sameAs: input.sameAs } : {}),
  }
}

type PersonInput = {
  name: string
  url: string
  jobTitle?: string
  worksFor?: string
  sameAs?: string[]
  knowsAbout?: string[]
  image?: string
}

export function personJsonLd(input: PersonInput): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: input.name,
    url: input.url,
    ...(input.jobTitle ? { jobTitle: input.jobTitle } : {}),
    ...(input.worksFor ? { worksFor: { '@type': 'Organization', name: input.worksFor } } : {}),
    ...(input.sameAs ? { sameAs: input.sameAs } : {}),
    ...(input.knowsAbout ? { knowsAbout: input.knowsAbout } : {}),
    ...(input.image ? { image: input.image } : {}),
  }
}
