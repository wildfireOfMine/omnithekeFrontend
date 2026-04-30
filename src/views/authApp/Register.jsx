import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../../store/AccountSlice';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const checkPassword = (firstPassword, secondPassword) => {
        if (firstPassword.value === secondPassword.value) {
            return true;
        } else {
            return false;
        }
    }

    const handleForm = async (e) => {
        e.preventDefault();
        console.log(e.target);
        const {name, email, password, confirmPassword} = e.currentTarget;
        if (checkPassword(password, confirmPassword)) {
            const user = {name: name.value, email: email.value, password: password.value}
            console.log(user);
            try {
                await dispatch(register(user)).unwrap();
                toast.success("User registered successfully!");
                navigate("/login");
            } catch (err) {
                toast.error(err?.email ? err.email.join(", ") : "Registration failed");
            }
            
            
        } else {
            toast("Wrong");
            console.log("Wrong");
        }

    }
  return (
    <Box>
      <Typography>Register</Typography>
      <Box component="form" onSubmit={handleForm} sx={{ display: "flex", flexDirection: "column"}}>
          <label htmlFor='name'>Your username</label>
          <TextField id='name' name='name' label='text' variant='standard'/>

          <label htmlFor='email'>E-mail</label>
          <TextField id='email' name='email' label='email' variant='standard'/>

          <label htmlFor='password'>Password</label>
          <TextField type='password' id='password' name='password' label='password' variant='filled'/>

          <label htmlFor='confirmPassword'>Confirm Password</label>
          <TextField type='password' id='confirmPassword' name='confirmPassword' label='confirm password' variant='filled'/>

          <Button type='submit'>Register</Button>
      </Box>
    </Box>
  )
}

export default Register
