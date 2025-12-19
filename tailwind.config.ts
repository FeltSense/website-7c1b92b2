import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7f9',
          100: '#eaeef5',
          200: '#cfdaed',
          300: '#9cb7e2',
          400: '#5c90e6',
          500: '#3B82F6',
          600: '#0055f5',
          700: '#0040c2',
          800: '#002d8f',
          900: '#042062',
        },
        secondary: {
          50: '#f7f7f8',
          100: '#eff0f0',
          200: '#dcdddf',
          300: '#bcbec3',
          400: '#9a9ea7',
          500: '#6B7280',
          600: '#6e7686',
          700: '#575d6b',
          800: '#40444f',
          900: '#2e3138',
        },
        accent: {
          50: '#f5f8f9',
          100: '#eaf2f5',
          200: '#cfe3ed',
          300: '#9dcce1',
          400: '#5ebae4',
          500: '#0EA5E9',
          600: '#03a0f2',
          700: '#007cc2',
          800: '#00598f',
          900: '#063d60',
        },
      },
    },
  },
  plugins: [],
};

export default config;
