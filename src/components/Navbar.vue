<template>
    <div class="navbar">
        <nav>
            <img src="../assets/castle.png" alt="Castle Icon created by Freepik - Flaticon" >
            
            <h1><router-link :to=" {name: 'home'}">Castle Journal</router-link></h1>
            
            <div class="links">

                <div v-if="user"> 
                    <button @click="handleClick" class="btn" :to="{  name: 'login'}"> Logout </button>
                </div>
                <div v-else>

                    <router-link class="btn" :to="{  name: 'signup'}"> Signup </router-link>
                    <router-link class="btn" :to= "{ name: 'login'}"> Login </router-link>

                </div>
            </div>
        </nav>
    </div>
</template>

<script >

import { ref } from 'vue'
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import { useRouter } from 'vue-router'

export default {    
    setup () {
      
      const { user } = getUser()  
      const { logout } = useLogout()
      const router = useRouter()

        const handleClick = async () => {
            await logout()          
            console.log("logout succesful")
            router.push( { name: 'login' } )
            
        }

        return {  handleClick,  logout, user  }
    }

}
</script>

<style scoped>

.navbar{
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
}
nav {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
}
nav h1 {
    margin-left: 20px;
}

/* margin-left auto will scoot things to the right if parent displays flex */
nav .links {
    margin-left: auto;
}
nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
}
nav img {
    max-height: 60px
}

</style>
