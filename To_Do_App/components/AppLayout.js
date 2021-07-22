import React from 'react';
import { AppLayoutWrapper } from '../styles';

const AppLayout = ({children}) => {
    return (
        <AppLayoutWrapper>
            {children}
        </AppLayoutWrapper>
    );
};

export default AppLayout;