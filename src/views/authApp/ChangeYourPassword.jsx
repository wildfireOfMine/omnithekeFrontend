import { Box, TextField, Typography } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import { changePassword } from '../../store/AccountSlice';
import { toast } from 'react-toastify';

const ChangeYourPassword = () => {
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
    const {password, confirmPassword} = e.currentTarget;
    if (checkPassword(password, confirmPassword)) {
        try {
            await dispatch(changePassword({newPassword: password.value})).unwrap();
            toast.success("Contraseña cambiada con éxito");
            navigate("/login");
        } catch (err) {
            toast.error(err)
            toast.error(err?.email ? err.email.join(", ") : "Cambio fallido");
        }
    } else {
        toast.error("Las contraseñas no coinciden");
    }
  }

  return (
    <Box sx={{
      maxWidth: "1660px",
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
        }}>Cámbiate tu Contraseña</Typography>
      </Box>

      <Box sx={{
        display: "flex", 
        flexDirection: "column",
        background: "white",
        borderRadius: "14px",
        padding: "24px 28px 10px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        marginBottom: "20px",
        gap: 4,
        }} component="form" onSubmit={handleForm}>

            <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                }}>Contraseña</Typography>
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

              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                }}>Confirmar Contraseña</Typography>
                <TextField type='password' id='confirmPassword' name='confirmPassword' placeholder='*******' variant="outlined"
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

              <CustomButton color="#fff" text="Cambiar" backgroundColor='#2563eb' type='submit'/>
        </Box>
    </Box>
  )
}

export default ChangeYourPassword
