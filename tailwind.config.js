/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        lightWhite: "#f8f8f8",
        lightBlue: "rgba(9,151,124,0.1)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      screens: {
        ss: "480px",
        sm: "640px",
        md: "768px",
        dd: "910px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
