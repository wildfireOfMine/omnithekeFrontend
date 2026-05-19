import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
    session: JSON.parse(localStorage.getItem("currentSession")) || {},
    loading: false,
    error: null,
}

export const myPatientProfile = createAsyncThunk(
  "patient/myProfile",
  async (user, { rejectWithValue }) => {
    try {
    const session = JSON.parse(localStorage.getItem("currentSession"));
    console.log(session);
    const res = await axios.get(`${BACKEND_URL}patient/api/myPatientProfile/`, {
      headers: {
        Authorization: `Bearer ${session.token}`
      }
    });
      console.log(res);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Couldn't extract the data");
    }
  }
);

export const patientSlice = createSlice({
    name: "patient",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
    
    },
})


export const {

} = patientSlice.actions;
export default patientSlice.reducer;