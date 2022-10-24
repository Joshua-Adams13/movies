export const state = () => ({
  movies: []
})

export const getters = {

}

// Mutating the state
// Always synchronous
export const mutations = {
  updateMovies: (state, data) => {
    state.movies = [data]
  }
}

// Commits the mutation, these are asynchronous
export const actions = {
  async getMovieData ({
    state,
    commit
  }) {
    if (state.movies.length) { return }
    try {
      await fetch('https://api.themoviedb.org/3/list/8223749?api_key=679a4604f631a1ad0f61b7da242328bf&language=en-US')
        .then(response => response.json())
        .then((data) => {
          commit('updateMovies', data) // Calls the updateMovie mutation
        })
    } catch (err) {
      console.log(err)
    }
  }
}
