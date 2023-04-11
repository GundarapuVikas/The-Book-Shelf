import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { BookType } from "../../HomePage/HomePageSlice";

type InitialState={
    cartItems:BookType[],
    checkout:boolean
}

const initialState:InitialState={
    cartItems:[],
    checkout:false
}

const cartItemsSlice=createSlice({
    name:'cartItems',
    initialState,
    reducers:{
        addToCart:(state:InitialState,action:PayloadAction<BookType>)=>{
            state.cartItems.push(action.payload);
            // alert('Added to cart');
        },
        clearCart:(state:InitialState)=>{
            state.cartItems.length=0;
        },
        changeCheckout:(state:InitialState)=>{
            state.checkout=true;
        }
    }
})

export const {addToCart,clearCart,changeCheckout} = cartItemsSlice.actions;
export default cartItemsSlice.reducer;