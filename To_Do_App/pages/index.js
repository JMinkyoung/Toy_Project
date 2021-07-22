import React from 'react';
import AppLayout from '../components/AppLayout';
import AddTodo from '../components/AddTodo';
import ToDoHead from '../components/ToDoHead';
import ToDoLayout from '../components/ToDoLayout';
import ToDoList from '../components/ToDoList';

import rootReducer from '../reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const store = createStore(rootReducer,composeWithDevTools());
const persistor = persistStore(store);

const Index = () => {
    return (
        <Provider store = {store}>
            {/* <PersistGate loading={null} persistor={persistor} > */}
                <AppLayout>
                    <AddTodo/>
                    <ToDoHead/>
                    <ToDoLayout>
                        <ToDoList/>
                    </ToDoLayout>
                </AppLayout>
            {/* </PersistGate> */}
        </Provider>
    );
};

export default Index;