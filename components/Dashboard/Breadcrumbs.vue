<script lang="ts" setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const breadcrumbs = computed(() => {
	const paths = route.path.split("/").filter(Boolean);
	return paths.map((path, index) => {
		const to = `/${paths.slice(0, index + 1).join("/")}`;
		const label = path.charAt(0).toUpperCase() + path.slice(1);
		return { to, label };
	});
});
</script>
<template>
    <div class="breadcrumbs text-base mx-2">
        <ul>
            <li v-for="(breadcrumb, index) in breadcrumbs" :key="index">
                <router-link :to="breadcrumb.to">{{ breadcrumb.label }}</router-link>
                <span v-if="index < breadcrumbs.length - 1">/</span>
            </li>
        </ul>
    </div>
</template>