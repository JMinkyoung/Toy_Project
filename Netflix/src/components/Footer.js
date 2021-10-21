import React from 'react';
import styled from 'styled-components';
import { FacebookFilled, InstagramFilled, TwitterOutlined, YoutubeFilled } from '@ant-design/icons';

const FooterWrapper = styled.div`
    max-width: 980px;
    margin: 50px auto 0;
    padding: 0 4%;
    color: grey;
`;

const FotterSocial = styled.div`
    display: flex;
    margin-bottom: 1em;
`;

const SocialLink = styled.a`
    margin-right:15px;
    font-size: 30px;
    text-decoration: none;
    cursor: pointer;
    color: grey;
`;

const FooterLinkWrapper = styled.ul`
    font-size: 13px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-start;
    margin: 0 0 14px 0;
    padding: 0;
`;

const LinkElement = styled.li`
    flex-basis: 25%;
    margin-bottom: 10px;
`;

const FooterCopyRight = styled.div`
    font-size: 11px;
    margin-bottom: 15px;
`;


const Footer = () => {
    return (
        <FooterWrapper>
            <FotterSocial>
                <SocialLink href='https://www.facebook.com/NetflixKR' target="_blank"><FacebookFilled /></SocialLink>
                <SocialLink href='https://www.instagram.com/netflixkr/' target="_blank"><InstagramFilled /></SocialLink>
                <SocialLink href='https://twitter.com/netflixkr/' target="_blank"><TwitterOutlined /></SocialLink>
                <SocialLink href='https://www.youtube.com/channel/UCiEEF51uRAeZeCo8CJFhGWw/featured' target="_blank"><YoutubeFilled /></SocialLink>
            </FotterSocial>
            <FooterLinkWrapper>
                <LinkElement>자막 및 음성</LinkElement>
                <LinkElement>음성 지원</LinkElement>
                <LinkElement>고객 센터</LinkElement>
                <LinkElement>기프트 카드</LinkElement>
                <LinkElement>미디어 센터</LinkElement>
                <LinkElement>투자 정보(IR)</LinkElement>
                <LinkElement>입사 정보</LinkElement>
                <LinkElement>이용 약관</LinkElement>
                <LinkElement>개인정보</LinkElement>
                <LinkElement>법적 고지</LinkElement>
                <LinkElement>쿠키 설정</LinkElement>
                <LinkElement>회사 정보</LinkElement>
                <LinkElement>문의하기</LinkElement>

            </FooterLinkWrapper>
            <FooterCopyRight>
                넷플릭스서비시스코리아 유한회사 통신판매업신고번호: 제2018-서울종로-0426호 전화번호: 080-001-9587<br/>
                대표: 레지널드 숀 톰프슨<br/>
                이메일 주소: korea@netflix.com<br/>
                주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층 우편번호 03161<br/>
                사업자등록번호: 165-87-00119<br/>
                클라우드 호스팅: Amazon Web Services inc.<br/>
                공정거래위원회 웹사이트
            </FooterCopyRight>
        </FooterWrapper>
    );
}

export default Footer;