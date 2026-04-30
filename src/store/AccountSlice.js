import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
  session: JSON.parse(localStorage.getItem("currentSession")) || {},
  loading: false,
  error: null,
};

export const register = createAsyncThunk(
  "account/register",
  async (user, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${BACKEND_URL}auth/api/register/`, {
        username: user.name,
        email: user.email,
        password: user.password,
      });
      console.log(res);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Registration failed");
    }
  }
);

export const login = createAsyncThunk(
  "account/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${BACKEND_URL}auth/api/login/`, {
        username: credentials.emailValue,
        password: credentials.passwordValue,
      });
      const sessionData = {
        emailValue: credentials.emailValue,
        token: res.data.access,
      };
      console.log(res);
      console.log(res.data);
      console.log(sessionData);
      localStorage.setItem("currentSession", JSON.stringify(sessionData));
      return sessionData;
    } catch (err) {
      return rejectWithValue(err.response?.data || "Login failed");
    }
  }
);

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("currentSession");
      state.session = {};
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.session = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { 
    logout 
} = accountSlice.actions;
export default accountSlice.reducer;