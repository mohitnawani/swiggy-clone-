import {createSlice } from "@reduxjs/toolkit";


const cart=createSlice({
    name:"cartslice",
    initialState:{
        items:[],
        count:0
    },

    reducers:{
        addItems:(state,action)=>{
            state.items.push({...action.payload,quantity:1});
            state.count+=1;
        },

        IncrementItems:(state,action)=>
        {
            const item=state.items.find((item)=>item.id===action.payload.id);
            item.quantity+=1;
            state.count+=1;
        },

        DecrementItems:(state,action)=>
        {
            const item=state.items.find((item)=>item.id===action.payload.id);
            if(item.quantity>1)
            {
                item.quantity-=1;
            }
            else{
                
                state.items=state.items.filter((item)=>item.id!==action.payload.id);
            }
            state.count-=1;

        }

    }

})
export const {addItems,IncrementItems,DecrementItems}=cart.actions;
export default cart.reducer;
