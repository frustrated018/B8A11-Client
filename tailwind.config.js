/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontSize: {
      sm: "0.750rem",
      base: "1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.158rem",
      "5xl": "4.210rem",
    },
    fontFamily: {
      heading: "Roboto",
      body: "Roboto",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myLight: {
          "primary": "#ba9c73",
          "secondary": "#8ef732",
          "accent": "#40eb19",
          "neutral": "#262626",
          "base-100": "#e6e6e6",
        },
        myDark: {
          "primary": "#8c6e45",
          "secondary": "#65ce09",
          "accent": "#3ae614",
          "neutral": "#262626",
          "base-100": "#1a1a1a",
        },
      },
    ],
  },
};
