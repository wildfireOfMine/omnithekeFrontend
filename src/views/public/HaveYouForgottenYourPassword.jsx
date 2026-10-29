import React from 'react'
import CustomBox from '../../components/CustomBox'
import { Box } from '@mui/system'
import { TextField, Typography } from '@mui/material'
import CustomButton from '../../components/CustomButton'
import { toast } from 'react-toastify'
import { solicitarRecuperacion } from '../../store/UserSlice'
import { useDispatch } from 'react-redux'
import CustomFieldText from '../../components/CustomFieldText'

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
            
        <CustomFieldText title="Escribe tu DNI, NIE, o correo electrónico" idName="documento" 
        placeholder="DNI, NIE, o correo electrónico" textCustomButton="Enviar correo" maxWidth="480px" onSubmit={handleFormulario}/>
        
      </Box>
    </CustomBox>
  )
}

export default HaveYouForgottenYourPassword
