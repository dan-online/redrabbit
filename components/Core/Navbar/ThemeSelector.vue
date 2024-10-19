<script lang="ts" setup>
import { ref } from "vue";
import type { CustomTheme } from "~/utils/theme";

interface Props {
	currentTheme: CustomTheme;
	themes: CustomTheme[];
}

const props = defineProps<Props>();
const emit = defineEmits<(e: "theme-change", theme: CustomTheme) => void>();

const isOpen = ref(false);

const toggleDropdown = () => {
	isOpen.value = !isOpen.value;
};

const selectTheme = (theme: CustomTheme) => {
	emit("theme-change", theme);
	isOpen.value = false;
};
</script>

<template>
    <div class="relative">
        <button @click="toggleDropdown"
            class="flex items-center space-x-2 px-4 py-2 rounded-lg bg-primary text-primary-content hover:bg-primary-focus transition-colors duration-300">
            <span class="text-sm font-medium">{{ currentTheme }}</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 transition-transform duration-300"
                :class="{ 'rotate-180': isOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </button>

        <div v-if="isOpen" class="absolute right-0 mt-2 w-90 p-4 rounded-lg shadow-xl bg-base-200">
            <div class="grid grid-cols-3 gap-2">
                <div v-for="theme in themes" :key="theme" class="relative overflow-hidden rounded-lg"
                    :class="{ 'ring-2 ring-primary': currentTheme === theme }" :data-theme="theme">
                    <button @click="selectTheme(theme)"
                        class="w-full h-full p-2 text-left hover:bg-base-300 transition-colors duration-200">
                        <div class="flex items-center space-x-2">
                            <div class="w-4 h-4 rounded-full bg-primary"></div>
                            <span class="text-xs font-medium">{{ theme }}</span>
                        </div>
                        <div class="flex mt-1 space-x-1">
                            <div class="w-3 h-3 rounded-full bg-secondary"></div>
                            <div class="w-3 h-3 rounded-full bg-accent"></div>
                            <div class="w-3 h-3 rounded-full bg-neutral"></div>
                        </div>
                    </button>
                    <svg v-if="currentTheme === theme" class="absolute top-1 right-1 w-4 h-4 text-primary"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>