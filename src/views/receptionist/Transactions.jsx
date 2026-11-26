import React from 'react'
import CustomBox from '../../components/CustomBox'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const Transactions = () => {
  const urlPago = import.meta.env.VITE_STRIPE_MAIN_PAYMENT_URL;
  return (
    <CustomBox>
      <Box
        sx={{
          width: "100%",
          maxWidth: "880px",
          mx: "auto",
          mt: { xs: 3, md: 6 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 800,
            color: "#1f2933",
            lineHeight: 1.1,
            textAlign: "center",
            mb: 1,
          }}
        >
          Transacciones
        </Typography>

            <Typography 
                sx={{ 
                    textAlign: "center", 
                    color: "#6b7280", 
                    fontSize: "1rem", 
                    mb: 4,}}
            >
                Mediante el enlace de abajo, será posible realizar una transacción tras que la consulta se haya realizado
            </Typography>
            <Box
                component="a"
                href={urlPago}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                    display: "block",
                    width: { xs: "50%", sm: "50%", md: "50%" },
                    mx: "auto",
                    borderRadius: 3,
                    overflow: "hidden",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                    transform: "scale(1.04)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    },
                    "&:active": {
                    transform: "scale(0.97)",
                    },
                }}
                >
                <Box
                    component="img"
                    src="/oficina.jpg"
                    alt="Oficina"
                    sx={{
                    display: "block",
                    width: "100%",
                    height: "auto",
                    }}
                />
            </Box>
      </Box>
    </CustomBox>
  )
}

export default Transactions
