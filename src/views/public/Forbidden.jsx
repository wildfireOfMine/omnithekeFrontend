import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CustomBox from '../../components/CustomBox'

const Forbidden = () => {
  return (
    <CustomBox>
      <Box component="div" sx={{
        textAlign: "center"
      }}>
        <Typography sx={{
          fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
          color: "#1f2933",
          margin: "12px",
          fontWeight: 800
        }}>¡Has salido penalizado!</Typography>

            <Typography 
                sx={{ 
                    textAlign: "center", 
                    color: "#6b7280", 
                    fontSize: "1rem", 
                    mb: 4,}}
            >
                El consultorio ha decidido penalizarte por un comportamiento indebido. Si deseas comunicarte con el equipo, por favor, 
                envía un mensaje a: omnitheke@gmail.com
            </Typography>
          <Box
            component="img"
            src='/advertencia.png'
            alt='Advertencia'
            sx={{ 
              width: { xs: "50%", sm: "50%", md: "50%", }, 
              maxWidth: "100%", 
              height: "auto", 
            }}
          />
      </Box>
    </CustomBox>
  )
}

export default Forbidden
