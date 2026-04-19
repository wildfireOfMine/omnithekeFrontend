import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/AccountSlice';

const Login = () => {
  const dispatch = useDispatch();

  const handleForm = (e) => {
    e.preventDefault();
    console.log(e.target);
    const {email, password} = e.currentTarget;
    const emailValue = email.value;
    const passwordValue = password.value;
    dispatch(login({emailValue, passwordValue}));
  }

  const session = useSelector(
    (state) => state.session
  )
  console.log(session);
  return (
    <Box>
      <Typography>Log-in</Typography>
      <Box component="form" onSubmit={handleForm} sx={{ display: "flex", flexDirection: "column"}}>
          <label htmlFor='email'>E-mail</label>
          <TextField id='email' name='email' label='email' variant='standard'/>

          <label htmlFor='password'>Password</label>
          <TextField type='password' id='password' name='password' label='password' variant='filled'/>

          <Button type='submit'>Log-in</Button>
      </Box>
    </Box>
  )
}

export default Login
