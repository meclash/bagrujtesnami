module.exports = {
  purge: {
   
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "deeporanginoooooo": "#e55942",
      },

      scale: {
        "-1": "-1",
      },
  },
},
  variants: {
    extend: {},
  },
  plugins: [
    require("postcss-import"),
  ],
}
