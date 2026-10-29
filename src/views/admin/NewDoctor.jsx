import { Typography } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import CustomFieldText from '../../components/CustomFieldText';
import CustomBox from '../../components/CustomBox';
import { Box } from '@mui/system';

const NewDoctor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormulario = async (e) => {
    e.preventDefault();
    console.log(e);
    const nombre = e.currentTarget.especialidad.value;
    try {
        
    } catch (err) {
        console.log(err);
        Object.values(err).flat().forEach((mensaje) => toast.error(mensaje));
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
          Invita a un Doctor
      </Typography>
      
      <Typography sx={{ textAlign: "center", color: "#6b7280", fontSize: "1rem", mb: 4,}}>Invita al usuario con su correo electrónico</Typography>
      <Box>
        <CustomFieldText title="Escribe el correo" idName="correo" placeholder="usuario@correo.com" 
        textCustomButton="Invitar doctor" maxWidth="680px" onSubmit={handleFormulario}/>
      </Box> 
    </CustomBox>
  )
}

export default NewDoctor
