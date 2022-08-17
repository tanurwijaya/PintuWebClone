/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        priceIncrease: 'increase 5s ease-in-out',
        priceDecrease: 'fadeOut 5s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        increase: {
          '0%': { color: '#52A56A' },
          '100%': { color: 'black' },
        },
        decrease: {
          '0%': { backgroundColor: theme('colors.red.300') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
  },
  plugins: [],
}
