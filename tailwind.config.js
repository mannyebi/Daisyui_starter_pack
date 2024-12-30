/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'], // Update this line
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}