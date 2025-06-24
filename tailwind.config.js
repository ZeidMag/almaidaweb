/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D97904', // Industrial Orange
          light: '#F08A04',
          dark: '#B36503',
        },
        accent: {
          DEFAULT: '#C89C3F', // Warm Gold
          light: '#D4AF5C',
          dark: '#A67E2A',
        },
        charcoal: {
          DEFAULT: '#2E2E2E', // Charcoal Gray
          light: '#404040',
          dark: '#1A1A1A',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 