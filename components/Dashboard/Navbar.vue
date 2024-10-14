<script lang="ts" setup>
import type { Theme } from "daisyui";
import { signOut } from "firebase/auth";
import { themes } from "~/utils/theme";

import CodiconLayoutSidebarLeftOff from "~icons/codicon/layout-sidebar-left-off";
import IcBaselineAccountCircle from "~icons/ic/baseline-account-circle";
import MaterialSymbolsNotifications from "~icons/material-symbols/notifications";
import TablerChevronDown from "~icons/tabler/chevron-down";

const auth = useFirebaseAuth();
const user = useCurrentUser();

const theme = useCookie("theme", {
	default: () => "forest" as Theme,
});

const setTheme = (t: Theme) => {
	theme.value = t;
};

const signout = () => {
	signOut(auth!);
};

const open = useCookie<boolean>("sidebar");
</script>
<template>
    <div class="navbar p-0 -ml-1 flex justify-between items-center border-b border-accent/10">
        <div class="left space-x-4 flex items-center align-middle px-4">
            <button @click="() => open = !open" for="drawer" class="btn btn-ghost btn-square drawer-button lg:hidden">
                <component :is=CodiconLayoutSidebarLeftOff class="text-xl" />
            </button>

            <DashboardBreadcrumbs />
        </div>

        <div class="flex-none space-x-4 flex items-center align-middle px-4">
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn min-h-0 h-10 btn-secondary m-1 text-xs">
                    {{ theme }}
                    <TablerChevronDown class="w-4 h-4 ml-1"></TablerChevronDown>
                </div>
                <ul tabindex="0" class="dropdown-content menu bg-base-300 rounded-box z-[1] w-80 p-2 shadow-lg">
                    <div class="flex flex-wrap gap-2">
                        <div v-for="t in themes" class="rounded-md overflow-hidden" :class="{
                            'opacity-50': theme === t,
                        }" :data-theme="t">
                            <button @click="setTheme(t)" class="text-xs rounded px-2 py-1 font-base btn-ghost w-full">
                                {{ t }}
                            </button>
                        </div>
                    </div>
                </ul>
            </div>
            <router-link to="/notifications" v-if="user" class="btn btn-ghost btn-circle">
                <div class="indicator">
                    <MaterialSymbolsNotifications class="text-2xl"></MaterialSymbolsNotifications>
                    <span class="indicator-item badge badge-secondary badge-sm">15</span>
                </div>
            </router-link>
            <div v-if="user" class="dropdown dropdown-end">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img v-if="user.photoURL" :src="user.photoURL" alt="profile" referrerpolicy="no-referrer">
                        <IcBaselineAccountCircle v-else class="h-full w-full"></IcBaselineAccountCircle>
                    </div>
                </label>
                <ul tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
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