import React,{useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTvInfoAction, getTvVideoAction } from '../reducers/tvInfo';
import ReactPlayer from 'react-player';

const ModalWrapper = styled.div`

    margin: 0 auto;    
    transform-origin: 50% 12.5%;
    width: 938.5px;
    height: 100%;
    opacity: 1;
    margin-bottom: 2em;
    transform: none;
    min-width: 850px;
    z-index: 2;
`;

const ModalContent = styled.div`
    flex-direction: column;
    position: relative;
    width: 100%;
    justify-content: center;
    margin: 0 auto;
    margin-top: 40px;
    background-color: #181818;
    overflow: scroll;
    height: 100%;

    ::-webkit-scrollbar {
    display: none; 
    }
`;

const BackWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgb(0, 0, 0, 0.5);
    z-index: 500;

`;

const ModalVideoWrapper = styled.div`
    position: relative;
    top: 0;
    height: 500px;
    width: 100%;
    background: linear-gradient(to top,#181818,transparent 50%);
`;

const ModalInfoWrapper = styled.div`
    position: relative;
    padding: 0 3em;
    color: #fff;
`;

const ContentModal = ({isOpen, contentId, setModalOpend}) => {
    const dispatch = useDispatch();
    const closeModal = () => {
        setModalOpend(false);
    };

    useEffect(()=>{
        dispatch(getTvInfoAction(contentId));
        dispatch(getTvVideoAction(contentId));
    },[]);

    const infos = useSelector((state)=>state.tvInfo.infos);
    const videos = useSelector((state)=>state.tvInfo.videos);

    return (
        <>
        {isOpen ? 
        
        (<BackWrapper onClick={closeModal}>
            <ModalWrapper onClick={e=>e.stopPropagation()}>
                <ModalContent>
                <ModalVideoWrapper>
                    <ReactPlayer 
                        url={`https://www.youtube.com/watch?v=${videos.results[1].key}`}
                        playing={true}
                        controls={false}
                        width="100%"
                        height="100%"
                    />
                </ModalVideoWrapper>
                <ModalInfoWrapper>
                    
                </ModalInfoWrapper>
                </ModalContent>
            </ModalWrapper>
        </BackWrapper>
        )
        : null}
        </>
    );
};

export default ContentModal;