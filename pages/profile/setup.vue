<script setup lang="ts">
const user = useCurrentUser();

const userToSave = {
	name: user.value!.displayName,
	pronouns: "they/them",
};

const tabs: {
	name: string;
	desc: string;
	placeholder: string;
	limit: [number, number];
	key: keyof typeof userToSave;
}[] = [
	{
		name: "Name",
		desc: "What should we call you?",
		placeholder: "John Doe",
		key: "name",
		limit: [3, 16],
	},
	{
		name: "Pronouns",
		desc: "How do you wish to be addressed?",
		placeholder: "they/them",
		key: "pronouns",
		limit: [3, 16],
	},
];

const tabIndex = ref(0);
const loading = ref(false);

const save = () => {};

const nextPage = () => {
	loading.value = true;

	if (tabIndex.value === tabs.length - 1) {
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
    <div class="w-1/3 mx-auto min-h-screen flex items-center justify-center">
        <div class="flex flex-col w-full">
            <h1 class="text-4xl font-bold mb-4">Setup your profile</h1>
            <Transition name="slide-fade" mode="out-in">
                <form :key="tabIndex" class="w-full" @submit.prevent="nextPage">
                    <div class="flex flex-col space-y-4">
                        <label class="text-sm">{{ tabs[tabIndex].desc }}</label>
                        <input v-model="userToSave[tabs[tabIndex].key]" type="text" class="input" required
                            :minlength="tabs[tabIndex].limit[0]" :maxlength="tabs[tabIndex].limit[1]"
                            :placeholder="tabs[tabIndex].placeholder">
                        <button class="btn w-1/2 btn-primary disabled:pointer-events-none" type="submit"
                            :disabled="loading">Continue</button>
                    </div>
                </form>
            </Transition>
        </div>
    </div>
</template>
<style>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>