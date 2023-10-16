/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "0.750rem",
      md: "0.85rem",
      lg: "1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.158rem",
      "5xl": "4.210rem",
    },
    fontFamily: {
      heading: "Luckiest Guy",
      body: "Spline Sans Mono",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
    colors: {
      light: {
        DEFAULT: "#ffffff",
        50: "#f2f2f2",
        100: "#e6e6e6",
        200: "#cccccc",
        300: "#b3b3b3",
        400: "#999999",
        500: "#808080",
        600: "#666666",
        700: "#4d4d4d",
        800: "#333333",
        900: "#1a1a1a",
        950: "#0d0d0d",
      },
      dark: {
        DEFAULT: "#1f1f1f",
        50: "#f2f2f2",
        100: "#e6e6e6",
        200: "#cccccc",
        300: "#b3b3b3",
        400: "#999999",
        500: "#808080",
        600: "#666666",
        700: "#4d4d4d",
        800: "#333333",
        900: "#1a1a1a",
        950: "#0d0d0d",
      },
      primary: {
        DEFAULT: "#AFFFBA",
        50: "#e5ffe9",
        100: "#ccffd3",
        200: "#99ffa7",
        300: "#66ff7a",
        400: "#33ff4e",
        500: "#00ff22",
        600: "#00cc1b",
        700: "#009914",
        800: "#00660e",
        900: "#003307",
        950: "#001a03",
      },
      secondary: {
        DEFAULT: "#060d14",
        50: "#ebf2f9",
        100: "#d8e6f3",
        200: "#b0cce8",
        300: "#89b2dc",
        400: "#6299d0",
        500: "#3b7fc4",
        600: "#2f669d",
        700: "#234c76",
        800: "#17334f",
        900: "#0c1927",
        950: "#060d14",
      },
      accent: {
        DEFAULT: "#FFFFAF",
        50: "#ffffe5",
        100: "#ffffcc",
        200: "#ffff99",
        300: "#ffff66",
        400: "#ffff33",
        500: "#ffff00",
        600: "#cccc00",
        700: "#999900",
        800: "#666600",
        900: "#333300",
        950: "#191a00",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};