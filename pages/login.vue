<script setup lang="ts">
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	OAuthProvider,
	signInWithPopup,
} from "firebase/auth";
import { type FunctionalComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { useFirebaseAuth } from "vuefire";

import MdiGithub from "~icons/mdi/github";
import MdiGoogle from "~icons/mdi/google";
import MdiMicrosoft from "~icons/mdi/microsoft";
import MdiShieldLock from "~icons/mdi/shield-lock";

const auth = useFirebaseAuth();
const route = useRoute();
const error = ref<string | null>(null);
const isLoading = ref(false);

const providerInstances = {
	google: new GoogleAuthProvider(),
	microsoft: new OAuthProvider("microsoft.com"),
	github: new GithubAuthProvider(),
};

const providers: {
	id: keyof typeof providerInstances;
	name: string;
	icon: FunctionalComponent;
}[] = [
	{ id: "google", name: "Google", icon: MdiGoogle },
	{ id: "microsoft", name: "Microsoft", icon: MdiMicrosoft },
	{ id: "github", name: "GitHub", icon: MdiGithub },
];

providerInstances.google.addScope("profile");
providerInstances.google.addScope("email");
providerInstances.microsoft.addScope("user.read");
providerInstances.github.addScope("read:user");

async function signInWithProvider(providerId: keyof typeof providerInstances) {
	isLoading.value = true;
	error.value = null;

	try {
		await signInWithPopup(auth!, providerInstances[providerId]);

		const redirect = route.query.redirect as string | undefined;

		if (redirect) {
			navigateTo(redirect);
		} else {
			navigateTo("/");
		}
	} catch (err) {
		error.value = (err as Error).message;
	} finally {
		isLoading.value = false;
	}
}
</script>

<template>
	<div class="login-page min-h-screen flex items-center justify-center bg-base-200 p-4 w-full">
		<div class="max-w-3xl flex-col space-y-4">
			<div class="flex justify-center items-center w-sm lg:w-3xl">
				<div v-if="error" class="bg-error/10 text-error p-4 text-sm rounded-2xl shadow-2xl">
					{{ error }}
				</div>
			</div>

			<div class="flex w-sm lg:w-3xl bg-base-100 shadow-2xl relative rounded-2xl overflow-hidden">

				<div class="w-0 lg:w-1/2">
					<div class="bg-secondary/10 h-full flex items-center justify-center"></div>
				</div>

				<div class="w-full lg:w-1/2">
					<div class="card-body space-y-2 shadow-3xl">
						<div class="flex items-center space-x-4 mb-16">
							<!-- Image on the left -->
							<div class="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
								<MdiShieldLock class="w-8 h-8 text-primary" />
							</div>

							<div class="flex flex-col">
								<h2 class="text-2xl font-medium text-base-content my-1 mb-0">Welcome</h2>
								<p class="text-base-content/60 text-sm my-1 mt-0">
									Sign in with your preferred account
								</p>
							</div>
						</div>

						<button v-for="provider in providers" :key="provider.id"
							@click="signInWithProvider(provider.id)" :disabled="isLoading" class="btn w-full bg-base-200 hover:bg-base-300 normal-case text-base font-medium
						border-none relative">
							<component :is="provider.icon" class="w-5 h-5 absolute left-4" />
							<span class="flex-grow text-center">Continue with {{ provider.name }}</span>
						</button>

						<div class="flex items-center justify-center pt-4 pb-2">
							<a href="/signup" class="text-secondary text-sm link-hover">Create an account</a>
						</div>

						<div class="flex items-center justify-center text-xs text-base-content/60 pt-6 text-center">
							By logging in, you agree to our terms and privacy policy
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
