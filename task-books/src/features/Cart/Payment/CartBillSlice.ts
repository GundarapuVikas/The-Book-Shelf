import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type billType={
    total_price:number,
    tax:number,
    shipping_charge:number,
    total_bill:number
}

const initialState:billType={
    total_price:0,
    tax:0,
    shipping_charge:0,
    total_bill:0
}

const billSlice=createSlice({
    name:'cartBill',
    initialState,
    reducers:{
        calculateBill:(state:billType,action:PayloadAction<number>)=>{
            state.total_price+=action.payload;
            state.tax=(0.18)*state.total_price;
            state.shipping_charge=50
            state.total_bill=(state.total_price+state.tax+state.shipping_charge)
        },
        resetBill:(state:billType)=>{
            state.total_price=0;
            state.tax=0;
            state.shipping_charge=0;
            state.total_bill=0;
        }
    }
})

export const {calculateBill,resetBill} = billSlice.actions
export default billSlice.reducer;

