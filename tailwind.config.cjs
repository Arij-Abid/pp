/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        customPurple: '#915EFF',
      },

      keyframes: {
        glowing: {
          '0%': { 'background-position': '0 0' },
          '50%': { 'background-position': '400% 0' },
          '100%': { 'background-position': '0 0' },
        },
      },
      animation: {
        glowing: 'glowing 20s linear infinite',
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        'navbar-shadow': '-15px -15px 15px rgba(255, 255, 255, 0.2), 15px 15px 15px rgba(0, 0, 0, 0.1), inset -5px -5px 5px rgba(255, 255, 255, 0.2), inset 5px 5px 5px rgba(0, 0, 0, 0.1)',

      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        gradient: 'linear-gradient(45deg, #FF0000, #FF7300, #FFFB00, #48FF00, #00FFD5, #002BFF, #FF00C8, #FF0000)',

      },
    },
  },
  plugins: [],
};
