import React,{useEffect}from 'react';
import { useDispatch } from 'react-redux';
import { getPopularMovies } from '../reducers/popularMovie';
import { useSelector } from 'react-redux';
import MainHeader from '../components/MainHeader';

const browse = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPopularMovies());
    },[]);

    const movies = useSelector((state)=>state.popularMovie.movies);

    return (
        <>
        {/* 헤더에 현재 선택된거 전달해줘야함 */}
        <MainHeader/>
        {movies && movies.results.map((v)=>{
            return (
            <>
                <h1>{v.title}</h1>
                <img src={`https://image.tmdb.org/t/p/w500${v.poster_path}`}></img>
            </>
            )
        })}
        </>
    );
};

export default browse;