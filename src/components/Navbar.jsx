import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton';
import CustomLink from './CustomLink';
import { logout } from '../store/UserSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const session = useSelector(
    (state) => state.users.session?.rol
  )

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
            
            <CustomLink colour="#D71029" text="Encuentra tu Médico" route="/encuentraTuMedico"/>
            <CustomLink colour="#D71029" text="Contacto" route="/contacto"/>
            {session &&
              <>
                <Typography sx={{ color: "black"}}>Hola, {session}</Typography>
                <CustomButton color="#fff" backgroundColor="#2563eb" text="Modificar perfil" variant="contained" onClick={()=>navigate("/miPerfil")}/>
                <CustomButton color="red" text="Cerrar Sesión" variant="contained" onClick={()=>dispatch(logout())}/>
              </>
            }

          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  )
}

export default Navbar
