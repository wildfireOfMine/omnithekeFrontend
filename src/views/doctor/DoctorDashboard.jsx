import React from 'react'
import CustomBox from '../../components/CustomBox';
import { Box, Grid } from '@mui/system';
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';
import { Event, HealthAndSafety, MedicalInformation, MedicalServices, SupportAgent } from '@mui/icons-material';

const DoctorDashboard = () => {
  const tarjetas = [
    {
        title: "Gestionar Doctores",
        description: "Añade, modifica o elimina doctores de la consulta",
        icon: <MedicalServices sx={{ fontSize: 60, color: "#2563eb" }} />,
        route: "/administrador/doctores"
    },
    {
        title: "Gestionar Recepcionistas",
        description: "Añade, modifica o elimina recepcionistas",
        icon: <SupportAgent sx={{ fontSize: 60, color: "#2563eb" }} />,
        route: "/administrador/recepcionistas"
    },
    {
        title: "Gestionar Aseguradoras",
        description: "Administra las aseguradoras disponibles",
        icon: <HealthAndSafety sx={{ fontSize: 60, color: "#2563eb" }} />,
        route: "/administrador/aseguradoras"
    }
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
          Panel del Administrador
        </Typography>

        <Typography
          sx={{
            color: "#6b7280",
            mt: 1
          }}
        >
          DOCTOR
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

export default DoctorDashboard
