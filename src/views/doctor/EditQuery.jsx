import React, { useEffect, useState } from 'react'
import CustomBox from '../../components/CustomBox'
import { TextField, Typography } from '@mui/material'
import { Box, Grid } from '@mui/system'
import { conseguirCita } from '../../store/AppointmentSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CustomButton from '../../components/CustomButton'
import { consultaGet, consultaPatch } from '../../store/HistorySlice'
import { toast } from 'react-toastify'

const EditQuery = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [datos, setDatos] = useState({});
  const {id} = useParams();

  useEffect(() => {
    dispatch(consultaGet(id)).unwrap().then((datos) => setDatos(datos));
  }, [dispatch])
  console.log(datos);


  const handleFormulario = async (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.currentTarget);
    const consulta = {
      diagnostico: e.currentTarget.diagnostico.value,
      tratamiento: e.currentTarget.tratamiento.value,
      observaciones: e.currentTarget.observaciones.value,
    }

    try {
      await dispatch(consultaPatch({id, consulta})).unwrap();
      toast.success("¡Consulta modificada con éxito!");
      navigate(-1);
    } catch (err) {
      toast.error(err);
    }
    
  }

  const handleCambio = (e) => {
    const { name, value } = e.target;

    setDatos((datosAnteriores) => ({...datosAnteriores, [name]: value} ));
  };

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
              <TextField fullWidth type="text" disabled id="nombre" name="nombre" value={datos.id ?? ""}/>
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
              <TextField fullWidth type="text" disabled id="primerApellido" name="primerApellido" value={datos.pacienteNombre ?? ""}/>
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
              <TextField fullWidth type="text" disabled id="segundoApellido" name="segundoApellido" value={datos.doctorNombre ?? ""}/>
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
              <TextField fullWidth type="text" id="diagnostico" name="diagnostico" value={datos.diagnostico ?? ""} onChange={handleCambio}/>
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
              <TextField fullWidth type="text" id="tratamiento" name="tratamiento" value={datos.tratamiento ?? ""} onChange={handleCambio}/>
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
              <TextField fullWidth type="text" id="observaciones" name="observaciones" value={datos.observaciones ?? ""} onChange={handleCambio}/>
            </Grid>

          </Grid>

          <Box sx={{ display: "flex", justifyContent: "space-between", padding: "20px"}}>
            <CustomButton text="Modificar" color="white" backgroundColor='#16a34a' type="submit"/>
            <CustomButton color="#fff" text="Volver Atrás" backgroundColor="#6b7280" onClick={handleCustomButton}/>
          </Box>
        </Box>
      
    </CustomBox>
  )
}

export default EditQuery
