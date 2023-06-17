import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constant";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        items:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.items.unshift(action.payload)
            state.items.splice(OFFSET_LIVE_CHAT,1)
        }
    }
})

export const {addMessage} = chatSlice.actions
export default chatSlice.reducer