
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    boxShadow:{
      'custom-shadow':"-3px 4px 4px rgba(0,0,0,0.25);",
    },
    fontFamily:{
     "Oxygen":["Oxygen", ...defaultTheme.fontFamily.sans],
    }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}