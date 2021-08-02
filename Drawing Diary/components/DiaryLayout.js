import React from 'react';
import styled from 'styled-components';
const DiaryWrapper = styled.div`

    /* display: flex; */
    flex-direction: column;
    position: relative;
    justify-content: center;

    height: 850px;
    width: 700px;
    margin: 0 auto;

    background-image: url('/images/test.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

`

const DiaryLayout = ({children}) => {
    return (
        <DiaryWrapper>
            {children}
        </DiaryWrapper>
    );
};

   
export default DiaryLayout;