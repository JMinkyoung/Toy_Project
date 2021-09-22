import React,{useEffect}from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import MainTopContent from '../components/MainTopContent';
import ContentSlider from '../components/ContentSlider';
import Head from 'next/head';

const SliderWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-top: 810px;
`;

const browse = () => {

    return (
        <>
        <Head>
            <title>홈 - 넷플릭스</title>
        </Head>
        {/* 헤더에 현재 선택된거 전달해줘야함 */}
        <MainHeader/>
        <MainTopContent/>
        <SliderWrapper>
            <ContentSlider title={"지금 뜨는 콘텐츠"} type={"PopularTV"}/>
            <ContentSlider title={"지금 뜨는 콘텐츠"} type={"PopularTV"}/>

        </SliderWrapper>
        </>
    );
};


export default browse;