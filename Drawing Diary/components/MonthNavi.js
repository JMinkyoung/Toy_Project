import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

const NaviWrapper = styled.div`
    display: flex;
    margin-left: 10px;
    margin-top: 15px;
    cursor: pointer;
    transition: all 0.3s ease;  

    :hover{
        color: #cee5d5; 

    }
`;

const NaviLayer = styled.div`
    position: fixed;
    width: 200px;
    height: 100%;
    background-color: grey;
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

const MonthNavi = (props) => {
    const naviRef = useRef();

    const [isOpend, setIsOpend] = useState(false);
    const months = ["1","2","3","4","5","6","7","8","9","10","11","12"];
    const naviClick = () => {
        setIsOpend(!isOpend);
    };

    const naviClose = () => {
        setIsOpend(false);
    };

    const handleClickOutside = ({target}) => {
        console.log(target);
        if(isOpend && !naviRef.current.contains(target)) setIsOpend(false);
    };

    useEffect(()=>{
        window.addEventListener("click", handleClickOutside);
        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    },[]);

    useEffect(()=>{
        isOpend ? document.body.style.overflow = "hidden" : document.body.style.overflow = "unset";
    },[isOpend])
    return (
        <>
            <NaviWrapper onClick={naviClick}>
                <HamburgerButton />
                <span style={{marginLeft:"10px", fontSize:"20px", position:"relative"}}>필터</span>
            </NaviWrapper>
            <NaviLayer open={isOpend} ref={naviRef}>
                <NaviCloseButton onClick={naviClose} />
                <li>
                    2021년
                    {months.map((v)=>{
                        return <MonthList onClick={() => props.setMonth("0"+v)}>{v}월</MonthList>
                    })}
                </li>
            </NaviLayer>
        </>
    );
};

export default MonthNavi;