<template>
  <div>
    <!-- Movies Slides -->
    <b-carousel
      class="movie-container"
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#000000"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
     <!-- Movies Slides -->
        <b-carousel-slide
          v-for="movie in datasource"
          :key="movie.id"
          img-blank
          img-alt="Blank image"
        >
          <div class="poster">
            <img :src="'https://image.tmdb.org/t/p/w185' + movie.poster_path" class="poster-img">
            <section class="movie-info">
            <h3 class="movie-title">{{ movie.title }}</h3>
            <p class="movie-overview">{{ movie.overview }}</p>
            </section>
          </div>
        </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      slide: 0,
      sliding: null
    }
  },
  props: {
    datasource: {
      type: [Array, Object]
    }
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
