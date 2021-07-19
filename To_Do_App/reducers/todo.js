import React, {useReducer} from 'react';

const initialState = [
    {
        todo: '언우밤지 듣기',
        rate: 5,
        done: false
    },

    {
        todo: '밥 먹기',
        rate: 1,
        done: true
    }
];

export const CREATE = 'CREATE';
export const DELETE = 'DELETE';
export const TOGGLE = 'TOGGLE';


export const addTodo = (data) => ({
    type: CREATE,
    data,
});

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE:
            console.log('create 액션수행');
            console.log(action);
            console.log(state);
            return [
                ...state,
                {
                    todo: action.data.todo,
                    rate: action.data.rate,
                    done: false
                }
            ];    
        default:
            return state;
    }
}

export default todoReducer;