// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      borderWidth: {
        hair: "0.5px",       // nuovo spessore super‑sottile
      },
      colors: {
        grid: "rgba(255,255,255,0.35)", // bianco leggermente attenuato
      },
    },
  },
  plugins: [],
};
