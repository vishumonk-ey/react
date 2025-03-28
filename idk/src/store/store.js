import {configureStore} from "@reduxjs/toolkit"
import postSliceReducer from "./postSlice"
import authSliceReducer from "./authSlice"
const store = configureStore({
    reducer : {
        posts : postSliceReducer ,
        auth : authSliceReducer
    }
})
export default store