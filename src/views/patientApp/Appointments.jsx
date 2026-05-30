import { useState } from "react"
import { Box, Typography, Button, Grid } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import dayjs from "dayjs"
import 'dayjs/locale/es';
import React from 'react'
import CustomButton from "../../components/CustomButton"
import { appointmentPost } from "../../store/PatientSlice"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"

const Appointments = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(dayjs())
  const [selectedHour, setSelectedHour] = useState(null)

  const handleAppointment = async () => {
    const [hour, minute] = selectedHour.split(":");
    const beginning = selectedDate.hour(Number(hour)).minute(Number(minute)).second(0).millisecond(0);
    const ending = beginning.add(1, "hour");
    console.log(beginning.toISOString());
    console.log(ending.toISOString());
        const appointment = {
          comments: "Test", 
          beginning: beginning,
          ending: ending,
      } 
      try {
          await dispatch(appointmentPost(appointment)).unwrap();
          toast.success("Cita registrada con éxito");
      } catch (err) {
        console.log(err);
        toast.error(err?.email ? err.email.join(", ") : "Ha fallado la cita");
      }
  }

  const generateHours = () => {
    const hours = [];

    for (let hour = 8; hour < 18; hour++) {
      hours.push(`${String(hour).padStart(2, "0")}:00`);
    }

    return hours;
  }

  const hours = generateHours()

  return (
    <Box
      sx={{
        maxWidth: "860px",
        margin: "0 auto",
        padding: "10px 16px 64px"
      }}
    >

      <Box
        sx={{
          textAlign: "center",
          marginBottom: "24px"
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            color: "#1f2933",
            margin: "12px",
            fontWeight: 800
          }}
        >
          Citas
        </Typography>
      </Box>

      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
        <DateCalendar
          value={selectedDate}
          onChange={(newValue) => setSelectedDate(newValue)}
          disablePast
        />
      </LocalizationProvider>

      <Typography
        variant="h5"
        sx={{
          marginTop: "32px",
          marginBottom: "16px",
          fontWeight: 700
        }}
      >
        Horarios disponibles
      </Typography>

      <Grid container spacing={2}>

        {hours.map((hour) => (

          <Grid item key={hour}>
            <Button
              variant={selectedHour === hour ? "contained" : "outlined"}
              onClick={() => setSelectedHour(hour)}
            >
              {hour}
            </Button>
          </Grid>

        ))}

      </Grid>

      {selectedHour && (
        <Box
          sx={{
            marginTop: "32px"
          }}
        >
          <Typography variant="h6">Fecha:</Typography>

          <Typography>{selectedDate.format("DD/MM/YYYY")}</Typography>

          <Typography
            variant="h6"
            sx={{
              marginTop: "12px"
            }}
          >Hora:
          </Typography>

          <Typography>{selectedHour}</Typography>

          <CustomButton color="#2563eb" text="Enviar" variant="contained" onClick={handleAppointment}/>
        </Box>
      )}

    </Box>
  )
}

export default Appointments
