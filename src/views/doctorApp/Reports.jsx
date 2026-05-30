import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reportsGet } from '../../store/DoctorSlice';
import CustomButton from '../../components/CustomButton';

const Reports = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() =>{
    dispatch(reportsGet()).unwrap().then(data => setData(data));
  }, [dispatch])
  console.log(data);

  const handleCustomButton = () => {
        navigate(-1);
  }

  const handlePatientForm = () => {
        navigate("/doctor/reportForm");
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
        <Box component="div" sx={{
          textAlign: "center"
        }}>
          <Typography variant='h1' sx={{
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            color: "#1f2933",
            margin: "12px",
            fontWeight: 800
          }}>Tus Informes</Typography>
        </Box>

        <Box sx={{ alignSelf: "flex-start" }}>
          <CustomButton color="#fff" text="Volver atrás" backgroundColor='#2563eb' onClick={handleCustomButton}/>
          <CustomButton color="#fff" text="Añadir un Informe" backgroundColor='#2563eb' onClick={handlePatientForm}/>
        </Box>
        

        {data.length > 0 ? (
          data.map((report) => (
            <Paper
              key={report.id}
              elevation={2}
              sx={{
                p: 3,
                borderRadius: 3,
              }}
            >
              <Typography variant="h6" sx={{fontWeight: 700, mb: 2}}>{report.subject}</Typography>

              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Paciente</Typography>
                  <Typography>{report.patientName}</Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Doctor</Typography>
                  <Typography>{report.doctorName}</Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography fontWeight={600}>Fecha</Typography>
                  <Typography>{new Date(report.reportTimestamp).toLocaleString("es-ES")}</Typography>
                </Grid>

                {report.incident && (
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography fontWeight={600}>Episodio</Typography>
                    <Typography>{report.incidentName}</Typography>
                  </Grid>
                )}

                <Grid size={12}>
                  <Typography fontWeight={600}>Contenido</Typography>
                  <Typography>{report.content}</Typography>
                </Grid>

              </Grid>
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
            <Typography variant="h6">No hay informes registrados</Typography>
          </Paper>
        )}
      </Box>
    </Box>
  )
}

export default Reports
