import type { Theme as DaisyUITheme } from "daisyui";

export function useCustomThemes() {
	const themes = {
		raharth: {
			"color-scheme": "dark",
			primary: "#FF00FF",
			"primary-content": "#000000",
			secondary: "#00FFFF",
			"secondary-content": "#000000",
			accent: "#FFFF00",
			"accent-content": "#000000",
			neutral: "#1A1A1A",
			"neutral-content": "#FFFFFF",
			"base-100": "#000000",
			"base-200": "#0D0D0D",
			"base-300": "#1A1A1A",
			"base-content": "#FFFFFF",
			info: "#00BFFF",
			success: "#00FF00",
			warning: "#FF8C00",
			error: "#FF0000",
		},
		redrobin: {
			"color-scheme": "light",
			primary: "#CE0E2D",
			"primary-content": "#FFFFFF",
			secondary: "#000000",
			"secondary-content": "#FFFFFF",
			accent: "#FFCC00",
			"accent-content": "#000000",
			neutral: "#58595B",
			"neutral-content": "#FFFFFF",
			"base-100": "#FFFFFF",
			"base-200": "#F7F7F7",
			"base-300": "#E6E6E6",
			"base-content": "#000000",
			info: "#2B9EB3",
			success: "#44883E",
			warning: "#F5A623",
			error: "#D64242",
		},
	};

	const daisyUIThemes: DaisyUITheme[] = [
		"light",
		"dark",
		"cupcake",
		"bumblebee",
		"emerald",
		"corporate",
		"synthwave",
		"retro",
		"cyberpunk",
		"valentine",
		"halloween",
		"garden",
		"forest",
		"aqua",
		"lofi",
		"pastel",
		"fantasy",
		"wireframe",
		"black",
		"luxury",
		"dracula",
		"cmyk",
		"autumn",
		"business",
		"acid",
		"lemonade",
		"night",
		"coffee",
		"winter",
	];

	const customThemeNames = Object.keys(themes);
	const allThemes = [...daisyUIThemes, ...customThemeNames];

	return {
		themes,
		customThemeNames,
		daisyUIThemes,
		allThemes,
	};
}
