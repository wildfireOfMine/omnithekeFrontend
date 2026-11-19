import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { conseguirCalendario, crearCalendario, misHorarios } from '../../store/AppointmentSlice';
import CustomBox from '../../components/CustomBox';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import CustomButton from '../../components/CustomButton';
import { toast } from 'react-toastify';
import ScheduleTables from '../../components/SchedulesTable';

const MySchedule = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [datos, setDatos] = useState();
  const [calendarioExistente, setCalendarioExistente] = useState(false);

  useEffect(() => {
    dispatch(conseguirCalendario()).unwrap().then((datos) => setCalendarioExistente(datos.mensaje));
    dispatch(misHorarios()).unwrap().then((datos) => setDatos(datos));
  }, [dispatch])
  console.log(datos);
  console.log(calendarioExistente);

  const handleCustomButton = async () => {
    try {
      await dispatch(crearCalendario()).unwrap();
      setCalendarioExistente(true);
      toast.success("Calendario creado con éxito");
    } catch (error) {
      console.log(error);
      toast.error("Error al crear el calendario");
    }    
  }

  return (
    <CustomBox>
      <Typography
        variant="h1"
        sx={{
          fontSize: "clamp(2rem, 4vw, 2.8rem)",
          fontWeight: 800,
          color: "#1f2933",
          margin: "12px",
        }}
        >
          Mi Calendario
        </Typography>
        { calendarioExistente ? 
            <ScheduleTables/>
          : 
            <Box sx={{
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2.5,
                p: { xs: 3, sm: 5 }, m: { xs: 2, sm: 3 },
                minHeight: "220px", backgroundColor: "#f8fafc", border: "1px dashed #cbd5e1", borderRadius: "16px",textAlign: "center",
            }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: "#1f2933" }}>No tienes ningún calendario</Typography>

              <Typography
                sx={{
                  color: "#6b7280",
                  fontSize: "1rem",
                  maxWidth: "450px",
                  lineHeight: 1.6,
                }}
              >
                Para poder gestionar tus consultas, primero necesitas crear tu
                calendario y configurar tus horarios de disponibilidad
              </Typography>

              <CustomButton color="white" backgroundColor='#16a34a' text="¡Crea un calendario!" onClick={handleCustomButton}/>
            </Box>
        }
    </CustomBox>
  )
}

export default MySchedule
