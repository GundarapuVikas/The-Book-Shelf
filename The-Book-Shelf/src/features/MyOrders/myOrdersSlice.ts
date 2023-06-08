import { createSlice,PayloadAction } from "@reduxjs/toolkit"; 
import { BookType } from "../HomePage/HomePageSlice";

type InitialState={
    my_orders:BookType[]
}

const initialState:InitialState={
    my_orders:[]
}

const myOrdersSlice=createSlice({
    name:'myOrders',
    initialState,
    reducers:{
        addToMyOrders:(state:InitialState,action:PayloadAction<BookType[]>)=>{
            state.my_orders=[...action.payload,...state.my_orders]
        }
    }
})

export const {addToMyOrders} = myOrdersSlice.actions;
export default myOrdersSlice.reducer;
