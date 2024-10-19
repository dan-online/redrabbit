import { presetDaisy } from "@matthiesenxyz/unocss-preset-daisyui";
import {
	defineConfig,
	presetTypography,
	presetUno,
	presetWebFonts,
} from "unocss";
import { themes as allThemes } from "~/utils/theme";

export default defineConfig({
	presets: [
		presetUno(),
		presetDaisy({
			themes: allThemes,
		}),
		presetWebFonts({
			provider: "bunny",
			fonts: {
				base: "Inter:400,500,600,700,800,900",
			},
		}),
		presetTypography(),
	],
});
