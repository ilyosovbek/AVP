// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    // Load a Node.js module directly (here it's a Sass file).
    "bulma",
    // SCSS file in the project
    "@/assets/scss/main.scss",
  ],

  buildModules: ["@nuxtjs/google-fonts"],

  googleFonts: {
    families: {
      Poppins: true,
      "Josefin+Sans": true,
      Lato: [100, 300],
      Raleway: {
        wght: [400, 500, 600, 700],
        ital: [100],
      },
    },
  },
});
