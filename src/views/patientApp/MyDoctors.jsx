import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { myDoctorsAsPatient } from '../../store/PatientSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';

const MyDoctors = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() =>{
    dispatch(myDoctorsAsPatient()).unwrap().then(data => setData(data));
  }, [dispatch])
  console.log(data);

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
        Tus Doctores
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2,
          mb: 4,
          flexWrap: "wrap"
        }}
      >
        <CustomButton color="#fff" text="Volver Atrás" backgroundColor="#6b7280" onClick={handleCustomButton}/>
      </Box>

      {data.length > 0 ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3
          }}
        >
          {data.map((doctor) => {
            const doctorName =
              doctor.secondSurname && doctor.firstSurname
                ? `${doctor.firstSurname} ${doctor.secondSurname}, ${doctor.name}`
                : doctor.firstSurname
                ? `${doctor.firstSurname}, ${doctor.name}`
                : doctor.name;
            return <Paper
              key={doctor.id}
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 3
              }}
            >
              <Typography variant="h6" sx={{fontWeight: 700, mb: 2}}>{doctorName}</Typography>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Correo electrónico</Typography>
                  <Typography>{doctor.email}</Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Teléfono</Typography>
                  <Typography>{doctor.telephone || "No disponible"}</Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Fecha de nacimiento</Typography>
                  <Typography>{doctor.birthdate}</Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Ciudad</Typography>
                  <Typography>{doctor.city || "No disponible"}</Typography>
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
          <Typography variant="h6">No tienes pacientes asignados</Typography>
        </Paper>
      )}
      
      
    </Box>
  )
}

export default MyDoctors
