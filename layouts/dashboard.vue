<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";
import { onMounted, ref } from "vue";

const open = useCookie("sidebar", {
	default: () => false,
});

const sidebar = ref<HTMLDivElement | null>(null);
const navbar = ref<HTMLElement | null>(null);

const sidebarHeight = ref("calc(100vh - 64px)");

const updateSidebarHeight = (windowHeight: Ref<number>) => {
	if (navbar.value) {
		sidebarHeight.value = `${windowHeight.value - (navbar.value?.clientHeight ?? 0)}px`;
	}
};

onMounted(() => {
	const windowSize = useWindowSize();
	const windowHeight = ref(windowSize.height);

	updateSidebarHeight(windowHeight);
	window.addEventListener("resize", () => updateSidebarHeight(windowHeight));

	return () => {
		window.removeEventListener("resize", () =>
			updateSidebarHeight(windowHeight),
		);
	};
});
</script>

<template>
    <div class="h-dvh">
        <div class="sticky top-0 z-10" ref="navbar">
            <CoreNavbar />
        </div>
        <div class="flex flex-row">
            <div class="sticky top-0 z-5 transition-position duration-300 ease-in-out" ref="sidebar"
                :class="{ '-translate-x-full': !open }" :style="{ height: sidebarHeight }">
                <CoreSidebar />
            </div>
            <slot />
        </div>
    </div>
</template>