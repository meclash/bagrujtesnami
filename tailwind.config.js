module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({

      'grasspattern': "url('../media/grass-2.webp')",
      'rockpattern': "url('../media/sand2.webp')",
      'claypattern': "url('../media/clay.webp')",
      
      

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
