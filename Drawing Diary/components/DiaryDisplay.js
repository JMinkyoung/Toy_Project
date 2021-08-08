import React, { useEffect } from 'react'
import styled from 'styled-components';

const ContentWrapper = styled.div`
    flex-direction: column;
    position: relative;
    justify-content: center;

    height: 850px;
    width: 700px;
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 76px;

    background-image: url('/images/background.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const HeadContent = styled.div`
    display: inline-block;
    width:645px;
    height: 86px;
    position: relative;
    margin-top: 31px;
    margin-left: 31px;
`;

const DateContent = styled.div`
    margin-top: 22px;
    margin-left: 12px;
    position: relative;
    display: flex;
    float:left;
    height: 86px;
    font-size: 25px;
`;

const TitleContent = styled.textarea`
    position: relative;
    display: flex;
    float:left;
    margin-top: 5px;
    margin-left: 42px;
    height: 73px;
    width: 230px;
    font-size: 45px;
    border: none;
    border-radius: 5px;
    text-align: center;
    resize:none;
    background-color: white;
    color: black;

    :focus{
        outline: none;
    }
`;

const EmotionContent = styled.div`
    margin-top: 16px;
    margin-left: 19px;
    position: relative;
    display: flex;
    float:left;
`;

const CanvasContent = styled.img`
    position: relative;
    display: flex;
    margin-left:34px; 
    margin-top:39px;
    width: 630px;
    height: 360px;
    background-image: url();
`;

const TextContent = styled.textarea`
    position: relative;
    width: 600px;
    height: 250px;
    font-size: 40px;
    margin-top: 41px;
    margin-left: 50px;
    color: black;

    background-color: white;
    border: none;
    resize: none;

    :focus{
        outline: none;
    }
`;

const DiaryDisplay = ({data}) => {
    return (
        <ContentWrapper>
            <HeadContent>
                <DateContent>{data.date}</DateContent>
                <TitleContent defaultValue={data.title} readonly disabled/>
                <EmotionContent>
                    {data.emotion === "good" && <img src="/images/good.png"/>}
                    {data.emotion === "soso" && <img src="/images/soso.png"/>}
                    {data.emotion === "bad" && <img src="/images/bad.png"/>}
                </EmotionContent>
            </HeadContent>
            <CanvasContent id="myDraw" src={data.imgurl}/>
            <TextContent defaultValue={data.text} readonly disabled/>
        </ContentWrapper>
    );
};

export default DiaryDisplay;