import React,{useEffect} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularTVaction } from '../reducers/popularTV';
import { GET_POPULAR_MOVIE_REQUEST } from '../reducers/popularMovie';

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
        dispatch({
            type:GET_POPULAR_MOVIE_REQUEST,
        });
    },[]);

    const data = useSelector((state)=>state.popularMovie.movies);
    
    return(
        <ContentSliderWrapper>
            <SliderTitleWrapper>
                <SliderTitle>{title}</SliderTitle>
            </SliderTitleWrapper>
            <SliderImageWrapper>
                {data ? data.results.map((v)=><img id={v.id} style={{width:"250px", height:"140px"}} src={`https://image.tmdb.org/t/p/original${v.backdrop_path}`}/>) : null}
            </SliderImageWrapper>
        </ContentSliderWrapper>
    );
};

export default ContentSlider;