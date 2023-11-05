/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myLight: {
          "primary": "#4254b8",
          "secondary": "#bce9b4",
          "accent": "#2441e5",
          "neutral": "#121a3a",
          "base-100": "#eff1fa",
          "char":"#080B1C",
        },
        myDark: {
          "primary": "#4759bd",
          "secondary": "#1e4b16",
          "accent": "#1a37db",
          "neutral": "#121a3a",
          "base-100": "#050710",
        },
      },
    ],
  },
}