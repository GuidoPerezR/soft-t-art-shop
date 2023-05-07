/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navbar': '#E5DBD9',
        'pink': '#F5C4C3'
      }
    },
  },
  plugins: [],
}

