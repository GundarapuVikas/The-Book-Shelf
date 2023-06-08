import { createSlice,PayloadAction } from '@reduxjs/toolkit'

type InitialState={
    title: string
}

const initialState:InitialState={
    title:"THE BOOK SHELF"
}

const titleSlice=createSlice({
    name:'title',
    initialState,
    reducers:{
        updateTitle:(state,action:PayloadAction<string|undefined>)=>{
            state.title="THE BOOK SHELF"+"  |  "+action.payload
        },
        resetTitle:(state)=>{
            state.title="THE BOOK SHELF"
        }
    }
})
export default titleSlice.reducer
export const {updateTitle,resetTitle}=titleSlice.actions

