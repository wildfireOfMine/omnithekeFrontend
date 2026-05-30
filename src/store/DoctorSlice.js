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

export const myPatientsAsDoctor = createAsyncThunk(
  "doctor/myPatientsAsDoctor",
  async (patients, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    console.log(session);
    const res = await axios.get(`${BACKEND_URL}doctor/api/myPatients/`, {
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

export const myAppointments = createAsyncThunk(
  "doctor/myPatientsAsDoctor",
  async (appointments, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    console.log(session);
    const res = await axios.get(`${BACKEND_URL}doctor/api/myAppointments/`, {
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

export const doctorPut = createAsyncThunk(
  "doctor/doctorPut",
  async (doctor, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    console.log(session);
    const res = await axios.put(`${BACKEND_URL}doctor/api/myDoctorProfile/`, doctor, {
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

export const reportsGet = createAsyncThunk(
  "doctor/reportsGet",
  async (reports, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    console.log(session);
    const res = await axios.get(`${BACKEND_URL}doctor/api/myReports/`, {
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

export const reportsPost = createAsyncThunk(
  "doctor/reportsPost",
  async (report, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    console.log(session);
    const res = await axios.post(`${BACKEND_URL}doctor/api/myReports/`, report, {
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

export const incidentGetAsDoctor = createAsyncThunk(
  "patient/incidentGetAsDoctor",
  async (patientId, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    console.log(session);
    const res = await axios.get(`${BACKEND_URL}doctor/api/incidents/${patientId}`, {
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