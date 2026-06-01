import { Box, Grid, Paper, styled, Typography } from '@mui/material'
import React from 'react'
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';
import CustomCard from '../../components/CustomCard';
import { Description, Event, Groups, LocalHospital, MedicalInformation, Person } from '@mui/icons-material';


const PatientDashboard = () => {
  const cards = [
    {
      title: "Mi Perfil",
      description: "Consulta y edita tu información profesional",
      icon: <Person sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/patient/myProfile"
    },
    {
      title: "Mis Citas",
      description: "Revisa tu agenda y próximas consultas",
      icon: <Event sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/patient/myAppointments"
    },
    {
      title: "Mis Episodios",
      description: "Consulta tus episodios clínicos",
      icon: <MedicalInformation sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/patient/myIncidents"
    },
    {
      title: "Mis Doctores",
      description: "Accede a la lista de tus doctores",
      icon: <LocalHospital sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/patient/myDoctors"
    }
  ];
  return (
    <Box sx={{
      maxWidth: "1000px",
      margin: "0 auto",
      padding: "24px 16px 64px"
    }}>
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
        {cards.map((card) => (
          <Grid
            key={card.title}
            size={{ xs: 12, sm: 6 }}
          >
            <Paper
              component={RouterLink}
              to={card.route}
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
              {card.icon}

              <Typography variant="h5" sx={{fontWeight: 700}}>{card.title}</Typography>
              
              <Typography textalign="center" >{card.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PatientDashboard
