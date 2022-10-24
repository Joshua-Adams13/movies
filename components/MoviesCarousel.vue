<template>
  <div>
    <b-carousel
      v-for="item in movies"
      :key="item.id"
      class="movie-container"
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#000000"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
   <!-- Movies Carousel -->
        <b-carousel-slide
          v-for="movie in item.items"
          :key="movie.id"
          img-blank
          img-alt="Blank image"
        >
          <div class="poster">
            <img :src="'https://image.tmdb.org/t/p/w185' + movie.poster_path">
            <section>
            <h3 class="movie-title">{{ movie.title }}</h3>
            <p class="movie-overview">{{ movie.overview }}</p>
            </section>
          </div>
        </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  computed: {
    ...mapState(['movies'])
  },
  methods: {
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>
