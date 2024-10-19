import type { Theme as DaisyUITheme } from "daisyui";
const { getThemeNames } = useCustomThemes();

// Define custom themes
const customThemes = [...getThemeNames()] as const;

export type CustomTheme = DaisyUITheme | (typeof customThemes)[number];

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

export const themes: CustomTheme[] = [...daisyUIThemes, ...customThemes];
