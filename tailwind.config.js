/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#EA6947",
          secondary: "#7C909A",
          accent: "#EA6947",
          neutral: "#23282E",
          "base-100": "#1c1917",
          info: "#0091D5",
          success: "#6BB187",
          warning: "#DBAE59",
          error: "#AC3E31",
        },
        light: {
          primary: "#5c7f67",
          secondary: "#ecf4e7",
          "secondary-content": "#24331a",
          accent: "#fae5e5",
          "accent-content": "#322020",
          neutral: "#5d5656",
          "neutral-content": "#e9e7e7",
          "base-100": "#e9e7e7",
          "base-content": "#100f0f",
        },
      },
    ],
  },
};
