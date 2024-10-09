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
import MdiApple from "~icons/mdi/apple";
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
	apple: new OAuthProvider("apple.com"),
};

const providers: {
	id: keyof typeof providerInstances;
	name: string;
	icon: FunctionalComponent;
}[] = [
		{ id: "google", name: "Google", icon: MdiGoogle },
		{ id: "microsoft", name: "Microsoft", icon: MdiMicrosoft },
		{ id: "github", name: "GitHub", icon: MdiGithub },
		{ id: "apple", name: "Apple", icon: MdiApple },
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
	<div class="min-h-dvh flex items-center justify-center bg-base-200 w-full">
		<div class="flex-col space-y-4">
			<div class="flex justify-center items-center w-sm lg:w-3xl">
				<div v-if="error" class="bg-error/10 text-error p-4 text-sm rounded-2xl shadow-md dark:shadow-xl">
					{{ error }}
				</div>
			</div>

			<div class="flex bg-base-100 shadow-md dark:shadow-xl relative rounded-2xl overflow-hidden">

				<div class="w-0 lg:w-1/2">
					<div class="bg-secondary/10 h-full flex items-center justify-center"></div>
				</div>

				<div class="w-full lg:w-1/2">
					<div class="card-body space-y-2">
						<div class="flex items-center space-x-4 mb-16">
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

						<div class="form-control">
							<input type="email" placeholder="Email" class="input bg-base-200 hover:bg-base-300" />
						</div>
						<div class="form-control">
							<input type="password" placeholder="Password" class="input bg-base-200 hover:bg-base-300" />
						</div>

						<div class="flex justify-center">
							<button class="btn btn-primary w-full max-w-md border-none">Sign up</button>
						</div>

						<div class="flex flex-row space-x-4 justify-center">
							<button v-for="provider in providers" :key="provider.id"
								@click="signInWithProvider(provider.id)" :disabled="isLoading"
								class="btn bg-base-200 hover:bg-base-300 text-base border-none relative h-12 flex-1 flex">
								<component :is="provider.icon" />
							</button>
						</div>

						<a href="/signup" class="flex items-center justify-between btn h-12 border-none text-sm">
							<div class="text-sm">Don't have an account?</div>
							<div class="text-secondary">Sign up</div>
						</a>
					</div>
				</div>
			</div>
			<div class="flex items-center justify-center text-xs text-base-content/60 pt-6 text-center">
				By logging in, you agree to our terms and privacy policy
			</div>
		</div>
	</div>
</template>
