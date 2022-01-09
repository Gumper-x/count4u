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
          100: "#cff3f3",
          200: "#11cecf",
          300: "#1cd8d8",
          500: "#0bb0b0",
          700: "#2a525a",
        },
        second: {
          100: "#efefef",
          200: "#c9cbd2",
          300: "#888ea4",
          400: "#50505e",
          500: "#3b3b47",
        },
      },
    },
    screens: {
      ms: "342px",
      mn: "375px",
      lt: "425px",
      st: "480px",
      sm: "640px",
      md: "768px",
      hf: "860px",
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
