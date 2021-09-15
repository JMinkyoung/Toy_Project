import React,{useEffect}from 'react';
import { useDispatch } from 'react-redux';
import { getPopularMovies } from '../reducers/popularMovie';
import { useSelector } from 'react-redux';
import MainHeader from '../components/MainHeader';
import MainTopContent from '../components/MainTopContent';
import Head from 'next/head';

const browse = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPopularMovies());
    },[]);

    const movies = useSelector((state)=>state.popularMovie.movies);

    return (
        <>
        <Head>
            <title>홈 - 넷플릭스</title>
        </Head>
        {/* 헤더에 현재 선택된거 전달해줘야함 */}
        <MainHeader/>
        <MainTopContent/>
        
        </>
    );
};


export default browse;