import React from 'react'
import CustomBox from '../../components/CustomBox'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CustomButton from '../../../../oldProyecto/omnithekeFrontendOld/src/components/CustomButton';
import CustomLink from '../../components/CustomLink';
import { login } from '../../store/UserSlice';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormulario = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const {documento, contrasena} = e.currentTarget;
    console.log(documento.value);
    console.log(contrasena.value);
    const documentoValor = documento.value;
    const contrasenaValor = contrasena.value;
    try {
        await dispatch(login({documentoValor, contrasenaValor})).unwrap();
        toast.success("Sesión iniciada con éxito");
        console.log("Sesión iniciada");
          
      } catch (err) {
        console.log(err);
        toast.error(err);
        toast.error(err?.email ? err.email.join(", ") : "No se ha podido iniciar sesión");
      }
    navigate("/portalPaciente");
  }

  return (
    <CustomBox>
      <Box
        sx={{
          width: "100%",
          maxWidth: "480px",
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
          Iniciar Sesión
        </Typography>

        <Typography sx={{ textAlign: "center", color: "#6b7280", fontSize: "1rem", mb: 4,}}>Accede a tu cuenta de Omnitheke</Typography>

        <Box
          component="form" onSubmit={handleFormulario}
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

          <Box>
            <Typography sx={{ fontWeight: 600, color: "#374151", mb: 1,}}>Documento</Typography>
            <TextField fullWidth type="text" id="documento" name="documento" placeholder="DNI, NIE o correo electrónico" variant="outlined"/>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 600, color: "#374151", mb: 1,}}>Contraseña</Typography>
            <TextField fullWidth type="password" id="contrasena" name="contrasena" placeholder="Introduce tu contraseña" variant="outlined"/>

            <Box sx={{display: "flex", justifyContent: "flex-end", mt: 1,}}>
              <Typography
                component={RouterLink}
                sx={{
                  fontSize: "0.9rem",
                  color: "#2563eb",
                  textDecoration: "none",
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                ¿Has olvidado tu contraseña?
              </Typography>
            </Box>
          </Box>

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
              to="/registrarse"
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
              ¿No tienes una cuenta? <strong>Regístrate</strong>
            </Typography>
          </Box>

        </Box>
      </Box>
    </CustomBox>
  )
}

export default Login
