import React from 'react';
import AppLayout from '../components/AppLayout';
import AddTodo from '../components/AddTodo';
import ToDoHead from '../components/ToDoHead';
import ToDoLayout from '../components/ToDoLayout';
import ToDoContent from '../components/ToDoContent';
import ToDoList from '../components/ToDoList';

import rootReducer from '../reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
const store = createStore(rootReducer,composeWithDevTools());

const Index = () => {
    return (
        <Provider store = {store}>
            <AppLayout>
                <AddTodo/>
                <ToDoHead/>
                <ToDoLayout>
                    <ToDoList/>
                </ToDoLayout>
            </AppLayout>
        </Provider>
    );
};

export default Index;