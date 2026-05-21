import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/AccountSlice';
import { toast } from 'react-toastify';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(e.target);
    const {email, password} = e.currentTarget;
    const emailValue = email.value;
    const passwordValue = password.value;
    try {
      await dispatch(login({emailValue, passwordValue})).unwrap();
      toast.success("Logged in successfully!");
      const role = JSON.parse(localStorage.getItem("currentSession")).role;
      console.log(role);
      if (role) {
        navigate(`/${role}/dashboard`);
      } else {
        navigate(`/createYourProfile`);
      }
      
      
    } catch (err) {
      toast.error(err?.email ? err.email.join(", ") : "Log-in failed");
    }
  }

  const session = useSelector(
    (state) => state.session
  )
  console.log(session);
  return (
    <Box sx={{
      maxWidth: "860px",
      margin: "0 auto",
      padding: "10px 16px 64px"
    }}>
      <Box component="div" sx={{
        textAlign: "center"
      }}>
        <Typography sx={{
          fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
          color: "#1f2933",
          margin: "12px",
          fontWeight: 800
        }}>Log-in</Typography>
      </Box>

      <Box component="form" onSubmit={handleForm} 
      sx={{
        display: "flex", 
        flexDirection: "column",
        background: "white",
        borderRadius: "14px",
        padding: "24px 28px 10px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        marginBottom: "20px",
        }}> 
            <Box component="div"
            sx={{
              padding: "50px 0",
              marginBottom: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "40px"
            }}>
              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                  
                }}>Name</Typography>
                  <TextField type="text" id="email" name="email" placeholder='user@gmail.com' variant="outlined"
                  sx={{
                    borderRadius: "8px",
                    color: "#1f2933",
                    transition: "border-color 0.15s",
                    fontFamily: "inherit",
                    width: "100%",
                    border: "1.5px solid #fff",
                    fontSize: "0.95rem"
                  }}
                />
              </Box>
              
              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                }}>Password</Typography>
                <TextField type='password' id='password' name='password' placeholder='*******' variant="outlined"
                sx={{
                    borderRadius: "8px",
                    color: "#1f2933",
                    transition: "border-color 0.15s",
                    fontFamily: "inherit",
                    width: "100%",
                    border: "1.5px solid #fff",
                    fontSize: "0.95rem"
                  }}
              />
              </Box>
              
              <Typography component={RouterLink} to="/register">Looking to create your hospital?</Typography>
              <CustomButton color="#fff" text="Log-in" backgroundColor='#2563eb' type='submit'/>
          </Box>

      </Box>
    </Box>
  )
}

export default Login
