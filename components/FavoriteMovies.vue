<template>
  <div class="favorite-movie-section">
    <h3>Favorite Movies</h3>
    <div v-for="store in movies" :key="store.id">
      {{ store.title }}
    </div>
  </div>
  <!-- When creating divs that contain images -->
  <!-- <div>
    <div
      v-for="movie in movies"
      :key="store.id"
      class=""
      :style="`background: url(${movie.img}) no-repeat center center`"
      >
      <div class="movie-description">
        <div>
          <p>{{ movie.description}}</p>
        </div>
      </div>
    </div>
  </div> -->
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
h2 {
  color: red;
}
</style>
