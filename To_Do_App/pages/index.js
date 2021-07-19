import React from 'react';
import AppLayout from '../components/AppLayout';
import AddTodo from '../components/AddTodo';
import rootReducer from '../reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

const store = createStore(rootReducer);

const Index = () => {
    return (
        <Provider store = {store}>
            <AppLayout>
                <AddTodo/>
            </AppLayout>
        </Provider>
    );
};

export default Index;