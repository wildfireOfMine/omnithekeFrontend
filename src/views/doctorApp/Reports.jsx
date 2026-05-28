import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { reportsGet } from '../../store/DoctorSlice';
import CustomButton from '../../components/CustomButton';

const Reports = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() =>{
    dispatch(reportsGet()).unwrap().then(data => setData(data));
  }, [dispatch])
  console.log(data);

  const handleCustomButton = () => {
        navigate(-1);
  }

  const handlePatientForm = () => {
        navigate("/doctor/reportForm");
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
        }}>Tus Informes</Typography>
      </Box>
        <CustomButton color="#fff" text="Añadir un Informe" backgroundColor='#2563eb' onClick={handlePatientForm}/>

      {data && data.length > 0 && (
        <>
          {data.map((report) => (
            <Typography key={report.id}>Informe: {JSON.stringify(report)}</Typography>
          ))}
        </>
      )}
      
      <CustomButton color="#fff" text="Volver atrás" backgroundColor='#2563eb' onClick={handleCustomButton}/>
    </Box>
  )
}

export default Reports
