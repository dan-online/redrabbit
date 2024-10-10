<script lang="ts" setup>
import type { Theme } from "daisyui";
import { signOut } from "firebase/auth";
import { themes } from "~/utils/theme";

const auth = useFirebaseAuth();
const user = useCurrentUser();

const theme = useCookie("theme", {
    default: () => "forest" as Theme,
});

const setTheme = (t: Theme) => {
    theme.value = t;
};

const signout = () => {
    signOut(auth!);
};
</script>
<template>
    <div class="navbar bg-base-100 z-10 shadow-md ">
        <div class="flex-1">
            <h1 class="text-2xl font-semibold ml-2">RedRabbit</h1>
        </div>
        <div class="flex-none">
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn btn-secondary m-1">
                    {{ theme }}
                </div>
                <ul tabindex="0" class="dropdown-content menu bg-base-300 rounded-box z-[1] w-80 p-2 shadow">
                    <div class="flex flex-wrap gap-2">
                        <div v-for="t in themes" class="rounded-md overflow-hidden" :class="{
                            'opacity-50': theme === t,
                        }" :data-theme="t">
                            <button @click="setTheme(t)" class="text-xs rounded px-2 py-1 font-base btn-ghost w-full">
                                {{ t }}
                            </button>
                        </div>
                    </div>
                </ul>
            </div>
            <button v-if="user" class="btn btn-ghost ml-4  btn-circle">
                <div class="indicator"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0">
                        </path>
                    </svg><span class="indicator-item badge badge-secondary badge-sm">15</span></div>
            </button>
            <div v-if="user" class="dropdown dropdown-end ml-4"><label tabindex="0"
                    class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full"><img src="https://placeimg.com/80/80/people" alt="profile"></div>
                </label>
                <ul tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li class="justify-between">
                        <a href="/app/settings-profile">Profile Settings<span class="badge">New</span></a>
                    </li>
                    <li class=""><a href="/app/settings-billing">Bill History</a></li>
                    <div class="divider mt-0 mb-0"></div>
                    <li><button class="btn btn-ghost" @click="signout">Logout</button></li>
                </ul>
            </div>
        </div>
    </div>
</template>