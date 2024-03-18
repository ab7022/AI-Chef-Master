/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./**/@material-tailwind/**/*.{html,js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {}
  },
  plugins: [require("tailwindcss-animated")]
};
