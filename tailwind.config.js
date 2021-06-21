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
        brandyellow: "#F3FF4A",

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
