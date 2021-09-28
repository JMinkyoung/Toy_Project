import React,{useEffect, useState}from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import MainTopContent from '../components/MainTopContent';
import ContentSlider from '../components/ContentSlider';
import TVContentModal from '../components/TVContentModal';

import Head from 'next/head';

const SliderWrapper = styled.div`
    position: relative;
    margin-top: 780px;
`;

const browse = () => {
    const [isModalOpend, setModalOpend] = useState(false);
    const [contendId, setContentId] = useState(66732);

    useEffect(()=>{
        isModalOpend ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset";
    },[isModalOpend]);

    console.log(`browse에서 contendId: ${contendId}`);
    return (
        <>
        <Head>
            <title>홈 - 넷플릭스</title>
        </Head>
        {/* 헤더에 현재 선택된거 전달해줘야함 */}
        <MainHeader/>
        <MainTopContent/>
        <SliderWrapper>
            <ContentSlider setModalOpend={setModalOpend} setContentId={setContentId} title={"넷플릭스 인기 콘텐츠"} type={"PopularTV"}/>
            {/* <ContentSlider setContentId={setContentId} title={"지금 뜨는 콘텐츠"} type={"PopularMovie"}/> */}
        </SliderWrapper>

        <TVContentModal isOpen={isModalOpend} setModalOpend={setModalOpend} contentId={contendId}/>
        </>
    );
};


export default browse;