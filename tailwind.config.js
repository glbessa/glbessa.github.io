/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{astro,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        sora: ['Sora', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-hi': 'var(--surface-hi)',
        border: 'var(--border)',
        'border-accent': 'var(--border-accent)',
        brand: 'var(--brand)',
        accent: 'var(--accent)',
        text: 'var(--text)',
        'text-muted': 'var(--text-muted)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
