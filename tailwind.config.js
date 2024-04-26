/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      notoTH:["Noto Sans Thai", "sans-serif"],
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
}