/**
 * List of available font names (visit the url `/settings/appearance`).
 * This array is used to generate dynamic font classes (e.g., `font-inter`, `font-manrope`).
 *
 * 📝 How to Add a New Font (Next.js + Tailwind v4):
 * 1. Add the font name here (e.g. 'roboto').
 * 2. In `app/layout.tsx`, import the font from `next/font/google`.
 *    e.g. `const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto-next' })`
 * 3. Add the variable to the body class in `layout.tsx`: `${roboto.variable}`
 * 4. Add the new font family to `src/styles/theme.css` using the `@theme inline` block:
 *    `--font-roboto: var(--font-roboto-next), 'sans-serif';`
 *
 * This properly wires Next.js optimized fonts directly into Tailwind's utility classes.
 */
export const fonts = ['noto-sans-khmer', 'battambang', 'kantumruy-pro', 'suwannaphum'] as const
export const fontSizes = ['sm', 'base', 'lg'] as const
export type FontSize = (typeof fontSizes)[number]
