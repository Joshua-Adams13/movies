<template>
    <div>
        <GenreSelect @change="selectedGenre = $event" />
        <MoviesCarousel :datasource="filteredMovies" />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import GenreSelect from '@/components/GenreSelect.vue'
import MoviesCarousel from '@/components/MoviesCarousel.vue'

export default {
  components: {
    GenreSelect,
    MoviesCarousel
  },
  data () {
    return {
      selectedGenre: ''
    }
  },
  computed: {
    ...mapState(['movies']),
    filteredMovies () {
      if (this.selectedGenre) {
        return this.movies.filter((el) => {
          const genre = el.genre_ids
          return genre
        })
      }
      return this.movies
    }
  }
}
</script>

<style lang="css" scoped>

</style>
