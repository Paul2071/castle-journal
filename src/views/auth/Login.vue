<template>
   <form @submit.prevent="handleSubmit">
    <h3>Login form</h3>
    <input type="email" placeholder="Enter email..." v-model="email">
    <input type="password" placeholder="Enter password..." v-model="password">
    <div v-if="error" class="error"> {{ error }}</div>
    <button v-if="!isPending">Log in</button>
    <button v-if="isPending">Loading...</button>
</form>
<div class="info">
<h4> To test this webpage out you can use the below details </h4>
<p> email: example@example.com </p>
<p> password: example12 </p>
<h4> or signup using the signup button in the top right </h4>
</div>
</template>

<script >

import useLogin from '../../composables/useLogin'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {    
    setup () {

        const { error, login, isPending } = useLogin()
        const router = useRouter()

        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
           
            const res = await login(email.value, password.value)
            if (!error.value) {
                router.push({name:'castleuser'})
             }
        }

        return { email, password, handleSubmit, error, isPending }

    }

}
</script>

<style >

.info{

          max-width: 400px;
          margin: 0 auto;
          margin-top: 20px;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 1px 2px 3px rgba(50,50,0.05);
          border: 1px solid var(--secondary);
          background: white;
}
</style>
