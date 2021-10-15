import React,{ useState, useEffect , useRef} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { GET_TV_TOPRATED_REQUEST, GET_TV_POPULAR_REQUEST, GET_TV_TRENDING_REQUEST } from '../reducers/tv';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import SliderElement from './SliderElement';

const PaginationWrapper = styled.div`
    position: absolute;
    right: 5%;
    bottom: 0;
    display: flex;
    visibility: hidden;
`;

const PaginationItem = styled.div`
    width: 10px;
    height: 2px;
    background-color: ${props => props.id === props.selected ? "white" : "grey"};
    margin-left: 1px;
`;

const SliderTitleMore = styled.div`
    display: none;
`;

const ContentSliderWrapper = styled.div`
    position: relative;
    height: 330px;
    overflow: hidden;
    :hover {
        ${PaginationWrapper}{
            visibility: visible;
        }

        ${SliderTitleMore}{
            display: block;
        }
    }
`;

const SliderTitleWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin: 2% 4% .5em 3%;
    display: flex;
    align-items: center;
`;

const SliderTitle = styled.a`
    color: white;
    font-size: 1.8em;
    font-weight: bolder;
`;



const SliderContentWrapper = styled.div`
    position: relative;
    height: auto;
    display:flex;
    text-align:center;
    margin-left: 2%;
    width: ${props => props.width}px;
    transform : translate3d(${props => props.test}%, 0px, 0px);
    transition: transform 1s;

`;

const LeftButton = styled(LeftOutlined)`
    color: white;
    font-size: 50px;
    visibility: hidden;
`;


const SliderLeftButton = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    height: 51%;
    top: 25%;
    left: 0;
    cursor: pointer;
    border-radius: 4px;
    :hover{
        background: rgba(20,20,20,.5);       
        ${LeftButton}{
            visibility: ${props => !props.started ? "hidden" : "visible"};
        }
    }
`;

const RightButton = styled(RightOutlined)`
    color: white;
    font-size: 50px;
    visibility: hidden;
    transition: transform .1s ease-out 0s;
`;

const SliderRightButton = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    height: 51%;
    top: 25%;
    right: 0;
    cursor: pointer;
    border-radius: 4px;
    :hover{
        background: rgba(20,20,20,.5);       
        ${RightButton}{
            visibility: visible;
        }
    }
`;

const TvContentSlider = ({type, setModalOpend ,setContentId, setMediaType, title}) => {
    const container = useRef();
    const [started, setStarted] = useState(false);
    const [position, setPosition] = useState(-15);
    const [idx, setIdx] = useState(1);

    const dispatch = useDispatch();

    useEffect(()=>{
        if(type === "trend"){
            dispatch({
                type:GET_TV_TRENDING_REQUEST,
            });
        }else if(type === "toprated"){
            dispatch({
                type:GET_TV_TOPRATED_REQUEST,
            });
        }else if(type === "popular"){
            dispatch({
                type:GET_TV_POPULAR_REQUEST,
            });
        }
    },[]);


    const onClickLeft = () => {
        if(((idx-1)+6)%6 === 0){    // 첫번째 슬라이드 일때
            setIdx(((idx-1)+6));
            setTimeout(function(){
                setPosition(-496);
                container.current.style.transition = `${0}s ease-out`; 
            },500);
        }else{
            container.current.style.transition = `transform 1s`; 
            setIdx(((idx-1))%6);
            setPosition(position+96);
        }
    }

    const onClickRight = () => {
        if(!started){
            setStarted(true);
        }
        if(idx+1 <= 6){ // 일반적인 이동
            setPosition(position-96);
            setIdx((idx+1));
            container.current.style.transition = `transform 1s`; 
        }else{  // 마지막 슬라이드 일때
            setIdx((idx+1)%6);
            setTimeout(function(){
                setPosition(-15);
                container.current.style.transition = `${0}s ease-out`; 
            },500);
        }
    }
    const {getTrendingDone, trendingtv} = useSelector((state)=>state.tv);
    const {getPopularDone, populartv} = useSelector((state)=>state.tv);
    const {getTopRatedDone, topratedtv} = useSelector((state)=>state.tv);

    const TotalLength = container && container.current && container.current.offsetWidth;

    let loadingdone = false;

    let finalData = [];
    if(type === "trend"){
        finalData = trendingtv.filter((v)=>v.backdrop_path).slice(0, 36);
        loadingdone = getTrendingDone;
    }else if(type === "toprated"){
        finalData = topratedtv.filter((v)=>v.backdrop_path).slice(0, 36);
        loadingdone = getTopRatedDone;
    }else if(type === "popular"){
        finalData = populartv.filter((v)=>v.backdrop_path).slice(0, 36);
        loadingdone = getPopularDone;
    }
    finalData.unshift(finalData[35]);
    finalData.push(finalData[1]);

    return(
        <>
        <ContentSliderWrapper>
            <SliderTitleWrapper>
                <SliderTitle>{title}</SliderTitle>
                <SliderTitleMore>
                    <div style={{position:"absolute", bottom:"10%"}}><RightOutlined style={{color:"white",fontSize:"20px",fontWeight:"border"}}/></div>
                </SliderTitleMore>
                <PaginationWrapper>
                    <PaginationItem id={1} selected={idx}/>
                    <PaginationItem id={2} selected={idx}/>
                    <PaginationItem id={3} selected={idx}/>
                    <PaginationItem id={4} selected={idx}/>
                    <PaginationItem id={5} selected={idx}/>
                    <PaginationItem id={6} selected={idx}/>
                </PaginationWrapper>
            </SliderTitleWrapper>
            <SliderContentWrapper width={TotalLength} test={position}ref={container}>
                {loadingdone &&
                finalData.map((v, index)=>
                    <SliderElement setContentId={setContentId} setModalOpend={setModalOpend} setMediaType={setMediaType} key={index} id={index} started={started} data={v}/>
                    ) 
                }
            </SliderContentWrapper>
            <SliderLeftButton started={started} onClick={onClickLeft}>
                <LeftButton/>
            </SliderLeftButton>
            <SliderRightButton onClick={onClickRight}>
                <RightButton/>
            </SliderRightButton>
        </ContentSliderWrapper>
        
        </>
    );
};

export default TvContentSlider;