import React from 'react';
import { useSelector } from 'react-redux';
import { Rate } from 'antd';
import { CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons';
import styled from 'styled-components';

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


const ToDoContent = () => {
    const todos = useSelector((state)=>state.todoReducer.todos);

    const text = todos[0].text;
    const rate = todos[0].rate;
    const done = todos[0].done;

    return (
        <ToDoWrapper>
            <DoneButton />
            <TextWrapper>{text}</TextWrapper>
            <Rate disabled value={rate} />
            <DeleteButton />
        </ToDoWrapper>
    );
};

export default ToDoContent;