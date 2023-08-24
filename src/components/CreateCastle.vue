<template>
    <form>

        <h4>Create Castle Entry</h4>
        <input type="text" required placeholder="Name of castle" v-model="title">
        <input required placeholder="Castle location" v-model="location">

        <textarea v-model="description"></textarea>

        <label>Castle Image</label>
        <input type="file">
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

        return { title, location, description}
    }
}

</script>

<style ></style>
