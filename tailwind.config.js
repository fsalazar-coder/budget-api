/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{html,js,ts,jsx,tsx}',
    './components/**/*.{html,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'Poppins', 'sans serif']
      },
      colors: {
        'pink': '#ff49db',
        'rose': '#fa0f5e',
      },
      fontSize: {
        'ss': '0.35rem'
      },
      lineHeight: {
        'ss': '0.5rem'
      },
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      boxShadow: {
        'outner': '0 2px 8px 0 rgba(0, 0, 0, 0.10)',
        'input': '0 0 0px 1000px #ffffff inset !important',
      },
      dropShadow: {
        '3xl': '0px 2px 2px rgba(0, 0, 0, 0.15)',
        '4xl': '2px 2px 1px rgba(0, 0, 0, 0.25)',
        'natural': '0px 20px 30px rgba(0, 0, 0, 0.5)',
        'text': '4px 4px 5px rgba(0, 0, 0, 1)',
        'image': '0px -5px 10px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'gradient-header': 'linear-gradient(90deg, rgb(20, 5, 50) 20%, rgb(47, 16, 97) 45%, rgb(47, 16, 97, 0.85) 65%, rgb(47, 16, 97) 100%)',
        'gradient-footer': 'linear-gradient(90deg, rgb(20, 5, 50) 20%, rgb(47, 16, 97) 45%, rgb(47, 16, 97, 0.85) 65%, rgb(47, 16, 97, 0.05) 100%)',
        'image-header': 'linear-gradient(60deg, rgb(20, 5, 50) 25%, rgb(47, 16, 97, 0.95) 45%, rgb(47, 16, 97, 0.75) 65%, rgb(47, 16, 97, 0.95) 80%, rgb(20, 5, 50) 90%), url("/images/headerBackground/headerBackgroundGrayscale.jpg")',
        'image-products': 'linear-gradient(rgb(209, 213, 219, 0.80) 50%, rgb(209, 213, 219, 0.80) 100%), url("/images/productsBackground/productsBackground.jpg")',
        'image-footer': 'linear-gradient(60deg, rgb(20, 5, 50) 30%, rgb(47, 16, 97, 0.95) 50%, rgb(47, 16, 97, 0.75) 65%, rgb(47, 16, 97, 0.95) 80%, rgb(20, 5, 50) 90%), url("/images/FooterHeaderBackground/backgroundFooterGrayscale.jpg")',

      },
      keyframes: {
        'appear': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'disappear': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'zoom-in': {
          '0%': { transform: 'scale(0)' },
          '100%': { transform: 'scale(1)' },
        },
        'zoom-out': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0)' },
        },
        'unfold-in': {
          '0%': { transform: 'scaleX(0.005) scaleY(0.005)' },
          '75%': { transform: 'scaleX(1) scaleY(0.005)', transformOrigin: 'center' },
          '100%': { transform: 'scaleX(1) scaleY(1)', transformOrigin: 'center' },
        },
        'unfold-out': {
          '0%': { transform: 'scaleX(1) scaleY(1)' },
          '30%': { transform: 'scaleX(1) scaleY(1)' },
          '50%': { transform: 'scaleX(1) scaleY(0.005)', transformOrigin: 'center' },
          '99%': { transform: 'scaleX(0.005) scaleY(0.005)', transformOrigin: 'center' },
          '100%': { transform: 'scaleX(0) scaleY(0)', transformOrigin: 'center' },
        },
        'fade-in': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '1%': { transform: 'scale(1)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'fade-out': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '99%': { transform: 'scale(1)', opacity: '0' },
          '100%': { transform: 'scale(0)', opacity: '0' },
        },
        'appear-color': {
          '0%': { backgroundColor: 'transparent' },
          '100%': { backgroundColor: 'rgb(220,252,231)' },
        },
        'disappear-color': {
          '0%': { backgroundColor: 'rgb(220,252,231)' },
          '100%': { backgroundColor: 'transparent' },
        },
        'appear-top': {
          '0%': { opacity: '0', transform: 'translateY(-500%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'appear-right': {
          '0%': { opacity: '0', transform: 'translateX(500%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'appear-bottom': {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'appear-left': {
          '0%': { opacity: '0', transform: 'translateX(-500%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'disappear-right': {
          '0%': { display: 'flex', transform: 'translateX(0)' },
          '100%': { display: 'hidden', transform: 'translateX(500%)' },
        },
        'disappear-top': {
          '0%': { display: 'flex', transform: 'translateY(0)' },
          '100%': { display: 'hidden', transform: 'translateY(-500%)' },
        },
        'disappear-bottom': {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '1', transform: 'translateY(100%)' },
        },
        'special': {
          '0%, 30%': { opacity: '0', transform: 'translateX(0)' },
          '95%': { opacity: '0.30', transform: 'translateX(600%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'special': {
          '0%, 30%': { opacity: '0', transform: 'translateX(0)' },
          '95%': { opacity: '0.30', transform: 'translateX(600%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'width-change': {
          '0%, 50%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        'svg-dash': {
          '0%': { strokeDashoffset: '1300' },
          '100%': { strokeDashoffset: '0' },
        },
        'draw-circle': {
          '0%': {
            strokeDasharray: '0, 0',
            strokeDashoffset: '0',
            opacity: '0',
          },
          '100%': {
            strokeDasharray: '330, 165',
            strokeDashoffset: '0',
            opacity: '1',
          },
        },
        'draw-check': {
          '0%': {
            strokeDasharray: '0, 80',
            strokeDashoffset: '48',
            opacity: '0.25',
          },
          '0%': {
            strokeDasharray: '49, 80',
            strokeDashoffset: '48',
            opacity: '0.60',
          },
          '100%': {
            strokeDasharray: '130, 80',
            strokeDashoffset: '48',
          }
        },
      },
      screens: {
        'mp': '320px', /**mobile-portrait */
        'ml': '480px'  /**mobile-landscape */
      }
    },
  },
  plugins: [],
}
