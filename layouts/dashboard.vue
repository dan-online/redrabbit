<script setup lang="ts">
import { onMounted, ref } from "vue";
import Navbar from "~/components/NavBar/Navbar.vue";

const open = useCookie("sidebar", {
    default: () => false,
});

const sidebarHeight = ref("100vh");

onMounted(() => {
    const updateSidebarHeight = () => {
        const navbar = document.querySelector(".navbar") as HTMLElement;
        if (navbar) {
            sidebarHeight.value = `calc(100vh - ${navbar.clientHeight}px)`;
        }
    };

    updateSidebarHeight();
    window.addEventListener("resize", updateSidebarHeight);

    return () => {
        window.removeEventListener("resize", updateSidebarHeight);
    };
});
</script>

<template>
    <div class="h-dvh">
        <div class="sticky top-0 z-10">
            <Navbar />
        </div>
        <div class="flex flex-row">
            <div class="sticky top-0 z-5 transition-position duration-300 ease-in-out"
                :class="{ '-translate-x-full': !open }" :style="{ height: sidebarHeight }">
                <Sidebar />
            </div>
            <slot />
        </div>
    </div>
</template>