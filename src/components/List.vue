<template>
  <div class="grid-container">
  <div v-for="journal in castlejournal" :key="journal.id">

    <router-link :to="{ name: 'castledetails', params: {id: journal.id} }">
      <div class="single">
        <div class="thumbnail">
          <img :src="journal.castleImage" />
        </div>
        <div class="info">
          <h3> {{ journal.title }}</h3>
          <h3> {{ journal.location }}</h3>          
          <p> Created by {{  journal.userName }}</p>
        </div>
        
      </div>
    </router-link>
  </div>
 
  </div>
</template>

<script>
export default {
  props: ["castlejournal"],
};
</script>
<style scoped >


.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 50px;
  padding: 10px;
}

.single {
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    background: white;
    margin: 16px 0;
    transition: all ease 0.2s;
}
.single:hover {
    border-color: black;
    border-style: ridge;
    transform: scale(1.02);
    transition: all ease 0.2s;
    cursor: pointer;
    
}
.thumbnail {
    max-width: 150px;
    max-height: 150px;
    overflow: hidden;
    border-radius: 10px;
}
img {
    max-width: 100%;
    max-height: 100%;
   
    display: block;
}
.info {
    margin: 0 30px;
}


</style>
