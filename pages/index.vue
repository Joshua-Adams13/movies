<template>
  <main class="container">
    <h1>MOVIES</h1>
    <MoviesCarousel />
  </main>
</template>

<script>
import MoviesCarousel from '@/components/MoviesCarousel.vue'

export default {
  name: 'IndexPage',
  components: {
    MoviesCarousel
  }
}

</script>

<style>
</style>
