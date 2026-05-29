# AGENTS.md — taikiken-pt

> Este documento herda das regras globais e adiciona overrides específicos deste site.
> Sempre ler o global primeiro: `../../00-AGENCIA/standards/AGENTS-global.md`
> Brief: `../Brief_Taikiken_v1.md`

---

## 1. Identidade do site

- **Slug:** `taikiken-pt`
- **Domínio:** taikiken.pt
- **Tipo:** [x] institucional (geração de leads · WhatsApp)
- **Health-data?:** [x] não
- **Idiomas:** `pt-PT`
- **Idioma principal:** `pt-PT`

---

## 2. Overrides específicos

### Stack

- Next.js 14 + Tailwind + `@joerosariophysio/site-toolkit` (workspace)
- Sem shadcn/ui pesado — UI artesanal sumi-e

### Cores

- **Background (washi):** `#F5F1E8`
- **Foreground (sumi):** `#1A1A1A`
- **Muted:** `#5C5C5C`
- **Accent (cinábrio · selo):** `#A23E2C`
- **Border:** `#D9D2C2`

### Tipografia

- **Font sans:** Inter (Google) — corpo
- **Font serif:** Cormorant Garamond (Google) — títulos
- **Font kanji:** stack de sistema (Hiragino Mincho ProN → Yu Mincho → MS PMincho → Songti SC) — **não** via next/font/google (problema de TLS recorrente com Noto Serif JP)

### Páginas

- [x] `/` — Home
- [x] `/o-que-e`
- [x] `/mestres`
- [x] `/videos`
- [x] `/contacto`
- [x] `/privacidade` — RGPD
- [ ] `/aulas` — fora de escopo (decisão Joe: "só copia o texto")
- [ ] `/faq` — fora de escopo (decisão Joe)
- [x] `/llms.txt` — GEO
- [x] `/sitemap.xml`
- [x] `/robots.txt`

### Integrações ativas

- [x] Resend (form de contato) — variáveis `RESEND_API_KEY`, `CONTACT_EMAIL_TO`, `CONTACT_EMAIL_FROM`
- [x] WhatsApp button — `NEXT_PUBLIC_WHATSAPP_NUMBER` (placeholder até Joe confirmar)
- [x] Vercel Analytics
- [x] Cookie banner (RGPD)
- [ ] EduCRM API — não aplicável
- [ ] MDX — não aplicável

---

## 3. Tom de voz

- **Emoção central:** ancestral · marcial · íntimo
- **O que dizer:** Taikiken · Ki (氣) · Sawai Sensei · Yiquan/I Chuan · Kumite · linhagem · Porto · Vila Nova de Gaia
- **O que evitar:** "energias" · "vibração" · "alinhar chakras" · "guerreiro espiritual" · "academia" · "fitness"

---

## 4. Mistake Book deste projeto

Formato: `[YYYY-MM-DD] [🔴|🟠|🟡|🟢] descrição — correção.`

- `[2026-05-27]` 🟡 Noto Serif JP via `next/font/google` quebra build com `ETIMEDOUT` na woff2 do gstatic (Next.js 14 + macOS). Substituído por stack de sistema (Hiragino Mincho ProN → fallback).

---

## 5. Conteúdo verbatim do WP

Decisão do Joe (2026-05-27): "só copia o texto" — usar conteúdo do WP atual literalmente, **sem inventar dados**. Typos identificados em `../content/conteudo-atual-wordpress.md` só corrigir após Joe revisar a lista. Placeholders mantidos (e-mail `taikiken@mail.com`, endereço genérico).

---

## 6. Comandos úteis

```bash
pnpm dev          # localhost:3000
pnpm typecheck    # tsc --noEmit
pnpm lint         # eslint
pnpm build        # next build
```
