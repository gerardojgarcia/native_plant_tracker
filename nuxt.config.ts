// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss'

    ],

    vue: {
        compilerOptions: {
            isCustomElement: tag =>['aos'].includes(tag)
        }
    }

})
