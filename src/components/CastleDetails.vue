<!-- This component is when a user clicks on an image to see just that entry -->

<template>
    
       <div v-if="error" class="error"> {{ error }} </div>
     
      
    <div v-if="singleDocument" class="castle-details"> 
        
        <div class="castle-info">

            <div class="castle-image">
                <img :src="singleDocument.castleImage">
            </div>

            <div class="castle-metadata">
                <h1> {{ singleDocument.title  }}</h1>
                <h2> {{ singleDocument.location  }}</h2>
                <p class="username"> created by {{  singleDocument.userName }}</p>

            </div>
        </div>

        <div class="castle-description">
             <h3> {{ singleDocument.description  }}</h3>
                <button v-if="ownership" class="btn" @click="handleDelete">Delete</button>

         </div>

    </div>


       
    
</template>

<script >
import getDocument from '@/composables/getDocument';
import getUser from '@/composables/getUser';
import useDocument from '@/composables/useDocument';
import useStorage from '@/composables/useStorage';
import { useRouter } from 'vue-router'
import { computed } from 'vue';



export default {
    props: ['id'],
    setup(props) {
        const { user } = getUser()
        const { error, singleDocument} = getDocument('castlejournal', props.id )
        const { deleteDoc } = useDocument('castlejournal', props.id)
        const { deleteImage } = useStorage()
        const router = useRouter()


        const ownership = computed(()=> {
            return singleDocument.value && user.value && user.value.uid == singleDocument.value.userId
        })

        const handleDelete = async () => {
            await deleteImage(singleDocument.value.filePath)
            await deleteDoc()
            router.push({ name: 'home'})
        }

        return { error, singleDocument, ownership, handleDelete }
    }
}


</script>

<style >
 
/* css */

.castle-details{    
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.castle-image img {
   border-radius: 10px;
   max-width: 100%;
   max-height: 300px;
} 

.castle-info {
    text-align: center;
}
.castle-info {
    text-transform: capitalize;
    font-size: 28px;
    margin-top: 20px;
}
.castle-info p {
    margin-bottom: 20px;
}
.username {
    color: #999
}
.castle-description {
    text-align: justify;
    margin: auto;
    padding: 10px;
    max-width: 400px;
}


</style>
