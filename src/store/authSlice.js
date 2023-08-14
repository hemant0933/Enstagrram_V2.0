'use client'
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    authState: false,
    authUser:null,
};

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setAuthState:(state,action) => {
            state.authState = action.payload;
        },
        setAuthUser:(state,action) => {
            state.authUser = action.payload;
        },
        clearAuthUser:(state) => {
            state.authUser = null;
        }
    },
})

export const {setAuthState,setAuthUser,clearAuthUser} = authSlice.actions;
// export const selectAuthState = (state) => state.auth.authState;
// export const selectAuthUser = (state) => state.auth.authUser;
// export const selectclearAuthUser = (state) => state.auth.clearAuthUser;
export default authSlice.reducer;