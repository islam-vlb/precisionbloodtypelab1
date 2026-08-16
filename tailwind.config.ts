import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        crimson: { DEFAULT: '#8B1E2D', light: '#A6283A', dark: '#6E1622' },
        ivory: { DEFAULT: '#FAF6F1', dark: '#F0EBE3' },
        charcoal: '#1E2530',
        gold: { DEFAULT: '#C9A15A', light: '#D4B76E', dark: '#B08D48' },
      },
      fontFamily: {
        heading: ['Libre Franklin', 'sans-serif'],
        body: ['Karla', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
