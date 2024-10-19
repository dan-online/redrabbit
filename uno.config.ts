import { presetDaisy } from "@matthiesenxyz/unocss-preset-daisyui";
import {
	defineConfig,
	presetTypography,
	presetUno,
	presetWebFonts,
} from "unocss";
import { useCustomThemes } from "~/composables/useThemes";

export default defineConfig({
	presets: [
		presetUno(),
		presetDaisy({
			themes: (() => {
				const customThemes = useCustomThemes();
				return customThemes.allThemes.map((theme) => {
					if (customThemes.customThemeNames.includes(theme)) {
						return {
							[theme]:
								customThemes.themes[theme as keyof typeof customThemes.themes],
						};
					}
					return theme;
				});
			})(),
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
