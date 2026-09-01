import React, { useEffect, useState } from 'react'
import CustomBox from '../../components/CustomBox'
import { Card, CardContent, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { doctor } from '../../store/UserSlice'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar'
import { Box, Grid } from '@mui/system'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Avatar, Chip, Divider, Stack } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import BadgeIcon from "@mui/icons-material/Badge";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { horariosDisponibles } from '../../store/AppointmentSlice'

const NewAppointment = () => {
  const dispatch = useDispatch();
  const {doctorId} = useParams();
  const [datos, setDatos] = useState();
  const [horarios, setHorarios] = useState();

  useEffect(() =>{
    dispatch(doctor(doctorId)).unwrap().then(datos => setDatos(datos));
    dispatch(horariosDisponibles(doctorId)).unwrap().then(horarios => setHorarios(horarios));
  }, [dispatch])
  console.log(datos);
  console.log(horarios);

  return (
    <CustomBox>
      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
          mb: 4,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            color: "#1f2933",
            mb: 1,
          }}
        >
          Solicitar una cita
        </Typography>

        <Typography
          sx={{
            color: "#6b7280",
            fontSize: "1.05rem",
          }}
        >
          Selecciona el día y la hora que prefieras para tu consulta.
        </Typography>
      </Box>

      <Box
        sx={{
          maxWidth: "1100px",
          mx: "auto",
        }}
      >

        <Grid container spacing={3}>

          <Grid size={{ xs: 12, md: 5 }}>

            <Card
              sx={{
                height: "100%",
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              }}
            >
              <CardContent sx={{ p: 4 }}>

                <Typography
                  variant="overline"
                  sx={{
                    color: "#2563eb",
                    fontWeight: 700,
                    letterSpacing: 1,
                  }}
                >
                  Médico seleccionado
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    mt: 2,
                    mb: 3,
                  }}
                >

                  <Avatar
                    sx={{
                      width: 72,
                      height: 72,
                      fontSize: "1.5rem",
                      fontWeight: 700,
                    }}
                  >
                    {datos?.nombre?.charAt(0)}
                    {datos?.primerApellido?.charAt(0)}
                  </Avatar>

                  <Box>

                    <Typography variant="h5" fontWeight={800}>
                      Dr. {datos?.nombre}{" "}
                      {datos?.primerApellido}
                    </Typography>

                    <Chip
                      label={datos?.especialidad}
                      size="small"
                      sx={{
                        mt: 1,
                        fontWeight: 600,
                      }}
                    />

                  </Box>

                </Box>


                <Divider sx={{ mb: 3 }} />

                <Stack spacing={2}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <EmailIcon color="action"/>

                    <Box>
                      <Typography variant="caption" color="text.secondary">Correo electrónico</Typography>
                      <Typography variant="body2">{datos?.correo}</Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <PhoneIcon color="action"/>

                    <Box>
                      <Typography variant="caption" color="text.secondary">Teléfono</Typography>
                      <Typography variant="body2">{datos?.telefono}</Typography>
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                    }}
                  >
                    <BadgeIcon color="action"/>

                    <Box>
                      <Typography variant="caption" color="text.secondary">Nº de colegiado</Typography>
                      <Typography variant="body2">{datos?.numeroColegiado}</Typography>
                    </Box>
                  </Box>
                </Stack>

              </CardContent>
            </Card>

          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>

            <Card
              sx={{
                height: "100%",
                borderRadius: 4,
                border: "1px solid",
                borderColor: "divider",
                boxShadow: "0 8px 30px rgba(0,0,0,0.06)",
              }}
            >

              <CardContent sx={{ p: 4 }}>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: 1,
                  }}
                >

                  <CalendarMonthIcon
                    sx={{
                      fontSize: 28,
                    }}
                  />

                  <Typography variant="h5"fontWeight={800}>Elige un día</Typography>

                </Box>


                <Typography color="text.secondary"
                  sx={{ mb: 3 }}
                >
                  Selecciona una fecha disponible para tu consulta.
                </Typography>


                <Divider sx={{ mb: 2 }} />


                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >

                  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">

                    <DateCalendar
                      disablePast

                      shouldDisableDate={(date) => {
                        const dia = date.day();
                        return !horarios.some(
                            horario => horario.diaSemana === dia
                        );
                      }}
                    />

                  </LocalizationProvider>

                </Box>

                <Box
                  sx={{
                    mt: 2,
                    p: 2,
                    borderRadius: 2,
                    backgroundColor: "#f8fafc",
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >

                  <AccessTimeIcon fontSize="small" color="action"/>

                  <Typography variant="body2" color="text.secondary">
                    Después de seleccionar el día podrás
                    elegir una hora disponible.
                  </Typography>
                </Box>

              </CardContent>
            </Card>
          </Grid>
          
        </Grid>
      </Box>
    </CustomBox>
  )
}

export default NewAppointment
