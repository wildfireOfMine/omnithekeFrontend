import { Box, Grid, Paper, styled, Typography } from '@mui/material'
import React from 'react'
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';
import CustomCard from '../../components/CustomCard';


const PatientDashboard = () => {
  return (
    <Box sx={{
      
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
        }}>Patient Dashboard</Typography>
      </Box>
      <Box sx={{
        padding: "100px 0",
        maxWidth: "900px",
        margin: "0 auto",
      }}>
        <Grid container spacing={2} sx={{
          justifyContent: "center"
        }}>
          <Grid size={5}>
            <CustomCard>
              <Typography component={RouterLink} to="/patient/appointments">Appointments</Typography>
              <img src="/favicon.svg"/>
            </CustomCard>
          </Grid>

          <Grid size={5}>
            <CustomCard>
              <Typography component={RouterLink} to="/patient/myProfile">My Profile</Typography>
              <img src="/favicon.svg"/>
            </CustomCard>
          </Grid>

          <Grid size={5}>
            <CustomCard>
              <Typography component={RouterLink} to="/patient/appointments">Active Incidents</Typography>
              <img src="/favicon.svg"/>
            </CustomCard>
          </Grid>

          <Grid size={5}>
            <CustomCard>
              <Typography component={RouterLink} to="/patient/appointments">Send a Message</Typography>
              <img src="/favicon.svg"/>
            </CustomCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default PatientDashboard
