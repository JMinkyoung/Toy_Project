import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import MainSlider from '../components/MainSlider';

const MainTitle = styled.h1`
    font-size: 50px;
    margin: 0 auto;
`;

const MainSection = styled.div`
    margin: 0 auto;
    width: 400px;
    margin-top: 30px;
`;

const ButtonSection = styled.div`
    margin: 0 auto;
    width: 300px;
    
`;

const MainButton = styled.button`
    width: 100px;
    height: 50px;
    background-color:white;
    font-size: 25px;
    margin-left: 30px;
    margin-top: 40px;
    border-radius: 20px;
    cursor: pointer;
    :hover,:focus {
    box-shadow: 0 0.5em 0.5em -0.4em var(--hover);
    transform: translateY(-0.25em);
    }
`;

const Index = () => {
    const router = useRouter();

    return(
    <>
    <MainSection>
        <MainTitle>🎨오늘의 그림 일기📝</MainTitle>
        <p style={{fontSize:"30px"}}>직접 그린 그림과 함께 오늘을 기록하자!</p>
    </MainSection>
    <MainSlider />
    <ButtonSection>
        <MainButton onClick={()=>router.push('/NewDiary')}>일기 작성</MainButton>
        <MainButton onClick={()=>router.push('/DiaryList')}>일기 보기</MainButton>
    </ButtonSection>
    </>
    );
};

export default Index;