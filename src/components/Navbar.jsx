import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom';
import { logout } from '../store/AccountSlice'
import CustomButton from './CustomButton';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const session = useSelector(
    (state) => state.account.session.emailValue
  )
  console.log(session);
  console.log(JSON.stringify(session));

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
            to="/" 
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
            {session ?
              <>
                <Typography sx={{ color: "black"}}>Hello, {session}</Typography>
                <CustomButton color="red" text="Log Out" variant="contained" onClick={()=>dispatch(logout())}/>
              </>
              : 
              <CustomButton color="#2563eb" text="Log-in" variant="contained" onClick={()=>navigate("/login")}/>
            }
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  )
}

export default Navbar
