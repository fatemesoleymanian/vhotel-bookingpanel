// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: '#2C3E50', // Example color
        tahiti: '#1ABC9C', // Example color
      },
    },
  },
  plugins: [],
}
