import React,{ useState, useEffect , useRef} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { GET_TV_POPULAR_REQUEST } from '../reducers/tv';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';


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

const ContentSliderWrapper = styled.div`
    position: relative;
    height: 230px;
    margin: 3vw 0;
    overflow: hidden;
    :hover {
        ${PaginationWrapper}{
            visibility: visible;
        }
    }
`;

const SliderTitleWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin: 0 4% .5em 2%;
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
    display:flex;
    text-align:center;
    margin-left: 2%;
    width: ${props => props.width}px;
    transform : translate3d(${props => props.test}%, 0px, 0px);
    transition: transform 1s;

`;

const SliderElement = styled.div`
    padding-right: 3px;
    :hover{
    }
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
    height: 70%;
    top: 20%;
    left: 0;
    cursor: pointer;
    border-radius: 4px;
    :hover{
        background: rgba(20,20,20,.5);       
        ${LeftButton}{
            visibility: visible;
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
    height: 70%;
    top: 20%;
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

const ContentSlider = ({title, type}) => {
    const container = useRef();
    const [started, setStarted] = useState(false);
    const [test, setTest] = useState(-16);
    const [idx, setIdx] = useState(1);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch({
            type:GET_TV_POPULAR_REQUEST,
        });
    },[]);


    const TotalLength = container && container.current && container.current.offsetWidth;
    
    const onClickLeft = () => {
        if(((idx-1)+6)%6 === 0){
            setIdx(((idx-1)+6));
            setTimeout(function(){
                setTest(-556);
                container.current.style.transition = `${0}s ease-out`; 
            },500);
        }else{
            container.current.style.transition = `transform 1s`; 
            setIdx(((idx-1))%6);
            setTest(test+90);
        }
    }

    const onClickRight = () => {
        if(!started){
            setStarted(true);
        }
        if(idx+1 <= 6){ // 일반적인 이동
            setTest(test-90);
            setIdx((idx+1));
            container.current.style.transition = `transform 1s`; 
        }else{  // 마지막 슬라이드 일때
            setIdx((idx+1)%6);
            setTimeout(function(){
                setTest(-16);
                container.current.style.transition = `${0}s ease-out`; 
            },500);
        }
    }

    const {getPopularDone, populartv } = useSelector((state)=>state.tv);
    let finalData = populartv.filter((v)=>v.backdrop_path).slice(0, 39);
    finalData.push(populartv[0]);
    finalData.unshift(populartv[39]);

    return(
        <ContentSliderWrapper>
            <SliderTitleWrapper>
                <SliderTitle>{title}</SliderTitle>
                <PaginationWrapper>
                    <PaginationItem id={1} selected={idx}/>
                    <PaginationItem id={2} selected={idx}/>
                    <PaginationItem id={3} selected={idx}/>
                    <PaginationItem id={4} selected={idx}/>
                    <PaginationItem id={5} selected={idx}/>
                    <PaginationItem id={6} selected={idx}/>
                </PaginationWrapper>
            </SliderTitleWrapper>
            <SliderContentWrapper width={TotalLength} test={test}ref={container}>
                {getPopularDone &&
                finalData.map((v, index)=>
                    <SliderElement id={index}>
                        <img id={v.id} style={{width:"300px", height:"160px", borderRadius:"4px"}} src={`https://image.tmdb.org/t/p/original${v.backdrop_path}`}/>
                    </SliderElement>
                    ) 
                }
            </SliderContentWrapper>
            <SliderLeftButton onClick={onClickLeft}>
                <LeftButton/>
            </SliderLeftButton>
            <SliderRightButton onClick={onClickRight}>
                <RightButton/>
            </SliderRightButton>
        </ContentSliderWrapper>
    );
};

export default ContentSlider;