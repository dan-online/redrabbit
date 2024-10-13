<script setup lang="ts">
import type { Theme } from "daisyui";

const theme = useCookie<Theme>("theme", {
	default: () => "forest",
});

useHead({
	htmlAttrs: {
		"data-theme": theme,
	},
	link: [
		{
			rel: "stylesheet",
			href: "https://cdn.jsdelivr.net/npm/daisyui@4.12.13/dist/full.css",
			type: "text/css",
		},
		{
			rel: "stylesheet",
			href: "https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css",
			type: "text/css",
		},
	],
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
