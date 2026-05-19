import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { myDoctorProfile } from '../store/DoctorSlice';
import { myPatientProfile } from '../store/PatientSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import { myAdminProfile } from '../store/AdminSlice';

const MyProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector(state => state.doctor.loading);
    const [data, setData] = useState({});
    console.log("LOADING", loading);
    const role = JSON.parse(localStorage.getItem("currentSession")).role;
    useEffect(() => {
      if (role == "doctor") {
        dispatch(myDoctorProfile()).unwrap().then(data => setData(data));
      } else if (role == "patient") {
        dispatch(myPatientProfile()).unwrap().then(data => setData(data));
      } else {
        dispatch(myAdminProfile()).unwrap().then(data => setData(data));
      }
    }, [dispatch, role]);
    
    console.log(data);

    const handleCustomButton = () => {
        navigate(-1);
    }

  return (
    <Box>
      <Typography>My Profile</Typography>
      {(data && !loading) && <>
        <Typography>{JSON.stringify(data)}</Typography>
      </>}
      <CustomButton color="#fff" text="Go Back" backgroundColor='#2563eb' onClick={handleCustomButton}/>
    </Box>
  )
}

export default MyProfile
