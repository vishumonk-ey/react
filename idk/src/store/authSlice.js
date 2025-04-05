import {createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoggedIn : false ,
    userData : null
}
const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers : {
        login : (state,action) => {
            state.isLoggedIn = true ;
            state.userData = action.payload
        },
        logout : (state , action) => {
            state.isLoggedIn = false
            state.userData = null
        }
    }
})
export default authSlice.reducer
// the above statement might be creating issue
export const {login , logout} = authSlice.actions

// dispatch( login() ) --> login() here is my action creator although we havent defined action creator but rtk defines it automatically through authSlice.actions , login() will return me an action object which consists type and payload ---> it basically tells what to change , then the dispatch function transfers it to the redux store and store forwards the action object to our reducer and it finally changes the value in our  store .... the components depending upon only the changes state value will re-render 