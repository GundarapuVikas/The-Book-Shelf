import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export type AddressType={
    houseNo:string,
    locality:string,
    district:string,
    state:string,
    pinCode:string,
    disabled:boolean
}

export const initialState:AddressType={
    houseNo:"",
    locality:"",
    district:"",
    state:"",
    pinCode:"",
    disabled:false
}


const addressSlice=createSlice({
    name:'address',
    initialState,
    reducers:{
        saveAddress:(state,action:PayloadAction<AddressType>)=>{
            console.log("in save address disptach: "+action.payload)
            state.houseNo=action.payload.houseNo;
            state.locality=action.payload.locality;
            state.district=action.payload.district;
            state.state=action.payload.state;
            state.pinCode=action.payload.pinCode; 
            state.disabled=true
            console.log("after save address "+ state)
        },
        resetAddress:(state)=>{
            state.houseNo="";
            state.locality="";
            state.district="";
            state.state="";
            state.pinCode="";
            state.disabled=false;
        }
    }
})



export default addressSlice.reducer 
export const {saveAddress,resetAddress}=addressSlice.actions;