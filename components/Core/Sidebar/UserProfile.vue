<script lang="ts" setup>
import { signOut } from "firebase/auth";
import { useRouter } from "vue-router";
import IcBaselineAccountCircle from "~icons/ic/baseline-account-circle";
import ProfileDropdown from "./ProfileDropdown.vue";

const router = useRouter();
const auth = useFirebaseAuth();
const user = useCurrentUser();

const signout = () => {
	signOut(auth!);
	router.push("/");
};
</script>

<template>
    <div v-if="user" class="dropdown dropdown-top">
        <label tabindex="0" class="btn btn-ghost btn-block text-sm justify-start font-light pl-1">
            <div class="min-w-10 min-h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <img v-if="user && user.photoURL" :src="user.photoURL" class="rounded-full w-10 h-10 object-cover"
                    alt="User" />
                <IcBaselineAccountCircle v-else class="w-10 h-10" />
            </div>
            <div class="text-left ml-1">
                {{ user?.displayName }}
                <div class="text-xs">
                    {{ user?.email?.split('@')[0] }}
                </div>
            </div>
        </label>
        <ProfileDropdown :signout="signout" />
    </div>
</template>