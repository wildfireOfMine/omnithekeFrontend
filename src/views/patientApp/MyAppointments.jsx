import React, { useEffect, useState } from 'react'
import { appointmentGet } from '../../store/PatientSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import CustomButton from '../../components/CustomButton';

const MyPatientAppointments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() =>{
    dispatch(appointmentGet()).unwrap().then(data => setData(data));
  }, [dispatch])
  console.log(data);

  const handleCustomButton = () => {
        navigate(-1);
  }

  const handleAppointmentForm = () => {
        navigate("/patient/appointments");
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
        }}>Tus Citas</Typography>
      </Box>

      <CustomButton color="#fff" text="Añadir una cita" backgroundColor='#2563eb' onClick={handleAppointmentForm}/>

      {data && data.length > 0 && (
        <>
          {data.map((appointment) => (
            <Typography key={appointment.id}>Cita: {JSON.stringify(appointment)} - Cancelar</Typography>
          ))}
        </>
      )}
      
      <CustomButton color="#fff" text="Volver Atrás" backgroundColor='#2563eb' onClick={handleCustomButton}/>
    </Box>
  )
}

export default MyPatientAppointments
