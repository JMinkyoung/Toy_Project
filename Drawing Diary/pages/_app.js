// 모든 페이지에서 공통적인 부분을 처리하는 파일

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import factory from '../reducers/store';

const {store, persistor} = factory();

const App = ({Component})=>{

    return(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Head>
                <meta charSet="utf-8" />
                <title>오늘의 그림일기</title>
                <link
                rel="stylesheet"
                type="text/css"
                href="/styles/GlobalStyle.css"
            />
            </Head>
            <Component />
        </PersistGate>
    </Provider>
    );
};

App.propTypes = {
    Component:PropTypes.elementType.isRequired,
}
export default App;