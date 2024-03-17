/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'charmonman': ['Charmonman', 'cursive', 'system-ui'],
        'birthstone': ["Birthstone", 'cursive'],
        'crimson': ["Crimson Text", 'serif'],
        'roboto': ["Roboto", 'sans-serif']

      },
      colors: {
        'logo': '#5c2881',
        'bg':'#f0f0f0',
        'bb':'#f4f4f4',
        'oranged':'#ea6c0c',
        'saidOrder':"#25252c",
        'so':'#31313a'

      }
    },
  },
  plugins: [],
}

