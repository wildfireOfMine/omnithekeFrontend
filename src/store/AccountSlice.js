import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    session: JSON.parse(localStorage.getItem("currentSession")) || {},
}


export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        login: (state, action) => {
            console.log(state.session);
            console.log(action.payload);
            state.session = action.payload;
            localStorage.setItem("currentSession", JSON.stringify(action.payload));
        },
        logout: (state, action) => {
            localStorage.removeItem("currentSession")
            state.session = {};
        }
    }
})


export const {
    login,
    logout
} = accountSlice.actions;

