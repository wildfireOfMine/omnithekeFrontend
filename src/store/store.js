import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./UserSlice";
import { appointmentSlice } from "./AppointmentSlice";
import { historySlice } from "./HistorySlice";


export const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        appointments: appointmentSlice.reducer,
        history: historySlice.reducer
    },
})

