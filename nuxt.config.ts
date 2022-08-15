import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: [
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },
  css: ["@fortawesome/fontawesome-svg-core/styles.css"],
  modules: [
    "@nuxtjs/tailwindcss",
    "vue-svg-inline-loader/nuxt",
    "@vueuse/nuxt",
  ],
  target: "static",
});
