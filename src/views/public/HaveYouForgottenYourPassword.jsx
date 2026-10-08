import React from 'react'
import CustomBox from '../../components/CustomBox'
import { Box } from '@mui/system'
import { TextField, Typography } from '@mui/material'
import CustomButton from '../../components/CustomButton'
import { toast } from 'react-toastify'
import { solicitarRecuperacion } from '../../store/UserSlice'
import { useDispatch } from 'react-redux'

const HaveYouForgottenYourPassword = () => {
  const dispatch = useDispatch(); 

  const handleFormulario = async (e) => {
    e.preventDefault();
    const documento = e.currentTarget.documento.value;
    try {
        await dispatch(solicitarRecuperacion({documento})).unwrap();
        toast.success("Correo enviado con éxito");
    } catch (err) {
        console.log(err);
        Object.values(err).flat().forEach((mensaje) => toast.error(mensaje));
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
            ¿Has olvidado tu contraseña?
        </Typography>

        <Typography sx={{ textAlign: "center", color: "#6b7280", fontSize: "1rem", mb: 4,}}>Enviaremos un correo 
            electrónico para poder restablecerlo</Typography>
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
            maxWidth: "480px",
            display: "flex",
            mx: "auto",
            flexDirection: "column",
            gap: 3,
          }}
        >

          <Box>
            <Typography sx={{ fontWeight: 600, color: "#374151", mb: 1,}}>Escribe tu DNI, NIE, o correo electrónico</Typography>
            <TextField fullWidth type="text" id="documento" name="documento" placeholder="DNI, NIE, o correo electrónico" variant="outlined"/>
          </Box>

          <CustomButton color="#fff" text="Enviar correo" backgroundColor="#2563eb" type="submit"/>
        </Box>
        
      </Box>
    </CustomBox>
  )
}

export default HaveYouForgottenYourPassword
