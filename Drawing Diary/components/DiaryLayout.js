import React from 'react';
import {DiaryWrapper} from '../styles';

const DiaryLayout = ({children}) => {
    return (
            <DiaryWrapper>
                {children}
            </DiaryWrapper>
    );
};

   
export default DiaryLayout;