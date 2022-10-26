export default async ({ store }) => {
    await store.dispatch('getMovieData')
    await store.dispatch('selectComedyMovies')
    await store.dispatch('selectActionMovies')
    await store.dispatch('selectDramaMovies')
}
