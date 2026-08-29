import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
  
};

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    
  },
});

export default appointmentSlice.reducer;