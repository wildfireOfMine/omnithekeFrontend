import { Box, Grid, Paper, Typography } from '@mui/material'
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';
import React from 'react'
import CustomCard from '../../components/CustomCard'
import { EventAvailable, Groups, MedicalServices, Person, PersonAddAlt1 } from '@mui/icons-material';

const ReceptionistDashboard = () => {
  const cards = [
    {
      title: "Mi Perfil",
      description: "Consulta y edita tu información profesional",
      icon: <Person sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/receptionist/myProfile"
    },
    {
      title: "Citas del Consultorio",
      description: "Confirma citas pendientes",
      icon: <EventAvailable sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/receptionist/myAppointments"
    },
    {
      title: "Pacientes del Consultorio",
      description: "Gestiona los pacientes del Consultorio",
      icon: <Groups sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/receptionist/myOfficePatients"
    },
    {
      title: "Doctores del Consultorio",
      description: "Gestiona los doctores del consultorio",
      icon: <MedicalServices sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/receptionist/myOfficeDoctors"
    },
    {
      title: "Añadir un Doctor a un Paciente",
      description: "Añade un Doctor a un Paciente",
      icon: <PersonAddAlt1 sx={{ fontSize: 60, color: "#2563eb" }} />,
      route: "/receptionist/attachNewDoctors"
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
          Panel del Recepcionista
        </Typography>

        <Typography sx={{color: "#6b7280", mt: 1}}>Consulta usuarios, gestiona pacientes, confirma citas</Typography>
        
      </Box>
      <Grid container spacing={3} sx={{justifyContent: "center"}}>
        {cards.map((card) => (
          <Grid
            key={card.title}
            size={{ xs: 12, sm: 4 }}
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

export default ReceptionistDashboard
