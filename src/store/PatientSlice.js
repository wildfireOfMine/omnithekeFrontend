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
  async (user, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    
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

export const myDoctorsAsPatient = createAsyncThunk(
  "patient/myDoctorsAsPatient",
  async (user, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    
    console.log(session);
    const res = await axios.get(`${BACKEND_URL}patient/api/myDoctors/`, {
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


export const myIncidentsAsPatient = createAsyncThunk(
  "patient/myIncidentsAsPatient",
  async (user, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    
    console.log(session);
    const res = await axios.get(`${BACKEND_URL}patient/api/myIncidents/`, {
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

export const patientPut = createAsyncThunk(
  "patient/patientPut",
  async (patient, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    console.log(session);
    const res = await axios.put(`${BACKEND_URL}patient/api/myPatientProfile/`, patient, {
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

export const appointmentGet = createAsyncThunk(
  "patient/appointmentGet",
  async (appointments, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    console.log(session);
    const res = await axios.get(`${BACKEND_URL}patient/api/appointments/`, {
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

export const appointmentPost = createAsyncThunk(
  "patient/appointmentPost",
  async (appointment, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    console.log(session);
    const res = await axios.post(`${BACKEND_URL}patient/api/appointments/`, appointment, {
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

export const appointmentDelete = createAsyncThunk(
  "patient/appointmentDelete",
  async (appointmentId, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    console.log(session);
    const res = await axios.delete(`${BACKEND_URL}patient/api/appointments/${appointmentId}/`, {
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

export const availableAppointmentsGet = createAsyncThunk(
  "patient/availableAppointmentsGet",
  async ({date, doctorId}, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    console.log(session);
    const res = await axios.get(`${BACKEND_URL}patient/api/availability/${date}/${doctorId}/`, {
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