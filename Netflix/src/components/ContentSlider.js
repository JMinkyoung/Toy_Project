import React,{useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { GET_TV_POPULAR_REQUEST } from '../reducers/tv';

const ContentSliderWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 230px;
    margin: 3vw 0;
    background-color: red;
`;

const SliderTitleWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin: 0 4% .5em 3%;
`;

const SliderTitle = styled.a`
    color: white;
    font-size: 1.6em;
    font-weight: bolder;
`;

const SliderContentWrapper = styled.div`
    position: relative;
    width: 100%;
`;

const ContentSlider = ({title, type}) => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch({
            type:GET_TV_POPULAR_REQUEST,
        });
    },[]);

    const {getPopularDone, populartv } = useSelector((state)=>state.tv);

    return(
        <ContentSliderWrapper>
            <SliderTitleWrapper>
                <SliderTitle>{title}</SliderTitle>
            </SliderTitleWrapper>
            <SliderContentWrapper>
                {getPopularDone ? populartv.results.map((v)=><img id={v.id} style={{width:"250px", height:"140px", borderRadius:"4px"}} src={`https://image.tmdb.org/t/p/original${v.backdrop_path}`}/>) : null}
            </SliderContentWrapper>
        </ContentSliderWrapper>
    );
};

export default ContentSlider;