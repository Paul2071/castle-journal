<template>
     <form @submit.prevent="handleSubmit">
    <h3>Sign up</h3>
    <input type="text" placeholder="Choose display name..." v-model="displayName">
    <input type="email" placeholder="Enter email..." v-model="email">
    <input type="password" placeholder="Enter password..." v-model="password">
    <div v-if="error" class="error"> {{ error }}</div>
    <button v-if="!isPending">Sign up</button>
    <button v-if="isPending">Loading...</button>
</form>
</template>

<script >

import { ref } from 'vue'
import useSignup from '../../composables/useSignup'

export default {
    setup () {

        const { error, signup, isPending } = useSignup()

        const email = ref('')
        const password = ref('')
        const displayName = ref('')

        const handleSubmit = async () => {
            const res = await signup(email.value, password.value, displayName.value)

            if(!error.value) {
                console.log("signup successful")
            }
        }

        return {email, password, displayName, isPending, error, handleSubmit}

    }
}

</script>

<style ></style>
