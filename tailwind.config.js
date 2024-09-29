/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { addDynamicIconSelectors } = require("@iconify/tailwind");
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        dark: "#202020",
        accent: "#F5604A",
        primary: "#FCBE5B",
      },
      fontFamily: {
        serif: ['"Inter"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
    require("@tailwindcss/forms"),
    addDynamicIconSelectors(),
  ],
  darkMode: "selector",
};
