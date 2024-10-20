<script setup lang="ts">
import { ref } from "vue";
import MdiAccountCircle from "~icons/mdi/account-circle";

const user = useCurrentUser();

const userToSave = {
	name: user.value?.displayName || "",
	gender: "",
	pronouns: "",
	dob: "",
	occupation: "",
	weeklyHours: "",
};

const tabs: Array<{
	name: string;
	limit?: [number, number];
	key: keyof typeof userToSave;
	type: "text" | "date" | "number";
	range?: [number, number];
	page: number;
}> = [
	{
		name: "Name",
		key: "name",
		limit: [3, 64],
		type: "text",
		page: 0,
	},
	{
		name: "Gender",
		key: "gender",
		limit: [1, 32],
		type: "text",
		page: 0,
	},
	{
		name: "Date of Birth",
		key: "dob",
		type: "date",
		page: 0,
	},
	{
		name: "Pronouns",
		key: "pronouns",
		limit: [2, 16],
		type: "text",
		page: 0,
	},
	{
		name: "Occupation",
		key: "occupation",
		limit: [2, 64],
		type: "text",
		page: 1,
	},
	{
		name: "Weekly Available Hours",
		key: "weeklyHours",
		type: "number",
		range: [1, 168],
		page: 1,
	},
];

const tabIndex = ref(0);
const loading = ref(false);

const save = () => {
	navigateTo("/dashboard");
};

const nextPage = () => {
	loading.value = true;

	if (tabIndex.value === 1) {
		save();
		return;
	}

	tabIndex.value++;

	setTimeout(() => {
		loading.value = false;
	}, 500);
};

definePageMeta({
	middleware: ["auth"],
});
</script>
<template>
	<div class="min-h-dvh flex items-center justify-center bg-base-200 w-full ">
		<div class="bg-base-100 shadow-md relative rounded-2xl overflow-hidden w-full md:max-w-md max-w-sm">
			<div class="w-full card-body space-y-2 flex">
				<div class="flex items-center space-x-4 w-full mb-4">
					<div class="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
						<MdiAccountCircle class="w-8 h-8 text-primary" />
					</div>
					<div>
						<h2 class="text-2xl font-medium my-1">Setup your profile</h2>
						<p class="text-sm text-base-content/60 my-1">Fill out your profile details below</p>
					</div>
				</div>

				<transition name="slide-fade" mode="out-in">
					<form :key="tabIndex" @submit.prevent="nextPage">
						<div v-for="tab in tabs" :key="tab.key" class="flex flex-col">
							<div v-if="tab.page === tabIndex">
								<input v-model="userToSave[tab.key]" :type="tab.type"
									class="input bg-base-200 hover:bg-base-300 w-full mb-4" required
									:minlength="tab.limit ? tab.limit[0] : undefined"
									:maxlength="tab.limit ? tab.limit[1] : undefined" :placeholder="tab.name"
									:min="tab.range ? tab.range[0] : undefined"
									:max="tab.range ? tab.range[1] : undefined" :disabled="loading" />
							</div>
						</div>

						<div class="flex flex-col space-y-4">
							<button class="btn btn-primary" type="submit" :disabled="loading">
								{{ tabIndex === 1 ? 'Finish' : 'Next' }}
							</button>
							<button v-if="tabIndex > 0" class="btn btn-ghost" type="button" @click="tabIndex--">
								Back
							</button>
						</div>
					</form>
				</transition>
			</div>
		</div>
	</div>
</template>
<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
	transition: all 0.2s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
	scale: 0.95;
	transform: translateY(20px);
	opacity: 0;
}
</style>