<script lang="ts" setup>
import { useCurrentUser } from "vuefire";
import { useCustomThemes } from "~/composables/useThemes";
import { COOKIE_NAMES } from "~/utils/constants";

const user = useCurrentUser();

const { allThemes } = useCustomThemes();

const isSidebarOpen = useCookie<boolean>(COOKIE_NAMES.SIDEBAR, {
	default: () => false,
});

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
            <CoreNavbarThemeSelector />

            <CoreNavbarNotificationBell v-if="user" :count="15" />
        </div>
    </nav>
</template>