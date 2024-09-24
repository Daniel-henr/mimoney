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
          200: '#dcdcdc'
        },
        'primary': {
          800: '#4f527e',
          950: '#2a2b3d'
        },
        'secondary': {
          100: '#d1fae5',
          300: '#6de8b8',
          400: '#28C28B',
          600: '#03986b',
        },
      },
      padding: {
        'custom-38': '38px',
        'custom-211': '211px',
      },
      margin: {
        'custom-20': '20rem',
      },
      borderWidth: {
        'custom-1': '1px', 
      },
    },
  },
  plugins: [],
}

