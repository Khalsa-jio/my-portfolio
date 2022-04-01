module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        grey: "#20202a",
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        grey2: "rgba(37,37,50,.98)",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc107",
        grayDark: "#273444",
        gray: "#8492a6",
        grayLight: "#d3dce6",
        white: "#ffffff",
        textGray: "#8c8c8e",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Courier Prime", "serif"],
      },
      dropShadow: {
        xs: "0,1px,4px,0 rgba(15,15,20, 0.1) ",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
