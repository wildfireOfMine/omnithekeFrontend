import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomBox from '../../components/CustomBox';
import { Box, Typography } from '@mui/material';
import CustomFieldText from '../../components/CustomFieldText';
import { aseguradoraPost } from '../../store/UserSlice';
import { toast } from 'react-toastify';

const NewInsurance = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormulario = async (e) => {
    e.preventDefault();
    console.log(e);
    const nombre = e.currentTarget.especialidad.value;
    try {
        await dispatch(aseguradoraPost({nombre})).unwrap();
        toast.success("Aseguradora registrada con éxito con éxito");
        navigate("/admin/aseguradoras");
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
          Añade una Nueva Aseguradora
      </Typography>
      
      <Typography sx={{ textAlign: "center", color: "#6b7280", fontSize: "1rem", mb: 4,}}>Escribe el nombre legal de la aseguradora</Typography>
      <Box>
        <CustomFieldText title="Escribe la nueva aseguradora" idName="especialidad" placeholder="Santander, Santalucía..." 
        textCustomButton="Añadir" maxWidth="680px" onSubmit={handleFormulario}/>
      </Box> 
    </CustomBox>
  )
}

export default NewInsurance
