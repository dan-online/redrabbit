import {
	defineConfig,
	presetTypography,
	presetUno,
	presetWebFonts,
} from "unocss";

export default defineConfig({
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
	},
	presets: [
		presetUno(),
		// presetAttributify(),
		presetWebFonts({
			provider: "bunny",
			fonts: {
				base: "Inter:400,500,600,700,800,900",
			},
		}),
		presetTypography(),
	],
});
