import React,{useState} from 'react';
import styled from 'styled-components';

const RankElementWrapper = styled.div`
    display: flex;
    width:300px; 
    height:220px;
    margin-right:5px;
    transform: ${props => props.hovered ? "scale(1.5,1.4)": null };
    transition: all .5s ease .2s;
    border-radius: 4px;
    cursor: pointer;
`;

const RankImage = styled.img`

`;

const RankPoster = styled.img`
`;

const RankElement = ({setContentId, setModalOpend, setMediaType, data}) => {

    const [delayHandler, setDelayHandler] = useState(null);
    const [hovered, setHovered] = useState(false);

    const handleMouseEnter = e => {
        setDelayHandler(setTimeout(()=>{
            setHovered(true);
        },500));
    };

    const handleMouseLeave = () => {
        clearTimeout(delayHandler);
        setHovered(false);
    }

    
    const modalOpen = () => {
        setModalOpend(true);
        setContentId(data.id);
        setMediaType(data.type);
    };

    return (
        <RankElementWrapper onClick={modalOpen}  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} hovered={hovered}>
            <RankImage src={`/images/rank/${data.rank}_1.png`}/>
            <RankPoster src={`/images/rank/${data.rank}.png`}/>
        </RankElementWrapper>
    );
};

export default RankElement;
