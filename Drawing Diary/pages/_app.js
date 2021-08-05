// 모든 페이지에서 공통적인 부분을 처리하는 파일

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import rootReducer from '../reducers';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(rootReducer,composeWithDevTools());


const App = ({Component})=>{

    return(
    <Provider store={store}>
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
    </Provider>
    );
};

App.propTypes = {
    Component:PropTypes.elementType.isRequired,
}
export default App;