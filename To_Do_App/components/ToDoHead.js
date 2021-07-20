import React from 'react';
import styled from 'styled-components';
import {useSelector} from 'react-redux';
import { Progress } from 'antd';

const Wrapper = styled.div`
    display: flex;
    position: relative;
    margin-left: 50px;
    margin-top: 20px;
`;

const TextWrapper = styled.p`
    margin-left: 60px;
    padding-top: 15px;
    font-size: large;
    font-weight: 500;
    color: #4c6446;

`
const ProgressWrapper = styled(Progress)`
    margin-left: 80px;
`;

const ToDoHead = () => {
    const todos = useSelector((state)=>state.todoReducer.todos);
    const rest = todos.filter((v)=>!v.done).length;
    const done = todos.filter((v)=>v.done).length;
    const total = todos.length;

    return(
        <Wrapper>
            <TextWrapper>남은 할일은 {rest} 개 입니다.</TextWrapper>
            <ProgressWrapper strokeColor="green" type="circle" percent={Math.floor(done/total*100)} width={60} />  
        </Wrapper>
    );
};

export default ToDoHead;