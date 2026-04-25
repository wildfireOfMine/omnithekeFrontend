import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    session: JSON.parse(localStorage.getItem("currentSession")) || {},
}


export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        register: (state, action) => {
            console.log(state.session);
            console.log(action.payload);
            const allAccounts = JSON.parse(localStorage.getItem("allAccounts")) || [];
            allAccounts.push(action.payload);
            localStorage.setItem("allAccounts", JSON.stringify(allAccounts));
        },
        login: (state, action) => {
            console.log(state.session);
            console.log(action.payload);
            const allAccounts = JSON.parse(localStorage.getItem("allAccounts"));
            if (allAccounts.find((account) => account == action.payload.emailValue)) {
                state.session = action.payload;
                localStorage.setItem("currentSession", JSON.stringify(action.payload));
            } else {
                console.log("No");
            }
            
        },
        logout: (state, action) => {
            localStorage.removeItem("currentSession")
            state.session = {};
        }
    }
})


export const {
    register,
    login,
    logout
} = accountSlice.actions;

