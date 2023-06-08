import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { BookType } from '../HomePage/HomePageSlice';

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

const BookDetailSlice=createSlice({
    name:'bookItem',
    initialState,
    reducers:{
        getBookDetailsRequest:(state:InitialState,action: PayloadAction<string|undefined>)=>{
            state.loading=true;
            state.error='';
        },
        getBookDetailsSuccess:(state:InitialState,action:PayloadAction<BookType[]>)=>{
            state.loading=false,
            state.data=action.payload
        },
        getBookDetailsError:(state:InitialState,action)=>{
            state.loading=false,
            state.error=action.payload.error.message || 'Something went wrong'
        }
    },
})

export const {getBookDetailsRequest,getBookDetailsSuccess,getBookDetailsError}=BookDetailSlice.actions
export default BookDetailSlice.reducer
