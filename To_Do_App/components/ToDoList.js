import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ToDoContent from './ToDoContent';

const ToDoWrapper = styled.div`
    flex : 1;
    margin-bottom: 5px;
    position: relative;
`;

const ToDoList = () => {
    const todos = useSelector((state)=>state.todoReducer.todos);

    return (
        <ToDoWrapper>
            {todos.map((todo)=>{
                return <ToDoContent key={todo.id} id={todo.id} text={todo.text} rate={todo.rate} done={todo.done}/>
            })}
        </ToDoWrapper>
    );
};

export default ToDoList;