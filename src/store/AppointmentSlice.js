import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
  
};

export const misCitas = createAsyncThunk(
  "appointment/misCitas",
  async ({ page = 1, estado = "", doctor = "" }, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const session = state.users.session;
      console.log(state)
      const params = new URLSearchParams();

      params.append("page", page);

      if (estado) {
        params.append("estado", estado);
      }

      if (doctor) {
        params.append("doctor", doctor);
      }

      const respuesta = await axios.get(`${BACKEND_URL}appointments/api/misCitas/?${params.toString()}`, {
        headers: {
          Authorization: `Bearer ${session.token}`
        }
      });

      return respuesta.data;

    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }

)

export const horariosDisponibles = createAsyncThunk(
  "appointment/horariosDisponibles",
    async (doctorId, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const session = state.users.session;

            const respuesta = await axios.get(`${BACKEND_URL}appointments/api/horariosDisponibles/${doctorId}/`, {
                headers: {
                  Authorization: `Bearer ${session.token}`
                }
            });

            return respuesta.data;
        } catch (error) {
          return rejectWithValue(error.response?.data || error.message);
        }
    }
)

export const horasDisponibles = createAsyncThunk(
  "appointment/horasDisponibles",
    async ({doctorId, fecha}, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const session = state.users.session;

            const respuesta = await axios.get(`${BACKEND_URL}appointments/api/horaDisponible/${doctorId}/${fecha}/`, {
                headers: {
                  Authorization: `Bearer ${session.token}`
                }
            });

            return respuesta.data;
        } catch (error) {
          return rejectWithValue(error.response?.data || error.message);
        }
    }
)

export const crearCita = createAsyncThunk(
  "appointment/crearCita",
  async (cita, { rejectWithValue, getState }) => {
        try {
            const state = getState();
            const session = state.users.session;

            const respuesta = await axios.post(`${BACKEND_URL}appointments/api/nuevaCita/`, cita, {
                headers: {
                  Authorization: `Bearer ${session.token}`
                }
            });

            return respuesta.data;
        } catch (error) {
          return rejectWithValue(error.response?.data || error.message);
        }
    }
)

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    
  },
});

export default appointmentSlice.reducer;