<script setup>
import { signOut } from "firebase/auth";
import LogoNuxt from "~icons/logos/nuxt-icon";

const auth = useFirebaseAuth();
const user = useCurrentUser();

const handleSignOut = () => signOut(auth);
</script>

<template>
  <div class="container mx-auto py-4">
    <LogoNuxt class="text-2xl" />
    <h1 class="text-xl font-bold mt-4">Welcome to RedPanda</h1>

    <div v-if="user" class="mt-2">
      <p>{{ user.email }} - {{ user.displayName }}</p>
      <button @click="handleSignOut" class="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Sign Out
      </button>
    </div>

    <a v-else href="/login" class="mt-2 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
      sign in ^-^
    </a>
  </div>
</template>