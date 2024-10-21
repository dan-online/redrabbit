import { customThemes, daisyUIThemes } from "~/utils/themes";

export function useCustomThemes() {
	const customThemeNames = Object.keys(customThemes);
	const allThemes = [...daisyUIThemes, ...customThemeNames];

	return {
		themes: customThemes,
		customThemeNames,
		daisyUIThemes,
		allThemes,
	};
}
