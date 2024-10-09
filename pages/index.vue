<script setup>
import { signOut } from "firebase/auth";
import LogoNuxt from "~icons/logos/nuxt-icon";

const auth = useFirebaseAuth();
const user = useCurrentUser();
</script>

<template>
  <div class="min-h-screen bg-base-200 flex items-center justify-center p-4">
    <div class="card w-full max-w-md shadow-2xl bg-base-100">
      <div class="card-body items-center text-center">
        <div class="avatar mb-4">
          <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <LogoNuxt class="w-full h-full" />
          </div>
        </div>
        <h1 class="text-3xl font-bold">Welcome to RedRabbit</h1>
        <p class="py-4">The only life planner you will ever need.</p>

        <div v-if="user" class="flex flex-col items-center">
          <div class="avatar mb-4">
            <div class="w-24 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
              <img v-if="user?.photoURL" :src="user.photoURL" alt="User Photo"
                class="w-full h-full object-cover rounded-full" />
              <div v-else
                class="flex items-center justify-center w-full h-full bg-neutral-focus text-neutral-content rounded-full">
                <span class="text-3xl">{{ user?.displayName?.charAt(0) || user?.email?.charAt(0) || 'U' }}</span>
              </div>
            </div>
          </div>
          <h2 class="text-xl font-semibold">{{ user.displayName }}</h2>
          <p class="text-base-content">{{ user.email }}</p>

          <div class="card-actions mt-4">
            <button @click="() => signOut(auth)" class="btn btn-secondary flex items-center">
              <!-- Logout Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-5V5m0 11a9 9 0 110-18 9 9 0 010 18z" />
              </svg>
              Sign Out
            </button>
          </div>
        </div>

        <div v-else class="flex flex-col items-center">
          <div class="avatar placeholder mb-4">
            <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
              <span class="text-3xl">👤</span>
            </div>
          </div>
          <p class="py-4">Please sign in to access your account.</p>
          <div class="card-actions">
            <a href="/login" class="btn btn-primary flex items-center">
              <!-- Login Icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12H3m12 0l-4-4m4 4l-4 4m6 4v1m0-5V5m0 11a9 9 0 110-18 9 9 0 010 18z" />
              </svg>
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
