import React from 'react';
import styled from 'styled-components';

const OurStoryCard = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 0 0;
    color: #fff;
    background-color: black;
    
`;

const OurStoryHeaderWrapper = styled.div`
    background-color: transparent;
    transition: background-color .5s;
    position: relative;
    max-width: 1920px;
    margin: 0 auto;
    padding-top: 20px;
    width: 100%;
    top: 0;
    border: 0;
    right: 0;
    left: 0;
    z-index: 10;
    @media only screen and (min-width: 550px) and (max-width: 949px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
        height: 45px;
    }
`;

const OurStoryHeader = styled.div`
    position: relative;
    display: flex;
    height: auto;
    padding-top: .5rem;
    align-items: flex-start;
    justify-content: flex-start;

    margin: 0 3.5rem;

    @media only screen and (min-width: 550px) and (max-width: 949px){
        margin: 0 45px;
    }
    @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
        margin: 0 5%;
    }

`;

const Mainlogo = styled.img`
    width: 180px;
    margin-right: auto;
    @media only screen and (min-width: 550px) and (max-width: 949px){
        width: 150px;
    }
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px), only screen and (min-width: 400px) and (max-width: 549px){
        width: 100px;
    }
`;

const LoginButton = styled.a`
    background-color: #e50914;
    color: #fff;
    border-radius: 3px;
    padding: 7px 17px;
    font-weight: 400;
    font-size: 1rem;

    @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px){
        font-size: .9rem;
        padding: .25rem, .5rem;
    }
    
`;

const OurStoryHero = styled.div`
    z-index: 0;
    position: relative;
    top: -50px;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    height: 80%;
    max-height: 850px;
    margin-top: 30px;
    border-bottom: 8px solid #222;
    display: flex;
    @media only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
        top: -100px;
    }
`;

const ConcordImgWrapper = styled.div`
    height: 100%;
    @media only screen and (min-width: 550px) and (max-width: 949px), only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px){
        max-width: 100%;
        height: auto;
    }
`;
const ConcordImg = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const ConcordImgGradient = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    border: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0, .4);
    background-image: linear-gradient(to top,rgba(0,0,0,.8) 0,rgba(0,0,0,0) 60%,rgba(0,0,0,.8) 100%);

`;
const OurStoryCardText = styled.div`
    position: relative;
    display: block;
    width: 100%;
    padding: 75px 0;
    max-width: 950px;
    margin: auto;
    text-align: center;
    z-index: 1;

    @media only screen and (min-width: 350px) and (max-width: 399px){
        width: 85%;
        padding: 75px 0;
    }

`;
const OurStoryHeroTitle = styled.h1`
    display: block;
    font-size: 1.75rem;
    line-height: 1.1;
    margin-bottom: .5rem;
    max-width: 640px;
    margin: 0 auto;
    line-height: normal;

    @media only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
        font-size: 4rem;
    }
    
`;

const OurStoryHeroSubTitle = styled.h2`
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: 400;
    margin: 1rem auto;
    margin-bottom: 0;
    font-size: 1.625rem;

    @media only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 350px) and (max-width: 399px), only screen and (max-width: 349px) {
        font-size: 1.125rem;
    }

`;

const EmailForm = styled.form`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
        max-width: 950px;
        padding-top: .85rem;
    }
`;

const EmailTitle = styled.h3`
    font-weight: 400;
    font-size: 18px;

    @media screen and (min-width: 740px) {
        font-size: 23px;
    }

    @media only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
        padding: 0 5%;
        max-width: none;
        font-size: 1.2rem;
    }
`;

const EmailWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        flex-direction: column;
    }
`;

const EmailInput = styled.input`
    width: 450px;
    height: 48px;

    font-size: 1em;

    :focus {
        outline: none;
    }
    @media screen and (min-width: 740px) {
        height: 60px;
    }

    @media only screen and (min-width: 550px) and (max-width: 949px)  {
        width: 400px;
        height: 45px;
    }

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px) {
        width: 300px;
        height: 40px;
    }
 
`;

const EmailButton = styled.button`
    background-color: #e50914;
    font-size: 1em;
    color: #fff;
    border: 0;
    outline: 0;
    border-radius: 2px;
    min-width: 74px;
    width: 200px;
    cursor: pointer;
    @media only screen and (min-width: 950px) and (max-width: 1449px) {
        font-size: 1.625rem;
        min-height: 60px;
    }
    
    @media only screen and (min-width: 1450px) {
        font-size: 1.875rem;
        min-height: 48px;
    }

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        font-size: 1em;
        width: 100px;
        height: 40px;
        margin: 0 auto;
        margin-top: 40px;
    }
`;

const OurStoryTv = styled.div`
    position: relative;
    z-index: 0;
    width: 100%;
    border-bottom: 8px solid #222;
    background-color: black;
`;

const TVwrapper = styled.div`   
    display: flex;
    flex-direction: row;
    z-index: 0;
    max-width: 1100px;
    margin: 0 auto;
    top: 0;
    margin-bottom: 50px;
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        flex-direction: column;
        text-align: center;
    }
