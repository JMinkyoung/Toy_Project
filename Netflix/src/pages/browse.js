import React,{useEffect}from 'react';
import { useDispatch } from 'react-redux';
import { getPopularMovies } from '../reducers/popularMovie';
import { useSelector } from 'react-redux';

const browse = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPopularMovies());
    },[]);

    const movies = useSelector((state)=>state.popularMovie.movies);

    return (
        <>
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