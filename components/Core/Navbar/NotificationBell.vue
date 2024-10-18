<script lang="ts" setup>
import { RouterLink } from "vue-router";
import MaterialSymbolsNotifications from "~icons/material-symbols/notifications";

interface Props {
	count: number;
}

defineProps<Props>();
</script>

<template>
    <RouterLink to="/notifications" class="btn btn-ghost btn-circle">
        <div class="indicator">
            <MaterialSymbolsNotifications class="text-2xl" />
            <span class="indicator-item badge badge-secondary badge-sm">{{ count }}</span>
        </div>
    </RouterLink>
</template>