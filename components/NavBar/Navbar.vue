<script lang="ts" setup>
import { useCookie } from "#app";
import type { Theme } from "daisyui";
import { signOut } from "firebase/auth";
import { useCurrentUser, useFirebaseAuth } from "vuefire";
import DashboardBreadcrumbs from "~/components/NavBar/Breadcrumbs.vue";
import NotificationBell from "~/components/NavBar/NotificationBell.vue";
import SidebarToggle from "~/components/NavBar/SidebarToggle.vue";
import ThemeSelector from "~/components/NavBar/ThemeSelector.vue";
import { COOKIE_NAMES, DEFAULT_THEME } from "~/utils/constants";
import { themes } from "~/utils/theme";

const auth = useFirebaseAuth();
const user = useCurrentUser();

const theme = useCookie<Theme>(COOKIE_NAMES.THEME, {
	default: () => DEFAULT_THEME,
});

const isSidebarOpen = useCookie<boolean>(COOKIE_NAMES.SIDEBAR, {
	default: () => false,
});

const setTheme = (newTheme: Theme) => {
	theme.value = newTheme;
};

const handleSignOut = async () => {
	if (auth) {
		await signOut(auth);
	}
};

const toggleSidebar = () => {
	isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
    <nav class="navbar p-0 flex justify-between items-center border-b border-accent/10 z-10 bg-base-100">
        <div class="left space-x-2 flex items-center align-middle px-2">
            <SidebarToggle :is-open="isSidebarOpen" @toggle="toggleSidebar" />
            <h1 class="text-xl font-base ml-2">
                RedRabbit
            </h1>
            <DashboardBreadcrumbs class="pl-24" />
        </div>

        <div class="flex-none space-x-2 flex items-center align-middle px-3">
            <ThemeSelector :current-theme="theme" :themes="themes" @theme-change="setTheme" />

            <NotificationBell v-if="user" :count="15" />
        </div>
    </nav>
</template>