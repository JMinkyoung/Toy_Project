import { all, fork ,put, takeLatest, call} from "redux-saga/effects";
import axios from 'axios';
import { 
    GET_MOVIE_INFO_REQUEST, GET_MOVIE_INFO_SUCCESS, GET_MOVIE_INFO_FAILURE,
    GET_MOVIE_VIDEO_REQUEST, GET_MOVIE_VIDEO_SUCCESS, GET_MOVIE_VIDEO_FAILURE,
    GET_MOVIE_KEYWORDS_REQUEST, GET_MOVIE_KEYWORDS_SUCCESS, GET_MOVIE_KEYWORDS_FAILURE,
    GET_MOVIE_CREDITS_REQUEST, GET_MOVIE_CREDITS_SUCCESS, GET_MOVIE_CREDITS_FAILURE,
    GET_MOVIE_SIMILAR_REQUEST, GET_MOVIE_SIMILAR_SUCCESS, GET_MOVIE_SIMILAR_FAILURE,


    GET_POPULAR_MOVIE_FAILURE, GET_POPULAR_MOVIE_REQUEST, GET_POPULAR_MOVIE_SUCCESS } from "../reducers/movie";



function movieinfoAPI(data) {
    return axios.get(`https://api.themoviedb.org/3/movie/${data}?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR`);
}

function movievideoAPI(data) {
    return axios.get(`https://api.themoviedb.org/3/movie/${data}/videos?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR`);
}

function moviekeywordAPI(data) {
    return axios.get(`https://api.themoviedb.org/3/movie/${data}/keywords?api_key=0f54240da860f0ee0a59657346e7a8cc`);
}

function moviecreditAPI(data) {
    return axios.get(`https://api.themoviedb.org/3/movie/${data}/credits?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR`);
}

function moviesimilarAPI(data) {
    return axios.get(`https://api.themoviedb.org/3/movie/${data}/similar?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=1`);
}
    
function popularmovieAPI() {
    return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=1&region=KR`);
}

function* getMOVIEInfo(action) {
    try {
        const result = yield call(movieinfoAPI,action.data);
        yield put({
            type: GET_MOVIE_INFO_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: GET_MOVIE_INFO_FAILURE,
            error: error.response.data
        });
    }
}

function* getMOVIEVideo(action) {
    try {
        const result = yield call(movievideoAPI,action.data);
        yield put({
            type: GET_MOVIE_VIDEO_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: GET_MOVIE_VIDEO_FAILURE,
            error: error.response.data
        });
    }
}

function* getMOVIEKeyword(action) {
    try {
        const result = yield call(moviekeywordAPI,action.data);
        yield put({
            type: GET_MOVIE_KEYWORDS_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: GET_MOVIE_KEYWORDS_FAILURE,
            error: error.response.data
        });
    }
}

function* getMOVIECredit(action) {
    try {
        const result = yield call(moviecreditAPI,action.data);
        yield put({
            type: GET_MOVIE_CREDITS_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: GET_MOVIE_CREDITS_FAILURE,
            error: error.response.data
        });
    }
}

function* getMOVIESimilar(action) {
    try {
        const result = yield call(moviesimilarAPI,action.data);
        yield put({
            type: GET_MOVIE_SIMILAR_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: GET_MOVIE_SIMILAR_FAILURE,
            error: error.response.data
        });
    }
}

function* getPopularMoive(action) {
    try {
        const result = yield call(popularmovieAPI,action.data);
        yield put({
            type: GET_POPULAR_MOVIE_SUCCESS,
            data: result.data,
        });
    } catch (error) {
        console.error(error);
        yield put({
            type: GET_POPULAR_MOVIE_FAILURE,
            error: error.response.data
        });
    }
}

function* watchGetMovieInfo() {
    yield takeLatest(GET_MOVIE_INFO_REQUEST,getMOVIEInfo);
}

function* watchGetMovieVideo() {
    yield takeLatest(GET_MOVIE_VIDEO_REQUEST,getMOVIEVideo);
}

function* watchGetMovieKeyword() {
    yield takeLatest(GET_MOVIE_KEYWORDS_REQUEST,getMOVIEKeyword);
}

function* watchGetMovieCredit() {
    yield takeLatest(GET_MOVIE_CREDITS_REQUEST,getMOVIECredit);
}

function* watchGetMovieSimilar() {
    yield takeLatest(GET_MOVIE_SIMILAR_REQUEST,getMOVIESimilar);
}

function* watchPopularMovie() {
    yield takeLatest(GET_POPULAR_MOVIE_REQUEST,getPopularMoive);
}

export default function* movieSaga() {
    yield all([
        fork(watchGetMovieInfo),
        fork(watchGetMovieVideo),
        fork(watchGetMovieKeyword),
        fork(watchGetMovieCredit),
        fork(watchGetMovieSimilar),
        fork(watchPopularMovie),
    ]);
}