import React from 'react'
import CustomBox from '../../components/CustomBox'
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CustomButton from '../../components/CustomButton';
import { toast } from 'react-toastify';
import { restablecerContrasena } from '../../store/UserSlice';
import { useDispatch } from 'react-redux';

const NewPassword = () => {
  const {uid, token} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormulario = async (e) => {
      e.preventDefault();
      console.log(e.target);
      const contrasena = e.currentTarget.contrasena.value;
      const nuevaContrasena =  e.currentTarget.nuevaContrasena.value;
      console.log(contrasena);
      console.log(nuevaContrasena);
      if (contrasena === nuevaContrasena) {
        try {
          const sesion = await dispatch(restablecerContrasena({uid, token, contrasena})).unwrap();
          toast.success("¡Nueva contraseña establecida!");
          console.log("Sesión iniciada");
          navigate("/iniciarSesion");
        } catch (err) {
          console.log(err);
          toast.error(err);
        }
      } else {
        toast.error("Las contraseñas no coinciden");
      }
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
          Nueva Contraseña
        </Typography>

        <Typography sx={{ textAlign: "center", color: "#6b7280", fontSize: "1rem", mb: 4,}}>Establece una nueva contraseña</Typography>

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
            <Typography sx={{ fontWeight: 600, color: "#374151", mb: 1,}}>Nueva Contraseña</Typography>
            <TextField fullWidth type="password" id="contrasena" name="contrasena" placeholder="Introduce tu nueva contraseña" variant="outlined"/>
          </Box>

          <Box>
            <Typography sx={{ fontWeight: 600, color: "#374151", mb: 1,}}>Reescribe la Nueva Contraseña</Typography>
            <TextField fullWidth type="password" id="nuevaContrasena" name="nuevaContrasena" placeholder="Reescribe la contraseña" variant="outlined"/>
          </Box>

          <CustomButton color="#fff" text="Cambiar la contraseña" backgroundColor="#2563eb" type="submit"/>
        </Box>
        </Box>
    </CustomBox>
  )
}

export default NewPassword
