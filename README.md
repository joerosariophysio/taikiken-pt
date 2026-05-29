# Site Template Base

Boilerplate Next.js 14 + Tailwind + shadcn/ui usado como ponto de partida para a frota de sites Joe.

## Bootstrap de um site novo

```bash
gh repo create <nome-do-site> --template joerosariophysio/site-template-base --private --clone
cd <nome-do-site>
pnpm install
cp .env.example .env.local
pnpm dev
```

## Estrutura

```
.
├── app/                    # Rotas (App Router)
│   ├── llms.txt/route.ts   # /llms.txt automático
│   ├── sitemap.ts          # /sitemap.xml automático
│   ├── robots.ts           # /robots.txt automático
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   └── ui/                 # shadcn primitives (adicionar via `pnpm dlx shadcn@latest add`)
├── lib/                    # helpers locais
├── public/
├── AGENTS.md               # overrides do projeto
├── .env.example
└── next.config.js
```

## Toolkit compartilhado

Todos os módulos plug-and-play vêm de `@joerosariophysio/site-toolkit` (repo separado, publicado no GitHub Packages).

**Para dev local antes da primeira publicação:**

```bash
# A partir de 0 - sites/02-toolkit
pnpm install && pnpm build && pnpm link --global

# A partir do site
pnpm link --global @joerosariophysio/site-toolkit
```

**Para autenticar no GitHub Packages** (depois que o toolkit estiver publicado):

```bash
# ~/.npmrc
@joerosariophysio:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<PAT com scope read:packages>
```

Uso:

```ts
import { generateSiteMetadata } from '@joerosariophysio/site-toolkit/seo'
import { handleContactSubmission } from '@joerosariophysio/site-toolkit/forms' // server (route handler)
import { ContactForm } from '@joerosariophysio/site-toolkit/forms/ContactForm' // client component
import { WhatsAppButton } from '@joerosariophysio/site-toolkit/whatsapp'
import { CookieBanner } from '@joerosariophysio/site-toolkit/cookie-banner'
```

Atualizar com `pnpm up @joerosariophysio/site-toolkit`.

## Quality gates antes de DNS

Ver `00-AGENCIA/standards/AGENTS-global.md` §8.

## Documentação adicional

- Regras globais: `../00-AGENCIA/standards/AGENTS-global.md`
- Brief template: `../00-AGENCIA/briefs/_template.md`
- Checklists: `../00-AGENCIA/standards/{seo,geo,conversao}-checklist.md`
