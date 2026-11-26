import React from 'react'
import CustomBox from '../../components/CustomBox';
import { Box, Grid } from '@mui/system';
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';
import { Block, DeleteForever, Euro, ScheduleSend } from '@mui/icons-material';

const ReceptionistDashboard = () => {
  const tarjetas = [
    {
        title: "Confirmar Citas",
        description: "Confirma las citas de pacientes presentes en el día de hoy",
        icon: <ScheduleSend sx={{ fontSize: 60, color: "#2563eb" }} />,
        route: "/recepcionista/todasCitasHoy"
    },
    {
        title: "Transacciones",
        description: "Realiza transacciones añadiendo el precio",
        icon: <Euro sx={{ fontSize: 60, color: "#2563eb" }} />,
        route: "/recepcionista/pago"
    },
    {
        title: "Supresión de Pacientes",
        description: "Implementa la supresión de datos de aquellos pacientes que lo deseen",
        icon: <DeleteForever sx={{ fontSize: 60, color: "#2563eb" }} />,
        route: "/recepcionista/suprimirPaciente"
    },
    {
        title: "Penalización de Pacientes",
        description: "Si el contexto lo requiere, penaliza a usuarios que han hecho uso indebido",
        icon: <Block sx={{ fontSize: 60, color: "#2563eb" }} />,
        route: "/recepcionista/penalizar"
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
          Panel del Recepcionista
        </Typography>

        <Typography
          sx={{
            color: "#6b7280",
            mt: 1
          }}
        >
          Modera, confirma, realiza, suprime, o penaliza
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

export default ReceptionistDashboard
