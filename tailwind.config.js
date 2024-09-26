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

          600: '#5a5a5a',
        },
      },
      padding: {
        'custom-38': '38px',
        'custom-13': '13rem',
      },
      margin: {
        'custom-21': '21rem',
      },
      borderWidth: {
        'custom-1': '1px', 
      },
    },
  },
  plugins: [],
}

