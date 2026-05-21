import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { myPatients } from '../../store/AdminSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';

const MyHospitalPatients = () => {
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() =>{
    dispatch(myPatients()).unwrap().then(data => setData(data));
  }, [dispatch])
  console.log(data);

  const handleCustomButton = () => {
        navigate(-1);
  }

  const handlePatientForm = () => {
        navigate("/admin/patientForm");
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
        }}>Your Patients</Typography>
      </Box>
        <CustomButton color="#fff" text="Add a Patient" backgroundColor='#2563eb' onClick={handlePatientForm}/>

      {data && data.length > 0 && (
        <>
          {data.map((doctor) => (
            <Typography key={doctor.id}>Patient: {JSON.stringify(doctor)}</Typography>
          ))}
        </>
      )}
      
      <CustomButton color="#fff" text="Go Back" backgroundColor='#2563eb' onClick={handleCustomButton}/>
    </Box>
  )
}

export default MyHospitalPatients
