<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

import MaterialSymbolsHomeOutlineRounded from "~icons/material-symbols/home-outline-rounded";

const route = useRoute();

const breadcrumbs = computed(() => {
    const paths = route.path.split("/").filter(Boolean);
    return paths.map((path, index) => {
        const to = `/${paths.slice(0, index + 1).join("/")}`;
        const label = path.charAt(0).toUpperCase() + path.slice(1);
        const icon = MaterialSymbolsHomeOutlineRounded;
        return { to, label, icon }
    });
});
</script>
<template>
    <div class="breadcrumbs text-base">
        <ul>
            <li v-for="(breadcrumb, index) in breadcrumbs" :key="index" class="space-x-2">
                <component :is="breadcrumb.icon" class="w-4 h-4"></component>
                <router-link :to="breadcrumb.to">{{ breadcrumb.label }}</router-link>
            </li>
        </ul>
    </div>
</template>