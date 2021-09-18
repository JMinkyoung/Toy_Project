import axios from "axios";


export const GET_LATEST_TV = 'GET_LATEST_TV';

export const getLatestTV = (data) => {
    return {
        type: GET_LATEST_TV,
        data
    }
  };
  
  export function getLatestTVaction() {
    return (dispatch) => {
      return axios.get(``)
        .then(response => {
          dispatch(getLatestTV(response.data))
        })
        .catch(error => {
            throw(error);
        })
    }
  };

const reducer = (state = [] , action) => {
    switch(action.type){
        case GET_LATEST_TV:
            return{
                ...state,
                latesttv: action.data,
            };
        default:
            return state;
    };
};

export default reducer;
