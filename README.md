# PixelPy Tech

Modern, animated marketing site for a web & mobile app development studio.

## Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom design tokens: `ink` dark palette, `paper` light palette, `indigo` / `mint` accents)
- Framer Motion (orchestrated hero entrance + scroll-triggered reveals)
- `react-type-animation` (terminal-style typing effect in the hero mockup)
- lucide-react (icons)
- next-themes (dark/light mode, respects system preference, no flash on load)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/
  layout.tsx      -> fonts, theme provider, metadata
  page.tsx         -> composes all sections
  globals.css       -> design tokens, base styles, reduced-motion support
components/
  navbar.tsx        -> sticky nav, mobile menu, theme toggle
  hero.tsx          -> headline, CTA, animated browser + phone mockup
  services.tsx      -> 4-up service grid
  work.tsx          -> selected project list
  process.tsx       -> 4-step process (a real sequence, hence numbered)
  cta.tsx            -> contact block
  footer.tsx
  theme-toggle.tsx
  theme-provider.tsx
lib/utils.ts        -> `cn()` classname helper
```

## Notes
- Dark mode is the default theme; toggle in the navbar switches to light and persists via `next-themes`.
- Motion respects `prefers-reduced-motion` (see `globals.css`).
- Swap the placeholder project data in `components/work.tsx` and the email in `components/cta.tsx` with real details before shipping.
