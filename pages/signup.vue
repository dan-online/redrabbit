<script setup>
import MdiApple from "~icons/mdi/apple";
import MdiGithub from "~icons/mdi/github";
import MdiGoogle from "~icons/mdi/google";
import MdiMicrosoft from "~icons/mdi/microsoft";
import MdiShieldLock from "~icons/mdi/shield-lock";

const providers = [
	{ id: "google", name: "Google", icon: MdiGoogle },
	{ id: "microsoft", name: "Microsoft", icon: MdiMicrosoft },
	{ id: "github", name: "GitHub", icon: MdiGithub },
	{ id: "apple", name: "Apple", icon: MdiApple },
];
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
									Create an account to continue
								</p>
							</div>
						</div>

						<div class="form-control">
							<input type="text" placeholder="Name"
								class="input bg-base-200 hover:bg-base-300 border-none" />
						</div>
						<div class="form-control">
							<input type="email" placeholder="Email"
								class="input bg-base-200 hover:bg-base-300 border-none" />
						</div>
						<div class="form-control">
							<input type="password" placeholder="Password"
								class="input bg-base-200 hover:bg-base-300 border-none" />
						</div>

						<div class="flex justify-center">
							<button class="btn btn-primary w-full max-w-md border-none">Sign up</button>
						</div>

						<div class="flex flex-row space-x-4 justify-center">
							<button v-for="provider in providers" :key="provider.id"
								@click="signUpWithProvider(provider.id)" :disabled="isLoading"
								class="btn bg-base-200 hover:bg-base-300 text-base border-none relative h-12 flex-1 flex">
								<component :is="provider.icon" />
							</button>
						</div>

						<a href="/login" class="flex items-center justify-between btn h-12 border-none text-sm">
							<div class="text-sm">Already have an account?</div>
							<div class="text-secondary">Sign in</div>
						</a>

					</div>
				</div>
			</div>
			<div class="flex items-center justify-center text-xs text-base-content/60 pt-6 text-center">
				By creating an account, you agree to our terms and privacy policy
			</div>
		</div>
	</div>
</template>