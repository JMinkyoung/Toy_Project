import React from 'react';
import {useSelector} from 'react-redux';
import { HeadWrapper, TextWrapper, ProgressWrapper } from '../styles';


const ToDoHead = () => {
    const todos = useSelector((state)=>state.todoReducer.todos);
    const rest = todos.filter((v)=>!v.done).length;
    const done = todos.filter((v)=>v.done).length;
    const total = todos.length;

    return(
        <HeadWrapper>
            <TextWrapper>남은 할일은 {rest} 개 입니다.</TextWrapper>
            <ProgressWrapper strokeColor="green" type="circle" percent={Math.floor(done/total*100)} width={60} />  
        </HeadWrapper>
    );
};

export default ToDoHead;