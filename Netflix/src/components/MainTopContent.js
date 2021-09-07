import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ReactPlayer from 'react-player';
import {CaretRightOutlined ,InfoCircleOutlined} from '@ant-design/icons';

const MainTopWrapper = styled.div`
    width: 100%;
    height: 100%;
    z-index: 0;
`;

const TrailerWrapper = styled.div`
    position: absolute;
    width: auto;
    height: auto;
    left: 0;
    top: 0;
    right: 0;
    background-color: black;
    
`;

const MainTopLeft = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 50%;
    z-index: 2;
    top: 10%;
    left: 3%;
    color: white;
`;

const LogoWrapper = styled.div`
    width: ${props=> props.change === true ? "54%" : "90%"};
    margin-top: ${props=> props.change === true ? "30%" : "15%"};

    transition: width, margin-top 2s;
    transition-property: width, margin-top;
    transition-duration: 2s;
    transition-timing-function: ease;
    transition-delay: 0s;
`;

const MainContentLogo = styled.img`
    width: 100%;
`;

const MainContentDesc = styled.div`
    width: auto;
    display: ${props=> props.change === true ? "none" : "block"};

    transition: display 2s;
    transition-property: display;
    transition-duration: 2s;
    transition-timing-function: ease;
    transition-delay: 0s;

    font-size: 1.4vw;
    text-shadow: 2px 2px 4px rgb(0 0 0 / 45%);

    margin-top: 20px;
`;

const ButtonWrapper = styled.div`
    width: 70%;
    display: flex;
    position: relative;
    margin-top: 25px;
`;

const MainButton = styled.button`
    font-size: 1.5rem;
    font-weight: 600;
    padding: 1% 5% 1% 5%;
    border-radius: 5px;
    border: 0;
    outline: 0;
    cursor: pointer;
    display: flex;
    text-align: center;
    align-items: center;

    margin-right: 15px;
`;

const MainTopRight = styled.div`
    position: absolute;
    right: 0;
    display: flex;
    z-index: 2;
    top: 500px;
    color: white;
`;


// 기묘한 이야기 트레일러
// https://api.themoviedb.org/3/tv/66732/videos?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR
const MainTopContent = () => {
    const [muted, setMuted] = useState(false);
    const [change, setChange] = useState(false);

    const onClickMute = () => {
        setMuted(!muted);
    };

    setTimeout(()=>{
        setChange(true);
    },2000);

    return(
        <MainTopWrapper>
            <TrailerWrapper>
                <ReactPlayer 
                    url={"/test.mp4"}
                    playing={true}
                    controls={false}
                    width="100%"
                    height="100%"
                    muted={muted}
                />
            </TrailerWrapper>
            <MainTopLeft>
                <LogoWrapper change={change} ><MainContentLogo alt="기묘한이야기" src="/images/strangelogo.png"/></LogoWrapper>
                <MainContentDesc change={change}>
                    <span>사랑이 싹트는 계절, 새로 문을 여는 쇼핑몰.<br></br>
                            생기 넘치는 1985년 호킨스.<br></br>
                            하지만 광란의 쥐 떼가 질주하면서 어둠이 입을 벌린다.<br></br>
                            이번 여름, 모든 것이 기묘해진다.</span>
                </MainContentDesc>
                <ButtonWrapper>
                    <MainButton>
                        <CaretRightOutlined style={{fontSize:"2.5rem"}} /> 
                        <div>재생</div>
                    </MainButton>
                    <MainButton style={{color:"white", backgroundColor:"rgba(109,109,110,0.7)"}}>
                        <InfoCircleOutlined style={{fontSize:"1.7rem"}} /> 
                        <div style={{marginLeft:"10px"}}>상세정보</div>
                    </MainButton>
                </ButtonWrapper>
            </MainTopLeft>
            <MainTopRight>
                <button onClick={onClickMute}>뮤트버튼</button>
            </MainTopRight>
        </MainTopWrapper>
    );  
};

export default MainTopContent;