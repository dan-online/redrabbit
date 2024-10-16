import { ref } from "vue";
import type { NavItem } from "~/types/sidebar";

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
		calendar: {
			label: "Calendar",
			icon: MaterialSymbolsCalendarTodayOutlineRounded,
			selectedIcon: MaterialSymbolsCalendarTodayRounded,
			to: "/calendar",
		},
		achievements: {
			label: "Achievements",
			icon: MaterialSymbolsLeaderboardOutlineRounded,
			selectedIcon: MaterialSymbolsLeaderboardRounded,
			to: "/achievements",
		},
		friends: {
			label: "Friends",
			icon: MaterialSymbolsGroupOutlineRounded,
			selectedIcon: MaterialSymbolsGroupRounded,
			to: "/friends",
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
