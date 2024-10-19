import type { Theme as DaisyUITheme } from "daisyui";
import type { CustomTheme } from "~/types/CustomTheme";

const { getThemeNames } = useCustomThemes();

const customThemes = [...getThemeNames()] as const;

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
