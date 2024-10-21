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
		ethereal: {
			"color-scheme": "light",
			primary: "#B19CD9",
			"primary-content": "#FFFFFF",
			secondary: "#FFB6C1",
			"secondary-content": "#000000",
			accent: "#98FB98",
			"accent-content": "#000000",
			neutral: "#F0F8FF",
			"neutral-content": "#4B0082",
			"base-100": "#FFFFFF",
			"base-200": "#F0F8FF",
			"base-300": "#E6E6FA",
			"base-content": "#4B0082",
			info: "#87CEFA",
			success: "#90EE90",
			warning: "#FFDAB9",
			error: "#FFA07A",
			"--pastel-gradient": "linear-gradient(45deg, #B19CD9, #FFB6C1, #98FB98)",
			"--floating-animation": "float 3s ease-in-out infinite",
			"--hover-glow": "0 0 10px rgba(255, 255, 255, 0.5)",
		},
		abyss: {
			"color-scheme": "dark",
			primary: "#001F3F",
			"primary-content": "#7FDBFF",
			secondary: "#0074D9",
			"secondary-content": "#FFFFFF",
			accent: "#39CCCC",
			"accent-content": "#000000",
			neutral: "#111111",
			"neutral-content": "#7FDBFF",
			"base-100": "#000000",
			"base-200": "#001F3F",
			"base-300": "#0074D9",
			"base-content": "#7FDBFF",
			info: "#39CCCC",
			success: "#2ECC40",
			warning: "#FF851B",
			error: "#FF4136",
			"--deep-sea-gradient":
				"linear-gradient(to bottom, #000000, #001F3F, #0074D9)",
			"--bubble-animation": "bubble 2s ease-in-out infinite",
			"--pressure-effect": "pressurize 1.5s ease-in-out infinite",
		},
		inferno: {
			"color-scheme": "dark",
			primary: "#FF4500",
			"primary-content": "#000000",
			secondary: "#FF7F50",
			"secondary-content": "#000000",
			accent: "#FFD700",
			"accent-content": "#000000",
			neutral: "#2F0000",
			"neutral-content": "#FFA07A",
			"base-100": "#1A0000",
			"base-200": "#2F0000",
			"base-300": "#4A0000",
			"base-content": "#FFA07A",
			info: "#F0E68C",
			success: "#9ACD32",
			warning: "#FFA500",
			error: "#8B0000",
			"--flame-gradient": "linear-gradient(45deg, #FF4500, #FF7F50, #FFD700)",
			"--flicker-animation": "flicker 0.5s ease-in-out infinite",
			"--heat-distortion": "distort 3s ease-in-out infinite",
		},
		roseDark: {
			"color-scheme": "dark",
			primary: "#C21E56",
			"primary-content": "#FFFFFF",
			secondary: "#E30B5D",
			"secondary-content": "#FFFFFF",
			accent: "#FF69B4",
			"accent-content": "#000000",
			neutral: "#2C001E",
			"neutral-content": "#FFC0CB",
			"base-100": "#1A000F",
			"base-200": "#2C001E",
			"base-300": "#400028",
			"base-content": "#FFC0CB",
			info: "#87CEFA",
			success: "#32CD32",
			warning: "#FFD700",
			error: "#8B0000",
			"--rose-gradient": "linear-gradient(45deg, #C21E56, #E30B5D, #FF69B4)",
			"--petal-animation": "petalFall 5s ease-in-out infinite",
			"--thorn-border": "1px solid #C21E56",
		},
	};

	const daisyUIThemes: DaisyUITheme[] = [
		"light",
		"dark",
		"emerald",
		"corporate",
		"synthwave",
		"retro",
		"valentine",
		"halloween",
		"forest",
		"aqua",
		"lofi",
		"pastel",
		"wireframe",
		"black",
		"luxury",
		"dracula",
		"cmyk",
		"autumn",
		"business",
		"acid",
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
