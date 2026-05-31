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
      console.log(res.data);
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
  "doctor/incidentGetAsDoctor",
  async (patientId, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    console.log(session);
    const res = await axios.get(`${BACKEND_URL}doctor/api/incidents/${patientId}/`, {
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

export const doctorGetPatientPK = createAsyncThunk(
  "doctor/doctorGetPatientPK",
  async (patientId, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    console.log(session);
    console.log(patientId);
    const res = await axios.get(`${BACKEND_URL}doctor/api/patient/${patientId}/`, {
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

export const incidentPatchPK = createAsyncThunk(
  "doctor/incidentPatchPK",
  async ({incidentId, patch}, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    console.log(session);
    console.log(incidentId);
    const res = await axios.patch(`${BACKEND_URL}doctor/api/myIncidents/${incidentId}/`, patch, {
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

export const incidentPost = createAsyncThunk(
  "doctor/incidentPost",
  async (incident, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    console.log(session);
    const res = await axios.post(`${BACKEND_URL}doctor/api/myIncidents/`, incident, {
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