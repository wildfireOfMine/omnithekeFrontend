import { Box, Grid, TextField, Typography } from '@mui/material'
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
    <Box sx={{
      maxWidth: "1660px",
      margin: "0 auto",
      padding: "10px 16px 64px"
    }}>
      <Box component="div" sx={{
        textAlign: "center"
      }}>
        <Typography sx={{
          fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
          color: "#1f2933",
          margin: "12px",
          fontWeight: 800
        }}>My Profile</Typography>
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
        <Grid container spacing={2}>
          {data && Object.keys(data).map((key) => (
            <Grid item xs={12} md={6} key={key}>
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600, color: "#374151" }}>
                  {key}
                </Typography>
                <TextField
                  disabled
                  type="text"
                  id={key}
                  name={key}
                  placeholder={key}
                  value={data[key] || ''}
                  variant="outlined"
                  sx={{
                    borderRadius: "8px",
                    color: "#1f2933",
                    transition: "border-color 0.15s",
                    fontFamily: "inherit",
                    width: "100%",
                    border: "1.5px solid #fff",
                    fontSize: "0.95rem",
                  }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
        <CustomButton color="#fff" text="Go Back" backgroundColor='#2563eb' onClick={handleCustomButton}/>
      </Box>
      
    </Box>
  )
}

export default MyProfile
