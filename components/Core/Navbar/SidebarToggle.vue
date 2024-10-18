<script lang="ts" setup>
import { computed } from "vue";
import CodiconLayoutSidebarLeft from "~icons/codicon/layout-sidebar-left";
import CodiconLayoutSidebarLeftOff from "~icons/codicon/layout-sidebar-left-off";

interface Props {
	isOpen: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<(e: "toggle") => void>();

const ToggleIcon = computed(() =>
	props.isOpen ? CodiconLayoutSidebarLeft : CodiconLayoutSidebarLeftOff,
);
</script>

<template>
    <button class="btn btn-ghost btn-square" @click="emit('toggle')">
        <component :is="ToggleIcon" class="text-lg" />
    </button>
</template>