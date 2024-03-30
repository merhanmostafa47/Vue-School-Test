export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./app.config.ts"
  ],
  theme: {
    extend: {
      colors: {
        // Main colors
        "main-clr": "#0BD88F",
        "secondary-clr": "#00F0FF",
        "grey-clr": "#737B98",

        // Backgrounds colors
        "main-bg": "#212435",
        "opacity-bg": "#2B2F44E5",

        // Text colors
        "default-clr": "#F3F5FF",
        "dark-clr": "#212435",

        // Gradient colors
        "purple-clr": "#4F08E680",
        "pink-clr": "#FF497580",
      },
    },
  },
  plugins: [],
};
