import { createSlice,createAsyncThunk,PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

export type BookType={
    id:string
    title:string,
    author:string,
    description:string,
    isbn:string,
    pageCount:number,
    averageRating:number,
    ratingsCount:number,
    smallThumbnail:string,
    thumbnail:string,
    price:number
}

type InitialState={
    loading:boolean,
    data:BookType[],
    error:string
}
const initialState:InitialState={
    loading:false,
    data:[],
    error:''
}

const HomeSlice=createSlice({
    name:'homeBook',
    initialState,
    reducers:{
        getBooksRequest:(state:InitialState)=>{
            state.loading=true;
            state.error='';
        },
        getBooksSuccess:(state:InitialState,action:PayloadAction<BookType[]>)=>{
            state.loading=false,
            state.data=action.payload
        },
        getBooksError:(state:InitialState,action)=>{
            state.loading=false,
            state.error=action.payload.error.message || 'Something went wrong'
        }
    }
})

export const {getBooksRequest,getBooksSuccess,getBooksError}=HomeSlice.actions;
export default HomeSlice.reducer
