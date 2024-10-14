<script setup lang="ts">
import { useBreakpoints } from "@vueuse/core";
const open = useCookie("sidebar", {
	default: () => false,
});

const breakpoints = useBreakpoints({
	lg: 1024,
});

const greaterThanLg = breakpoints.greaterOrEqual("lg");
</script>
<template>
    <div>
        <div class="drawer" :class="{ 'drawer-open': open || greaterThanLg }">
            <input type="checkbox" class="drawer-toggle" v-model="open" />
            <div class="drawer-content">
                <DashboardNavbar />
                <slot />
            </div>
            <div class="drawer-side drawer-overlay">
                <!-- <label for="drawer" aria-label="close sidebar" class="drawer-overlay"></label> -->
                <DashboardSidebar />
            </div>
        </div>
    </div>
</template>