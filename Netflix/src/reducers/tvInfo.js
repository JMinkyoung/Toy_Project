import axios from "axios";

export const GET_TV_INFO = 'GET_TV_INFO';

export const getTVInfo = (data) => ({
    type:GET_TV_INFO,
    data,
});
  
  export function getTvInfoAction(contentId) {
    return (dispatch) => {
      return axios.get(`https://api.themoviedb.org/3/tv/${contentId}?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR`)
        .then(response => {
          dispatch(getTVInfo(response.data))
        })
        .catch(error => {
            throw(error);
        })
    }
  };

const reducer = (state = [] , action) => {
    switch(action.type){
        case GET_TV_INFO:
            return{
                ...state,
                infos: action.data,
            };
        default:
            return state;
    };
};

export default reducer;
