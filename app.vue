<script setup lang="ts">
import type { Theme } from "daisyui";

const theme = useCookie<Theme>("theme", {
	default: () => "forest",
});

useHead({
	htmlAttrs: {
		"data-theme": theme,
	},
});
</script>
<template>
	<div class="font-base bg-base-200 max-w-screen min-h-screen overflow-x-hidden" :data-theme="theme">
		<div>
			<NuxtRouteAnnouncer />
			<NuxtLayout>
				<NuxtPage />
			</NuxtLayout>
		</div>
	</div>
</template>
