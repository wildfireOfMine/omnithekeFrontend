import { AppBar, Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store/AccountSlice'

const Navbar = () => {
  const dispatch = useDispatch();
  const session = useSelector(
    (state) => state.account.session
  )
  console.log(session);
  return (
    <Box>
      <AppBar position={'static'}>
        <Link to="/">OMNITHEKE</Link>

        {session.emailValue && <Typography>Hola, {session.emailValue}</Typography>}
        {session.emailValue ? <Button onClick={()=> dispatch(logout())} variant="contained">Log out</Button> : <Link to="/login">Login</Link>}
      </AppBar>
    </Box>
  )
}

export default Navbar
