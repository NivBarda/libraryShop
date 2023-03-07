import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAdmin: false,
};

const adminSlice = createSlice({
    name:"admin",
    initialState,
    reducers:{
        adminHandler(state){
            state.isAdmin = !state.isAdmin
        }
    }
})

export const adminActions = adminSlice.actions

export default adminSlice