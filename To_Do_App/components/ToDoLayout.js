import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.div`
    background-color: #F2F2F2;
    height: 600px;
    width: 500px;
    border-radius: 16px;
    margin-left: 50px;
    margin-top: 10px;
`;
const ToDoLayout = ({children}) => {
    return(
        <Wrapper>
            {children}
        </Wrapper>
    );
};

export default ToDoLayout;