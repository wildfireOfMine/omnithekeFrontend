import { configureStore } from "@reduxjs/toolkit";
import { accountSlice } from "./AccountSlice";
import { patientSlice } from "./PatientSlice";
import { doctorSlice } from "./DoctorSlice";
import { adminSlice } from "./AdminSlice";
import { hospitalSlice } from "./HospitalSlice";


export const store = configureStore({
    reducer: {
        account: accountSlice.reducer,
        patient: patientSlice.reducer,
        doctor: doctorSlice.reducer,
        admin: adminSlice.reducer,
        hospital: hospitalSlice.reducer
    },
})

