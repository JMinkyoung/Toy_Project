import React,{useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularTVaction } from '../reducers/popularTV';

const ContentSliderWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 230px;
    background-color: red;
`;

const SliderTitleWrapper = styled.a`
    /* display: inline-block; */
    width: 100%;
    height: auto;
    margin: 0 4% .5em 4%;
`;

const SliderTitle = styled.div`
    color: white;
    font-size: 1.6em;
    font-weight: bolder;
`;

const SliderImageWrapper = styled.div`
    position: relative;
    width: 100%;

`;

const ContentSlider = ({title, type}) => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPopularTVaction());
    },[]);

    const data = useSelector((state)=>state.popularTv.populartv);
    
    return(
        <ContentSliderWrapper>
            <SliderTitleWrapper>
                <SliderTitle>{title}</SliderTitle>
            </SliderTitleWrapper>
            <SliderImageWrapper>
                {data ? data.results.map((v)=><img style={{width:"250px", height:"140px"}} src={`https://image.tmdb.org/t/p/original${v.backdrop_path}`}/>) : null}
            </SliderImageWrapper>
        </ContentSliderWrapper>
    );
};

export default ContentSlider;