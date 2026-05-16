import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { myProfile } from '../../store/DoctorSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';

const MyProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const profile = useSelector(state => state.doctor.profile);
    const loading = useSelector(state => state.doctor.loading);
    const [data, setData] = useState({});
    console.log(loading);
    console.log(profile);
    useEffect(() => {
        dispatch(myProfile()).unwrap().then(data => setData(data));
    }, [dispatch]);
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
