/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" // scan all React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}