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
  async ({ page = 1, especialidad = "", search = "" }, { rejectWithValue }) => {
        try {
            const params = new URLSearchParams();

            params.append("page", page);

            if (especialidad) {
                params.append("especialidad", especialidad);
            }

            if (search) {
                params.append("search", search);
            }

            const respuesta = await axios.get(
                `${BACKEND_URL}users/api/todosDoctores/?${params.toString()}`
            );

            return respuesta.data;

        } catch (error) {
            return rejectWithValue(
                error.response?.data || error.message
            );
        }
  }
);

export const todasEspecialidades = createAsyncThunk(
  "user/todasEspecialidades",
  async (credentials, { rejectWithValue }) => {
    try {
      const respuesta = await axios.get(`${BACKEND_URL}users/api/especialidades/`);
      
      return respuesta.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "No se han podido extraer especialidades");
    }
  }
);

export const todasAseguradoras = createAsyncThunk(
  "user/todasAseguradoras",
  async (credentials, { rejectWithValue }) => {
    try {
      const respuesta = await axios.get(`${BACKEND_URL}users/api/aseguradoras/`);
      
      return respuesta.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "No se han podido extraer especialidades");
    }
  }
);

export const doctor = createAsyncThunk(
  "user/doctor",
  async (doctorPk, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const session = state.users.session;
      const respuesta = await axios.get(`${BACKEND_URL}users/api/doctor/${doctorPk}/`, {
        headers: {
          Authorization: `Bearer ${session.token}`
        }
      });

      return respuesta.data
    } catch (error) {
      return rejectWithValue(error.response?.data || "No se ha podido extraer el doctor");
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