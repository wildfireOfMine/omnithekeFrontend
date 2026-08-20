import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomBox from '../../components/CustomBox'
import CustomButton from '../../components/CustomButton'
import CustomCard from '../../components/CustomCard'
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
    return (
    <CustomBox>
      <Box
        sx={{
          minHeight: "65vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
          py: 6,

          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Box sx={{ flex: 1,
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 800,
              color: "#1f2933",
              lineHeight: 1.1,
              mb: 3,
            }}
          >
            Bienvenido a Omnitheke
          </Typography>

          <Typography
            sx={{
              fontSize: {
                xs: "1.1rem",
                md: "1.35rem",
              },
              lineHeight: 1.6,
              color: "#4b5563",
              maxWidth: "550px",
              mx: {
                xs: "auto",
                md: 0,
              },
              mb: 4,
            }}
          >
            Tu consultorio médico de confianza. Gestiona tus citas y accede a tus servicios médicos de forma sencilla y segura.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: {
                xs: "center",
                md: "flex-start",
              },
              flexWrap: "wrap",
            }}
          >
            <CustomButton color="#fff" backgroundColor="#D71029" text="Pedir cita" variant="contained" onClick={()=>navigate("/iniciarSesion")}/>
            <CustomButton color="#2563eb" text="Acceder al portal" variant="outlined" onClick={()=>navigate("/portalPaciente")}/>
          </Box>
        </Box>


        <Box sx={{ flex: 1, display: "flex", justifyContent: "center"}}>
          <Box
            component="img"
            src="/oficina.jpg"
            alt="Consultorio médico Omnitheke"
            sx={{
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              borderRadius: 4,
              objectFit: "cover",
            }}
          />
        </Box>
      </Box>


      <Box sx={{py: 6, borderTop: "1px solid #e5e7eb"}}>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: "#1f2933",
            mb: 5,
          }}
        >
          Nuestros servicios
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          <CustomCard title="Citas médicas" text="Consulta la disponibilidad de nuestros doctores y solicita una cita"/>
          <CustomCard title="Atención médica" text="Recibe atención personalizada de nuestros profesionales"/>
          <CustomCard title="Tu información" text="Consulta tus citas y la información relacionada con tu atención médica"/>
        </Box>
      </Box>
    </CustomBox>
  )
}

export default Home
