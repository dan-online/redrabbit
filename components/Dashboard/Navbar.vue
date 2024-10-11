<script lang="ts" setup>
import type { Theme } from "daisyui";
import { signOut } from "firebase/auth";
import { themes } from "~/utils/theme";

import IcBaselineAccountCircle from "~icons/ic/baseline-account-circle";
import MaterialSymbolsNotifications from "~icons/material-symbols/notifications";
import TablerChevronDown from "~icons/tabler/chevron-down";

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
            <router-link :to="user ? '/dashboard' : '/'" class="text-lg font-bold text-primary">
                <h1 class="text-2xl font-semibold ml-2">RedRabbit</h1>
            </router-link>
        </div>
        <div class="flex-none">
            <div class="dropdown dropdown-end">
                <div tabindex="0" role="button" class="btn min-h-0 h-10 btn-secondary m-1">
                    {{ theme }}
                    <TablerChevronDown class="w-4 h-4 ml-1"></TablerChevronDown>
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
            <router-link to="/dashboard/notifications" v-if="user" class="btn btn-ghost ml-4 btn-circle">
                <div class="indicator">
                    <MaterialSymbolsNotifications class="text-2xl"></MaterialSymbolsNotifications>
                    <span class="indicator-item badge badge-secondary badge-sm">15</span>
                </div>
            </router-link>
            <div v-if="user" class="dropdown dropdown-end ml-4">
                <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img v-if="user.photoURL" :src="user.photoURL" alt="profile">
                        <IcBaselineAccountCircle v-else class="h-full w-full"></IcBaselineAccountCircle>
                    </div>
                </label>
                <ul tabindex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li class="justify-between">
                        <router-link class="btn btn-ghost flex" to="/profile/settings">Profile Settings
                            <span class="badge w-10 text-xs">New</span>
                        </router-link>
                    </li>
                    <div class="divider mt-0 mb-0"></div>
                    <li><button class="btn btn-ghost" @click="signout">Logout</button></li>
                </ul>
            </div>
        </div>
    </div>
</template>