import axios from "axios";

export const GET_TV_INFO = 'GET_TV_INFO';
export const GET_TV_VIDEO = 'GET_TV_VIDEO';
export const GET_TV_CREDITS = 'GET_TV_CREDITS';
export const GET_TV_KEYWORDS = 'GET_TV_KEYWORDS';

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

export const getTVVideo = (data) => ({
    type:GET_TV_VIDEO,
    data,
});
  
  export function getTvVideoAction(contentId) {
    return (dispatch) => {
      return axios.get(`https://api.themoviedb.org/3/tv/${contentId}/videos?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR`)
        .then(response => {
          dispatch(getTVVideo(response.data))
        })
        .catch(error => {
            throw(error);
        })
    }
  };

  export const getTVCredits = (data) => ({
    type:GET_TV_CREDITS,
    data,
});
  
  export function getTvCreditsAction(contentId) {
    return (dispatch) => {
      return axios.get(`https://api.themoviedb.org/3/tv/${contentId}/credits?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR`)
        .then(response => {
          dispatch(getTVCredits(response.data))
        })
        .catch(error => {
            throw(error);
        })
    }
  };

  export const getTVKeywords = (data) => ({
    type:GET_TV_KEYWORDS,
    data,
});
  
  export function getTvKeywordsAction(contentId) {
    return (dispatch) => {
      return axios.get(`https://api.themoviedb.org/3/tv/${contentId}/keywords?api_key=0f54240da860f0ee0a59657346e7a8cc`)
        .then(response => {
          dispatch(getTVKeywords(response.data))
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
          case GET_TV_VIDEO:
            return{
                ...state,
                videos: action.data,
            };
          case GET_TV_CREDITS:
            return{
                ...state,
                credits: action.data,
            };
          case GET_TV_KEYWORDS:
            return{
                ...state,
                keywords: action.data,
            };
        default:
            return state;
    };
};

export default reducer;
