import { combineReducers } from 'redux';
import qna from './qna';
import popularMovie from './popularMovie';
import tvInfo from './tvInfo';

const rootReducer = combineReducers({
    qna,
    popularMovie,
    tvInfo,
});
 
// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;