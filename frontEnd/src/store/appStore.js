import { configureStore } from "@reduxjs/toolkit";
import userSlice from './userSlice'
import allUserSlice from './allUsers'
const appStore=configureStore({
    reducer:{
        "user":userSlice,
        "allUsers":allUserSlice,
    }
})

export default appStore