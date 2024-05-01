import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        epilogue: ['var(--font-epilogue)'],
        anton: ['var(--font-anton)'],
        glamora: ['var(--font-glamora)'],
      },
      animation: {
        marquee: 'marquee 10s infinite linear',
        reveal: 'reveal 10s infinite linear',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        reveal: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '60%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
