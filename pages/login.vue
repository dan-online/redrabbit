<script setup>
import {
    GoogleAuthProvider,
    getRedirectResult,
    signInWithPopup
} from 'firebase/auth';
import { useFirebaseAuth } from 'vuefire';

const auth = useFirebaseAuth()
const route = useRoute()

const provider = new GoogleAuthProvider()

provider.addScope('profile');
provider.addScope('email');

// display errors if any
const error = ref(null)
async function signinRedirect() {
    try {
        await signInWithPopup(auth, provider);

        console.log("in!")

        if (route.query.redirect) {
            navigateTo(route.query.redirect)
        } else {
            navigateTo('/')
        }
    } catch (error) {
        console.error('Failed to sign in', error)
        error.value = error
    }
}

// only on client side
onMounted(() => {
    getRedirectResult(auth).catch((reason) => {
        console.error('Failed redirect result', reason)
        error.value = reason
    }).then(console.log)
})
</script>

<template>
    <main>
        <!-- <ErrorBox v-if="error" :error="error" /> -->
        {{ error }}
        <button @click="signinRedirect()">SignIn with Google</button>
    </main>
</template>