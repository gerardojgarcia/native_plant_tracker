// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge'

    ],

    vue: {
        compilerOptions: {
            isCustomElement: tag =>['aos'].includes(tag)
        }
    },
      

    app: {
		head: {

			charset: 'utf-16',
			viewport: 'width=device-width, initial-scale=1',
			title: 'ELACompost: Learn about Native SoCal Plants and their benefits',
			meta: [
			// <meta name="description" content="My amazing site">
			{ name: 'description', content: 'Free resources to learn about composting, native ecosystems, and foraging' }
			 ],
			 htmlAttrs: {
				lang: 'en',
			  },
		}
	},
	nitro: {
		compressPublicAssets: true,
		prerender: {
			crawlLinks: true,
		}
	},
	css: [
		'@fortawesome/fontawesome-svg-core/styles.css'
],

build: {
		transpile: [
				'@fortawesome/fontawesome-svg-core'

		]
},
})
