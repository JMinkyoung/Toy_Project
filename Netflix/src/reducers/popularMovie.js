import axios from "axios";


export const GET_POPULAR_MOVIE = 'GET_POPULAR_MOVIE';

export const getPopularMovie = (data) => {
    return {
        type: GET_POPULAR_MOVIE,
        data
    }
  };
  
  export function getPopularMovies() {
    return (dispatch) => {
      return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=1&region=KR`)
        .then(response => {
          dispatch(getPopularMovie(response.data))
        })
        .catch(error => {
            throw(error);
        })
    }
  };

const reducer = (state = [] , action) => {
    switch(action.type){
        case GET_POPULAR_MOVIE:
            return{
                ...state,
                movies: action.data,
            };
        default:
            return state;
    };
};

export default reducer;
