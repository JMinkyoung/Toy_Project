import { combineReducers } from 'redux';
import qna from './qna';


const rootReducer = combineReducers({
    qna,
});
 
// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;