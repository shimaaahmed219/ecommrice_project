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
       'birthstone': ["Birthstone", 'cursive']
      }
    },
  },
  plugins: [],
}

