import { Box, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { myPatientsAsDoctor } from '../../store/DoctorSlice';
import CustomButton from '../../components/CustomButton';

const MyPatients = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(myPatientsAsDoctor()).unwrap().then(data => setData(data));
  }, [dispatch]);

  const handleCustomButton = () => {
    navigate(-1);
  };

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
        Tus Pacientes
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
          {data.map((patient) => (
            <Paper
              key={patient.id}
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 3
              }}
            >
              <Typography variant="h6" sx={{fontWeight: 700, mb: 2}}>{patient.name} {patient.firstSurname}</Typography>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Correo electrónico</Typography>
                  <Typography>{patient.email}</Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Teléfono</Typography>
                  <Typography>{patient.telephone || "No disponible"}</Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Fecha de nacimiento</Typography>
                  <Typography>{patient.birthdate}</Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Ciudad</Typography>
                  <Typography>{patient.city || "No disponible"}</Typography>
                </Grid>
              </Grid>
              <Link to={`${patient.id}`}><Typography fontWeight={600}>Ver perfil</Typography></Link>
            </Paper>
          ))}
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
  );
};

export default MyPatients;