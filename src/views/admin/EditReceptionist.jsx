import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { doctor, doctorPut, recepcionistaGet, recepcionistaPut, todasAseguradoras, todasEspecialidades } from '../../store/UserSlice';
import { toast } from 'react-toastify';
import CustomBox from '../../components/CustomBox';
import { Box, Grid } from '@mui/system';
import { MenuItem, Select, TextField, Typography } from '@mui/material';
import CustomButton from '../../components/CustomButton';
import countries from "i18n-iso-countries";
import es from "i18n-iso-countries/langs/es.json";

countries.registerLocale(es);

const EditReceptionist = () => {
  const [datos, setDatos] = useState([]);
  const [sexo, setSexo] = useState("");
  const [tipoDocumento, setTipoDocumento] = useState("");
  const [pais, setPais] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { recepcionistaId } = useParams();

  useEffect(() =>{
      dispatch(recepcionistaGet(recepcionistaId)).unwrap().then((datos) => {
        setDatos(datos);
        setSexo(datos.sexo);
        setTipoDocumento(datos.tipoDocumento);
        setPais(datos.pais);
      } );
  }, [dispatch]);
  console.log(datos);

  const handleCambio = (e) => {
    const { name, value } = e.target;

    setDatos((datosAnteriores) => ({...datosAnteriores, [name]: value} ));
  };

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
    
    const recepcionista = {
        nombre: e.currentTarget.nombre.value,
        primerApellido: e.currentTarget.primerApellido.value,
        segundoApellido: e.currentTarget.segundoApellido.value,
        sexo: e.currentTarget.sexo.value,
        fechaNacimiento: e.currentTarget.fechaNacimiento.value,
        tipoDocumento: e.currentTarget.tipoDocumento.value,
        documentoIdentidad: e.currentTarget.documento.value,
        pais: e.currentTarget.pais.value,
        telefono: e.currentTarget.telefono.value,
    }
    try {
        await dispatch(recepcionistaPut({recepcionistaPk: recepcionistaId, recepcionista})).unwrap();
        toast.success("Cuenta editada con éxito");
        navigate("/admin/recepcionistas");
    } catch (err) {
        console.log(err);
        Object.entries(err).forEach(([campo, mensajes]) => {
            mensajes.forEach((mensaje) => {
              toast.error(`${campo}: ${mensaje}`);
            });
          });
        toast.error(err);
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
          Editar Recepcionista
        </Typography>

        <Typography sx={{ textAlign: "center", color: "#6b7280", fontSize: "1rem", mb: 4,}}>Edita los datos de este recepcionista...</Typography>

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
              <TextField fullWidth type="text" id="nombre" name="nombre" value={datos.nombre ?? ""} onChange={handleCambio}/>
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
              <TextField fullWidth type="text" id="primerApellido" name="primerApellido" value={datos.primerApellido ?? ""} onChange={handleCambio}/>
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
              <TextField fullWidth type="text" id="segundoApellido" name="segundoApellido" value={datos.segundoApellido ?? ""} onChange={handleCambio}/>
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

              <TextField fullWidth type="date" id="fechaNacimiento" name="fechaNacimiento" value={datos.fechaNacimiento ?? ""} onChange={handleCambio}/>
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
              <TextField fullWidth type="text" id="documento" name="documento" value={datos.documentoIdentidad ?? ""} onChange={handleCambio}/>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                component="label"
                htmlFor="pais"
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
               <Select fullWidth id="pais" name="pais" value={datos.pais ?? ""} onChange={handlePais} displayEmpty>
                  <MenuItem value="" disabled>Selecciona un país</MenuItem>
                  {paises.map(([codigo, nombre]) => (
                    <MenuItem key={codigo} value={nombre}>
                      {nombre}
                    </MenuItem>
                  ))}
              </Select>
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
              <TextField fullWidth type="tel" id="telefono" name="telefono" value={datos.telefono ?? ""} onChange={handleCambio}/>
            </Grid>

          </Grid>

        

          <CustomButton color="#fff" text="Editar" backgroundColor="#2563eb" type="submit"/>

        </Box>
      </Box>
    </CustomBox>
  )
}

export default EditReceptionist