`;

const TVContext = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100%;
    flex: 0 1 auto;
    /* padding: 0 3rem 0 0; */
    z-index: 3;

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        margin: 0 auto;
        width: 80%;
    }
`;

const TVrightWrapper = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    top: -10px;
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        margin: 0 auto;
        width: 80%;
    }
`;

const TVvideoWrapper = styled.div`
    position: relative;

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        /* width: ; */
    }
`;

const TVImg = styled.img`
    position: relative;
    z-index: 2;
    max-width: 100%;
    height: auto;
    border: 0;
`;

const TVVideo = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 5%;
    left: 7%;
`;

const CardTitle = styled.h1`
    line-height: normal;
    font-size: 3.125rem;
    margin-bottom: .5rem;

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        font-size: 1.625rem;
    }
`;

const CardSubTitle = styled.h2`
    font-size: 1.625rem;
    font-weight: 400;

    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        font-size: 1.125rem;
    }
`;

const OurStoryOffline = styled.div`
    position: relative;
    z-index: 0;
    width: 100%;
    border-bottom: 8px solid #222;
    background-color: black;
`;

const OfflineWrapper = styled.div`
    display: flex;
    flex-direction: row;
    z-index: 0;
    max-width: 1100px;
    margin: 0 auto;
    top: 0;
    margin-bottom: 50px;
    @media only screen and (min-width: 350px) and (max-width: 399px), only screen and (min-width: 400px) and (max-width: 549px), only screen and (min-width: 550px) and (max-width: 949px)  {
        flex-direction: column;
        text-align: center;
    }
`;

const OfflineLeft = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 50%;
    height: 100%;
`;

const OfflineRight = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    width: 45%;
    height: 100%;
    margin-top: 45px;
`;

const PhoneImg = styled.img`
    position: relative;
    z-index: 0;
    max-width: 90%;
`;

const OfflineDownload = styled.div`
    position: absolute;
    left: 45%;
    bottom: 6%;
    transform: translateX(-50%);
    margin: 0 auto;
    background: #000;
    display: flex;
    align-items: center;
    width: 60%;
    min-width: 15em;
    padding: .25em .65em;
    border: 2px solid rgba(255,255,255,.25);
    box-shadow: 0 0 2em 0 #000;
    border-radius: .75em;
    z-index: 3;
`;


const index = () => {
    return(
        <OurStoryCard>
            <OurStoryHeaderWrapper>
                <OurStoryHeader>
                    <Mainlogo src="/images/netflix-logo-png-2562.png"/>
                    <LoginButton>로그인</LoginButton>
                </OurStoryHeader>
            </OurStoryHeaderWrapper>
            <OurStoryHero>
                <ConcordImgWrapper>
                    <ConcordImg src="/images/small.jpg" srcSet="/images/small.jpg 1000w, /images/medium.jpg 1500w, /images/large.jpg 1800w"/>
                    <ConcordImgGradient/> 
                </ConcordImgWrapper>
                <OurStoryCardText>
                    <OurStoryHeroTitle>영화, TV 프로그램을 무제한으로.</OurStoryHeroTitle>
                    <OurStoryHeroSubTitle>다양한 디바이스에서 시청하세요. 언제든지 해지하실 수 있습니다.</OurStoryHeroSubTitle>
                    <EmailForm>
                        <EmailTitle>시청할 준비가 되셨나요? 멤버십을 등록하거나 재시작하려면 이메일 주소를 입력하세요.</EmailTitle>
                        <EmailWrapper>
                            <EmailInput placeholder="이메일 주소"></EmailInput>
                            <EmailButton>시작하기</EmailButton>
                        </EmailWrapper>
                    </EmailForm>
                </OurStoryCardText>
            </OurStoryHero>
            <OurStoryTv>
                <TVwrapper>
                    <TVContext>
                        <CardTitle>TV로 즐기세요.</CardTitle>
                        <CardSubTitle>스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.</CardSubTitle>
                    </TVContext>
                    <TVrightWrapper>
                        <TVvideoWrapper>
                            <TVImg src="/images/tv.png"/>
                            <TVVideo>
                                <video width="80%" autoplay="" playsinline="" muted="" loop="true">
                                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/>
                                </video>
                            </TVVideo>
                        </TVvideoWrapper>
                    </TVrightWrapper>
                </TVwrapper>
            </OurStoryTv>
            <OurStoryOffline>
                <OfflineWrapper>
                    <OfflineLeft>
                        <PhoneImg src="/images/mobile-0819.jpg"/>
                        <OfflineDownload>
                            <img style={{width:"20%"}}src="/images/boxshot.png"/>
                        </OfflineDownload>
                        
                    </OfflineLeft>
                    <OfflineRight>
                        <CardTitle>즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.</CardTitle>
                        <CardSubTitle>간편하게 저장하고 빈틈없이 즐겨보세요.</CardSubTitle>
                    </OfflineRight>
                </OfflineWrapper>
            </OurStoryOffline>
        </OurStoryCard>
    );
};

export default index;