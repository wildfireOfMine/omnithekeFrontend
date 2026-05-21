import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
    session: JSON.parse(localStorage.getItem("currentSession")) || {},
    loading: false,
    error: null,
}

export const myAdminProfile = createAsyncThunk(
  "admin/myProfile",
  async (user, { getState, rejectWithValue }) => {
    try {
      const state = getState();
    const session = state.account.session;
    console.log(session);
    const res = await axios.get(`${BACKEND_URL}admin/api/myProfile/`, {
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

export const myDoctors = createAsyncThunk(
  "admin/myDoctors",
  async (doctors, { getState, rejectWithValue }) => {
    try {
      const state = getState();
    const session = state.account.session;
    console.log(session);
    const res = await axios.get(`${BACKEND_URL}admin/api/doctor/`, {
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

export const doctorPost = createAsyncThunk(
  "admin/doctorPost",
  async (doctor, { getState, rejectWithValue }) => {
    try {
      const state = getState();
    const session = state.account.session;
    console.log(session);
    const res = await axios.post(`${BACKEND_URL}admin/api/doctor/`, doctor, {
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

export const myPatients = createAsyncThunk(
  "admin/myPatients",
  async (patients, { getState, rejectWithValue }) => {
    try {
      const state = getState();
    const session = state.account.session;
    console.log(session);
    const res = await axios.get(`${BACKEND_URL}admin/api/patient/`, {
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

export const patientPost = createAsyncThunk(
  "admin/patientPost",
  async (patient, { getState, rejectWithValue }) => {
    try {
      const state = getState();
    const session = state.account.session;
    console.log(session);
    const res = await axios.post(`${BACKEND_URL}admin/api/patient/`, patient, {
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

export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
    
    },
})


export const {

} = adminSlice.actions;

