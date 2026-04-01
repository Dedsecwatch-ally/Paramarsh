/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paramarsh: {
          dark: '#0e2634',
          subDark: '#0a2533',
          green: '#28a745',
          lightGreen: '#e6f4ea'
        }
      },
      fontFamily: {
        display: ['Audiowide', 'sans-serif'],
        sans: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}
