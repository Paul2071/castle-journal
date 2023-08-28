<template>
  <div v-for="journal in castlejournal" :key="journal.id">
    <div class="single">
      <div class="thumbnail">
        <img :src="journal.castleImage" />
      </div>
      <div class="info">
        <h3> {{ journal.title }}</h3>
        <p> Created by {{  journal.userName }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["castlejournal"],
};
</script>
<style scoped >

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
    box-shadow: 1px 2px 3px rgba(50, 50, 50, 50,);
    border-color: black;
    transform: scale(1.02);
    border-style: ridge;
    transition: all ease 0.2s;
    cursor: pointer;
    
}
.thumbnail {
    max-width: 100px;
    max-height: 100px;
    overflow: hidden;
    border-radius: 10px;
}
img {
    max-width: 150%;
    max-height: 150%;
    display: block;
}
.info {
    margin: 0 30px;
}


</style>
