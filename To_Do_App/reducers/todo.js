import React, {useReducer} from 'react';
import shortId from 'shortid';

const initialState = {
    todos :[
        { 
        id: shortId.generate(),
        text: '언우밤지 듣기',
        rate: 5,
        done: true,
    }
    ]
};

export const CREATE = 'CREATE';
export const DELETE = 'DELETE';
export const TOGGLE = 'TOGGLE';


export const addTodo = (data) => ({
    type: CREATE,
    todos:{
        id: shortId.generate(),
        text:data.text,
        rate:data.rate,
        done:false,
    }
});

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE:
            return {
                ...state,
                todos:[...state.todos, action.todos]
            }    
        default:
            return state;
    }
}

export default todoReducer;