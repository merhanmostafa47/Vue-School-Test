export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    "./app.config.ts",
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
        "btn-bg": "#0BD88F",

        // Text colors
        "default-clr": "#F3F5FF",
        "light-clr": "#E8E6E6",
        "dark-clr": "#212435",

        // Gradient colors
        "purple-clr": "#4F08E6",
        "pink-clr": "#FF4975",
      },
    },
  },
  plugins: [],
};
