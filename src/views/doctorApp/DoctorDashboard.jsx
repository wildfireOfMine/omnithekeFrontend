import { Box, Grid, Paper, Typography } from "@mui/material";
import { Person, Event, Description, Groups } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import React from 'react'
import CustomCard from '../../components/CustomCard'

const DoctorDashboard = () => {
  const cards = [
    {
      title: "Mi Perfil",
      description: "Consulta y edita tu información profesional",
      icon: <Person sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/doctor/myProfile"
    },
    {
      title: "Mis Citas",
      description: "Revisa tu agenda y próximas consultas",
      icon: <Event sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/doctor/myAppointments"
    },
    {
      title: "Mis Informes",
      description: "Consulta y crea informes clínicos",
      icon: <Description sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/doctor/myReports"
    },
    {
      title: "Mis Pacientes",
      description: "Accede a la lista de tus pacientes",
      icon: <Groups sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/doctor/myPatients"
    }
  ];

  const fieldStyle = {
    
  }

  return (
    <Box
      sx={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "24px 16px 64px"
      }}
    >
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
          Panel de Doctor
        </Typography>

        <Typography
          sx={{
            color: "#6b7280",
            mt: 1
          }}
        >
          Gestiona tus pacientes, citas e informes
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
              
              <Typography textAlign="center" color="text.secondary">{card.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DoctorDashboard;