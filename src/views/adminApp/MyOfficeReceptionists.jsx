import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { myReceptionists } from '../../store/AdminSlice';
import { Box, Grid, Paper, Typography } from '@mui/material';
import CustomButton from '../../components/CustomButton';

const MyOfficeReceptionists = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() =>{
    dispatch(myReceptionists()).unwrap().then(data => setData(data));
  }, [dispatch])
  console.log(data);

  const handleCustomButton = () => {
        navigate(-1);
  }

  const handleReceptionistForm = () => {
        navigate("/admin/receptionistForm");
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
        }}>Recepcionistas del Consultorio</Typography>
      </Box>

        <Box sx={{ alignSelf: "flex-start" }}>
          <CustomButton color="#fff" text="Volver atrás" backgroundColor='#6b7280' onClick={handleCustomButton}/>
          <CustomButton color="#fff" text="Añadir un Recepcionista" backgroundColor='#2563eb' onClick={handleReceptionistForm}/>
        </Box>

          {data.length > 0 ? (
              data.map((receptionist) => {
                const receptionistName =
                receptionist.secondSurname && receptionist.firstSurname
                  ? `${receptionist.firstSurname} ${receptionist.secondSurname}, ${receptionist.name}`
                  : receptionist.firstSurname
                  ? `${receptionist.firstSurname}, ${receptionist.name}`
                  : receptionist.name;
                return <Paper
                  key={receptionist.id}
                  elevation={2}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="h6" sx={{fontWeight: 700, mb: 2}}>{receptionistName}</Typography>

                  <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography fontWeight={600}>Correo electrónico</Typography>
                      <Typography>{receptionist.email}</Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography fontWeight={600}>Teléfono</Typography>
                      <Typography>{receptionist.telephone || "No disponible"}</Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography fontWeight={600}>Fecha de nacimiento</Typography>
                      <Typography>{receptionist.birthdate}</Typography>
                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography fontWeight={600}>Ciudad</Typography>
                      <Typography>{receptionist.city || "No disponible"}</Typography>
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
                  No hay recepcionistas registrados
                </Typography>
              </Paper>
            )}
      </Box>
    </Box>
  )
}


export default MyOfficeReceptionists
