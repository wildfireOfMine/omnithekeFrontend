import { Card, CardContent, Chip, Divider, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import React from 'react'
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import DescriptionIcon from "@mui/icons-material/Description";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import NotesIcon from "@mui/icons-material/Notes";
import CustomButton from './CustomButton';
import { Link } from "react-router-dom";

const CustomQuery = ({ consulta }) => {
  const doctor = consulta.doctor;
  const fecha = new Date(consulta.fechaRegistro);

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
            justifyContent: "center",
            alignItems: "flex-start",
            mb: 2,
          }}
        >
          <Box>
            <Typography variant="h6" fontWeight={700}>
              Consulta médica #{consulta.id}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {fecha.toLocaleDateString("es-ES", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </Typography>
          </Box>

        </Box>

        <Divider sx={{ mb: 2 }} />

        <Stack spacing={1.5}>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <CalendarMonthIcon color="action" fontSize="small" />

            <Typography variant="body2">
              <strong>Fecha:</strong>{" "}
              {fecha.toLocaleDateString("es-ES")}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <AccessTimeIcon color="action" fontSize="small" />

            <Typography variant="body2">
              <strong>Hora:</strong>{" "}
              {fecha.toLocaleTimeString("es-ES", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <PersonIcon color="action" fontSize="small" />

            <Typography variant="body2">
              <strong>Doctor:</strong>{" "}
              {doctor}
            </Typography>
          </Box>

          <Divider />

          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1.5 }}>
            <CustomButton text="Más información" variant="contained" component={Link} to={`${consulta.id}`}/>
          </Box>
          
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CustomQuery;