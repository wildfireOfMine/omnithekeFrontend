import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';
import CustomCard from '../../components/CustomCard'


const OfficeDashboard = () => {
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
            }}>Doctor Dashboard</Typography>
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
                    <Typography component={RouterLink} to="/doctor/myProfile">Office's Doctors</Typography>
                    <img src="/favicon.svg"/>
                  </CustomCard>
                </Grid>

                <Grid size={5}>
                  <CustomCard>
                    <Typography component={RouterLink} to="/doctor/appointments">Office's Patients</Typography>
                    <img src="/favicon.svg"/>
                  </CustomCard>
                </Grid>

                <Grid size={5}>
                  <CustomCard>
                    <Typography component={RouterLink} to="/doctor/myReports">Attach New Doctors to a Patient</Typography>
                    <img src="/favicon.svg"/>
                  </CustomCard>
                </Grid>

                <Grid size={5}>
                  <CustomCard>
                    <Typography component={RouterLink} to="/doctor/myPatients">My Patients</Typography>
                    <img src="/favicon.svg"/>
                  </CustomCard>
                </Grid>

                <Grid size={5}>
                  <CustomCard>
                    <Typography component={RouterLink} to="/doctor/messages">My Messages</Typography>
                    <img src="/favicon.svg"/>
                  </CustomCard>
                </Grid>
              </Grid>
            </Box>
          </Box>
    </Box>
  )
}

export default OfficeDashboard
