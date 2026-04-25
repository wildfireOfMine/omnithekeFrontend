import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../../store/AccountSlice';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const dispatch = useDispatch();

    const checkPassword = (firstPassword, secondPassword) => {
        if (firstPassword.value === secondPassword.value) {
            return true;
        } else {
            return false;
        }
    }

    const handleForm = (e) => {
        e.preventDefault();
        console.log(e.target);
        const {email, password, confirmPassword} = e.currentTarget;
        if (checkPassword(password, confirmPassword)) {
            dispatch(register(email.value, password.value));
        } else {
            toast("Wrong");
            console.log("Wrong");
        }

    }
  return (
    <Box>
      <Typography>Register</Typography>
      <Box component="form" onSubmit={handleForm} sx={{ display: "flex", flexDirection: "column"}}>
          <label htmlFor='email'>E-mail</label>
          <TextField id='email' name='email' label='email' variant='standard'/>

          <label htmlFor='password'>Password</label>
          <TextField type='password' id='password' name='password' label='password' variant='filled'/>

          <label htmlFor='confirmPassword'>Confirm Password</label>
          <TextField type='password' id='confirmPassword' name='confirmPassword' label='confirm password' variant='filled'/>

          <Button type='submit'>Log-in</Button>
      </Box>
    </Box>
  )
}

export default Register
