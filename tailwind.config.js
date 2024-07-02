/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto"],
      openSans: ["Open Sans"],
      montserrat: ["Montserrat"],
      honk: ["Honk"],
    },
    extend: {},
  },
  plugins: [],
};
