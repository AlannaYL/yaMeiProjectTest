/** @type {import('tailwindcss').Config} */
module.exports = {
  // layouts 的ejs 也可顯示樣式
  content: ['./public/layouts/*.ejs', './src/**/*.{html,js}', './dist/**/*.html'],
  theme: {
    extend: {}
  },
  plugins: []
}
