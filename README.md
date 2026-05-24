# 2026 Portfolio — Neo-Brutalism Frontend Developer

Single-page portfolio website dengan estetika **neo-brutalism modern tech** — bold, raw, dan engineered. Dibangun untuk frontend developer yang ingin menampilkan karya, pengalaman, dan prinsip engineering dalam satu halaman yang cepat dan interaktif.

## Tech Stack

| Kategori | Teknologi |
|----------|-----------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) + TypeScript |
| Styling | [Tailwind CSS v3](https://tailwindcss.com) |
| UI Components | shadcn-style (Button, Badge, Tooltip) via Radix UI |
| Animasi | [GSAP](https://gsap.com) + ScrollTrigger |
| Font | Bebas Neue, IBM Plex Mono, DM Sans (`next/font`) |
| Gambar | `next/image` dengan optimasi otomatis |

## Fitur

- **8 section** dalam satu halaman: Hero, Selected Projects, Experience, Principles, Tech Stack, Case Study, Contact
- **Design system** neo-brutalism — border tebal, hard shadow, sudut tajam, palet warm parchment + accent colors
- **Animasi scroll-triggered** dengan GSAP (stagger reveal, fly-in cards, count-up metrics, marquee)
- **Custom cursor** (desktop) dengan scale on hover
- **Filter kategori** pada project grid
- **Konami code easter egg** di section Contact
- **Accessibility** — semantic HTML, focus styles, `prefers-reduced-motion` support
- **Data layer terpisah** — konten di `/src/data/`, komponen menerima props

## Struktur Proyek

```
src/
├── app/
│   ├── layout.tsx       # Font loading, metadata SEO, global providers
│   ├── page.tsx         # Orchestrator — import data & render sections
│   └── globals.css      # CSS variables & design system
├── components/
│   ├── sections/        # Navbar, Hero, Projects, Experience, dll.
│   ├── ui/              # Button, Badge, Tooltip
│   └── CustomCursor.tsx
├── data/                # Single source of truth untuk konten
│   ├── personal.ts
│   ├── projects.ts
│   ├── experience.ts
│   ├── skills.ts
│   ├── principles.ts
│   └── contact.ts
├── hooks/               # useReducedMotion, useKonamiCode
├── lib/                 # gsap config, utils (cn)
└── types/               # TypeScript interfaces
```

## Memulai

### Prasyarat

- Node.js 18+
- npm, yarn, pnpm, atau bun

### Instalasi & Development

```bash
# Clone repo
git clone <repo-url>
cd 2026-portfolio

# Install dependencies
npm install

# Jalankan dev server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser.

### Scripts

| Command | Deskripsi |
|---------|-----------|
| `npm run dev` | Development server dengan hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint check |

## Kustomisasi Konten

Semua konten portfolio ada di `src/data/`. Edit file-file ini — **tidak perlu** mengubah komponen section:

| File | Isi |
|------|-----|
| `personal.ts` | Nama, tagline, bio, lokasi, social links, resume URL |
| `projects.ts` | Daftar proyek (featured, case study, tags, links) |
| `experience.ts` | Riwayat kerja & highlights |
| `skills.ts` | Skill categories + tech stack marquee |
| `principles.ts` | Engineering principles |
| `contact.ts` | CTA headline, availability, email |

Type definitions ada di `src/types/index.ts` — pastikan data baru sesuai interface yang didefinisikan.

## Section Overview

1. **Navbar** — Fixed nav, smooth scroll, mobile hamburger, availability badge
2. **Hero** — Full viewport headline, geometric shapes, ticker marquee
3. **Selected Projects** — Filterable grid dengan brutalist cards
4. **Experience** — Timeline-style work history
5. **Principles** — Dark inverted section, engineering opinions
6. **Tech Stack** — Dual-direction GSAP marquee + skill grid
7. **Case Study** — Deep-dive panels untuk proyek dengan `caseStudy` data
8. **Contact** — Full-viewport CTA, magnetic buttons, footer

## Deploy

Proyek ini siap di-deploy ke [Vercel](https://vercel.com) atau platform Node.js lainnya:

```bash
npm run build
npm run start
```

Untuk Vercel, push ke GitHub dan import repo — framework akan terdeteksi otomatis sebagai Next.js.

## Lisensi

Private — © Devon Price
