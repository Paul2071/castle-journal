<template>
  <Navbar/>
  <div class="content">

    <router-view/>
  </div>
</template>

<script>

import Navbar from '../src/components/Navbar.vue'

export default {
  components: { Navbar }
}

</script>

<style>
.content {
  margin: 0 auto;
  
  padding: 0 20px;
}
</style>
