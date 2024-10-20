<script lang="ts" setup>
import type { CustomTheme } from "~/types/CustomTheme";
import MaterialSymbolsCheck from "~icons/material-symbols/check";
import MaterialSymbolsKeyboardArrowDown from "~icons/material-symbols/keyboard-arrow-down";

interface Props {
	currentTheme: CustomTheme;
	themes: CustomTheme[];
}

defineProps<Props>();
const emit = defineEmits<(e: "theme-change", theme: CustomTheme) => void>();

const selectTheme = (theme: CustomTheme) => {
	emit("theme-change", theme);
};
</script>

<template>
  <div class="dropdown dropdown-end">
    <label tabindex="0" class="btn m-1">
      <span class="text-sm font-medium">{{ currentTheme }}</span>
      <MaterialSymbolsKeyboardArrowDown class="h-4 w-4" />
    </label>
    <ul tabindex="0"
        class="dropdown-content mt-1 z-[1] menu p-2 shadow-xl bg-base-100 rounded-box w-64 overflow-y-auto overflow-x-hidden flex-row max-h-[60vh]">
      <li v-for="theme in themes" :key="theme" class="rounded-box mb-2 last:mb-0 w-60">
        <btn @click="selectTheme(theme)"
           class="btn bg-base-200 hover:bg-base-300 transition-all duration-200 flex items-center align-middle rounded-box min-h-10 h-10"
           :data-theme="theme"
           :class="{ 'border-2 border-primary': currentTheme === theme }"
           >
          <div class="flex rounded-box -ml-1">
            <div class="w-4 h-4 rounded-full bg-primary"></div>
            <div class="w-4 h-4 rounded-full bg-secondary"></div>
            <div class="w-4 h-4 rounded-full bg-accent"></div>
          </div>
          <span class="text-sm font-medium flex-grow">{{ theme }}</span>
          <MaterialSymbolsCheck v-if="currentTheme === theme" class="h-5 w-5 text-primary" />
          <div v-else class="w-5"></div>
        </btn>
      </li>
    </ul>
  </div>
</template>