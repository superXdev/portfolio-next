const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './pages/**/*',
    './components/**/*'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    zIndex: {
      '-1': '-1',
      '1': '1',
      '10': '10',
    },
    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      keyframes: {
        leftToRight: {
          '0%': { marginLeft: '-50px' },
          '100%': { marginLeft: '0' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      animation: {
        leftToRight: 'leftToRight .5s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out',
        fadeInFaster: 'fadeIn .2s ease-in-out'
      }
    },
  },
  variants: {

  },
  plugins: [],
}
