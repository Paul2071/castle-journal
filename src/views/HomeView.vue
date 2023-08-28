<template>
  <div class="home">
    <div v-if="error" class="error">Could not get your posts...</div>
    <div v-if="documents" >
      <List :castlejournal="documents"/>
      <!-- <div v-for="doc in documents" :key="doc.id"> {{ doc.title }}</div> -->
    </div> 
  </div>
  
</template>

<script>
import List from '@/components/List.vue';
import getCollections from '../composables/getCollections';

export default {
    name: 'HomeView',
    components: { List },
    setup() {
        const { error, documents } = getCollections('castlejournal');
        return { documents, error };
    },
    components: { List }
}
</script>
