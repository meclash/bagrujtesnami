module.exports = {
  mode: "jit",
  purge: ["./public/**/*index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({

      'grasspattern': "url('../media/grass-3.webp')",
      'rockpattern': "url('../media/sand.webp')",


    }),

      colors:{
        harvest: "#E79407",
        brandyellow: "#F3FF4A",
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
