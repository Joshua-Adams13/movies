<template>
  <div class="favorite-movie-section">
    <h2>Favorite Movies</h2>
    <div v-for="item in movies" :key="item.id" class="movie-container">
      <div v-for="movie in item.items" :key="movie.id" class="poster">
        <h3 class="movie-title">{{ movie.title }}</h3>
        <img :src="'https://image.tmdb.org/t/p/w185' + movie.poster_path">
        <p class="movie-overview">{{ movie.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['movies'])
  },
  methods: {
    // updateMovies() {
    // use this method to update the movies state in index.js
    // },
  }
}

</script>

<style scoped>

</style>
