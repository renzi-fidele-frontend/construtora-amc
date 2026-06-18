# AMC Construções — Website Institucional & CMS

Website institucional moderno desenvolvido para a **AMC Construções**, empresa com 29 anos de história no mercado imobiliário, sediada em Londrina-PR com filial em Palhoça-SC. Construído com Next.js 16, React 19 e MongoDB, com foco em performance, SEO e experiência do utilizador.

---

<img width="1201" height="840" alt="novo_amc optimizado" src="https://github.com/user-attachments/assets/9dc4c435-6770-4ba4-ac5e-f93fae8ffaa9" />

---

## Índice

- [Visão Geral](#visão-geral)
- [Stack Tecnológica](#stack-tecnológica)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Mapa de Rotas](#mapa-de-rotas)
- [Sistema de Autenticação](#sistema-de-autenticação)
- [SEO & Performance](#seo--performance)
- [Desenvolvedor](#desenvolvedor)

---

## Visão Geral

Este projecto substitui o website anterior da AMC Construções por uma plataforma mais rápida, escalável e optimizada para motores de busca. Além da reformulação visual e estrutural do website institucional, foi implementado um **CMS interno** para gestão de artigos do blog, permitindo que a equipa administrativa publique, edite e remova conteúdos de forma simples e intuitiva — sem dependências de plataformas externas.

A aplicação combina renderização híbrida **SSR/SSG** do Next.js com integrações modernas como **Google Maps**, **Cloudinary** e um editor de rich text baseado em **TipTap v3**. Toda a lógica de servidor é implementada exclusivamente através de **Next.js Server Actions**, sem Route Handlers expostos.

> Desenhado por **Renzi Fidele** — [Link do Figma](https://www.figma.com/design/ehSeDQTChXfdIoX7B8NgYR/AMC-Constru%C3%A7%C3%B5es?node-id=0-1&t=72eUXvtbamVm327U-1)

---

## Stack Tecnológica

### Frontend

| Tecnologia           | Versão  |
| -------------------- | ------- |
| Next.js (App Router) | ^16.2.5 |
| React                | 19.2.3  |
| TypeScript           | ^5      |
| TailwindCSS          | v4      |
| ShadCN / Radix UI    | —       |

### Backend / Servidor

| Tecnologia             | Versão     |
| ---------------------- | ---------- |
| MongoDB + Mongoose     | ^9.6.2     |
| JWT (jsonwebtoken)     | ^9.0.3     |
| Cloudinary             | ^2.10.0    |
| Resend                 | ^6.12.4    |
| Next.js Server Actions | App Router |

### Bibliotecas Notáveis

| Biblioteca                 | Uso                                                     |
| -------------------------- | ------------------------------------------------------- |
| TipTap v3                  | Editor de texto rico com extensão de imagem customizada |
| Embla Carousel + Autoplay  | ^8.6.0 — Carouseis hero e de CTAs                       |
| @vis.gl/react-google-maps  | ^1.7.1 — Mapa interactivo com traçado de rotas          |
| yet-another-react-lightbox | ^3.28.0 — Galeria de imagens em ecrã cheio              |
| Day.js                     | ^1.11.20 — Formatação de datas em pt-BR                 |
| Sonner                     | ^2.0.7 — Notificações toast                             |
| @react-input/mask          | ^2.0.4 — Inputs mascarados (telefone)                   |

---

## Arquitetura do Projeto

```
amc-construcoes-next/
├── app/
│   ├── page.tsx                        # Homepage
│   ├── layout.tsx                      # Layout global (Header, Footer, AdminPanel)
│   ├── globals.css                     # Tokens de cor e estilos globais
│   ├── sitemap.ts                      # Sitemap dinâmico (blog + empreendimentos)
│   ├── loading.tsx                     # Preloader global com logo animada
│   ├── admin/                          # Área restrita do CMS
│   │   ├── page.tsx                    # Login do administrador
│   │   ├── criar_post/                 # Criação de artigo
│   │   ├── editar_post/[id]/           # Edição de artigo existente por ID
│   │   ├── gerir_posts/                # Listagem e gestão de artigos
│   │   ├── components/                 # FormularioDoArtigo, RichEditor, Toolbar, LinhaArtigo
│   │   └── extensions/                 # ImagemEditavel (extensão TipTap customizada)
│   ├── blog/
│   │   ├── page.tsx                    # Listagem com paginação (SSR)
│   │   ├── [slug]/page.tsx             # Artigo individual
│   │   ├── [slug]/loading.tsx          # Skeleton loader do artigo
│   │   └── layout.tsx                  # Sidebar: destaques + artigos mais lidos
│   ├── empreendimentos/
│   │   ├── page.tsx                    # Listagem com filtro por categoria
│   │   ├── listing.tsx                 # Client component de filtragem
│   │   └── [empreendimento]/page.tsx   # Detalhe do empreendimento (SSG)
│   └── institucional/                  # Quem Somos, Infraestrutura, Clientes, Depoimentos...
├── components/
│   ├── layout/                         # Header, Footer, Nav, MobileMenu, SubHeader, Container
│   ├── shared/                         # Cards, Carouseis, Breadcrumb, SectionIntro, AdminPanel...
│   └── ui/                             # Primitivos ShadCN (Button, Carousel, Drawer, Tabs...)
├── data/
│   └── data.ts                         # Dados estáticos dos empreendimentos
├── lib/
│   ├── admin.ts                        # Server Actions de autenticação (login, logout, getLogedUser)
│   ├── blog.ts                         # Server Actions do blog (CRUD de artigos)
│   ├── cloudinary.ts                   # Server Actions de upload/remoção de imagens
│   ├── email.ts                        # Server Action de envio de e-mail via Resend
│   ├── dbConnect.ts                    # Singleton de conexão MongoDB com cache global
│   └── utils.ts                        # cn(), slugify(), gerarArray(), analisarCor()
├── models/
│   └── Artigo.ts                       # Schema e interface Mongoose do modelo de Artigo
├── hooks/
│   └── useRoutesService.tsx            # Hook para Google Maps DirectionsService
├── types/
│   └── types.ts                        # Interfaces TypeScript globais (IEmpreendimento, IDepoimento...)
└── proxy.ts                            # Middleware JWT para protecção de rotas admin
```

---

## Funcionalidades

### Website Institucional

- Página inicial com carousel de banners, empreendimentos em destaque, CTAs e depoimentos
- 14 rotas públicas cobrindo empreendimentos, blog e páginas institucionais
- Layout totalmente responsivo (mobile-first com TailwindCSS v4)
- Sub-header com navegação fixa de categorias de empreendimentos
- Menu mobile com Drawer lateral (Vaul)
- Formulários de contacto e parceria com envio de e-mail via **Resend** (confirmação para o cliente e notificação para a AMC)

### CMS Integrado

- Criação, edição e remoção de artigos do blog
- Editor de rich text com TipTap v3: headings, listas, blockquote, links, alinhamento e imagens
- Extensão customizada `ImagemEditavel` com suporte a alinhamento e remoção directa do Cloudinary
- Upload de imagens (thumbnail + destaque) integrado com Cloudinary
- Painel de administração flutuante, visível apenas para utilizadores autenticados
- Toda a lógica de servidor implementada via **Server Actions** — sem API Routes expostas

### Empreendimentos

- Listagem com filtro por categoria (Lançamento, Pré-lançamento, Entregue, Urbanismo)
- Página de detalhe com galeria (Lightbox + abas por tipo de imagem), ícones de infraestrutura colapsíveis, mapa Google Maps com traçado de rota e barra de evolução da obra
- Dados geridos estaticamente via `data/data.ts` com interface TypeScript `IEmpreendimento`

### Blog

- Listagem com paginação SSR e hero article na primeira página
- Sidebar com destaques e artigos mais lidos
- Leitura de artigos em SSR com metadados dinâmicos por página
- Skeleton loader dedicado em `[slug]/loading.tsx`

---

## Mapa de Rotas

### Rotas de Administração (Privadas — JWT)

| Rota                      | Descrição                           |
| ------------------------- | ----------------------------------- |
| `/admin`                  | Login do administrador              |
| `/admin/criar_post`       | Criação de artigo com editor TipTap |
| `/admin/gerir_posts`      | Listagem e gestão de artigos        |
| `/admin/editar_post/[id]` | Edição de artigo existente por ID   |

### Server Actions (Backend)

> Esta versão **não utiliza Route Handlers** (`/app/api`). Toda a lógica de servidor é gerida exclusivamente por Server Actions do Next.js, organizadas em `lib/`.

| Ficheiro            | Funções exportadas                                                                                                      | Descrição                                    |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| `lib/admin.ts`      | `login`, `logout`, `getLogedUser`                                                                                       | Autenticação JWT via cookie HTTP-Only        |
| `lib/blog.ts`       | `apanhar_artigos`, `apanhar_artigo`, `apanhar_artigos_mais_lidos`, `publicar_artigo`, `editar_artigo`, `remover_artigo` | CRUD completo de artigos                     |
| `lib/cloudinary.ts` | `carregar_imagem`, `remover_imagem`                                                                                     | Upload e remoção de imagens no Cloudinary    |
| `lib/email.ts`      | `enviarContato`                                                                                                         | Envio de e-mail via Resend (cliente + admin) |

---

## Sistema de Autenticação

A autenticação do CMS é implementada de forma simples e segura via Server Actions:

1. Credenciais armazenadas em variáveis de ambiente (`.env`)
2. Após login, o servidor emite um **cookie HTTP-Only** contendo um **JWT** assinado com `JWT_SECRET`
3. O middleware `proxy.ts` valida o token em cada rota protegida antes de permitir o acesso
4. A Server Action `getLogedUser()` verifica o token no servidor para renderização condicional do `AdminPanel`
5. Logout remove o cookie e redireciona para `/admin`

---

## SEO & Performance

### Metadados

Todos os metadados são geridos pelo sistema nativo do Next.js (Metadata API), com suporte a:

- Title templates (`%s | AMC Construções`)
- Open Graph por página (`og:title`, `og:description`, `og:image`, `og:url`)
- Twitter Cards (`summary_large_image`)
- Canonical URLs por página
- Robots (`index: true`, `follow: true`, `googleBot` com `max-image-preview: large`)
- Schema.org estruturado (Organization, WebSite, BreadcrumbList, BlogPosting, RealEstateListing)
- Sitemap dinâmico gerado em `app/sitemap.ts`

### Performance

- `next/image` em todo o projecto para optimização automática de imagens
- `next/font` para carregamento optimizado da fonte Rubik
- **Server Components por padrão** — `"use client"` apenas onde necessário
- **Suspense** com Skeleton loader no `BlogHome` da homepage
- Skeleton loader dedicado em `/blog/[slug]/loading.tsx`
- `React cache()` nas queries de artigo individual para evitar fetches duplicados
- `next/dynamic` para componentes pesados como o Mapa (Google Maps)
- Dados dos empreendimentos servidos estaticamente a partir de `data.ts`

---

## Desenvolvedor

Desenvolvido por **Renzi Fidele** — [GitHub](https://github.com/renzi-fidele-frontend/)

> Website institucional de alto nível técnico, que combina SSR/SSG do Next.js com um CMS simples e funcional, autenticação segura por JWT, envio de e-mail via Resend e integrações com Google Maps e Cloudinary. Toda a lógica de servidor é implementada exclusivamente via Server Actions, sem Route Handlers expostos. Base de código bem organizada e preparada para evolução.
