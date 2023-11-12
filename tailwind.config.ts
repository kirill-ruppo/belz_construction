import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '460px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1400px',
      xxl: '1700px',
    },
    colors: {
      'yellow': "#FFAE36",
      'black': "#191818",
      'pale_black': "rgba(25, 24, 24, 0.3)",
      'white': "#fff",
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)'],
      },
      boxShadow: {
        'custom-yellow': '15px 15px 0px #FFAE36',
      },
    },
  },
  plugins: [],
}
export default config
