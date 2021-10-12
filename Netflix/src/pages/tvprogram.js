import React,{useEffect, useState}from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import Head from 'next/head';


const tvprogram = () => {
    return (
        <>
            <Head>
                <title>TV 프로그램 - 넷플릭스</title>
            </Head>
            <MainHeader/>
        </>
    );
};

export default tvprogram;