import React,{useState,useEffect, useCallback} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getTvCreditsAction, getTvInfoAction, getTvKeywordsAction, getTvSimilarAction, getTvVideoAction } from '../reducers/tvInfo';
import ReactPlayer from 'react-player';
import { CloseCircleOutlined, SoundOutlined, CaretRightOutlined } from '@ant-design/icons';
import SimilarTV from './SimilarTV';


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
    z-index: 4;
`;

const BackgroundImage = styled.img`
    position: absolute;
    top:0;
    width: 100%;
    height: auto;
    display: ${props=> props.ended === true ? "block" : "none"};
`;

const ModalContentContainer = styled.div`
    display: block;
    padding: 0 3em;
`;

const ModalInfoWrapper = styled.div`
    position: relative;
    background-color: #181818;
    color: #fff;
    font-size: 16px;
    line-height: 1.4;
    width: 100%;
    height: 250px;
    margin-top: 10px;
`;

const ModalInfoDetail = styled.div`
    display: block;
    width: 100%;
    height: auto;
`;

const ModalTopWrapper = styled.div`
    position: relative;
    background-color: #18181818;
`;

const ModalCloseButton = styled(CloseCircleOutlined)`
    position: absolute;
    z-index: 5;
    right: 3%;
    top: 2%;
    color: #f2f2f2;
    font-size: 1.5rem;
    cursor: pointer;

`;

const MuteButton = styled.button`
    position: absolute;
    background-color: transparent;
    border: 1px solid rgba(255, 255, 255, 0.7);
    color: white;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    padding: 0.6rem;
    right: 6%;
    top:83%;
    cursor: pointer;
    z-index: 5;

    :hover{
        background-color: rgba(109,109,110,0.7);
    }
`;

const PlayButton = styled.button`
    position: absolute;
    display: flex;

    min-height: 32px;
    max-height: 42px;

    padding: 1.8rem;
    padding-right: 2.5rem;

    font-size: 1.5em;
    font-weight: 600;
    border-radius: 4px;
    border: 0;
    outline: 0;
    cursor: pointer;
    text-align: center;
    align-items: center;
    z-index: 5;

    left: 5%;
    bottom: 10%;

    :hover{
        background-color: grey;
    }
`;

const ModalInfoLeft = styled.div`
    position: absolute;
    width: 57%;
    line-height: 27px;
    font-size: 18px;
    margin-block-start: 3em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const ModalInfoRight = styled.div`
    position: absolute;
    width: 30%;
    right: 0;
    margin-block-start: 3em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`;

const TagWrapper = styled.div`
    font-size: 14px;
    line-height: 20px;
    margin: .5em;
`;

const ModalSimilarWrapper = styled.div`
    position: relative;
    background-color: #181818;
    color: #fff;
    font-size: 16px;
    line-height: 1.4;
    width: 100%;
    margin-top: 10px;
    display: grid;
    grid-gap: 1em;
    justify-items: stretch;
    align-items: stretch;
    grid-template-columns: repeat(3,1fr);

`;

const ModalHeader = styled.h3`  
    color: white;
    font-weight: 700;
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 20px;
`;



const TVContentModal = ({isOpen, contentId, setModalOpend}) => {
    const dispatch = useDispatch();
    const [muted, setMuted] = useState(true);
    const [ended, setEnded] = useState(false);

    const closeModal = useCallback(()=>{
        setModalOpend(false);
    },[]);

    const onClickMute = ()=>{
        setMuted(!muted);
    };

    const videoEnded = () => {
        setEnded(true);
    };

    useEffect(()=>{
        dispatch(getTvInfoAction(contentId));
        dispatch(getTvVideoAction(contentId));
        dispatch(getTvCreditsAction(contentId));
        dispatch(getTvKeywordsAction(contentId));
        dispatch(getTvSimilarAction(contentId));
    },[]);

    const infos = useSelector((state)=>state.tvInfo.infos);
    const videos = useSelector((state)=>state.tvInfo.videos);
    const credits = useSelector((state)=>state.tvInfo.credits);
    const keywords = useSelector((state)=>state.tvInfo.keywords);
    const TVsimilars = useSelector((state)=>state.tvInfo.similars)
    // TVsimilars.filter((v)=> v.backdrop_path !== null && v.overview !== "");
    return (
        <>
        {isOpen ? 
        
        (<BackWrapper onClick={closeModal}>
            <ModalWrapper onClick={e=>e.stopPropagation()}>
                <ModalContent>
                    <ModalTopWrapper>
                    <ModalCloseButton onClick={closeModal}/>
                        <ModalVideoWrapper>
                            <ReactPlayer 
                                url={contentId === 66732 ? `https://www.youtube.com/watch?v=${videos.results[1].key}` : `https://www.youtube.com/watch?v=${videos.results[0].key}`}
                                playing={true}
                                controls={false}
                                width="100%"
                                height="100%"
                                muted={muted}
                                onEnded={(()=> videoEnded())}
                            />
                        <BackgroundImage ended={ended} src={`https://image.tmdb.org/t/p/original${infos.backdrop_path}`}/>
                        </ModalVideoWrapper>
                            <MuteButton onClick={onClickMute}><SoundOutlined style={{fontSize:"1.3rem"}}/></MuteButton>                    
                            <PlayButton >
                                <CaretRightOutlined style={{fontSize:"2.5rem"}} /> 
                                <div>재생</div>
                            </PlayButton>
                        </ModalTopWrapper>
                    <ModalContentContainer>
                        <ModalInfoWrapper>
                            <ModalInfoDetail>
                                <ModalInfoLeft>
                                    <div style={{marginBottom:"10px"}}>평점 : {infos.vote_average}</div>
                                    <div style={{marginBottom:"10px"}}>{infos.overview}</div>
                                </ModalInfoLeft>
                                <ModalInfoRight>
                                    <TagWrapper>
                                        <span style={{color:"#777"}}>출연: </span>
                                        <span>{credits.cast[0].name}, </span><span>{credits.cast[1].name}, </span><span>{credits.cast[2].name}</span>
                                    </TagWrapper>
                                    <TagWrapper>
                                        <span style={{color:"#777"}}>장르: </span>
                                        <span>{infos.genres[0].name}, </span><span>{infos.genres[1].name}, </span><span>{infos.genres[2].name}</span>
                                    </TagWrapper>
                                    <TagWrapper>
                                        <span style={{color:"#777"}}>프로그램 특징: </span>
                                        <span>{keywords.results[0].name}, </span><span>{keywords.results[1].name}, </span><span>{keywords.results[2].name}</span>
                                    </TagWrapper>
                                </ModalInfoRight>
                            </ModalInfoDetail>
                        </ModalInfoWrapper>
                        
                        <ModalHeader>비슷한 콘텐츠</ModalHeader>
                        <ModalSimilarWrapper>
                            {TVsimilars.results.map((v)=>{
                                if(v.backdrop_path !== null && v.overview !== "") return <SimilarTV key={v.id} data={v}/>
                            })}
                        </ModalSimilarWrapper>
                    </ModalContentContainer>
                </ModalContent>
            </ModalWrapper>
        </BackWrapper>
        )
        : null}
        </>
    );
};


export default TVContentModal;