<template>
    <form @submit.prevent="handleSubmit">

        <h4>Create Castle Entry</h4>
        <input type="text" required placeholder="Name of castle" v-model="title">
        <input required placeholder="Castle location" v-model="location">
        <textarea v-model="description" placeholder="notes"></textarea>


        <label>Upload Castle Image</label>
        <input type="file" @change="handleChange">

        <div class="error"> {{ fileError }}</div>

        <button>Create</button>

    </form>

    </template>
    

<script >

import { ref } from 'vue'
import useStorage from '../composables/useStorage'
import useCollection from '../composables/useCollection'
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config'


export default {

    setup() {
        //upload image composable
        const {filePath, url, uploadImage } = useStorage()
        //composable that creates the document object 
        const { error, addDoc } = useCollection('castlejournal')
        //composable that provides the user and ensures useCollection goes to the right user
        const { user } = getUser()

        //refs for form at /castle/create, these values uploaded as object to firebase
        const title = ref('')
        const location = ref('')
        const description = ref('')
        const file = ref(null)
        const fileError = ref(null)

        //allowed types of files

        const types = ["image/png", "image/jpeg"]

        const handleSubmit = async () => {
            if (file.value){

                await uploadImage(file.value)
                await addDoc({
                    title: title.value,
                    location: location.value,
                    description: description.value,
                    userId: user.value.uid,
                    userName: user.value.displayName,
                    castleImage: url.value,
                    filePath: filePath.value,
                    castles: [],
                    createdAt: timestamp()
                })

                if (!error.value) {
                    console.log('castle journal added')
                }

               
            }
        }



        const handleChange = (e) => {
          const selected =  e.target.files[0]
        

            if(selected && types.includes(selected.type) ) {
                file.value = selected
                fileError.value = null
            } else {
                file.value = null
                fileError.value = "jpeg or png file please :)"
            }

        }

        return { title, location, description, file, fileError, handleSubmit, handleChange } 
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
