import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const initialState = {
  
};

export const misConsultas = createAsyncThunk(
  "history/misConsultas",
  async ({ page = 1, doctor = "" }, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      const session = state.users.session;

      const params = new URLSearchParams();

      params.append("page", page);

      if (doctor) {
        params.append("doctor", doctor);
      }

      const respuesta = await axios.get(`${BACKEND_URL}history/api/misConsultas/?${params.toString()}`,
        {
          headers: {
            Authorization: `Bearer ${session.token}`,
          },
        }
      );

      return respuesta.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }

)

export const miConsulta = createAsyncThunk(
  "history/miConsulta",
  async (consultaId, { rejectWithValue, getState }) => {
    try {
        const state = getState();
        const session = state.users.session;
        console.log(state);
        console.log(session);

        const respuesta = await axios.get(`${BACKEND_URL}history/api/miConsulta/${consultaId}/`, {
          headers: {
            Authorization: `Bearer ${session.token}`
          }
        });
        console.log(respuesta);

        return respuesta.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }

  }
)

export const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    
  },
});

export default historySlice.reducer;