<script lang="ts" setup>
import type { Theme } from "daisyui";
import { signOut } from "firebase/auth";
import { useCurrentUser, useFirebaseAuth } from "vuefire";
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
            <CoreNavbarSidebarToggle :is-open="isSidebarOpen" @toggle="toggleSidebar" />
            <h1 class="text-xl font-base ml-2">
                RedRabbit
            </h1>
            <CoreNavbarBreadcrumbs class="pl-24" />
        </div>

        <div class="flex-none space-x-2 flex items-center align-middle px-3">
            <CoreNavbarThemeSelector :current-theme="theme" :themes="themes" @theme-change="setTheme" />

            <CoreNavbarNotificationBell v-if="user" :count="15" />
        </div>
    </nav>
</template>