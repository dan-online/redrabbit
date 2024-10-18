<script setup lang="ts">
const props = defineProps<{
	signout: () => void;
}>();
</script>

<template>
  <ul tabindex="0"
    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-full min-w-[200px] max-w-xs mb-2">
    <li>
      <router-link class="btn btn-ghost justify-between w-full" to="/profile/settings">
        <span>Profile Settings</span>
        <span class="badge text-xs">New</span>
      </router-link>
    </li>
    <div class="divider my-0"></div>
    <li><button class="btn btn-ghost w-full" @click="props.signout">Logout</button></li>
  </ul>
</template>