import React, {useState} from 'react';
import styled from 'styled-components';

const SliderElementWrapper = styled.div`
    padding-right: 3px;
    visibility: ${props => props.id === 0 && !props.started ? "hidden" : "visible"};
    transform: ${props => props.hovered ? "scale(1.5,2)": null };
    transition: all .5s ease .2s;
`;

const SliderElement = ({id, started, data}) => {
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

    return (
        <SliderElementWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id={id} started={started} hovered={hovered}>         
            <img id={id} style={{width:"296px", height:"166px", borderRadius:"4px"}} src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}/>
        </SliderElementWrapper>
    );
};

export default SliderElement;