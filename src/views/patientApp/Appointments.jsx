import { useEffect, useState } from "react"
import { Box, Typography, Button, Grid, FormControl, Select, MenuItem, TextField } from "@mui/material"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar"
import dayjs from "dayjs"
import 'dayjs/locale/es';
import React from 'react'
import CustomButton from "../../components/CustomButton"
import { appointmentPost, availableAppointmentsGet, myDoctorsAsPatient } from "../../store/PatientSlice"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { toast } from "react-toastify"

const Appointments = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedHour, setSelectedHour] = useState(null);
  const [availableHours, setAvailableHours] = useState([]);
  const [chosenDoctor, setChosenDoctor] = useState();
  const [myDoctors, setMyDoctors] = useState([]);
  const [comments, setComments] = useState();

  useEffect(()=>{
    dispatch(myDoctorsAsPatient()).unwrap().then(data => setMyDoctors(data));
  }, [dispatch])

  useEffect(()=>{
    if (chosenDoctor && selectedDate) {
      dispatch(availableAppointmentsGet({date: selectedDate.format("YYYY-MM-DD"), doctorId: chosenDoctor})).unwrap().then(data => setAvailableHours(data));
    }
  }, [dispatch, chosenDoctor, selectedDate]);

  const handleDoctor = (e) => {
    setChosenDoctor(e.target.value);
  }
  
  const handleComments = (e) => {
    setComments(e.target.value);
  }

  console.log(myDoctors);
  console.log(availableHours);

  const handleAppointment = async () => {
    const [hour, minute] = selectedHour.split(":");
    const beginning = selectedDate.hour(Number(hour)).minute(Number(minute)).second(0).millisecond(0);
    const ending = beginning.add(1, "hour");
    console.log(beginning.toISOString());
    console.log(ending.toISOString());
        const appointment = {
          comments: comments, 
          beginning: beginning,
          ending: ending,
          doctor: chosenDoctor
      } 
      try {
          await dispatch(appointmentPost(appointment)).unwrap();
          dispatch(availableAppointmentsGet({date: selectedDate.format("YYYY-MM-DD"), doctorId: chosenDoctor})).unwrap().then(data => setAvailableHours(data));
          toast.success("Cita registrada con éxito");
      } catch (err) {
        console.log(err);
        toast.error(err?.email ? err.email.join(", ") : "Ha fallado la cita");
      }
  }

  const handleCustomButton = () => {
    navigate(-1);
  }

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
              value={chosenDoctor}
              onChange={handleDoctor}
              displayEmpty
            >
              <MenuItem value="" disabled>
                Selecciona un doctor
              </MenuItem>

              {myDoctors.map((doctor) => {
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
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
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

        {availableHours.map((hour) => (

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

              <TextField multiline rows={4} value={comments} onChange={handleComments}
              id="comments" name="comments" fullWidth/>
            </Box>
        </Box>
      )} 

    </Box>
  )
}

export default Appointments
