module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          200: "#66ecec",
          300: "#1cd8d8",
          500: "#0bb0b0",
        },
        second: {
          200: "#c9cbd2",
          300: "#888ea4",
          400: "#50505e",
          500: "#3b3b47",
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: "Proxima Nova, sans-serif",
      mono: "Mont, monospace",
    },
  },
  plugins: [],
};
