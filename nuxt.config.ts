// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  css: [
    "@/assets/style.css",
    "swiper/css",
    "swiper/css/navigation",
    "swiper/css/pagination",
  ],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper", "@nuxt/icon"],
});
