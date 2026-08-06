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
            justifyContent: "space-between"
          }}
        >
           <Typography 
            variant="h4" 
            component={RouterLink}
            
            sx={{ 
              color:"black",
              fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, sans-serif",
              textDecoration: "none"
             }}
            >
            Omnitheke 
            
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "15px"
            }}
          >
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
