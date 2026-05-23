import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { myPatientsAsDoctor } from '../../store/DoctorSlice';
import CustomButton from '../../components/CustomButton';

const MyPatients = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() =>{
    dispatch(myPatientsAsDoctor()).unwrap().then(data => setData(data));
  }, [dispatch])
  console.log(data);

  const handleCustomButton = () => {
        navigate(-1);
  }

  return (
    <Box sx={{
      maxWidth: "860px",
      margin: "0 auto",
      padding: "10px 16px 64px"
    }}>
      <Box component="div" sx={{
        textAlign: "center"
      }}>
        <Typography variant='h1' sx={{
          fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
          color: "#1f2933",
          margin: "12px",
          fontWeight: 800
        }}>Tus Pacientes</Typography>
      </Box>

      {data && data.length > 0 && (
        <>
          {data.map((patient) => (
            <Typography key={patient.id}>Paciente: {JSON.stringify(patient)}</Typography>
          ))}
        </>
      )}
      
      <CustomButton color="#fff" text="Volver Atrás" backgroundColor='#2563eb' onClick={handleCustomButton}/>
    </Box>
  )
}

export default MyPatients
