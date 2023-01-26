const plugin = require('tailwindcss/plugin');

const animationDelay = plugin(({matchUtilities, theme}) => {
    matchUtilities({
        'animation-delay': (value) => {
         return {
          animationDelay: value
        }}
    }, {
        values: theme('animationDelay')
    })
}, {
    theme: {
        animationDelay: {
            100: '100ms',
            200: '200ms',
            300: '300ms',
            500: '500ms',
            700: '700ms',
            900: '900ms',
            1000: '1000ms',
            1500: '1500ms',
        }
    }
});

module.exports = animationDelay