import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import diaryReducer from './diary';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "root",
    // localStorage에 저장합니다.
    storage,
    whitelist: ["diaryReducer"],
  };

const rootReducer = combineReducers({
    diaryReducer,
});
 
export default persistReducer(persistConfig, rootReducer);
// export default rootReducer;