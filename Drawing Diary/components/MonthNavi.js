import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import { NaviWrapper, NaviLayer, NaviCloseButton, FilterWrapper ,MonthList, HamburgerButton, HomeButton, PlusButton } from '../styles';

const MonthNavi = (props) => {
    const [isOpend, setIsOpend] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const months = ["1","2","3","4","5","6","7","8","9","10","11","12"];

    const router = useRouter();
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
                <PlusButton onClick={()=>router.push('/NewDiary')} />
            </NaviWrapper>
            
            <NaviLayer open={isOpend}>
                <NaviCloseButton onClick={naviClose} />
                <li style={{color: "#29592F", listStyle:"none", marginLeft:"30px", marginTop:"35%", fontSize:"20px"}}>
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