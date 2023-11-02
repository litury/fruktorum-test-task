import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: { enabled: true },


  components: [
    {
      path: "~/components",
      pathPrefix: false,
      global: true,
    },
  ],

  modules: ["@pinia/nuxt", 'nuxt-icons', 'nuxt-swiper'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
                    @use "@/assets/scss/_vars/_vars.scss" as *; 
                    @use "@/assets/scss/_mixins/_media.scss" as *;
                    @use "@/assets/scss/_mixins/_font-face.scss" as *;
                   `,
        },
      },
    },

  },



});
