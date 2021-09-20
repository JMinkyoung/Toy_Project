import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from 'redux';
import qna from './qna';
import popularMovie from './popularMovie';
import popularTv from './popularTV';
import tvInfo from './tvInfo';

// (이전 상태, 액션) => 다음상태
const rootReducer = (state, action) => {
    switch (action.type){
        case HYDRATE:
            return action.payload;
        default: {
            const combinedReducer = combineReducers({
                qna,
                popularMovie,
                // popularTv,
                tvInfo,
            });
            return combinedReducer(state,action);
        }
    }
};
 
// export default persistReducer(persistConfig, rootReducer);
export default rootReducer;