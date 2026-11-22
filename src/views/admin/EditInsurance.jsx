import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CustomBox from '../../components/CustomBox';
import { Box, TextField, Typography } from '@mui/material';
import { aseguradoraGet, aseguradoraPost, aseguradoraPut } from '../../store/UserSlice';
import { toast } from 'react-toastify';
import { Grid } from '@mui/system';
import CustomButton from '../../components/CustomButton';

const EditInsurance = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { aseguradoraId } = useParams();
  const [datos, setDatos] = useState({});

  useEffect(() => {
    dispatch(aseguradoraGet(aseguradoraId)).unwrap().then((datos) => setDatos(datos));
  }, [dispatch]);
  console.log(datos);

  const handleCambio = (e) => {
    const { name, value } = e.target;

    setDatos((datosAnteriores) => ({...datosAnteriores, [name]: value} ));
  };

  const handleFormulario = async (e) => {
    e.preventDefault();
    console.log(e);
    const aseguradora = {
      nombre: e.currentTarget.nombre.value,
      cif: e.currentTarget.cif.value,
      telefono: e.currentTarget.telefono.value,
      correo: e.currentTarget.correo.value,
      direccion: e.currentTarget.direccion.value,
      codigoPostal: e.currentTarget.codigoPostal.value,
      ciudad: e.currentTarget.ciudad.value,
      paginaWeb: e.currentTarget.paginaWeb.value
    }
    try {
        await dispatch(aseguradoraPut({aseguradoraId, aseguradora})).unwrap();
        toast.success("Aseguradora registrada con éxito con éxito");
        navigate("/admin/aseguradoras");
    } catch (err) {
        console.log(err);
        toast.error(err);
        
    }
  }
  return (
    <CustomBox>
      <Typography
        variant="h1"
        sx={{
          fontSize: "clamp(2rem, 4vw, 2.8rem)",
          fontWeight: 800,
          color: "#1f2933",
          margin: "12px",
        }}
        >
          Añade una Nueva Aseguradora
      </Typography>
      
      <Typography sx={{ textAlign: "center", color: "#6b7280", fontSize: "1rem", mb: 4}}>Rellena los datos legales de la aseguradora</Typography>
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
                Nombre legal
              </Typography>
              <TextField fullWidth type="text" id="nombre" name="nombre" value={datos.nombre ?? ""} onChange={handleCambio}/>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
              <Typography component="label" htmlFor="cif"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                CIF
              </Typography>
              <TextField fullWidth type="text" id="cif" name="cif" value={datos.cif ?? ""} onChange={handleCambio}/>
            </Grid>

            <Grid size={{ xs: 12, md: 4 }}>
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
              <TextField fullWidth type="text" id="telefono" name="telefono" value={datos.telefono ?? ""} onChange={handleCambio}/>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }}>
              <Typography component="label" htmlFor="correo"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Correo
              </Typography>
              <TextField fullWidth type="email" id="correo" name="correo" value={datos.correo ?? ""} onChange={handleCambio}/>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography component="label" htmlFor="direccion"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Dirección
              </Typography>
              <TextField fullWidth type="text" id="direccion" name="direccion" value={datos.direccion ?? ""} onChange={handleCambio}/>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography component="label" htmlFor="codigoPostal"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Código Postal
              </Typography>

              <TextField fullWidth type="text" id="codigoPostal" name="codigoPostal" value={datos.codigoPostal ?? ""} onChange={handleCambio}/>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography component="label" htmlFor="ciudad"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Ciudad
              </Typography>

              <TextField fullWidth type="text" id="ciudad" name="ciudad" value={datos.ciudad ?? ""} onChange={handleCambio}/>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Typography component="label" htmlFor="paginaWeb"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                  color: "#374151",
                  textAlign: "left"
                }}
              >
                Página web
              </Typography>

              <TextField fullWidth type="url" id="paginaWeb" name="paginaWeb" value={datos.paginaWeb ?? ""} onChange={handleCambio}/>
            </Grid>

          </Grid>

          <CustomButton color="#fff" text="Añadir" backgroundColor="#2563eb" type="submit"/>
        </Box>
    </CustomBox>
  )
}

export default EditInsurance
