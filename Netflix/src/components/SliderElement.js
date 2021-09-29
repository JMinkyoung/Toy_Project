import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { DownCircleOutlined } from '@ant-design/icons';

const SliderElementWrapper = styled.div`
    margin-right: 3px;
    visibility: ${props => props.id === 0 && !props.started ? "hidden" : "visible"};
    transform: ${props => props.hovered ? "scale(1.2,1.7)": null };
    transition: all .5s ease .2s;
    background-color: rgb(20, 20, 20);
    border-radius: 4px;
`;


const HoverContentWrapper = styled.div`
    width: ${props => props.hovered ? "330px" :"296px"};
    height: ${props => props.hovered ? "130px" :"166px"};
    background-color: rgb(20, 20, 20);
    transition: all .5s ease .2s;
`;

const SliderElementImg = styled.img`
    transition: all .5s ease .2s;
    width: 100%;
    height: 100%;
    border-radius: 4px;
`;

const HoverInfoWrapper = styled.div`
    transition: all .5s ease .2s;
    display: ${props => props.hovered ? "flex" : "none"};
    background-color: rgb(20, 20, 20);
    font-size: 0.9vw;
    border-radius: 4px;

`;

const HoverInfoButton = styled(DownCircleOutlined)`
    position: absolute;
    right: 5%;
`;

const SliderElement = ({setContentId, setModalOpend, id, started, data}) => {

    const [delayHandler, setDelayHandler] = useState(null);
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = e => {
        setDelayHandler(setTimeout(()=>{
            setHovered(true);
        },800));
    };

    const handleMouseLeave = () => {
        clearTimeout(delayHandler);
        setHovered(false);
    }

    
    const modalOpen = () => {
        setModalOpend(true);
        setContentId(data.id);
    };


    return (
        <>
        <SliderElementWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id={id} started={started} hovered={hovered}>         
            <HoverContentWrapper hovered={hovered}>
                <SliderElementImg hovered={hovered} id={id} src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}/>
                <HoverInfoWrapper style={{color:"white"}} hovered={hovered}>
                    <div>{data.name}</div>
                    <HoverInfoButton onClick={modalOpen}/>
                </HoverInfoWrapper>
            </HoverContentWrapper>
        </SliderElementWrapper>
        </>
    );
};

export default SliderElement;