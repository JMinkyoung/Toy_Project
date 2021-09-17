import axios from "axios";


export const GET_POPULAR_TV = 'GET_POPULAR_TV';

export const getPopularTV = (data) => {
    return {
        type: GET_POPULAR_TV,
        data
    }
  };
  
  export function getPopularTVaction() {
    return (dispatch) => {
      return axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=1`)
        .then(response => {
          dispatch(getPopularTV(response.data))
        })
        .catch(error => {
            throw(error);
        })
    }
  };

const reducer = (state = [] , action) => {
    switch(action.type){
        case GET_POPULAR_TV:
            return{
                ...state,
                populartv: action.data,
            };
        default:
            return state;
    };
};

export default reducer;
