import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { myAppointments } from '../../store/DoctorSlice';
import CustomButton from '../../components/CustomButton';

const MyAppointments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  
  useEffect(() =>{
    dispatch(myAppointments()).unwrap().then(data => setData(data));
  }, [dispatch])
  console.log(data);

  const handleCustomButton = () => {
        navigate(-1);
  }
  return (
    <Box sx={{
      maxWidth: "860px",
      margin: "0 auto",
      padding: "10px 16px 64px"
    }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mt: 4
        }}
      >
        <Typography variant='h1' sx={{
          fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
          color: "#1f2933",
          margin: "12px",
          fontWeight: 800,
          textAlign: 'center'
        }}>Tus Citas</Typography>
        
        <Box sx={{ alignSelf: "flex-start" }}>
          <CustomButton color="#fff" text="Volver Atrás" backgroundColor="#2563eb" onClick={handleCustomButton}/>
        </Box>

        {data.length > 0 ? (
          data.map((appointment) => (
            <Paper
              key={appointment.id}
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 3
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2}}>Cita #{appointment.id}</Typography>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Fecha de inicio</Typography>
                  <Typography>{new Date(appointment.beginning).toLocaleString("es-ES")}</Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Fecha de fin</Typography>
                  <Typography>{new Date(appointment.ending).toLocaleString("es-ES")}</Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Paciente</Typography>
                  <Typography>{appointment.patientName}</Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Doctor</Typography>
                  <Typography>{appointment.doctorName}</Typography>
                </Grid>

                <Grid size={12}>
                  <Typography fontWeight={600}>Comentarios</Typography>
                  <Typography>{appointment.comments || "Sin comentarios"}</Typography>
                </Grid>
              </Grid>
            </Paper>
          ))
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
    </Box>
  )
}

export default MyAppointments
