import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
    loading: false,
    error: null,
}

export const administratorPost = createAsyncThunk(
  "office/administratorPost",
  async (user, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session;
    console.log(state);
    console.log(session);
    const res = await axios.post(`${BACKEND_URL}office/api/administrator/`, user, {
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

export const officePost = createAsyncThunk(
  "office/officePost",
  async (office, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session;
    console.log(session);
    const res = await axios.post(`${BACKEND_URL}office/api/office/`, office, {
        headers: {
            Authorization: `Bearer ${session.token}`
        }
    });
    console.log(res);
    

    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response?.data || "Couldn't extract the data");
    }
  }
);

export const officeGet = createAsyncThunk(
  "office/officeGet",
  async (office, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    console.log(session);
    const res = await axios.get(`${BACKEND_URL}office/api/office/`, {
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

export const officePut = createAsyncThunk(
  "office/officePut",
  async (office, { getState, rejectWithValue }) => {
    try {
    const state = getState();
    const session = state.account.session
    console.log(session);
    const res = await axios.put(`${BACKEND_URL}office/api/office/`, office, {
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

export const officeSlice = createSlice({
    name: "office",
    initialState,
    reducers: {
        
    }
})


export const {

} = officeSlice.actions;

