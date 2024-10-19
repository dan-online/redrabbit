import type { Theme as DaisyUITheme } from "daisyui";

const { getThemeNames } = useCustomThemes();

const customThemes = [...getThemeNames()] as const;

export type CustomTheme = DaisyUITheme | (typeof customThemes)[number];
