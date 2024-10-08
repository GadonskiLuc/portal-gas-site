/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  plugins: [
    require('tailwindcss-no-scrollbar')
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'red': '#ff0000',
      'orange': '#ff7849',
      'green': '#13ce66',
      'portal-green': '#4CB944',
      'portal-yellow': '#FDC704',
      'portal-blue': '#246EB9',
      'portal-black': '#272635',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'gray-extra-light':'#F3F3F3',
      'white': '#fff',
      'black':'#000'
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  
}
