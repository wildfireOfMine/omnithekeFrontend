import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { myPatients } from '../../store/AdminSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import { patientGet } from '../../store/OfficeSlice';

const MyOfficePatients = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const role = useSelector(
        (state) => state.account.session.role
    )
  console.log(role);
  
  useEffect(() =>{
    if (role==="admin") {
      dispatch(myPatients()).unwrap().then(data => setData(data));
    } else if (role==="receptionist") {
      dispatch(patientGet()).unwrap().then(data => setData(data));
    } 
    
  }, [dispatch, role])
  console.log(data);

  const handleCustomButton = () => {
        navigate(-1);
  }

  const handlePatientForm = () => {
        navigate("/admin/patientForm");
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
          }}>Pacientes del Consultorio</Typography>
        </Box>
          <Box sx={{ alignSelf: "flex-start" }}>
            <CustomButton color="#fff" text="Volver atrás" backgroundColor='#6b7280' onClick={handleCustomButton}/>
            <CustomButton color="#fff" text="Añadir un Paciente" backgroundColor='#2563eb' onClick={handlePatientForm}/>
          </Box>
          

          {data.length > 0 ? (
            data.map((patient) => {
              const patientName =
              patient.secondSurname && patient.firstSurname
                ? `${patient.firstSurname} ${patient.secondSurname}, ${patient.name}`
                : patient.firstSurname
                ? `${patient.firstSurname}, ${patient.name}`
                : patient.name;
              return <Paper
                key={patient.id}
                elevation={2}
                sx={{
                  p: 3,
                  borderRadius: 3,
                }}
              >
                <Typography variant="h6" sx={{fontWeight: 700, mb: 2}}>{patientName}</Typography>

                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography fontWeight={600}>Correo electrónico</Typography>
                    <Typography>{patient.email}</Typography>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography fontWeight={600}>Teléfono</Typography>
                    <Typography>{patient.telephone || "No disponible"}</Typography>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography fontWeight={600}>Fecha de nacimiento</Typography>
                    <Typography>{patient.birthdate}</Typography>
                  </Grid>

                  <Grid size={{ xs: 12, md: 6 }}>
                    <Typography fontWeight={600}>Ciudad</Typography>
                    <Typography>{patient.city || "No disponible"}</Typography>
                  </Grid>
                </Grid>
              </Paper>
            })
          ) : (
            <Paper
              sx={{
                p: 4,
                borderRadius: 3,
                textAlign: "center"
              }}
            >
              <Typography variant="h6">
                No hay pacientes registrados
              </Typography>
            </Paper>
          )}
      
      </Box>
    </Box>
  )
}

export default MyOfficePatients
