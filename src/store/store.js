import { configureStore } from "@reduxjs/toolkit";
import { accountSlice } from "./AccountSlice";


export const store = configureStore({
    reducer: {
        account: accountSlice.reducer,

    },
})

