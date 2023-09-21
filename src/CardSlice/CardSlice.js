import { createSlice } from "@reduxjs/toolkit";

const CardSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        clearCart:(state)=>{
            state.items=[];
        },
        removeCart:(state,action)=>{
            state.items.pop();
        }

    }
})
export const {addItem,removeItem,clearCart} = CardSlice.actions;
export default CardSlice.reducer;