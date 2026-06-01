import { Box, Grid, Paper, Typography } from "@mui/material";
import { MedicalServices, Badge, Groups, Business, Person } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import React from 'react'
import CustomCard from '../../components/CustomCard'

const Dashboard = () => {

  const cards = [
    {
      title: "Doctores",
      description: "Gestiona los doctores del consultorio",
      icon: <MedicalServices sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/admin/myOfficeDoctors"
    },
    {
      title: "Recepcionistas",
      description: "Gestiona los recepcionistas del consultorio",
      icon: <Badge sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/admin/myReceptionists"
    },
    {
      title: "Pacientes",
      description: "Consulta los pacientes del consultorio",
      icon: <Groups sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/admin/myOfficePatients"
    },
    {
      title: "Consultorio",
      description: "Información y configuración",
      icon: <Business sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/admin/myOffice"
    },
    {
      title: "Mi Perfil",
      description: "Consulta y edita tus datos",
      icon: <Person sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/admin/myProfile"
    }
  ];

  return (
    <Box
      sx={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "24px 16px 64px"
      }}
    >
      <Box
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
          Panel de Administración
        </Typography>

        <Typography sx={{color: "#6b7280", mt: 1}}>Gestiona el consultorio, los recepcionistas y los pacientes</Typography>
      </Box>

      <Grid container spacing={3} sx={{justifyContent: "center"}}>
        {cards.map((card) => (
          <Grid
            key={card.title}
            size={{ xs: 12, md: 4 }}
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
              <Typography textalign="center">{card.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;