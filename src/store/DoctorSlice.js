import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
  session: JSON.parse(localStorage.getItem("currentSession")) || {},
  loading: false,
  error: null,
};

export const myProfile = createAsyncThunk(
  "doctor/myProfile",
  async (user, { rejectWithValue }) => {
    try {
    const session = JSON.parse(localStorage.getItem("currentSession"));
    console.log(session);
    const res = await axios.get(`${BACKEND_URL}doctor/api/myDoctorProfile/`, {
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

export const doctorSlice = createSlice({
    name: "doctor",
    initialState,
    reducers: {
      
    },
    extraReducers: (builder) => {
    
    },
});
    
export const { 
    
} = doctorSlice.actions;
export default doctorSlice.reducer;