import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';

const Navbar = () => {


  return (
    <AppBar
    position="relative"
    sx={{
      padding: "0 24px",
      margin: "0",
      background: "#fff",
      borderBottom: "1px solid #e5e7eb",
      width: "100%",
      boxSizing: "border-box",
    }}>
      <Box>
        <Toolbar
          sx={{
            minHeight: { xs: "auto", md: "64px" },
            padding: { xs: "12px 16px", md: "0 24px" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "stretch", md: "center" },
            gap: { xs: 2, md: 0 },
          }}
        >
           <Typography 
            variant="h4" 
            component={RouterLink}
            to={'/'} 
            sx={{ 
              color:"black",
              fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
              textDecoration: "none",
              fontSize: { xs: "1.7rem", sm: "2rem", md: "2.125rem" },
              textAlign: { xs: "center", md: "left" },
             }}
            >
            Omnitheke 
            
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              justifyContent: "center",
              gap: { xs: 1.5, sm: 2.5, md: 3 },
              width: { xs: "100%", md: "auto" },
            }}
          >
            <Typography sx={{ color: "#D71029"}}>Encuentra tu Doctor</Typography>
            <Typography sx={{ color: "black"}}>Quiénes Somos</Typography>
            <Typography sx={{ color: "black"}}>Contacto</Typography>
            {true ?
              <>
                <Typography sx={{ color: "black"}}>Hola</Typography>
                <CustomButton color="red" text="Cerrar Sesión" variant="contained" />
              </>
              : 
              <CustomButton color="#2563eb" text="Iniciar Sesión" variant="contained" />
            }
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  )
}

export default Navbar
