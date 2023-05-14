export default defineNuxtConfig({
  app: {
    head: {
      title: "Avp Rental",
      meta: [{
        name: "description",
        content: "Drilling service Drilling equipment and equipment rental",
      }],
    },
  },
  css: [
    // Load a Node.js module directly (here it's a Sass file).
    "bulma",
    // CSS file in the project
    "@/assets/css/mainn.css",
    // SCSS file in the project
    "@/assets/scss/main.scss",
  ],
});

