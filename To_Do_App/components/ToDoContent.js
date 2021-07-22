import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Rate } from 'antd';
import { deleteTodo, toggleTodo } from '../reducers/todo';
import { ToDoWrapper,  DeleteButton } from '../styles';
import styled from 'styled-components';
import  { CheckCircleOutlined } from '@ant-design/icons';


const DoneButton = styled(CheckCircleOutlined)`
    font-size: 30px;
    cursor: pointer;
    margin-top: 2px;
    color : ${props => props.done === "true" ? '#49BD4D' : 'black'};
    :hover{
        color:#49BD4D;
    }
`
const TextWrapper = styled.p`
    font-size: 18px;
    margin-left: 20px;
    margin-right: 50px;
    margin-top: 2px;
    text-decoration: ${props => props.done === "true" ? 'line-through' : 'none'};
`;

const ToDoContent = ({id, text, rate, done}) => {
    
    const dispatch = useDispatch();
    const onClickDoneButton = useCallback(()=>{
        dispatch(toggleTodo({
            id
        }));
    });

    const onClickDeleteButton = useCallback(()=>{
        dispatch(deleteTodo({
            id
        }));
    });

    return (
        <ToDoWrapper>
            <DoneButton done={done.toString()} onClick={onClickDoneButton} />
            <TextWrapper done={done.toString()}>{text}</TextWrapper>
            <Rate disabled value={rate} />
            <DeleteButton onClick={onClickDeleteButton} />
        </ToDoWrapper>
    );
};

export default ToDoContent;