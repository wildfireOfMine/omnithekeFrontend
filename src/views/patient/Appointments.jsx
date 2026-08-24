import { useEffect, useState } from "react"
import { Box, Typography, Button, Grid, FormControl, Select, MenuItem, TextField } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import dayjs from "dayjs"
import 'dayjs/locale/es';
import React from 'react'
import CustomButton from "../../components/CustomButton"

import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"
import CustomBox from "../../components/CustomBox"

const Appointments = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [fechaSeleccionada, setFechaSeleccionada] = useState(dayjs());
  const [horaSeleccionada, setHoraSeleccionada] = useState(null);
  const [horasDisponibles, setHorasDisponibles] = useState([]);
  const [doctorElegido, setDoctorElegido] = useState();
  const [misDoctores, setMisDoctores] = useState([]);
  const [comentarios, setCommentarios] = useState();

  const handleDoctor = (e) => {
    setDoctorElegido(e.target.value);
  }
  
  const handleComentarios = (e) => {
    setComentarios(e.target.value);
  }

  console.log(misDoctores);
  console.log(horasDisponibles);


  const handleCustomButton = () => {
    navigate(-1);
  }

  return (
    <CustomBox>
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
        <CustomButton color="#fff" text="Volver Atrás" backgroundColor="#6b7280" onClick={handleCustomButton}/>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: 4,
          mt: 4,
          flexWrap: "wrap"
        }}
      >

        <Box
          sx={{
            width: {
              xs: "100%",
              md: "300px"
            }
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: "#374151",
              mb: 2
            }}
          >
            Doctores
          </Typography>

          <FormControl variant="standard" fullWidth>
            <Select
              labelId="doctor"
              id="doctor"
              value={doctorElegido}
              onChange={handleDoctor}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Selecciona un doctor
              </MenuItem>

              {misDoctores.map((doctor) => {
                const doctorName =
                  doctor.secondSurname && doctor.firstSurname
                    ? `${doctor.firstSurname} ${doctor.secondSurname}, ${doctor.name}`
                    : doctor.firstSurname
                    ? `${doctor.firstSurname}, ${doctor.name}`
                    : doctor.name;

                return (
                  <MenuItem
                    key={doctor.id}
                    value={doctor.id}
                  >
                    {doctorName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <LocalizationProvider
            dateAdapter={AdapterDayjs}
            adapterLocale="es"
          >
            <DateCalendar
              value={fechaSeleccionada}
              onChange={(newValue) => setfechaSeleccionada(newValue)}
              disablePast
              shouldDisableDate={(date) => {
                const day = date.day();
                return day === 0 || day === 6;
              }}
            />
          </LocalizationProvider>
        </Box>

      </Box>

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

        {horasDisponibles.map((hour) => (

          <Grid item key={hour}>
            <Button
              variant={horaSeleccionada === hour ? "contained" : "outlined"}
              onClick={() => setSelectedHour(hour)}
            >
              {hour}
            </Button>
          </Grid>

        ))}

      </Grid>

      {horaSeleccionada && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-start",
            gap: 4,
            mt: 4,
            flexWrap: "wrap",
            marginTop: "32px"
          }}
        >
          <Box>
            <Typography variant="h6">Fecha:</Typography>

            <Typography>{fechaSeleccionada.format("DD/MM/YYYY")}</Typography>

            <Typography
              variant="h6"
              sx={{
                marginTop: "12px"
              }}
            >Hora:
            </Typography>

            <Typography>{horaSeleccionada}</Typography>

            <CustomButton color="#2563eb" text="Enviar" variant="contained"/>
          </Box>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#374151"
              }}
              >
                Comentarios
              </Typography>

              <TextField multiline rows={4} value={comentarios} onChange={handleComentarios}
              id="comentarios" name="comentarios" fullWidth/>
            </Box>
        </Box>
      )} 

    </CustomBox>
  )
}

export default Appointments
