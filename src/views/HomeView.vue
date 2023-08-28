<template>
  <div class="home">
    <div v-if="error" class="error">Could not get your posts...</div>
    <div v-if="documents" >
      <di v-for="doc in documents" :key="doc.id"> {{ doc.title }}</di>
    </div>
  </div>
  
</template>

<script>
import getCollections from '../composables/getCollections';

export default {
  name: 'HomeView',
  setup() {
  const { error, documents} =  getCollections('castlejournal')


  

  return { documents, error }
  }
}
</script>
