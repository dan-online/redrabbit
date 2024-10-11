import IconsResolver from "unplugin-icons/resolver";
import ViteComponents from "unplugin-vue-components/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: ["@unocss/nuxt", "nuxt-vuefire", "unplugin-icons/nuxt"],
	css: ["~/assets/css/global.css"],

	vite: {
		plugins: [
			ViteComponents({
				resolvers: [
					IconsResolver({
						prefix: "",
						strict: true,
					}),
				],
				dts: false,
			}),
		],
	},

	vuefire: {
		auth: {
			enabled: true,
			sessionCookie: {
				secure: process.env.NODE_ENV === "production",
			},
		},
		appCheck: {
			debug: process.env.NODE_ENV !== "production",
			isTokenAutoRefreshEnabled: true,
			provider: "ReCaptchaV3",
			key: process.env.RECAPTCHA_SECRET_KEY,
		},
		config: {
			apiKey: process.env.FIREBASE_API_KEY,
			authDomain: process.env.FIREBASE_AUTH_DOMAIN,
			projectId: process.env.FIREBASE_PROJECT_ID,
			appId: process.env.FIREBASE_APP_ID,
			// there could be other properties depending on the project
		},
	},
});
