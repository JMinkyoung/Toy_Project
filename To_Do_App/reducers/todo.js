import shortId from 'shortid';

const initialState = {
    todos :[
        { 
            id: shortId.generate(),
            text: '언우밤지 듣기',
            rate: 5,
            done: false,
        },
        { 
            id: shortId.generate(),
            text: '햄버거 시켜먹기',
            rate: 3,
            done: false,
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

export const toggleTodo = (data) => ({
    type: TOGGLE,
    id: data.id
});

export const deleteTodo = (data) => ({
    type: DELETE,
    id: data.id
});

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE:
            return {
                ...state,
                todos:[...state.todos, action.todos]
            };
        case TOGGLE:
            return {
                ...state,
                todos: state.todos.map((todo)=>{
                    if(todo.id===action.id){
                        return {...todo, done:!todo.done}
                    }else{
                        return todo
                    }
                })
            };
        case DELETE:
            return {
                ...state, 
                todos: state.todos.filter((todo)=> todo.id !== action.id)
            }
        default:
            return state;
    }
}

export default todoReducer;