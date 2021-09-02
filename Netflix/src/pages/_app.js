// 모든 페이지에서 공통적인 부분을 처리하는 파일

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {Provider} from 'react-redux';
import {store} from '../reducers/store';

// import wrapper from '../store/configureStore';

const App = ({Component})=>{

    return(
    <Provider store={store}>
        <Head>
            <meta charSet="utf-8" />
            <title>넷플릭스</title>
        </Head>
        <Component />
    </Provider>
    );
};

App.propTypes = {
    Component:PropTypes.elementType.isRequired,
}
export default App;