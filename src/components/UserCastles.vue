<template>
    
    <div class="user-entries">
       
        <div v-if="castles">       
            <List :castlejournal="castles" />
        </div>
        <router-link class="btn" :to=" {name: 'home'}">Click to see all user entries</router-link>
    </div>
</template>

<script >

import getCollection from '@/composables/getCollections';
import getUser from '@/composables/getUser';
import List from './List.vue';



export default {

    components: { List },

    setup () {
        
        const { user } = getUser()    
        const { documents: castles } = getCollection(
            'castlejournal',
            ['userId', '==', user.value.uid]
        )

       

        return { castles, }
    }
}
</script>

<style ></style>
