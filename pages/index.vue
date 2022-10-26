<template>
  <main class="container">
    <h1>MOVIES</h1>
    <h2>My Top Movies</h2>
    <MoviesCarousel :datasource="movies"/>
    <h2>My Top Comdey Movies</h2>
    <MoviesCarousel :datasource="comedyMovies"/>
    <h2>My Top Drama Movies</h2>
    <MoviesCarousel :datasource="dramaMovies"/>
    <h2>My Top Action Movies</h2>
    <MoviesCarousel :datasource="actionMovies"/>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import MoviesCarousel from '@/components/MoviesCarousel.vue'

export default {
  name: 'IndexPage',
  components: {
    MoviesCarousel
  },
  computed: {
    ...mapState(['movies', 'comedyMovies', 'actionMovies', 'dramaMovies'])
  }
}

</script>

<style>
</style>
