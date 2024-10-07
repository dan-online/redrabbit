<script setup>
import LogoNuxt from '~icons/logos/nuxt-icon';

import { signOut } from 'firebase/auth';

const auth = useFirebaseAuth();

const user = useCurrentUser();
</script>
<template>
  <div class="container py-4 mx-auto">
    <LogoNuxt class="text-2xl" />

    <h1>Welcome to RedPanda</h1>

    {{ user?.email }} - {{ user?.displayName }}

    <button v-if="user" @click="() => signOut(auth)">Sign Out</button>
    <a v-else href="/login">Sign In</a>
  </div>
</template>
