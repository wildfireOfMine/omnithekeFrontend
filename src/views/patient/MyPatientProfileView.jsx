import { Box, Divider, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import { toast } from 'react-toastify';
import CustomBox from '../../components/CustomBox';


const MyPatientProfileView = () => {
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const [datos, setDatos] = useState({});
    const [editar, setEditar] = useState(false);
    

    
    console.log(datos);

    const handleBotonCustomizable = () => {
        navigate(-1);
    }

    const handleMetodoPut = () => {
      if (!editar) {
        setEditar(true);
      }
    }
    
    const handleCambioInput = (e) => {
      const { nombre, valor } = e.target
      setData((previo) => ({
        ...previo,
        [nombre]: valor
      }))
    }
    
    

    const estiloCampo = {
      borderRadius: "8px",
      color: "#1f2933",
      transition: "border-color 0.15s",
      fontFamily: "inherit",
      width: "100%",
      fontSize: "0.95rem"
    };

  return (
    <CustomBox>
      <Box component="div" sx={{
        textAlign: "center"
      }}>
        <Typography sx={{
          fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
          color: "#1f2933",
          margin: "12px",
          fontWeight: 800
        }}>Mi Perfil de Paciente</Typography>
      </Box>

      <Box sx={{
        display: "flex", 
        flexDirection: "column",
        background: "white",
        borderRadius: "14px",
        padding: "24px 28px 10px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        marginBottom: "20px",
        }}>
         
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 4,
            flexWrap: "wrap"
          }}
        >

          <CustomButton color="#fff" text="Volver Atrás" backgroundColor="#6b7280" onClick={handleBotonCustomizable}/>
          {!editar ? (
            <CustomButton color="#fff" text="Modificar" backgroundColor="#2563eb" onClick={handleMetodoPut}/>
          ) : (
            <CustomButton color="#fff" text="Confirmar" backgroundColor="#16a34a"/>
          )}

        </Box>
      </Box>
      
    </CustomBox>
  )
}

export default MyPatientProfileView
