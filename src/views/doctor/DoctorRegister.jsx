import React, { useEffect, useState } from 'react'
import CustomBox from '../../components/CustomBox'
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import { MenuItem, Select, TextField, Typography } from '@mui/material'
import { Box, Grid } from '@mui/system'
import countries from "i18n-iso-countries";
import es from "i18n-iso-countries/langs/es.json";
import { toast } from 'react-toastify';
import { registrarse, registrarseDoctor, todasAseguradoras, todasEspecialidades } from '../../store/UserSlice';
import { useDispatch } from 'react-redux';
import CustomButton from '../../components/CustomButton';

const DoctorRegister = () => {

  const [sexo, setSexo] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [pais, setPais] = useState("");
  const [aseguradoras, setAseguradoras] = useState([]);
  const [aseguradoraEscogida, setAseguradoraEscogida] = useState([]);
  const [grupoSanguineo, setGrupoSanguineo] = useState("");
  const [especialidades, setEspecialidades] = useState([]);
  const [especialidadEscogida, setEspecialidadEscogida] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {uid, token} = useParams();

  useEffect(() =>{
      dispatch(todasAseguradoras()).unwrap().then((datos) => setAseguradoras(datos));
      dispatch(todasEspecialidades()).unwrap().then((datos) => setEspecialidades(datos));
  }, [dispatch])

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

  const handleFormulario = async (e) => {
    e.preventDefault();
    console.log(e.target);
    
    const doctor = {
        nombre: e.currentTarget.nombre.value,
        primerApellido: e.currentTarget.primerApellido.value,
        segundoApellido: e.currentTarget.segundoApellido.value,
        sexo: e.currentTarget.sexo.value,
        fechaNacimiento: e.currentTarget.fechaNacimiento.value,
        tipoDocumento: e.currentTarget.tipoDocumento.value,
        documentoIdentidad: e.currentTarget.documento.value,
        pais: e.currentTarget.pais.value,
        correo: e.currentTarget.correoElectronico.value,
        telefono: e.currentTarget.telefono.value,
        aseguradoras: aseguradoraEscogida === "Privado" ? [] : aseguradoraEscogida,
        password: contrasena.value,
        grupoSanguineo: grupoSanguineo,
        numeroColegiado: e.currentTarget.numeroColegiado.value,
        especialidad: especialidadEscogida,
        uid: uid,
        token: token
    }
    
    try {
      await dispatch(registrarseDoctor(doctor)).unwrap();
      toast.success("Cuenta registrada con éxito. ¡Puedes iniciar sesión como doctor!");
      console.log("Sesión iniciada");
      navigate("/iniciarSesion");
    } catch (err) {
      console.log(err);
    }
    
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

        <Typography sx={{ textAlign: "center", color: "#6b7280", fontSize: "1rem", mb: 4,}}>Crea tu cuenta de Omnitheke como Doctor</Typography>

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

            <Grid size={{ xs: 12, md: 12 }}>
              <Typography component="label" htmlFor="contrasena"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Contraseña
              </Typography>
              <TextField fullWidth type="password" id="contrasena" name="contrasena"/>
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

              <TextField select fullWidth
                slotProps={{select: {multiple: true}}}
                value={aseguradoraEscogida}
                onChange={(e) => {
                  const seleccion = e.target.value;

                  if (seleccion.includes("Privado")) {
                    setAseguradoraEscogida(["Privado"]);
                  } else {
                    setAseguradoraEscogida(
                      seleccion.filter((valor) => valor !== "Privado")
                    );
                  }
                }}
              >
                <MenuItem value="Privado">
                  Privado
                </MenuItem>
                {aseguradoras.map((asegur) => (
                  <MenuItem
                    key={asegur.id}
                    value={asegur.id}
                  >
                    {asegur.nombre}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Typography component="label" htmlFor="especialidad"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Especialidad
              </Typography>
              <TextField select fullWidth
                value={especialidadEscogida}
                onChange={(e) => {
                  setEspecialidadEscogida(e.target.value);
                }}
              >
                {especialidades.map((especia) => (
                  <MenuItem
                    key={especia.id}
                    value={especia.id}
                  >
                    {especia.nombre}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Typography component="label" htmlFor="aseguradora"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Grupo Sanguíneo
              </Typography>

               <TextField
                select
                fullWidth
                id="grupoSanguineo"
                name="grupoSanguineo"
                value={grupoSanguineo}
                onChange={(e) => {
                  setGrupoSanguineo(e.target.value);
                }}
              >
                <MenuItem value="">No especificado</MenuItem>
                <MenuItem value="A+">A+</MenuItem>
                <MenuItem value="A-">A-</MenuItem>
                <MenuItem value="B+">B+</MenuItem>
                <MenuItem value="B-">B-</MenuItem>
                <MenuItem value="AB+">AB+</MenuItem>
                <MenuItem value="AB-">AB-</MenuItem>
                <MenuItem value="O+">O+</MenuItem>
                <MenuItem value="O-">O-</MenuItem>

              </TextField>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Typography component="label" htmlFor="numeroColegiado"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Número de Colegiado
              </Typography>
              <TextField fullWidth type="text" id="numeroColegiado" name="numeroColegiado"/>
            </Grid>

          </Grid>

        

          <CustomButton color="#fff" text="Registrarme como doctor" backgroundColor="#2563eb" type="submit"/>

        </Box>
      </Box>
    </CustomBox>
  )
}

export default DoctorRegister
