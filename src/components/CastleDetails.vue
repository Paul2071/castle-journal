<template>
       <div v-if="error" class="error"> {{ error }} </div>
     
    <div v-if="singleDocument" class="castle-details"> 
        
        <div class="castle-info">
            <div class="castle-image">
                <img :src="singleDocument.castleImage">
            </div>
            <h1> {{ singleDocument.title  }}</h1>
            <h2> {{ singleDocument.location  }}</h2>
            <p class="username"> created by {{  singleDocument.userName }}</p>
        </div>

        <div class="castle-description">
             <h3> {{ singleDocument.description  }}</h3>
         </div>
    </div>


       
    
</template>

<script >
import getDocument from '@/composables/getDocument';

export default {
    props: ['id'],
    setup(props) {
        const { error, singleDocument} = getDocument('castlejournal', props.id )
        

        return { error, singleDocument }
    }
}


</script>

<style >
.castle-details{
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 80px;
}
.castle-image {
    overflow: hidden;
    border-radius: 20px;
    position: relative;
    padding: 160px;
}
.castle-image img {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    max-width: 200%;
    max-height: 200%
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
    text-align: left;
}


</style>
