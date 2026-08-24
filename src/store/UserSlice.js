import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
  session: JSON.parse(localStorage.getItem("sesionActual")) || {},
  loading: false,
  error: null,
};

export const registrarse = createAsyncThunk(
  "user/register",
  async (user, { rejectWithValue }) => {
    console.log(user);
    try {
      const respuesta = await axios.post(`${BACKEND_URL}users/api/registrarse/`, user);
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response?.data || "Registro fallido");
    }
  }
);

export const login = createAsyncThunk(
  "user/login",
  async (credentials, { rejectWithValue }) => {
    try {
      console.log(credentials);
      const respuesta = await axios.post(`${BACKEND_URL}users/api/login/`, {
        username: credentials.documentoValor,
        password: credentials.contrasenaValor,
      });
      console.log(respuesta);
      const informacionSesion = {
        documento: credentials.documentoValor,
        token: respuesta.data.access,
        rol: respuesta.data.rol
      };
      localStorage.setItem("sesionActual", JSON.stringify(informacionSesion));
      return informacionSesion;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response?.data || "Inicio fallido");
    }
  }
);

export const todosDoctores = createAsyncThunk(
  "user/todosDoctores",
  async (credentials, { rejectWithValue }) => {
    try {
      console.log(credentials);
      const respuesta = await axios.get(`${BACKEND_URL}users/api/todosDoctores/`);
      
      return respuesta.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response?.data || "Inicio fallido");
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("sesionActual");
      state.session = {};
      state.error = null;
      toast.success("Sesión cerrada con éxito");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registrarse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registrarse.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registrarse.rejected, (state, action) => {
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
} = userSlice.actions;
export default userSlice.reducer;