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
          primary: "#4254b8",
          secondary: "#bce9b4",
          accent: "#2441e5",
          neutral: "#121a3a",
          "base-100": "#eff1fa",
          char: "#080B1C",
        },
        myDark: {
          primary: "#4759bd",
          secondary: "#1e4b16",
          accent: "#1a37db",
          neutral: "#121a3a",
          "base-100": "#050710",
        },
      },
    ],
  },
};
