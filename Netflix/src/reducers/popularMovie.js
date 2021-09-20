export const initialState = {
  movies: [],

  getPopularLoading: false,
  getPopularDone: false,
  getPopularError: null,
}


export const GET_POPULAR_MOVIE_REQUEST = 'GET_POPULAR_MOVIE_REQUEST';
export const GET_POPULAR_MOVIE_SUCCESS = 'GET_POPULAR_MOVIE_SUCCESS';
export const GET_POPULAR_MOVIE_FAILURE = 'GET_POPULAR_MOVIE_FAILURE';

// export const getPopularMovie = (data) => {
//     return {
//         type: GET_POPULAR_MOVIE,
//         data
//     }
//   };
  
//   export function getPopularMovies() {
//     return (dispatch) => {
//       return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=1&region=KR`)
//         .then(response => {
//           dispatch(getPopularMovie(response.data))
//         })
//         .catch(error => {
//             throw(error);
//         })
//     }
//   };

const reducer = (state = [] , action) => {
    switch(action.type){
      case GET_POPULAR_MOVIE_REQUEST:
        return{
            ...state,
            getPopularLoading:true,
            getPopularDone:false,
            getPopularError:null,
        };
      case GET_POPULAR_MOVIE_SUCCESS:
        return{
            ...state,
            movies: action.data,
            getPopularLoading:false,
            getPopularDone:true,
        };
      case GET_POPULAR_MOVIE_FAILURE:
        return{
          ...state,
          getPopularLoading:false,
          getPopularError:action.error,
        };
        default:
          return state;
    };
};

export default reducer;
