import { PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import axios from 'axios';
import {put,takeLatest} from 'redux-saga/effects';
import { getBookDetailsRequest,getBookDetailsSuccess,getBookDetailsError } from "./BookDetailsSlice";
import { BookType } from "../HomePage/HomePageSlice";

function* bookDetailsSaga(action: PayloadAction<string|undefined>)
{   
    try {
        const response: AxiosResponse<BookType[]>=yield axios.get(`http://localhost:9000/books/?id=${action.payload}`);
        yield put(getBookDetailsSuccess(response.data))
    } catch (error) {
        yield put(getBookDetailsError(error))
    }
    
}

export function* watchGetBookDetails() {
    yield takeLatest(getBookDetailsRequest, bookDetailsSaga);
  }