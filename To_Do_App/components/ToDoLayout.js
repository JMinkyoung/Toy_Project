import React from 'react';
import { ToDoLayoutWrapper } from '../styles';

const ToDoLayout = ({children}) => {
    return(
        <ToDoLayoutWrapper>
            {children}
        </ToDoLayoutWrapper>
    );
};

export default ToDoLayout;