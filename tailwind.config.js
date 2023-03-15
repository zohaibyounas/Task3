/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgImg': "url('../public/images/Bg.jpg')",
      },
    },
  },
  plugins: [
    require('./node_modules/tailwind-scrollbar')
],
variants: {
    scrollbar: ['rounded']
}
}
