import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { myIncidentsAsPatient } from '../../store/PatientSlice';
import CustomButton from '../../components/CustomButton';

const MyIncidents = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  
  useEffect(() =>{
    dispatch(myIncidentsAsPatient()).unwrap().then(data => setData(data));
  }, [dispatch])
  console.log(data);

  const handleCustomButton = () => {
        navigate(-1);
  }

  return (
    <Box sx={{
      maxWidth: "860px",
      margin: "0 auto",
      padding: "10px 16px 64px"
    }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          mt: 4
        }}
      >
        <Typography variant='h1' sx={{
          fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
          color: "#1f2933",
          margin: "12px",
          fontWeight: 800,
          textAlign: 'center'
        }}>Tus Episodios</Typography>
      

        <Box sx={{ alignSelf: "flex-start" }}>
          <CustomButton color="#fff" text="Volver Atrás" backgroundColor="#6b7280" onClick={handleCustomButton}/>
        </Box>
        <Typography variant="h6" sx={{ fontWeight: 700}}>Episodios activos</Typography>
      {data?.activeIncidents?.length > 0 ? (
          data.activeIncidents.map((active) => (
            <Paper
              key={active.id}
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 3
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2}}>Episodio #{active.id}</Typography>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Descripción</Typography>
                  <Typography>{active.description}</Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Activo desde:</Typography>
                  <Typography>{new Date(active.beginningDate).toLocaleString("es-ES")}</Typography>
                </Grid>
              </Grid>
              <Link to={`${active.id}`}><Typography fontWeight={600}>Ver informes asociados</Typography></Link>
            </Paper>
          ))
        ) : (
          <Paper
            sx={{
              p: 4,
              borderRadius: 3,
              textAlign: "center"
            }}
          >
            <Typography variant="h6">No tienes episodios nuevos</Typography>
          </Paper>
        )}
        <Typography variant="h6" sx={{ fontWeight: 700}}>Episodios antiguos</Typography>
        {data?.oldIncidents?.length > 0 ? (
          data.oldIncidents.map((old) => (
            <Paper
              key={old.id}
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 3
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2}}>Episodio #{old.id}</Typography>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Descripción</Typography>
                  <Typography>{old.description}</Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Activo desde:</Typography>
                  <Typography>{new Date(old.beginningDate).toLocaleString("es-ES")}</Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Cerrado el:</Typography>
                  <Typography>{new Date(old.endingDate).toLocaleString("es-ES")}</Typography>
                </Grid>
              </Grid>
              <Link to={`${old.id}`}><Typography fontWeight={600}>Ver informes asociados</Typography></Link>
            </Paper>
          ))
        ) : (
          <Paper
            sx={{
              p: 4,
              borderRadius: 3,
              textAlign: "center"
            }}
          >
            <Typography variant="h6">No tienes episodios antiguos</Typography>
          </Paper>
        )}
      </Box>
    </Box>
  )
}

export default MyIncidents
