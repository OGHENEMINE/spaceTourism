/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        pulseCircle:{
          '100%' : { transform: 'scale(1.5)',
                 opacity: '0' }
        },
        crew:{
          '100%': {
            opacity: '0',
            translate: '-100px'
          }
        },
        tech:{
          '100%': {
            opacity: '0',
            translate: '-200px'
          }
        },
        orbit: {
          '100%':{
            transform: 'rotate(15deg)',
          }
        },
        spread: {
          '0%':{
            transform: 'scale(0)'            
          },
          '100%':{
            transform: 'scale(1)'
          }
        }
      },
      animation:{
        'pulse-circle': 'pulseCircle 1.5s ease-out infinite',
        'crew': 'crew 0.7s ease-out infinite',
        'tech': 'tech 0.7s ease-out infinite',
        'spread': 'spread 0.35s ease-in-out',
        'orbit': 'orbit 8s linear alternate infinite'
     },
      fontFamily:{
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        'belleFair': ['Bellefair', 'serif']
      }
    },
  },
  plugins: [require('./plugins/animationDelay.cjs')],
}