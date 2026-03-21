/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        mist: "#f5f1ea",
        accent: "#8a5b3d",
        sand: "#eadfce",
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        serif: ["Cormorant Garamond", "serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};
