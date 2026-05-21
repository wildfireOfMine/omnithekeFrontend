import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
  loading: false,
  error: null,
};

export const myDoctorProfile = createAsyncThunk(
  "doctor/myProfile",
  async (user, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
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