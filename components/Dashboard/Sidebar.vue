<script lang="ts" setup>
import { signOut } from 'firebase/auth';
import { useRoute, useRouter } from 'vue-router';

import MaterialSymbolsCalendarTodayOutlineRounded from "~icons/material-symbols/calendar-today-outline-rounded";
import MaterialSymbolsCalendarTodayRounded from "~icons/material-symbols/calendar-today-rounded";
import MaterialSymbolsGroupOutlineRounded from "~icons/material-symbols/group-outline-rounded";
import MaterialSymbolsGroupRounded from "~icons/material-symbols/group-rounded";
import MaterialSymbolsHomeOutlineRounded from "~icons/material-symbols/home-outline-rounded";
import MaterialSymbolsHomeRounded from "~icons/material-symbols/home-rounded";
import MaterialSymbolsLeaderboardOutlineRounded from "~icons/material-symbols/leaderboard-outline-rounded";
import MaterialSymbolsLeaderboardRounded from "~icons/material-symbols/leaderboard-rounded";
import MaterialSymbolsTaskAltRounded from "~icons/material-symbols/task-alt-rounded";
import MaterialSymbolsTrophyRounded from "~icons/material-symbols/trophy";
import MaterialSymbolsTrophyOutlineRounded from "~icons/material-symbols/trophy-outline-rounded";

const route = useRoute();
const router = useRouter();
const auth = useFirebaseAuth();
const user = useCurrentUser();

const navItems = {
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
    achievements: {
        label: "Achievements",
        icon: MaterialSymbolsTrophyOutlineRounded,
        selectedIcon: MaterialSymbolsTrophyRounded,
        to: "/achievements",
    },
    calendar: {
        label: "Calendar",
        icon: MaterialSymbolsCalendarTodayOutlineRounded,
        selectedIcon: MaterialSymbolsCalendarTodayRounded,
        to: "/calendar",
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
};

const open = useCookie<boolean>("sidebar");
const isActive = (path: string) => {
    return route.path === path || route.path.startsWith(path);
};

const signout = () => {
	signOut(auth!);
	router.push("/");

};
</script>

<template>
    <div class="flex flex-col h-full justify-between w-64 border-r border-accent/10 bg-base-100">
        <div class="h-full flex flex-col justify-between my-4 mx-2">
            <div class="space-y-1">
                <div v-for="(item, index) in navItems" :key="index" class="mx-2">
                    <router-link :to="item.to" class="btn btn-block text-base justify-start font-light pl-2 min-h-10 h-10" 
                                 :class="{ 'btn-secondary': isActive(item.to) || route.path.startsWith(item.to), 'btn-ghost': !isActive(item.to) }">
                        <div class="flex items center justify-left text-left">
							 	<component :is="isActive(item.to) || route.path.startsWith(item.to) ? item.selectedIcon : item.icon" class="w-5 h-5"></component>
                        </div>
                        <div class="flex items-center justify-left text-left">
                            {{ item.label }}
                        </div>
                    </router-link>
                </div>
            </div>

			<div v-if="user" class="dropdown dropdown-top">
                <label tabindex="0" class="btn btn-ghost btn-block text-sm justify-start font-light pl-1">
					<div class="min-w-10 min-h-10 rounded-full bg-primary/10 flex items-center justify-center">
						<img v-if="user && user.photoURL" :src="user.photoURL" class="rounded-full w-10 h-10 object-cover" alt="User" />
						<IcBaselineAccountCircle v-else class="w-10 h-10" />
					</div>
					<div class="text-left ml-1">
						{{ user?.displayName }}
						<div class="text-xs">
							{{ user?.email?.split('@')[0] }}
						</div>
					</div>
                </label>
                <ul tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
                    <li class="justify-between">
                        <router-link class="btn btn-ghost flex" to="/profile/settings">Profile Settings
                            <span class="badge w-10 text-xs">New</span>
                        </router-link>
                    </li>
                    <div class="divider mt-0 mb-0"></div>
                    <li><button class="btn btn-ghost" @click="signout">Logout</button></li>
                </ul>
            </div>
		</div>
    </div>
</template>