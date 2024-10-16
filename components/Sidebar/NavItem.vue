<script lang="ts" setup>
import type { PropType } from 'vue';
import type { NavItem } from '~/composables/useNavItems';

const props = defineProps({
    item: {
        type: Object as PropType<NavItem>,
        required: true
    },
    isActive: {
        type: Boolean,
        required: true
    }
});
</script>

<template>
    <div class="mx-2">
        <router-link :to="item.to" class="btn btn-block text-base justify-start font-light pl-2 min-h-10 h-10"
            :class="{ 'btn-secondary': isActive, 'btn-ghost': !isActive }">
            <div class="flex items center justify-left text-left">
                <component :is="isActive ? item.selectedIcon : item.icon" class="w-5 h-5"></component>
            </div>
            <div class="flex items-center justify-left text-left">
                {{ item.label }}
            </div>
        </router-link>
    </div>
</template>