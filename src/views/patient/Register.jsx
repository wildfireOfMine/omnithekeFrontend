import React from 'react'
import CustomBox from '../../components/CustomBox'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { TextField, Typography } from '@mui/material'
import { Box, Grid } from '@mui/system'
import CustomButton from '../../../../oldProyecto/omnithekeFrontendOld/src/components/CustomButton'

const Register = () => {

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const {documento, contrasena} = e.currentTarget;
    console.log(documento.value);
    console.log(contrasena.value);
  }

  return (
    <CustomBox>
      <Box
        sx={{
          width: "100%",
          maxWidth: "980px",
          mx: "auto",
          mt: { xs: 3, md: 6 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 800,
            color: "#1f2933",
            lineHeight: 1.1,
            textAlign: "center",
            mb: 1,
          }}
        >
          Regístrate
        </Typography>

        <Typography sx={{ textAlign: "center", color: "#6b7280", fontSize: "1rem", mb: 4,}}>Crea tu cuenta de Omnitheke</Typography>

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
        >

          <Grid container spacing={3}>

            <Grid size={{ xs: 12, md: 4 }}>
              <TextField fullWidth type="text" id="nombre" label="Nombre" name="nombre" variant="outlined"/>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <TextField fullWidth label="Primer apellido" name="primerApellido"/>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <TextField
                fullWidth
                label="Segundo apellido"
                name="segundoApellido"
              />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField
                fullWidth
                label="Teléfono"
                name="telefono"
              />
            </Grid>

            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="Correo electrónico"
                name="correo"
                type="email"
              />
            </Grid>

          </Grid>

        

          <CustomButton color="#fff" text="Iniciar sesión" backgroundColor="#2563eb" type="submit"/>

          <Box
            sx={{
              textAlign: "center",
              pt: 1,
              borderTop: "1px solid #e5e7eb",
            }}
          >
            <Typography
              component={RouterLink}
              to="/iniciarSesion"
              sx={{
                display: "inline-block",
                mt: 2,
                color: "#374151",
                textDecoration: "none",
                fontSize: "0.95rem",
                transition: "color 0.5s ease",
                "&:hover": {
                  color: "#2563eb",
                },
              }}
            >
              ¿Ya tienes una cuenta? <strong>Inicia sesión</strong>
            </Typography>
          </Box>

        </Box>
      </Box>
    </CustomBox>
  )
}

export default Register
