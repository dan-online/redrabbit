<script lang="ts" setup>
import CodiconLayoutSidebarLeft from "~icons/codicon/layout-sidebar-left";
import MaterialSymbolsCalendarTodayOutlineRounded from "~icons/material-symbols/calendar-today-outline-rounded";
import MaterialSymbolsGroupOutlineRounded from "~icons/material-symbols/group-outline-rounded";
import MaterialSymbolsHomeOutlineRounded from "~icons/material-symbols/home-outline-rounded";
import MaterialSymbolsLeaderboardOutlineRounded from "~icons/material-symbols/leaderboard-outline-rounded";
import MaterialSymbolsSearch from "~icons/material-symbols/search";
import MaterialSymbolsSettingsOutlineRounded from "~icons/material-symbols/settings-outline-rounded";
import MaterialSymbolsTaskAltRounded from "~icons/material-symbols/task-alt-rounded";
import MaterialSymbolsTrophyOutlineRounded from "~icons/material-symbols/trophy-outline-rounded";

const navItems = {
	dashboard: {
		label: "Search",
		icon: MaterialSymbolsSearch,
		to: "/search",
	},
	users: {
		label: "Dashboard",
		icon: MaterialSymbolsHomeOutlineRounded,
		to: "/users",
	},
	tasks: {
		label: "Tasks",
		icon: MaterialSymbolsTaskAltRounded,
		to: "/tasks",
	},
	achievements: {
		label: "Achievements",
		icon: MaterialSymbolsTrophyOutlineRounded,
		to: "/achievements",
	},
	calendar: {
		label: "Calendar",
		icon: MaterialSymbolsCalendarTodayOutlineRounded,
		to: "/calendar",
	},
	friends: {
		label: "Friends",
		icon: MaterialSymbolsGroupOutlineRounded,
		to: "/friends",
	},
	leaderboard: {
		label: "Leaderboard",
		icon: MaterialSymbolsLeaderboardOutlineRounded,
		to: "/leaderboard",
	},
};

const open = useCookie<boolean>("sidebar");
</script>

<template>
	<div class="flex flex-col h-screen justify-between bg-base-300 w-48 border-r border-accent/10">
		<div class="h-full flex flex-col justify-between mb-2">
			<div class="space-y-0">

				<div class="flex flex-row justify-between items-center navbar -mb-2">
					<h1 class="text-lg font-base ml-2">
						RedRabbit
					</h1>
					<button class="btn btn-ghost btn-square lg:hidden" @click="() => open = !open">
						<component :is=CodiconLayoutSidebarLeft class="text-sm" />
					</button>
				</div>

				<div v-for="(item, index) in navItems" :key="index" class="mx-2">
					<router-link :to="item.to" class="btn btn-ghost btn-block text-xs justify-start font-light">
						<div class="flex items center justify-left text-left">
							<component :is="item.icon" class="w-4 h-4"></component>
						</div>
						<div class="flex items-center justify-left text-left">
							{{ item.label }}
						</div>
					</router-link>
				</div>
			</div>

			<div class="mx-2">
				<router-link to="/settings" class="btn btn-ghost btn-block text-xs justify-start font-light">
					<component :is="MaterialSymbolsSettingsOutlineRounded" class="w-4 h-4"></component>
					Settings
				</router-link>
			</div>
		</div>
	</div>
</template>

<style scoped>
.btn {
	min-height: 2rem;
	height: 2rem;
	padding: 0.5rem;
}
</style>