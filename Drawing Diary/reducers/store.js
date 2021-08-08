import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore} from 'redux';
import { persistStore } from 'redux-persist'
import rootReducer from './index';

export const store = createStore(rootReducer,composeWithDevTools());
export const persistor = persistStore(store);

const factory = () => {
    return {store, persistor};
}
export default factory;