import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import moviesSliceReducer from './moviesSlice'
import gptSliceReducer from './gptSlice'
import changeLanguageReducer from "./configSlice";

const appStore=configureStore({
    reducer:{
        user:userReducer,
        movies:moviesSliceReducer,
        gpt:gptSliceReducer,
        config:changeLanguageReducer
    }
})
export default appStore