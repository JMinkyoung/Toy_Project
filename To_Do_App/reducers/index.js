import { combineReducers } from 'redux';
import todoReducer from './todo';

import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "root",
    // localStorage에 저장합니다.
    storage,

    whitelist: ["todoReducer"]
  };

const rootReducer = combineReducers({
    todoReducer,
});

// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;