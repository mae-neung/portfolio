import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F4F0E6', card: '#FCFAF4', ink: '#262420', muted: '#6A6459', line: '#E6E0D1',
        sage: '#8FB49B', sageink: '#2B4635', sagewash: '#E7F0E9',
        peach: '#EFAE92', peachink: '#78391F', peachwash: '#FBE7DB',
        sky: '#A3C2DF', skyink: '#2A4860', skywash: '#E6EEF6',
        butter: '#EBCE86', butterink: '#6B4E12',
      },
      fontFamily: {
        disp: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Pretendard', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
