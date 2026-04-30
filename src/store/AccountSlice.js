import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios';


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
const initialState = {
    session: JSON.parse(localStorage.getItem("currentSession")) || {},
}


export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        register: (state, action) => {
            console.log(action.payload);
            axios.post(`${BACKEND_URL}auth/api/register/`, {
                username: action.payload.email,
                email: action.payload.email,
                password: action.payload.password
            })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error(err.response?.data || err);
            });
            console.log(state.session);
            console.log(action.payload);
            const allAccounts = JSON.parse(localStorage.getItem("allAccounts")) || [];
            allAccounts.push(action.payload);
            localStorage.setItem("allAccounts", JSON.stringify(allAccounts));
        },
        login: (state, action) => {
            console.log(action.payload);
            axios.post(`${BACKEND_URL}auth/api/login/`, {
                username: action.payload.emailValue,
                password: action.payload.passwordValue
            })
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.error(err.response?.data || err);
            });
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

