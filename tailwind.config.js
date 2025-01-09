/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "pac2-font-color": "rgb(255, 255, 255)",
        "pac2-font-color-dark": "rgb(0, 0, 0)",
        "pac2-font-title-color": "rgb(255, 255, 255)",
        "pac2-color-background": "rgb(255, 255, 255)",
        "pac2-color-background-dark": "rgb(0, 0, 0)",
        "pac2-color-ciber": "rgb(22, 74, 124)",
        "pac2-color-background-header": "rgb(22, 74, 124)",
        "pac2-color-background-footer": "rgb(22, 74, 124)",
      },
      fontSize: {
        gran: "50px",
      },
      fontFamily: {
        "pac2-font": ["Montserrat"],
        "pac2-font-header": ["Lato"],
        "pac2-font-title": ["Lato"],
        "pac2-font-foto-title": ["Lato"],
      },
    },
  },
  plugins: [],
};
