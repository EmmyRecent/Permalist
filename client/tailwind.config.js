/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1400px",
    },

    extend: {
      colors: {
        primaryColor: "#a683e3",
        primaryColorLight: "#e4e9fd",
      },

      boxShadow: {
        sm: "5px 5px 15px -5px rgba(0, 0, 0, 0.3)",
        smm: "inset 0 -3px 0 0 #a683e3",
      },

      backgroundImage: {
        heroPattern: "-webkit-linear-gradient(65deg, #a683e3 50%, #e4e9fd 50%)",
      },
    },
  },
  plugins: [],
};
