import { Box, Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { myDoctors } from '../../store/AdminSlice';
import CustomButton from '../../components/CustomButton';
import { doctorGet } from '../../store/OfficeSlice';

const MyOfficeDoctors = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const role = useSelector(
        (state) => state.account.session.role
    )
  console.log(role);
  
  useEffect(() =>{
    if (role==="admin") {
      dispatch(myDoctors()).unwrap().then(data => setData(data));
    } else if (role==="receptionist") {
      dispatch(doctorGet()).unwrap().then(data => setData(data));
    } 
    
  }, [dispatch, role])
  console.log(data);

  const handleCustomButton = () => {
        navigate(-1);
  }

  const handleDoctorForm = () => {
        navigate("/admin/doctorForm");
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
          }}>Doctores del Consultorio</Typography>
        </Box>

          <Box sx={{ alignSelf: "flex-start" }}>
            <CustomButton color="#fff" text="Volver atrás" backgroundColor='#6b7280' onClick={handleCustomButton}/>
            <CustomButton color="#fff" text="Añadir un Paciente" backgroundColor='#2563eb' onClick={handleDoctorForm}/>
          </Box>

            {data.length > 0 ? (
              data.map((doctor) => {
                const doctorName =
                doctor.secondSurname && doctor.firstSurname
                  ? `${doctor.firstSurname} ${doctor.secondSurname}, ${doctor.name}`
                  : doctor.firstSurname
                  ? `${doctor.firstSurname}, ${doctor.name}`
                  : doctor.name;
                return <Paper
                  key={doctor.id}
                  elevation={2}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="h6" sx={{fontWeight: 700, mb: 2}}>{doctorName}</Typography>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography fontWeight={600}>Correo electrónico</Typography>
                      <Typography>{doctor.email}</Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography fontWeight={600}>Teléfono</Typography>
                      <Typography>{doctor.telephone || "No disponible"}</Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography fontWeight={600}>Fecha de nacimiento</Typography>
                      <Typography>{doctor.birthdate}</Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography fontWeight={600}>Ciudad</Typography>
                      <Typography>{doctor.city || "No disponible"}</Typography>
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
                  No hay doctores registrados
                </Typography>
              </Paper>
            )}
      </Box>
    </Box>
  )
}

export default MyOfficeDoctors
