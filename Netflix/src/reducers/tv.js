export const initialState = {
  infos: [],
  videos: [],
  keywords: [],
  similars: [], 
  credits:[],
  populartv:[],
  trendingtv:[],

  getInfoLoading: false,
  getInfoDone: false,
  getInfoError: null,

  getVideoLoading: false,
  getVideoDone: false,
  getVideoError: null,

  getCreditLoading: false,
  getCreditDone: false,
  getCreditError: null,
  
  getKeywordLoading: false,
  getKeywordDone: false,
  getKeywordError: null,

  getSimilarLoading: false,
  getSimilarDone: false,
  getSimilarError: null,

  getPopularLoading: false,
  getPopularDone: false,
  getPopularError: null,

  getTrendingLoading: false,
  getTrendingDone: false,
  getTrendingError: null,
}

export const GET_TV_INFO_REQUEST = 'GET_TV_INFO_REQUEST';
export const GET_TV_INFO_SUCCESS = 'GET_TV_INFO_SUCCESS';
export const GET_TV_INFO_FAILURE = 'GET_TV_INFO_FAILURE';

export const GET_TV_VIDEO_REQUEST = 'GET_TV_VIDEO_REQUEST';
export const GET_TV_VIDEO_SUCCESS = 'GET_TV_VIDEO_SUCCESS';
export const GET_TV_VIDEO_FAILURE = 'GET_TV_VIDEO_FAILURE';

export const GET_TV_CREDITS_REQUEST = 'GET_TV_CREDITS_REQUEST';
export const GET_TV_CREDITS_SUCCESS = 'GET_TV_CREDITS_SUCCESS';
export const GET_TV_CREDITS_FAILURE = 'GET_TV_CREDITS_FAILURE';

export const GET_TV_KEYWORDS_REQUEST = 'GET_TV_KEYWORDS_REQUEST';
export const GET_TV_KEYWORDS_SUCCESS = 'GET_TV_KEYWORDS_SUCCESS';
export const GET_TV_KEYWORDS_FAILURE = 'GET_TV_KEYWORDS_FAILURE';

export const GET_TV_SIMILAR_REQUEST = 'GET_TV_SIMILAR_REQUEST';
export const GET_TV_SIMILAR_SUCCESS = 'GET_TV_SIMILAR_SUCCESS';
export const GET_TV_SIMILAR_FAILURE = 'GET_TV_SIMILAR_FAILURE';

export const GET_TV_POPULAR_REQUEST = 'GET_TV_POPULAR_REQUEST';
export const GET_TV_POPULAR_SUCCESS = 'GET_TV_POPULAR_SUCCESS';
export const GET_TV_POPULAR_FAILURE = 'GET_TV_POPULAR_FAILURE';

export const GET_TV_TRENDING_REQUEST = 'GET_TV_TRENDING_REQUEST';
export const GET_TV_TRENDING_SUCCESS = 'GET_TV_TRENDING_SUCCESS';
export const GET_TV_TRENDING_FAILURE = 'GET_TV_TRENDING_FAILURE';


const reducer = (state = initialState , action) => {
    switch(action.type){
          case GET_TV_INFO_REQUEST:
            return{
                ...state,
                getInfoLoading:true,
                getInfoDone:false,
                getInfoError:null,
            };
          case GET_TV_INFO_SUCCESS:
            return{
                ...state,
                infos: action.data,
                getInfoLoading:false,
                getInfoDone:true,
            };
          case GET_TV_INFO_FAILURE:
            return{
              ...state,
              getInfoLoading:false,
              getInfoError:action.error,
            };
          case GET_TV_VIDEO_REQUEST:
            return{
                ...state,
                getVideoLoading:true,
                getVideoDone:false,
                getVideoError:null,
            };
          case GET_TV_VIDEO_SUCCESS:
            return{
                ...state,
                videos: action.data,
                getVideoLoading:false,
                getVideoDone:true,
            };
          case GET_TV_VIDEO_FAILURE:
            return{
              ...state,
              getVideoLoading:false,
              getVideoError:action.error,
            };
          case GET_TV_CREDITS_REQUEST:
            return{
                ...state,
                getCreditLoading:true,
                getCreditDone:false,
                getCreditError:null,
            };
          case GET_TV_CREDITS_SUCCESS:
            return{
                ...state,
                credits: action.data,
                getCreditLoading:false,
                getCreditDone:true,
            };
          case GET_TV_CREDITS_FAILURE:
            return{
              ...state,
              getCreditLoading:false,
              getCreditError:action.error,
            };
          case GET_TV_KEYWORDS_REQUEST:
            return{
                ...state,
                getKeywordLoading:true,
                getKeywordDone:false,
                getKeywordError:null,
            };
          case GET_TV_KEYWORDS_SUCCESS:
            return{
                ...state,
                keywords: action.data,
                getKeywordLoading:false,
                getKeywordDone:true,
            };
          case GET_TV_KEYWORDS_FAILURE:
            return{
              ...state,
              getKeywordLoading:false,
              getKeywordError:action.error,
            };
          case GET_TV_SIMILAR_REQUEST:
            return{
                ...state,
                getSimilarLoading:true,
                getSimilarDone:false,
                getSimilarError:null,
            };
          case GET_TV_SIMILAR_SUCCESS:
            return{
                ...state,
                similars: action.data,
                getSimilarLoading:false,
                getSimilarDone:true,
            };
          case GET_TV_SIMILAR_FAILURE:
            return{
              ...state,
              getSimilarLoading:false,
              getSimilarError:action.error,
            };
          case GET_TV_POPULAR_REQUEST:
            return{
                ...state,
                getPopularLoading:true,
                getPopularDone:false,
                getPopularError:null,
            };
          case GET_TV_POPULAR_SUCCESS:
            return{
                ...state,
                populartv: action.data,
                getPopularLoading:false,
                getPopularDone:true,
            };
          case GET_TV_POPULAR_FAILURE:
            return{
              ...state,
              getPopularLoading:false,
              getPopularError:action.error,
            };
          case GET_TV_TRENDING_REQUEST:
            return{
                ...state,
                getTrendingLoading:true,
                getTrendingDone:false,
                getTrendingError:null,
            };
          case GET_TV_TRENDING_SUCCESS:
            return{
                ...state,
                trendingtv: action.data,
                getTrendingLoading:false,
                getTrendingDone:true,
            };
          case GET_TV_TRENDING_FAILURE:
            return{
              ...state,
              getTrendingLoading:false,
              getTrendingError:action.error,
            };
        default:
            return state;
    };
};

export default reducer;
