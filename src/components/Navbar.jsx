import { AppBar, Box, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const session = useSelector(
    (state) => state.account.session
  )
  console.log(session);
  return (
    <Box>
      <AppBar position={'static'}>
        OMNITHEKE

        {session.emailValue && <Typography>Hola, {session.emailValue}</Typography>}
        Login
      </AppBar>
    </Box>
  )
}

export default Navbar
