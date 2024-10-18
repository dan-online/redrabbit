<script setup lang="ts">
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { useFirebaseAuth } from "vuefire";
import { useFirebaseAuthProviders } from "~/utils/firebaseAuthProviders";
import MdiShieldLock from "~icons/mdi/shield-lock";

const auth = useFirebaseAuth();
const route = useRoute();
const error = ref<string | null>(null);
const isLoading = ref(false);
const email = ref<string>("");
const password = ref<string>("");

const [providers, providerInstances] = useFirebaseAuthProviders();

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

async function loginWithEmail() {
	isLoading.value = true;
	error.value = null;

	try {
		if (!email.value || !password.value) {
			throw new Error("Please enter both email and password");
		}
		await signInWithEmailAndPassword(auth!, email.value, password.value);

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
				<div v-if="error"
					class="bg-error/10 text-error p-4 text-sm rounded-2xl shadow-md dark:shadow-xl w-sm lg:w-3xl">
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
							<input v-model="email" type="email" placeholder="Email"
								class="input bg-base-200 hover:bg-base-300" />
						</div>
						<div class="form-control">
							<input v-model="password" type="password" placeholder="Password"
								class="input bg-base-200 hover:bg-base-300" />
						</div>

						<div class="flex justify-center">
							<button @click="loginWithEmail" class="btn btn-primary w-full max-w-md border-none"
								:disabled="isLoading || !email || !password">
								Sign in
							</button>
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