import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { MenuOutlined, CloseOutlined, HomeOutlined} from '@ant-design/icons';

const NaviWrapper = styled.div`
    display: flex;
    width: 100vw;
    height: 50px;
    cursor: pointer;
    position: fixed;
    background-color: white;
    z-index: 1000;
    top: 0;
    left: 0;
    
    ${({scroll}) => {
        return scroll > 90 ? `border-bottom: 1px solid #eee` : null ;
    }}
`;

const NaviLayer = styled.div`
    position: fixed;
    width: 200px;
    height: 100%;
    background-color: #8FBC94;
    z-index:1000;

    left:-100%; top: 0; bottom:0; right: 100%;
    transform-origin:50% 50%;
    transform:tr;
    transition:0.5s;
    
    ${({open}) => {
        return open ? `left:0; right:0;` : `left:-100%; right:100%;`;
    }}
`;

const NaviCloseButton = styled(CloseOutlined)`
    position: relative;
    margin-left: 20px;
    margin-top: 20px;
    font-size: 23px;

`;

const MonthList = styled.ul`
    cursor: pointer;
    font-size: 20px;
    /* color: #29592F; */
    color: #001D00;
    margin-left: 0px;
    :hover{
        color:#cee5d5;
    }
`;

const HamburgerButton = styled(MenuOutlined)`
    position: relative;
    margin-top: 5px;
    font-size: 20px;
    z-index: 99 ;
`;

const FilterWrapper = styled.div`
    display: flex;
    padding-top: 8px;
    padding-left: 10px;
    transition: all 0.3s ease;
    :hover{
        color: #8FBC94; 
    }
`;

const HomeButton = styled(HomeOutlined)`
    font-size: 30px;
    margin: 0 auto;
    padding-top: 9px;
    padding-right: 100px;
`;

const MonthNavi = (props) => {
    const [isOpend, setIsOpend] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const months = ["1","2","3","4","5","6","7","8","9","10","11","12"];

    const naviClick = () => {
        setIsOpend(!isOpend);
    };

    const naviClose = () => {
        setIsOpend(false);
    };

    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    };
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    useEffect(()=>{
        isOpend ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset";
    },[isOpend]);

    return (
        <> 
            <NaviWrapper scroll={scrollPosition}>
                <FilterWrapper onClick={naviClick}>
                    <HamburgerButton />
                    <span style={{marginLeft:"10px", fontSize:"20px", position:"relative"}}>필터</span>
                </FilterWrapper>
                <HomeButton onClick={() => window.location.assign(window.location.origin)}/>
            </NaviWrapper>
            
            <NaviLayer open={isOpend}>
                <NaviCloseButton onClick={naviClose} />
                <li style={{color: "#29592F", listStyle:"none", marginLeft:"30px", marginTop:"10px", fontSize:"20px"}}>
                    {months.map((v)=>{
                        return <MonthList onClick={() => {
                            props.setMonth("0"+v);
                            setIsOpend(false);
                        }}>{v}월</MonthList>
                    })}
                </li>
            </NaviLayer>
        </>
    );
};

export default MonthNavi;