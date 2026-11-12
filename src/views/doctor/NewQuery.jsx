import React, { useEffect, useState } from 'react'
import CustomBox from '../../components/CustomBox'
import { TextField, Typography } from '@mui/material'
import { Box, Grid } from '@mui/system'
import { conseguirCita } from '../../store/AppointmentSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CustomButton from '../../components/CustomButton'
import { nuevaConsulta } from '../../store/HistorySlice'
import { toast } from 'react-toastify'

const NewQuery = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [datos, setDatos] = useState({});
  const {id} = useParams();

  useEffect(() => {
    dispatch(conseguirCita(id)).unwrap().then((datos) => setDatos(datos));
  }, [dispatch])
  console.log(datos);


  const handleFormulario = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.currentTarget);
    const consulta = {
      paciente: datos.paciente,
      doctor: datos.doctor,
      cita: datos.id,
      diagnostico: e.currentTarget.diagnostico.value,
      tratamiento: e.currentTarget.tratamiento.value,
      observaciones: e.currentTarget.observaciones.value,
    }

    await dispatch(nuevaConsulta(consulta)).unwrap();
    toast.success("¡Consulta creada con éxito!");
  }

  const handleCustomButton = async (e) => {
    navigate(-1);
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
          Nueva Consulta
        </Typography>

        <Box
          component="form"
          sx={{
            backgroundColor: "#fff",
            borderRadius: "16px",
            padding: {
              xs: "28px 22px",
              sm: "36px",
            },
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
            border: "1px solid #e5e7eb",

            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
          onSubmit={handleFormulario}
        >

          <Grid container spacing={3}>

            <Grid size={{ xs: 12, md: 4 }}>
              <Typography component="label" htmlFor="nombre"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Nº de Cita:
              </Typography>
              <TextField fullWidth type="text" id="nombre" name="nombre" value={datos.id}/>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Typography component="label" htmlFor="primerApellido"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Paciente atendido
              </Typography>
              <TextField fullWidth type="text" id="primerApellido" name="primerApellido" value={datos.pacienteNombre}/>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Typography component="label" htmlFor="segundoApellido"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Doctor responsable
              </Typography>
              <TextField fullWidth type="text" id="segundoApellido" name="segundoApellido" value={datos.doctorNombre}/>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }}>
              <Typography component="label" htmlFor="diagnostico"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Diagnóstico
              </Typography>
              <TextField fullWidth type="text" id="diagnostico" name="diagnostico"/>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }}>
              <Typography component="label" htmlFor="tratamiento"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Tratamiento prescrito
              </Typography>
              <TextField fullWidth type="text" id="tratamiento" name="tratamiento"/>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }}>
              <Typography component="label" htmlFor="observaciones"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Observaciones
              </Typography>
              <TextField fullWidth type="text" id="observaciones" name="observaciones"/>
            </Grid>

          </Grid>

          <Box sx={{ display: "flex", justifyContent: "space-between", padding: "20px"}}>
            <CustomButton text="Añadir" color="white" backgroundColor='#16a34a' type="submit"/>
            <CustomButton color="#fff" text="Volver Atrás" backgroundColor="#6b7280" onClick={handleCustomButton}/>
          </Box>
        </Box>
      
    </CustomBox>
  )
}

export default NewQuery
