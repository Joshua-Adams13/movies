export const state = () => ({
  movies: '',
  comedyMovies: '',
  actionMovies: '',
  dramaMovies: ''
})

export const getters = {

}

// Mutating the state
// Always synchronous
export const mutations = {
  updateMovies: (state, data) => {
    state.movies = data
  },
  updateComedyMovies: (state, comedyMovies) => {
    state.comedyMovies = comedyMovies
  },
  updateActionMovies: (state, actionMovies) => {
    state.actionMovies = actionMovies
  },
  updateDramaMovies: (state, dramaMovies) => {
    state.dramaMovies = dramaMovies
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
          commit('updateMovies', data.items) // Calls the updateMovie mutation
        })
    } catch (err) {
      console.log(err)
    }
  },
  selectComedyMovies ({
    state,
    commit
  }) {
    if (state.movies.length) {
      const comedyMovies = state.movies.filter(el => el.genre_ids.includes(35))
      commit('updateComedyMovies', comedyMovies)
    }
  },
  selectActionMovies ({
    state,
    commit
  }) {
    if (state.movies.length) {
      const actionMovies = state.movies.filter(el => el.genre_ids.includes(28))
      commit('updateActionMovies', actionMovies)
    }
  },
  selectDramaMovies ({
    state,
    commit
  }) {
    if (state.movies.length) {
      const dramaMovies = state.movies.filter(el => el.genre_ids.includes(18))
      commit('updateDramaMovies', dramaMovies)
    }
  }
}
