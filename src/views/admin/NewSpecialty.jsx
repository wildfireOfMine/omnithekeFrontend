import React from 'react'
import CustomBox from '../../components/CustomBox'
import CustomFieldText from '../../components/CustomFieldText'
import { Box, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { especialidadPost } from '../../store/UserSlice'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const NewSpecialty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormulario = async (e) => {
    e.preventDefault();
    console.log(e);
    const nombre = e.currentTarget.especialidad.value;
    try {
        await dispatch(especialidadPost({nombre})).unwrap();
        toast.success("Especialidad registrada con éxito con éxito");
        navigate("/admin/especialidades");
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
          Añade una Nueva Especialidad
      </Typography>
      
      <Typography sx={{ textAlign: "center", color: "#6b7280", fontSize: "1rem", mb: 4,}}>Tan solo escribe la especialidad, ¡y ya!</Typography>
      <Box>
        <CustomFieldText title="Escribe la nueva especialidad" idName="especialidad" placeholder="Oftalmología, hematología..." 
        textCustomButton="Añadir" maxWidth="680px" onSubmit={handleFormulario}/>
      </Box> 
    </CustomBox>
  )
}

export default NewSpecialty
