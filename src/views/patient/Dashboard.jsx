import { Box, Grid, Paper, styled, Typography } from '@mui/material'
import React from 'react'
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';
import CustomCard from '../../components/CustomCard';
import { Description, Event, Groups, LocalHospital, MedicalInformation, Person } from '@mui/icons-material';
import CustomBox from '../../components/CustomBox';

const Dashboard = () => {
  const tarjetas = [
    {
      title: "Mis Citas",
      description: "Revisa tu agenda y próximas consultas",
      icon: <Event sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/citas"
    },
    {
      title: "Mis Episodios",
      description: "Consulta tus episodios clínicos",
      icon: <MedicalInformation sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/patient/myIncidents"
    },
  ];
  return (
    <CustomBox>
      <Box component="div"
        sx={{
          textAlign: "center",
          mb: 6
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "clamp(2rem, 4vw, 2.8rem)",
            fontWeight: 800,
            color: "#1f2933"
          }}
        >
          Panel del Paciente
        </Typography>

        <Typography
          sx={{
            color: "#6b7280",
            mt: 1
          }}
        >
          Consulta tus doctores, citas y episodios
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {tarjetas.map((tarjeta) => (
          <Grid
            key={tarjeta.title}
            size={{ xs: 12, sm: 6 }}
          >
            <Paper
              component={RouterLink}
              to={tarjeta.route}
              elevation={2}
              sx={{
                height: 220,
                p: 4,
                borderRadius: 4,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
                textDecoration: "none",
                color: "inherit",
                transition: "0.2s",

                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: 8
                }
              }}
            >
              {tarjeta.icon}

              <Typography variant="h5" sx={{fontWeight: 700}}>{tarjeta.title}</Typography>
              
              <Typography textalign="center" >{tarjeta.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </CustomBox>
  )
}

export default Dashboard
