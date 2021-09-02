import {createStore} from 'redux';
import rootReducer from './index';

export const store = createStore(rootReducer);

const factory = () => {
    return {store, persistor};
}
export default factory;