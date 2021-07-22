// 모든 페이지에서 공통적인 부분을 처리하는 파일

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';

const App = ({Component})=>{

    return(
    <>
        <Head>
            <meta charSet="utf-8" />
            <title>To Do List</title>
        </Head>
        <Component />
    </>
    );
};

App.propTypes = {
    Component:PropTypes.elementType.isRequired,
}
export default App;