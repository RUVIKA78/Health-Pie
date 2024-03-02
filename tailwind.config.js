/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/index.html',
    './views/signup.html',
    './views/login.html',
    './views/*.{html}',
    './views/*.{html,js}',
  
  ],
  theme: {
    extend: {
      fontFamily: {
       "font-family": "Kaushan Script", cursive,
      }
    },
  },
  plugins: [],
}

