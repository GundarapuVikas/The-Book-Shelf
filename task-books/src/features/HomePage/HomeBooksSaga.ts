import { AxiosResponse } from "axios";
import axios from 'axios';
import {put,takeLatest} from 'redux-saga/effects';
import { getBooksRequest,getBooksSuccess,getBooksError } from "./HomePageSlice";
import { BookType } from "./HomePageSlice";

function* booksSaga()
{   
    try {
        const response: AxiosResponse<BookType[]>=yield axios.get('http://localhost:9000/books');
        yield put(getBooksSuccess(response.data))
    } catch (error) {
        yield put(getBooksError(error))
    }
    
}

export function* watchGetBooks() {
    yield takeLatest(getBooksRequest, booksSaga);
  }