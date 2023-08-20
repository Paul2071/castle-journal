<template>
  <div class="home">
   <p>Homepage</p>
  </div>
  
</template>

<script>
import getPosts from '../composables/getPosts';

export default {
  name: 'HomeView',
  setup() {
  const {posts, error, load} =  getPosts()

  load()

  return { posts, error }
  }
}
</script>
