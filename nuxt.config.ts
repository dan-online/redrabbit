import IconsResolver from "unplugin-icons/resolver";
import ViteComponents from "unplugin-vue-components/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-04-03",
	devtools: { enabled: true },
	modules: ["@unocss/nuxt", "nuxt-vuefire", "unplugin-icons/nuxt"],

	css: ["@unocss/reset/tailwind-compat.css"],

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
			apiKey: "AIzaSyASl3_I-3gGfbCYWqc1Th5e7UPk8a3mc_Y",
			authDomain: "redrabbits.firebaseapp.com",
			databaseURL:
				"https://redrabbits-default-rtdb.europe-west1.firebasedatabase.app",
			projectId: "redrabbits",
			storageBucket: "redrabbits.appspot.com",
			messagingSenderId: "492750302227",
			appId: "1:492750302227:web:eb7bc1ff2d15dc3b0ca3e6",
			measurementId: "G-NYCNLF4ZHE",
		},
		admin: {
			serviceAccount: process.env.GOOGLE_APPLICATION_CREDENTIALS,
		},
	},
});
