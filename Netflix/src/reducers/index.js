import { combineReducers } from 'redux';
import qna from './qna';
import popularMovie from './popularMovie';

const rootReducer = combineReducers({
    qna,
    popularMovie,
});
 
// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;