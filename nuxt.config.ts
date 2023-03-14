export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "VW Safari Official",
      meta: [
        { name: "description", content: "Paket VW Borobudur" },
        {
          name: "keywords",
          content:
            "vw, borobudur, vwmurah, paketvwmurah, magelang, wisatamagelang, vwsafariofficial",
        },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: "/favicon.png" }]
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  ssr: false,
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "@/assets/main.scss",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  modules: ["nuxt-swiper"],
  plugins: ["~/plugins/vViewer"]
});
