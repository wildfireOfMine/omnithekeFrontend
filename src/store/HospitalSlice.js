import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
    session: JSON.parse(localStorage.getItem("currentSession")) || {},
    loading: false,
    error: null,
}

export const administratorPost = createAsyncThunk(
  "hospital/administratorPost",
  async (user, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.hospital.session;
    console.log(state);
    console.log(session);
    const res = await axios.post(`${BACKEND_URL}hospital/api/administrator/`, user, {
        headers: {
            Authorization: `Bearer ${session.token}`
        }
    });
    console.log(res);
    

    } catch (err) {
      return rejectWithValue(err.response?.data || "Couldn't extract the data");
    }
  }
);

export const hospitalPost = createAsyncThunk(
  "hospital/hospitalPost",
  async (hospital, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.hospital.session;
    console.log(session);
    const res = await axios.post(`${BACKEND_URL}hospital/api/hospital/`, hospital, {
        headers: {
            Authorization: `Bearer ${session.token}`
        }
    });
    console.log(res);
    

    } catch (err) {
      return rejectWithValue(err.response?.data || "Couldn't extract the data");
    }
  }
);



export const hospitalSlice = createSlice({
    name: "hospital",
    initialState,
    reducers: {
        
    }
})


export const {

} = hospitalSlice.actions;

