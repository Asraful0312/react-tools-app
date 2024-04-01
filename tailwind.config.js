/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        sceondry: "#494949",
        accentBlue: "#2665F8",
        darkBlue: "#164CD9",
        accentOrange: "#FF6B00",
        accentGreen: "#219882",
        strock: "#E8E8E8",
        darkGray: "#8C8C8C",
        extraDarkGray: "#636363",
      },
      fontFamily: {
        "clash-display": ["ClashDisplay-Variable"],
        satoshi: ["Satoshi-Variable"],
      },
    },
  },
  plugins: [],
};
