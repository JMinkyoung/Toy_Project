import { all, fork ,put, takeLatest, call} from "redux-saga/effects";
import axios from 'axios';
import { GET_POPULAR_MOVIE_FAILURE, GET_POPULAR_MOVIE_REQUEST, GET_POPULAR_MOVIE_SUCCESS } from "../reducers/popularMovie";


function popularmovieAPI() {
    return axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=0f54240da860f0ee0a59657346e7a8cc&language=ko-KR&page=1&region=KR`);
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

function* watchPopularMovie() {
    yield takeLatest(GET_POPULAR_MOVIE_REQUEST,getPopularMoive);
}

export default function* movieSaga() {
    yield all([
        fork(watchPopularMovie),
    ]);
}