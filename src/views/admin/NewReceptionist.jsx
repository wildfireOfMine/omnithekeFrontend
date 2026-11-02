import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomBox from '../../components/CustomBox';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import CustomFieldText from '../../components/CustomFieldText';
import { toast } from 'react-toastify';
import { invitarUsuario } from '../../store/UserSlice';

const NewReceptionist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormulario = async (e) => {
    e.preventDefault();
    console.log(e);
    const correo = e.currentTarget.correo.value;
    try {
        await dispatch(invitarUsuario({correo, rol:"recepcionista"})).unwrap();
        toast.success("¡Usuario invitado con éxito!");
        navigate("/admin/doctores")
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
          Invita a un Recepcionista
      </Typography>
      
      <Typography sx={{ textAlign: "center", color: "#6b7280", fontSize: "1rem", mb: 4,}}>Invita al usuario con su correo electrónico</Typography>
      <Box>
        <CustomFieldText title="Escribe el correo" idName="correo" placeholder="usuario@correo.com" 
        textCustomButton="Invitar recepcionista" maxWidth="680px" onSubmit={handleFormulario}/>
      </Box> 
    </CustomBox>
  )
}

export default NewReceptionist
