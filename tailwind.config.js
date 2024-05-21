/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        dark: {
          800: '#0d051f',
          900: '#0e0f1a',
        },
        light: {
          300: '#eee5ff',
          600: '#afa9bf',
        },
      },
    },
  },
  plugins: [],
}
