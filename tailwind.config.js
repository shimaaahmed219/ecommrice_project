/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'charmonman': ['Charmonman', 'system-ui'],
        'birthstone': ["Birthstone"],
        'crimson': ["Crimson Text", 'serif'],
        'roboto': ["Roboto", 'sans-serif'],
        'allura': ["Allura"],
        'inter':["Inter"]
      },
      colors: {
        'logo': '#5c2881',
        'bg': '#f0f0f0',
        'bb': '#f4f4f4',
        'b': '#ecdfdc',
        'oranged': '#ea6c0c',
        'saidOrder': "#25252c",
        'so': '#31313a',
        "hover":"#dcdada",
        "items":'#0000000b',
        "litter":"#3e1911",
        // "ca":"#f8f8f8"
        "ca":"#f8f8f8"
      },
      fontSize: {
        header: "18px"
      },
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fadeInDown 1s ease forwards',
      },

    },
  },
  plugins: [],
}

