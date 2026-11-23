import React, { useEffect, useState } from 'react'
import { confirmarCita, misCitasDoctorHoy, todasCitasHoy } from '../../store/AppointmentSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CustomBox from '../../components/CustomBox';
import { Box, Card, Chip, Divider, Pagination, Typography } from '@mui/material';
import CustomButton from '../../components/CustomButton';
import dayjs from "dayjs"
import 'dayjs/locale/es';
import { Stack } from '@mui/system';
import { toast } from 'react-toastify';

const AllAppointmentsToday = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [datos, setDatos] = useState({
      count: 0,
      next: null,
      previous: null,
      results: []
  });
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    dispatch(todasCitasHoy({page: pagina})).unwrap().then((datos) => setDatos(datos));
  }, [dispatch, pagina])
  console.log(datos);

    const cargarCitas = async () => {
      try {
        const respuesta = await dispatch(todasCitasHoy({page: pagina})).unwrap()
        console.log(respuesta);
        setDatos(respuesta);
      } catch (error) {
        console.error("Error al cargar citas:", error);
      }
  };

  const handleCustomButton = async (id) => {
    try {
      await dispatch(confirmarCita(id)).unwrap();
      toast.success("Cita confirmada");
      cargarCitas();
    } catch (err) {
      toast.error(err);
    }
  }
  return (
    <CustomBox>
        <Typography
        variant="h1"
        sx={{
          fontSize: "clamp(2rem, 4vw, 2.8rem)",
          fontWeight: 800,
          color: "#1f2933",
          margin: "12px",
        }}
        >
          Todas las Citas de Hoy
        </Typography>

        <Box sx={{ mt: 6 }}>
            {datos?.results?.length > 0 ? (
            <Box
                sx={{
                    
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                    },
                    gap: 3,
                    mt: 3,
                    alignItems: "start",
                }}
            >
                {datos.results.map((consulta) => 
                  <Card
                    key={consulta.id}
                    sx={{
                      p: 2, borderRadius: 3,
                      width: "100%", margin: "10px",
                      border: "1px solid black"
                    }}
                  >
                    <Stack spacing={1.5}>
                      <Stack direction="row" sx={{ justifyContent:"space-between", alignItems:"center"}}>
                        <Stack direction="row" spacing={2} sx={{ alignItems:"center"}}>
                          <Typography fontWeight={700}>
                            {dayjs(consulta.fechaInicio).format("HH:mm")} {" - "} {dayjs(consulta.fechaFin).format("HH:mm")}
                          </Typography>

                          <Chip label={consulta.estado} size="small" color={consulta.estado === "pendiente" ? "warning" : "success"}/>
                        </Stack>

                        <Typography variant="caption" color="text.secondary">Cita #{consulta.id}</Typography>
                      </Stack>

                      <Divider />

                      <Stack direction={{ xs: "column", md: "row" }} spacing={3}   
                      sx={{ alignItems: { xs: "flex-start", md: "center", }, justifyContent: "space-around"} } >
                        <Box flex={1}>
                          <Typography variant="caption" color="text.secondary">Paciente</Typography>
                          <Typography fontWeight={600}>{consulta.pacienteNombre}</Typography>
                        </Box>

                        <Box flex={1}>
                          <Typography variant="caption" color="text.secondary">Doctor</Typography>
                          <Typography fontWeight={600}>{consulta.doctorNombre}</Typography>
                        </Box>

                        <Box flex={1}>
                          <Typography variant="caption" color="text.secondary">Fecha</Typography>
                          <Typography fontWeight={600}>{dayjs(consulta.fechaInicio).format("DD/MM/YYYY")}</Typography>
                        </Box>
                      </Stack>

                      <Divider />

                      <Stack direction="row" sx={{ justifyContent:"space-between", alignItems:"center"}}>

                        <CustomButton text="Confirmar cita" onClick={() => handleCustomButton(consulta.id)} disabled={consulta.estado != "pendiente"}/>
                      </Stack>

                    </Stack>
                  </Card>)
                }
            </Box>
        ) : (
            <Typography
                sx={{
                textAlign: "center",
                color: "#6b7280",
                fontSize: "1.1rem",
                }}
            >
                No se han encontrado citas para hoy...
            </Typography>
            )}
        </Box>
      

    <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
          mb: 3,
        }}
      >
        <Pagination count={Math.ceil(datos.count / 6)} page={pagina}
          onChange={(e, valor) => {
            setPagina(valor);
          }}
          color="primary" size="large"
        />
      </Box>
      
    </CustomBox>
  )
}

export default AllAppointmentsToday
