export const initialState = {
  movies: [],

  getPopularLoading: false,
  getPopularDone: false,
  getPopularError: null,
}


export const GET_POPULAR_MOVIE_REQUEST = 'GET_POPULAR_MOVIE_REQUEST';
export const GET_POPULAR_MOVIE_SUCCESS = 'GET_POPULAR_MOVIE_SUCCESS';
export const GET_POPULAR_MOVIE_FAILURE = 'GET_POPULAR_MOVIE_FAILURE';


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