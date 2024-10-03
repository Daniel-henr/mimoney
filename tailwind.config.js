/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'essencial': {
          50: '#F9F9F9',
          100: '#efefef',
          200: '#dcdcdc',
          300: '#bdbdbd'
        },
        'primary': {
          100: '#e7eaf2',
          200: '#d4d9e9',
          300: '#b7c1d9',
          400: '#94a1c6',
          600: '#6871a8',
          800: '#4f527e',
          950: '#2a2b3d'
        },
        'secondary': {
          100: '#d1fae5',
          200: '#a6f4d1',
          300: '#6de8b8',
          400: '#28C28B',
          600: '#03986b',
          700: '#037959',
          800: '#056047',
        },
        'support': {
          50: '#f6f6f6',
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          600: '#5a5a5a',
          700: '#4F4F4F',
          900: '#3d3d3d',
          950: '#262626'
        },
        'additional': {
          100: '#fce6e4',
          200: '#fad2ce',
          400: '#ef857a',
          600: '#cf4233',
          700: '#c0392b',
        },
        'sup-darkMode': {
          200: '#d9d9de',
          300: '#b8b9c1',

        }
      },
      padding: {
        'custom-38': '38px',
        'custom-13': '13rem',
      },
      margin: {
        'custom-17': '19rem',
        'custom-21': '21rem',
      },
      borderWidth: {
        'custom-1': '1px',
      },
      minWidth: {
        'custom-16.5': '16.5rem',
        'custom-66': '66rem',
      },
      minHeight: {
        'custom-27': '27rem',
        'custom-35': '35rem',
      },
      maxWidth: {
        'custom-31': '31rem',
        'custom-47': '47.4rem',
      },
      clipPath: {
        'custom': 'polygon(0% 100%, 10% 80%, 30% 30%, 50% 60%, 70% 10%, 90% 25%, 100% 100%)',
      },

    },
  },
  plugins: [],
}

