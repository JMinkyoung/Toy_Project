import React from 'react';
import { useRouter } from 'next/router';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';


const SliderLayout = styled.div`
    width: 450px;
    height: 550px;
    margin: 0 auto;
    margin-top: 50px;
`;

const SliderImage = styled.img`
    width: 100%;
    height: 100%;
`;

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
    const settings = {
        infinite: true,
        speed: 450,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return(
    <>
    <MainSection>
        <MainTitle>🎨오늘의 그림 일기📝</MainTitle>
        <p style={{fontSize:"30px"}}>직접 그린 그림과 함께 오늘을 기록하자!</p>
    </MainSection>
        <SliderLayout>
            <Slider {...settings}>
                <div>
                    <SliderImage src={'/images/1.png'}/>
                </div>
                <div>
                    <SliderImage src={'/images/2.png'}/>
                </div>
                <div>
                    <SliderImage src={'/images/4.png'}/>
                </div>
            </Slider>
      </SliderLayout>
    <ButtonSection>
        <MainButton onClick={()=>router.push('/NewDiary')}>일기 작성</MainButton>
        <MainButton onClick={()=>router.push('/DiaryList')}>일기 보기</MainButton>
    </ButtonSection>
    </>
    );
};

export default Index;