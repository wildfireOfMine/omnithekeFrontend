import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./UserSlice";
import { appointmentSlice } from "./AppointmentSlice";


export const store = configureStore({
    reducer: {
        users: userSlice.reducer,
        appointments: appointmentSlice.reducer
    },
})

