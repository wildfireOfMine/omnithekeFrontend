import React, { useEffect, useState } from 'react'
import { appointmentGet } from '../../store/PatientSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Paper, Typography } from '@mui/material';
import CustomButton from '../../components/CustomButton';

const MyPatientAppointments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() =>{
    dispatch(appointmentGet()).unwrap().then(data => setData(data));
  }, [dispatch])
  console.log(data);

  const handleCustomButton = () => {
        navigate(-1);
  }

  const handleAppointmentForm = () => {
        navigate("/patient/appointments");
  }

  return (
    <Box
      sx={{
        maxWidth: "860px",
        margin: "0 auto",
        padding: "10px 16px 64px"
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
          color: "#1f2933",
          marginBottom: 4,
          fontWeight: 800,
          textAlign: "center"
        }}
      >
        Tus Citas
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          gap: 2,
          mb: 4,
          flexWrap: "wrap"
        }}
      >
        <CustomButton color="#fff" text="Volver Atrás" backgroundColor="#6b7280" onClick={handleCustomButton}/>
        <CustomButton color="#fff" text="Añadir una cita" backgroundColor='#2563eb' onClick={handleAppointmentForm}/>
      </Box>

      {data.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3
          }}
        >
          {data.map((appointment) => {
            return <Paper
              key={appointment.id}
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 3
              }}
            >
              <Typography variant="h6" sx={{fontWeight: 700, mb: 2}}>Cita #{appointment.id}</Typography>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Comentarios</Typography>
                  <Typography>{appointment.comments}</Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Inicio</Typography>
                  <Typography>{new Date(appointment.beginning).toLocaleString("es-ES")}</Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Doctor</Typography>
                  <Typography>{appointment.doctorName}</Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Final</Typography>
                  <Typography>{new Date(appointment.ending).toLocaleString("es-ES")}</Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>¿Confirmado?: {appointment.confirmed ? <>Sí</> : <>No</>}</Typography>
                </Grid>
              </Grid>
            </Paper>
          })}
        </Box>
      ) : (
        <Paper
          sx={{
            p: 4,
            borderRadius: 3,
            textAlign: "center"
          }}
        >
          <Typography variant="h6">No tienes citas registradas</Typography>
        </Paper>
      )}
      
      
    </Box>
  )
}

export default MyPatientAppointments
