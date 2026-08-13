import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CustomBox from '../../components/CustomBox'

const Contact = () => {
  return (
    <CustomBox>
      <Typography
          variant="h1"
          sx={{
            fontSize: "clamp(2rem, 4vw, 3.8rem)",
            fontWeight: 800,
            color: "#1f2933",
            margin: "12px",
          }}
        >
          Contacto
        </Typography>

        <Box
          sx={{
            maxWidth: "600px",
            mx: "auto",
            width: "100%",
            mx: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            margin: "120px auto",
            fontSize: {
              xs: "1.1rem",
              md: "1.5rem",
            },
            lineHeight: 1.6,
            color: "#374151",
            textAlign: "center",
          }}
        >
          <Typography variant="body1" sx={{ fontSize: "inherit" }}><strong>Consultorio Omnitheke</strong></Typography>
          <Typography variant="body1" sx={{ fontSize: "inherit" }}>C/Calle, 12</Typography>
          <Typography variant="body1" sx={{ fontSize: "inherit" }}>12345, San Pedro del Pinatar, Murcia</Typography>
          <Typography variant="body1" sx={{ fontSize: "inherit" }}>Teléfono: (+34) 123 45 67 89</Typography>
        </Box>
    </CustomBox>
  )
}

export default Contact
