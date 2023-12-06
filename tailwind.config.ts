import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-100': '#8B5FBF',
        'primary-200': '#61398F',
        'primary-300': '#FFFFFF',
        'accent-100': '#D6C6E1',
        'accent-200': '#9A73B5',
        'text-100': '#4A4A4A',
        'text-200': '#878787',
        'bg-100': '#F5F3F7',
        'bg-200': '#E9E4ED',
        'bg-300': '#FFFFFF',
      }
    },
  },
  plugins: [],
}
export default config
