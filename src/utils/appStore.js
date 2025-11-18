import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesSliceReducer from './moviesSlice'
import gptSliceReducer from './gptSlice'

const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:moviesSliceReducer,
        gpt:gptSliceReducer
    }
})
export default appStore