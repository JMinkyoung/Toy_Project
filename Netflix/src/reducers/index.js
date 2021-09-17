import { combineReducers } from 'redux';
import qna from './qna';
import popularMovie from './popularMovie';
import popularTv from './popularTV';
import tvInfo from './tvInfo';

const rootReducer = combineReducers({
    qna,
    popularMovie,
    popularTv,
    tvInfo,
});
 
// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;