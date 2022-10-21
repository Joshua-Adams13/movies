<template>
  <main class="container">
    <h1>MOVIES</h1>
    <FavoriteMovies />
  </main>
</template>

<script>
import FavoriteMovies from '@/components/FavoriteMovies.vue'

export default {
  name: 'IndexPage',
  components: {
    FavoriteMovies
  }
}

</script>

<style>
</style>
