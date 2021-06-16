module.exports = {
  mode: "jit",
  purge: ["./public/**/*index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        harvest: "#E79407",
        khaki: "#E1E289",
        quicksilver: "#A1A0A2",
        spacecadet: "#2B2D42",

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
