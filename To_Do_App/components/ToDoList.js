import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import ToDoContent from './ToDoContent';

import { ToDoListWrapper, SortButton } from '../styles';

const ToDoList = () => {
    const todos = useSelector((state)=>state.todoReducer.todos);
    const [sorted, setSorted] = useState(false);

    const onClickSort = useCallback(()=>{
        if(sorted){
            setSorted(!sorted);
            todos.sort((a,b)=>{
                return b.rate - a.rate;
            });
        }else{
            setSorted(!sorted);
            todos.sort((a,b)=>{
                return a.rate - b.rate;
            });
        }
    });
    
    return (
        <ToDoListWrapper>
            <SortButton onClick={onClickSort} />
            {todos.map((todo)=>{
                return <ToDoContent key={todo.id} id={todo.id} text={todo.text} rate={todo.rate} done={todo.done}/>
            })}
        </ToDoListWrapper>
    );
};

export default ToDoList;