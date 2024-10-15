<script lang="ts" setup>
import type { Theme } from "daisyui";
import { signOut } from "firebase/auth";
import { themes } from "~/utils/theme";

import CodiconLayoutSidebarLeft from "~icons/codicon/layout-sidebar-left";
import CodiconLayoutSidebarLeftOff from "~icons/codicon/layout-sidebar-left-off";
import MaterialSymbolsNotifications from "~icons/material-symbols/notifications";
import TablerChevronDown from "~icons/tabler/chevron-down";

const auth = useFirebaseAuth();
const user = useCurrentUser();

const theme = useCookie("theme", {
	default: () => "forest" as Theme,
});

const open = useCookie("sidebar", {
    default: () => false,
});

const setTheme = (t: Theme) => {
	theme.value = t;
};

const signout = () => {
	signOut(auth!);
};

const toggleSidebar = () => {
    open.value = !open.value;
};

</script>
<template>
    <div class="navbar p-0 flex justify-between items-center border-b border-accent/10 z-10 bg-base-100">
        <div class="left space-x-2 flex items-center align-middle px-2">
            <button class="btn btn-ghost btn-square" @click="toggleSidebar">
                <component :is="open ? CodiconLayoutSidebarLeft: CodiconLayoutSidebarLeftOff" class="text-lg"></component>
            </button>
            <h1 class="text-xl font-base ml-2">
                        RedRabbit
                    </h1>
                    <DashboardBreadcrumbs class="pl-24" />
                </div>

        <div class="flex-none space-x-2 flex items-center align-middle px-3">
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn min-h-0 h-10 btn-secondary m-1 text-xs">
                    {{ theme }}
                    <TablerChevronDown class="w-4 h-4 ml-1"></TablerChevronDown>
                </div>
                <ul tabindex="0" class="dropdown-content menu bg-base-200 rounded-box z-[1] w-80 p-2 shadow-lg">
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
        </div>
    </div>
</template>