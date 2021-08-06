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
    margin-left: 8px;
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
    margin-left: 50px;
    height: 73px;
    width: 230px;
    font-size: 44px;
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

const CanvasContent = styled.img`
    position: relative;
    display: flex;
    margin-left:34px; 
    margin-top:45px;
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
            </HeadContent>
            <CanvasContent id="myDraw" src={data.imgurl}/>
            <TextContent defaultValue={data.text} readonly disabled/>
        </ContentWrapper>
    );
};

export default DiaryDisplay;