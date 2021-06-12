module.exports = {
  purge: {
    enabled:true,
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        "deeporang": "#e55942",
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
