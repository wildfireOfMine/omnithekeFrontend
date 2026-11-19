import React, { useEffect, useState } from 'react'
import CustomBox from '../../components/CustomBox'
import CustomFieldText from '../../components/CustomFieldText'
import { Box, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { especialidadGet, especialidadPost, especialidadPut } from '../../store/UserSlice'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditSpecialty = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { especialidadId } = useParams();
  const [datos, setDatos] = useState({});

  useEffect(() => {
    dispatch(especialidadGet(especialidadId)).unwrap().then((datos) => setDatos(datos));
  }, []);
  console.log(datos);

  const handleFormulario = async (e) => {
    e.preventDefault();
    console.log(e);
    const nombre = e.currentTarget.especialidad.value;
    try {
        await dispatch(especialidadPut({id: especialidadId, nombre: nombre})).unwrap();
        toast.success("Especialidad registrada con éxito con éxito");
        navigate("/admin/especialidades");
    } catch (err) {
        console.log(err);
        toast.error(err);
        
    }
  }

  const handleCambio = (e) => {
    setDatos({...datos, nombre: e.target.value});
  };

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
        textCustomButton="Añadir" maxWidth="680px" onSubmit={handleFormulario} value={datos?.nombre} onChange={handleCambio}/>
      </Box> 
    </CustomBox>
  )
}

export default EditSpecialty
