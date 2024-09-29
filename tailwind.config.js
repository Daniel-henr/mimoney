/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
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
          400: '#94a1c6',
          800: '#4f527e',
          950: '#2a2b3d'
        },
        'secondary': {
          100: '#d1fae5',
          300: '#6de8b8',
          400: '#28C28B',
          600: '#03986b',
        },
        'support' : {
          100: '#e7e7e7',
          200: '#d1d1d1',
          300: '#b0b0b0',
          600: '#5a5a5a',
        },
        'additional' : {
          700: '#c0392b',
        },
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
        'custom-47': '47.4rem',
      },

    },
  },
  plugins: [],
}

