import {createStore} from 'redux';
import { persistStore } from 'redux-persist'
import rootReducer from './index';

export const store = createStore(rootReducer);
export const persistor = persistStore(store);

const factory = () => {
    return {store, persistor};
}
export default factory;