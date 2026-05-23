import { Box, Typography } from '@mui/material'
import React from 'react'

const Error404 = () => {
  return (
    <Box sx={{
      maxWidth: "860px",
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
        }}>No se ha encontrado el enlace insertado</Typography>
      </Box>
    </Box>
  )
}

export default Error404
