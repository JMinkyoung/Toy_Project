import React,{useEffect, useState}from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import MainTopContent from '../components/MainTopContent';
import TvContentSlider from '../components/TvContentSlider';
import MovieContentSlider from '../components/MovieContentSlider';
import TVContentModal from '../components/TVContentModal';
import MovieContentModal from '../components/MovieContentModal';

import Head from 'next/head';

const SliderWrapper = styled.div`
    position: relative;
    margin-top: 780px;
`;

const browse = () => {
    const [isModalOpend, setModalOpend] = useState(false);
    const [mediaType, setMediaType] = useState("tv");
    const [contendId, setContentId] = useState(66732);

    useEffect(()=>{
        isModalOpend ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset";
    },[isModalOpend]);

    return (
        <>
        <Head>
            <title>홈 - 넷플릭스</title>
        </Head>
        {/* 헤더에 현재 선택된거 전달해줘야함 */}
        <MainHeader/>
        <MainTopContent setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId}/>
        <SliderWrapper>
            <TvContentSlider setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId} title={"지금 뜨는 콘텐츠"}/>
            <MovieContentSlider setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId} title={"지금 뜨는 영화"}/>
        </SliderWrapper>

        {mediaType === "tv" ? <TVContentModal isOpen={isModalOpend} setModalOpend={setModalOpend} contentId={contendId} mediaType={mediaType}/> : null}
        {mediaType === "movie" ? <MovieContentModal isOpen={isModalOpend} setModalOpend={setModalOpend} contentId={contendId} mediaType={mediaType}/> : null}
        </>
    );
};


export default browse;