import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { myReceptionists } from '../../store/AdminSlice';
import { Box, Typography } from '@mui/material';
import CustomButton from '../../components/CustomButton';

const MyOfficeReceptionists = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() =>{
    dispatch(myReceptionists()).unwrap().then(data => setData(data));
  }, [dispatch])
  console.log(data);

  const handleCustomButton = () => {
        navigate(-1);
  }

  const handlePatientForm = () => {
        navigate("/admin/receptionistForm");
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
        }}>Recepcionistas del Consultorio</Typography>
      </Box>
        <CustomButton color="#fff" text="Añadir un Recepcionista" backgroundColor='#2563eb' onClick={handlePatientForm}/>

      {data && data.length > 0 && (
        <>
          {data.map((receptionist) => (
            <Typography key={receptionist.id}>Recepcionista: {JSON.stringify(receptionist)}</Typography>
          ))}
        </>
      )}
      
      <CustomButton color="#fff" text="Volver atrás" backgroundColor='#2563eb' onClick={handleCustomButton}/>
    </Box>
  )
}


export default MyOfficeReceptionists
