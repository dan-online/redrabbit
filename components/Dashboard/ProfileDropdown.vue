<script setup lang="ts">
const props = defineProps<{
  signout: () => void
}>();
</script>

<template>
    <li class="justify-between">
      <router-link class="btn btn-ghost flex" to="/profile/settings">
        Profile Settings
        <span class="badge w-10 text-xs">New</span>
      </router-link>
    </li>
    <div class="divider mt-0 mb-0"></div>
    <li><button class="btn btn-ghost" @click="props.signout">Logout</button></li>
</template>