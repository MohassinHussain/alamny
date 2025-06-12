/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
      },
      colors: {
        // You can add custom colors here if needed
      },
    },
  },
  plugins: [],
} 