import { Card, CardContent, Typography, Box, Stack, Divider, Chip } from "@mui/material";
import React from 'react'
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";

const CustomAppointment = ({ appointment }) => {

  const doctor = appointment.doctor;
  console.log(appointment);
  console.log(doctor);

  const fecha = new Date(appointment.fechaInicio);

  return (
    <Card
      sx={{
        borderRadius: 4,
        border: "1px solid",
        borderColor: "divider",
        transition: "all 0.25s ease",

        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 5,
        },
      }}
    >
      <CardContent sx={{ p: 3 }}>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Box>
            <Typography
              variant="h6"
              fontWeight={700}
            >
              Cita médica
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              {fecha.toLocaleDateString("es-ES", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </Typography>
          </Box>

          <Chip label={appointment.estado} size="small"/>
        </Box>

        <Divider sx={{ mb: 2 }} />

        <Stack spacing={1.5}>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <CalendarMonthIcon color="action" fontSize="small"/>

            <Typography variant="body2">
              <strong>Fecha:</strong>{" "}
              {fecha.toLocaleDateString("es-ES")}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <AccessTimeIcon color="action" fontSize="small"/>

            <Typography variant="body2">
              <strong>Hora:</strong>{" "}
              {fecha.toLocaleTimeString("es-ES", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.5,
            }}
          >
            <PersonIcon color="action" fontSize="small"/>

            <Typography variant="body2">
              <strong>Doctor:</strong>{" "}
              {doctor}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "flex-start",
              gap: 1.5,
            }}
          >
            <DescriptionIcon color="action" fontSize="small"/>

            <Typography variant="body2">
              <strong>Motivo:</strong>{" "}
              {appointment.motivo}
            </Typography>
          </Box>

        </Stack>

      </CardContent>
    </Card>
  );
};

export default CustomAppointment;