module.exports = {
  content: ["./index.html", "./src/**/*.{vue,html,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      punkash: {
        DEFAULT: "#00a345",
        dark: "#004e25",
      },
      yellow: "#dddd25",
      orange: "#ff9528",
      pink: "#ff45b4",
      purple: "#b462ff",
      blue: "#18b6ff",
      black: "black",
      white: "#e1e1e1",
    },
    fontFamily: {
      cursive: ["Bebas Neue", "cursive"],
      mono: ["PT Mono", "monospace"],
    },
    extend: {
      animation: {
        "ping-slow": "pop 2s ease-in-out 1s 3",
        "ping-fast": "pop 1s ease-in-out 0.5s 3",
      },
      keyframes: {
        pop: {
          "15%, 30%": { transform: "scale(1)", opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
