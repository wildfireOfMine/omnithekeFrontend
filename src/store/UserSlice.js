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
      console.log("LA RESPUESTA", respuesta);
      const informacionSesion = {
        documento: respuesta.data.documento,
        nombre: respuesta.data.nombre,
        email: respuesta.data.correo,
        token: respuesta.data.access,
        rol: respuesta.data.rol
      };
      console.log("SESIÓN ACTUAL", informacionSesion);
      localStorage.setItem("sesionActual", JSON.stringify(informacionSesion));
      return informacionSesion;
    } catch (err) {
      console.log(err);
      console.log("ESTATUS:", err.response?.status);
      console.log("RESPUESTA:", err.response?.data);
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

export const todasEspecialidadesList = createAsyncThunk(
  "user/todasEspecialidadesList",
  async ({ page = 1, search = "" }, { rejectWithValue, getState }) => {
        try {
            const params = new URLSearchParams();
            const state = getState();
            const session = state.users.session;

            params.append("page", page);

            if (search) {
                params.append("search", search);
            }

            const respuesta = await axios.get(
                `${BACKEND_URL}users/api/especialidadesList/?${params.toString()}`, {
                  headers: {
                    Authorization: `Bearer ${session.token}`
                  }
                }
            );

            return respuesta.data;

        } catch (error) {
            return rejectWithValue(
                error.response?.data || error.message
            );
        }
  }
);

export const especialidadPost = createAsyncThunk(
  "user/especialidadPost",
  async (especialidad, { rejectWithValue, getState }) => {
    try{
      const state = getState();
      const session = state.users.session;
      console.log(especialidad);
      const respuesta = await axios.post(`${BACKEND_URL}users/api/especialidadPost/`, especialidad, {
          headers: {
            Authorization: `Bearer ${session.token}`
          }
      });
    console.log(respuesta);
    } catch (error) {
        return rejectWithValue(error.response?.data || "No se ha podido extraer el doctor");
    }
  }
)


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

export const todasAseguradorasList = createAsyncThunk(
  "user/todasAseguradorasList",
  async ({ page = 1, search = "" }, { rejectWithValue, getState }) => {
        try {
            const params = new URLSearchParams();
            const state = getState();
            const session = state.users.session;

            params.append("page", page);

            if (search) {
                params.append("search", search);
            }

            const respuesta = await axios.get(
                `${BACKEND_URL}users/api/aseguradorasList/?${params.toString()}`, {
                  headers: {
                    Authorization: `Bearer ${session.token}`
                  }
                }
            );

            return respuesta.data;

        } catch (error) {
            return rejectWithValue(
                error.response?.data || error.message
            );
        }
  }
);

export const aseguradoraPost = createAsyncThunk(
  "user/aseguradoraPost",
  async (aseguradora, { rejectWithValue, getState }) => {
    try{
      const state = getState();
      const session = state.users.session;
      console.log(aseguradora);
      const respuesta = await axios.post(`${BACKEND_URL}users/api/aseguradoraPost/`, aseguradora, {
          headers: {
            Authorization: `Bearer ${session.token}`
          }
      });
    console.log(respuesta);
    } catch (error) {
        return rejectWithValue(error.response?.data || "No se ha podido extraer el doctor");
    }
  }
)

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

export const confirmarCuenta = createAsyncThunk(
  "user/confirmarCuenta",
  async ({uid, token}, { rejectWithValue }) => {
    try {
      const respuesta = await axios.post(`${BACKEND_URL}users/api/confirmarCuenta/`, {uid, token});
      console.log(respuesta);

      return respuesta.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "No se ha podido confirmar la cuenta");
    }
  }
)

export const solicitarRecuperacion = createAsyncThunk(
  "user/solicitarRecuperacion",
  async (credentials, { rejectWithValue }) => {
    try{
    const respuesta = await axios.post(`${BACKEND_URL}users/api/solicitarRecuperacion/`, {
        documento: credentials.documento,
      });
    console.log(respuesta);
    } catch (error) {
        return rejectWithValue(error.response?.data || "No se ha podido extraer el doctor");
    }
  }
)

export const restablecerContrasena = createAsyncThunk(
  "user/restablecerContrasena",
  async ({uid, token, contrasena}, { rejectWithValue }) => {
    try{
    const respuesta = await axios.post(`${BACKEND_URL}users/api/restablecerContrasena/`, {uid, token, contrasena});
    console.log(respuesta);
    

    } catch (error) {
        return rejectWithValue(error.response?.data || "No se ha podido restablecer la contraseña");
    }
  }
)

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