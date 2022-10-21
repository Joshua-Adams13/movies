export const state = () => ({
  movies: [
    {
      title: 'Lord of the Rings',
      actor: 'Elijah Wood',
      description: 'Two small dudes walk really far to throw a ring into a volcano and meet a lot of dope friends along the way.'
    },
    {
      title: 'Ted',
      actor: 'Mark Walhburg',
      description: 'A grown man hangs out with a Teddy Bear'
    }
  ]
})

// export const getters = {
//     tripleCounter: state => {
//       return state.counter * 3;
//     }
//   }

//   //Mutating the state
//   //Always synchronous
//  export const mutations = {
//     updateMovies: (state, data) => {
//     state.movies = data;
//     }
//   }

//   //Commits the mutation, these are asynchronous
//   export const actions = {
//     async getMovieData({
//       state,
//       commit
//     }) {
//       if (state.movies.length)
//       try {
//         await fetch('https://api.themoviedb.org/3/movie/9988?api_key=679a4604f631a1ad0f61b7da242328bf&query=Beerfest', {
//           headers: {

//           }
//         })
//           .then((response) => response.json())
//           .then((data) => {
//             console.log(data)
//             commit('updateMovies', data) //Calls the updateMovie mutation
//           });
//       }

//       catch (err) {
//         console.log(err)
//       }
//     }
//   }
