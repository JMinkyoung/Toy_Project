import React from 'react';
import styled from 'styled-components';
const AppLayoutWrapper = styled.div`

    width: 600px;
    height: 800px;

    position: relative;
    background :#cee5d5;
    border-radius: 16px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.04);

    margin: 0 auto;

    margin-top: 96px;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 500px) {
        // 모바일 설정 아직 안함
        background-color: red;
    }

`;
const AppLayout = ({children}) => {
    return (
        <AppLayoutWrapper>
            {children}
        </AppLayoutWrapper>
    );
};

export default AppLayout;