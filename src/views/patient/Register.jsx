import React, { useState } from 'react'
import CustomBox from '../../components/CustomBox'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box, Grid } from '@mui/system'
import CustomButton from '../../../../oldProyecto/omnithekeFrontendOld/src/components/CustomButton'
import countries from "i18n-iso-countries";
import es from "i18n-iso-countries/langs/es.json";

countries.registerLocale(es);

const Register = () => {
  const [sexo, setSexo] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [pais, setPais] = useState("");

  const paises = Object.entries(
    countries.getNames("es", { select: "official" })
  );

  const handlePais = (e) => {
    setPais(e.target.value);
  };

  const handleSexo = (e) => {
    setSexo(e.target.value);
  }

  const handleTipoDocumento = (e) => {
    setTipoDocumento(e.target.value);
  }

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
              <Typography component="label" htmlFor="nombre"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Nombre
              </Typography>
              <TextField fullWidth type="text" id="nombre" name="nombre"/>
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
                Primer apellido
              </Typography>
              <TextField fullWidth type="text" id="primerApellido" name="primerApellido"/>
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
                Segundo apellido
              </Typography>
              <TextField fullWidth type="text" id="segundoApellido" name="segundoApellido"/>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography component="label" htmlFor="sexo"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Sexo
              </Typography>
              <Select fullWidth value={sexo} id="sexo" name="sexo" onChange={handleSexo} displayEmpty>
                <MenuItem value="" disabled>Selecciona una opción</MenuItem>
                <MenuItem value="V">Varón</MenuItem>
                <MenuItem value="M">Mujer</MenuItem>
              </Select>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography component="label" htmlFor="fechaNacimiento"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Fecha de Nacimiento
              </Typography>

              <TextField fullWidth type="date" id="fechaNacimiento" name="fechaNacimiento"/>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography component="label" htmlFor="tipoDocumento"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Tipo de Documento
              </Typography>
              <Select fullWidth value={tipoDocumento} id="tipoDocumento" name="tipoDocumento" onChange={handleTipoDocumento} displayEmpty>
                <MenuItem value="" disabled>Selecciona una opción</MenuItem>
                <MenuItem value="DNI">DNI</MenuItem>
                <MenuItem value="NIE">NIE</MenuItem>
              </Select>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography component="label" htmlFor="documento"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Documento
              </Typography>
              <TextField fullWidth type="text" id="documento" name="documento" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                component="label"
                htmlFor="fechaNacimiento"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                País
              </Typography>
               <Select fullWidth id="pais" name="pais" value={pais} onChange={handlePais} displayEmpty>
                  <MenuItem value="" disabled>Selecciona un país</MenuItem>
                  {paises.map(([codigo, nombre]) => (
                    <MenuItem key={codigo} value={nombre}>
                      {nombre}
                    </MenuItem>
                  ))}
              </Select>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography component="label" htmlFor="correoElectronico"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Correo electrónico
              </Typography>
              <TextField fullWidth type="email" id="correoElectronico" name="correoElectronico" />
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography component="label" htmlFor="telefono"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Teléfono
              </Typography>
              <TextField fullWidth type="tel" id="telefono" name="telefono"/>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography component="label" htmlFor="aseguradora"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Aseguradora
              </Typography>
              <TextField fullWidth type="text" id="aseguradora" name="aseguradora" />
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
