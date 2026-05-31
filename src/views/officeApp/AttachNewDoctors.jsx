import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CustomCard from '../../components/CustomCard'

const AttachNewDoctors = () => {
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
            }}>Añadir Nuevos Doctores a un Paciente</Typography>
            <Box sx={{
              padding: "100px 0",
              maxWidth: "900px",
              margin: "0 auto",
            }}>
              
            </Box>
          </Box>
    </Box>
  )
}

export default AttachNewDoctors
