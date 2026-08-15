import React from 'react'
import CustomBox from '../../components/CustomBox'
import { Typography } from '@mui/material'

const Register = () => {
  return (
    <CustomBox>
      <Typography
        variant="h1"
        sx={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 800,
            color: "#1f2933",
            lineHeight: 1.1,
            mb: 3,
        }}
      >
        Registrarse
      </Typography>

    </CustomBox>
  )
}

export default Register
