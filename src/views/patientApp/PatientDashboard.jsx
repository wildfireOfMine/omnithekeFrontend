import { Box, Grid, Paper, styled, Typography } from '@mui/material'
import React from 'react'
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';


const PatientDashboard = () => {
  return (
    <Box>
      <Box component="div">
        <Typography variant='h1'>Patient Dashboard</Typography>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid size={5}>
            <Typography component={RouterLink} to="/patient/appointments">Appointments</Typography>
          </Grid>
          <Grid size={5}>
            <Link>Test</Link>
          </Grid>
          <Grid size={5}>
            <Link>Test</Link>
          </Grid>
          <Grid size={5}>
            <Link>Test</Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}

export default PatientDashboard
