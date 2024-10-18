<script lang="ts" setup>
import { useRoute } from "vue-router";
import { useNavItems } from "~/composables/useNavItems";

const route = useRoute();
const { navigationItems } = useNavItems();

const isActive = (path: string) => {
	return route.path === path || route.path.startsWith(path);
};
</script>

<template>
    <div class="flex flex-col h-full justify-between w-64 border-r border-accent/10 bg-base-100">
        <div class="h-full flex flex-col justify-between my-4 mx-2">
            <div class="space-y-1">
                <CoreSidebarNavItem v-for="(item, key) in navigationItems" :key="key" :item="item"
                    :is-active="isActive(item.to)" />
            </div>
            <CoreSidebarUserProfile />
        </div>
    </div>
</template>