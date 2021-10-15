import React,{useEffect, useState}from 'react';
import styled from 'styled-components';
import MainHeader from '../components/MainHeader';
import Head from 'next/head';

import RankContentSlider from '../components/RankContentSlider';
import TVContentModal from '../components/TVContentModal';
import MovieContentModal from '../components/MovieContentModal';

const SliderWrapper = styled.div`
    position: relative;
    margin-top: 100px;
`;

const latest = () => {
    const [isModalOpend, setModalOpend] = useState(false);
    const [mediaType, setMediaType] = useState("tv");
    const [contendId, setContentId] = useState(66732);

    useEffect(()=>{
        isModalOpend ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset";
    },[isModalOpend]);

    return (
        <>
            <Head>
                <title>넷플릭스</title>
            </Head>
            <MainHeader/>
            <SliderWrapper>
                <RankContentSlider setMediaType={setMediaType} setModalOpend={setModalOpend} setContentId={setContentId} title={"오늘 한국의 TOP 10 콘텐츠"} />
            </SliderWrapper>

            {mediaType === "tv" ? <TVContentModal isOpen={isModalOpend} setModalOpend={setModalOpend} contentId={contendId} mediaType={mediaType}/> : null}
        {mediaType === "movie" ? <MovieContentModal isOpen={isModalOpend} setModalOpend={setModalOpend} contentId={contendId} mediaType={mediaType}/> : null}
        </>
    );
};

export default latest;