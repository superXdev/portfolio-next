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
      '20': '20'
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
        },
        shake: {
          '0%': { transform: 'rotate(-20deg)' },
          '25%': { transform: 'rotate(20deg)' },
          '50%': { transform: 'rotate(-20deg)' },
          '75%': { transform: 'rotate(20deg)' },
          '100%': { transform: 'rotate(0deg)' }
        }
      },
      animation: {
        leftToRight: 'leftToRight .5s ease-in-out',
        fadeIn: 'fadeIn .5s ease-in-out',
        fadeInFaster: 'fadeIn .2s ease-in-out',
        shake: 'shake .5s ease-in-out',
      },
      backgroundImage: theme => ({
        'call-img': "url('/call.png')",
        'wave-img': "url('/wave.png')",
        'love-img': "url('/love.png')",
      })
    },
  },
  variants: {
    extend: {
      animation: ['hover', 'focus'],
      padding: ['hover'],
    }
  },
  plugins: [],
}