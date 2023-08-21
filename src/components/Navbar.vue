<template>
    <div class="navbar">
        <nav>
            <h1><router-link :to=" {name: 'home'}">Castle Journal</router-link></h1>
            <div class="links">
                <button> Logout </button>
                <router-link class="btn" :to="{  name: 'signup'}"> Signup </router-link>
                <router-link class="btn" :to= "{ name: 'login'}"> Login </router-link>
            </div>
        </nav>
    </div>
</template>

<script >

</script>

<style ></style>
