import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        clinical: {
          white: '#FFFFFF',
          gray: '#F5F5F7',
          'gray-dark': '#E8E8EC',
          charcoal: '#0A0A0F',
          'charcoal-light': '#1A1A24',
          crimson: '#8B1E2D',
          'crimson-light': '#A6283A',
          'crimson-dark': '#6E1622',
          blue: '#EEF2FA',
          'blue-dark': '#DDE4F0',
          muted: '#6B6B7B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        heading: ['Libre Franklin', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
