import { presetDaisy } from "@matthiesenxyz/unocss-preset-daisyui";
import {
	defineConfig,
	presetTypography,
	presetUno,
	presetWebFonts,
} from "unocss";
import { useCustomThemes } from "./composables/useThemes";

export default defineConfig({
	presets: [
		presetUno(),
		presetDaisy({
			themes: useCustomThemes().all,
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
