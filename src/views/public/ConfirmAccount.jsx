import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { confirmarCuenta } from '../../store/UserSlice';
import { toast } from 'react-toastify';
import CustomBox from '../../components/CustomBox';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import CustomButton from '../../components/CustomButton';

const ConfirmAccount = () => {
  const {uid, token} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mensaje, setMensaje] = useState(
    "Confirmando tu cuenta..."
  );
  const [error, setError] = useState(false);

  const handleCustomButton = () => {
    navigate("/iniciarSesion");
  }
  
  useEffect(() => {
    const confirmar = async () => {
      try {
        const respuesta = await dispatch(confirmarCuenta({ uid, token })).unwrap();
        console.log(respuesta);
        setMensaje(respuesta.mensaje);
      } catch (err) {
        setError(true);
        setMensaje(err?.mensaje || err?.detail ||"No se ha podido confirmar la cuenta.");
        toast.error(err.mensaje);
      }
    };
    confirmar();
  }, [dispatch, uid, token]);

  return (
    <CustomBox>
      <Box
        sx={{
          width: "100%",
          maxWidth: "880px",
          mx: "auto",
          mt: { xs: 3, md: 6 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            fontWeight: 800,
            color: "#1f2933",
            lineHeight: 1.1,
            textAlign: "center",
            mb: 1,
          }}
        >
          {error ? "Error de confirmación" : "Confirmación de cuenta"}
        </Typography>

        <Typography sx={{ textAlign: "center", color: "#6b7280", fontSize: "1rem", mb: 4}}>{mensaje}</Typography>

        {!error && <CustomButton color="#2563eb" text="Iniciar Sesión" variant="contained" onClick={handleCustomButton}/>}

      </Box>
    </CustomBox>
  )
}

export default ConfirmAccount
