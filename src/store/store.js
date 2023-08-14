'use client'
import { configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from 'next-redux-wrapper';
// import authReducer from './authSlice';
import authSlice from "./authSlice";


export const store = configureStore({
    reducer:{
       User : authSlice,
    },
    devTools:true,
})

// export const wrapper = createWrapper(makeStore);