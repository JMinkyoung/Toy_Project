import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Rate } from 'antd';
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { deleteTodo, toggleTodo } from '../reducers/todo';

const ToDoWrapper = styled.div`
    position: relative;
    display: flex;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 15px;
`;

const DoneButton = styled(CheckCircleOutlined)`
    font-size: 30px;
    cursor: pointer;
    margin-top: 2px;
`
const TextWrapper = styled.p`
    font-size: 20px;
    margin-left: 20px;
    margin-right: 50px;
`;

const DeleteButton = styled(DeleteOutlined)`
    font-size: 30px;
    cursor: pointer;
    margin-top: 2px;
    margin-left: 20px;
    position: relative;
`

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
            <DoneButton onClick={onClickDoneButton} />
            <TextWrapper>{text}</TextWrapper>
            <Rate disabled value={rate} />
            <DeleteButton onClick={onClickDeleteButton} />
        </ToDoWrapper>
    );
};

export default ToDoContent;