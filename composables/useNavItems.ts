import { ref } from "vue";
import type { NavItem } from "~/types/sidebar";

import MaterialSymbolsAccountTreeOutlineRounded from "~icons/material-symbols/account-tree-outline-rounded";
import MaterialSymbolsAccountTreeRounded from "~icons/material-symbols/account-tree-rounded";
import MaterialSymbolsBook4OutlineRounded from "~icons/material-symbols/book4-outline-rounded";
import MaterialSymbolsBook4Rounded from "~icons/material-symbols/book4-rounded";
import MaterialSymbolsCalendarTodayOutlineRounded from "~icons/material-symbols/calendar-today-outline-rounded";
import MaterialSymbolsCalendarTodayRounded from "~icons/material-symbols/calendar-today-rounded";
import MaterialSymbolsGroupOutlineRounded from "~icons/material-symbols/group-outline-rounded";
import MaterialSymbolsGroupRounded from "~icons/material-symbols/group-rounded";
import MaterialSymbolsHomeOutlineRounded from "~icons/material-symbols/home-outline-rounded";
import MaterialSymbolsHomeRounded from "~icons/material-symbols/home-rounded";
import MaterialSymbolsLeaderboardOutlineRounded from "~icons/material-symbols/leaderboard-outline-rounded";
import MaterialSymbolsLeaderboardRounded from "~icons/material-symbols/leaderboard-rounded";
import MaterialSymbolsShoppingCartOutlineRounded from "~icons/material-symbols/shopping-cart-outline-rounded";
import MaterialSymbolsShoppingCartRounded from "~icons/material-symbols/shopping-cart-rounded";
import MaterialSymbolsTaskAltRounded from "~icons/material-symbols/task-alt-rounded";
import MaterialSymbolTrophyOutlineRounded from "~icons/material-symbols/trophy-outline-rounded";
import MaterialSymbolTrophyRounded from "~icons/material-symbols/trophy-rounded";

export function useNavItems() {
	const navigationItems = ref<Record<string, NavItem>>({
		dashboard: {
			label: "Dashboard",
			icon: MaterialSymbolsHomeOutlineRounded,
			selectedIcon: MaterialSymbolsHomeRounded,
			to: "/dashboard",
		},
		tasks: {
			label: "Tasks",
			icon: MaterialSymbolsTaskAltRounded,
			selectedIcon: MaterialSymbolsTaskAltRounded,
			to: "/tasks",
		},
		quests: {
			label: "Quests",
			icon: MaterialSymbolsBook4OutlineRounded,
			selectedIcon: MaterialSymbolsBook4Rounded,
			to: "/quests",
		},
		calendar: {
			label: "Calendar",
			icon: MaterialSymbolsCalendarTodayOutlineRounded,
			selectedIcon: MaterialSymbolsCalendarTodayRounded,
			to: "/calendar",
		},
		progressionTree: {
			label: "Progression Tree",
			icon: MaterialSymbolsAccountTreeOutlineRounded,
			selectedIcon: MaterialSymbolsAccountTreeRounded,
			to: "/progressionTree",
		},
		social: {
			label: "Friends",
			icon: MaterialSymbolsGroupOutlineRounded,
			selectedIcon: MaterialSymbolsGroupRounded,
			to: "/friends",
		},
		achievements: {
			label: "Achievements",
			icon: MaterialSymbolTrophyOutlineRounded,
			selectedIcon: MaterialSymbolTrophyRounded,
			to: "/achievements",
		},
		leaderboard: {
			label: "Leaderboard",
			icon: MaterialSymbolsLeaderboardOutlineRounded,
			selectedIcon: MaterialSymbolsLeaderboardRounded,
			to: "/leaderboard",
		},
		shop: {
			label: "Shop",
			icon: MaterialSymbolsShoppingCartOutlineRounded,
			selectedIcon: MaterialSymbolsShoppingCartRounded,
			to: "/shop",
		},
	});

	return {
		navigationItems,
	};
}
export type { NavItem };
