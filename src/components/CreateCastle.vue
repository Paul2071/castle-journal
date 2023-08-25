<template>
    <form @submit.prevent="handleSubmit">

        <h4>Create Castle Entry</h4>
        <input type="text" required placeholder="Name of castle" v-model="title">
        <input required placeholder="Castle location" v-model="location">
        <textarea v-model="description" placeholder="notes"></textarea>


        <label>Upload Castle Image</label>
        <input type="file">

        <div class="error"></div>

        <button>Create</button>

    </form>

    </template>
    

<script >

import { ref } from 'vue'



export default {


    setup() {
        const title = ref('')
        const location = ref('')
        const description = ref('')

        const handleSubmit = () => {
            console.log(title.value, description.value, location.value)
        }

        return { title, location, description, handleSubmit } 
    }
}

</script>

<style>
    input[type="file"] {
        border: 0;
        padding: 0;
    }
    label {
        font-size: 14px;
        font-weight: bold;
        display: block;
        margin-top: 30px
    }
    button {
        margin-top: 20px;
        margin-bottom: 20px
    }
    
</style>
