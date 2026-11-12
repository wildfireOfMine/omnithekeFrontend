import React, { useEffect, useState } from 'react'
import { misCitasDoctorHoy } from '../../store/AppointmentSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CustomBox from '../../components/CustomBox';
import { Box, Pagination, Typography } from '@mui/material';
import CustomButton from '../../components/CustomButton';

const TodaysAppointments = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [datos, setDatos] = useState({
      count: 0,
      next: null,
      previous: null,
      results: []
  });
  const [pagina, setPagina] = useState(1);

  useEffect(() => {
    dispatch(misCitasDoctorHoy({page: pagina})).unwrap().then((datos) => setDatos(datos));
  }, [dispatch, pagina])
  console.log(datos);

  const handleCustomButton = (id) => {
    navigate(`/doctor/nuevaConsulta/${id}`)
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
          Mis Citas de Hoy
        </Typography>

        <Box sx={{ mt: 6 }}>
            {datos?.results?.length > 0 ? (
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        lg: "repeat(3, 1fr)",
                    },
                    gap: 3,
                    mt: 3,
                    alignItems: "start",
                }}
            >
                {datos.results.map((consulta) => 
                  <>
                  {JSON.stringify(consulta)} 
                  <CustomButton text="Crear consulta" onClick={() => handleCustomButton(consulta.id)}/>
                  
                  </>)
                }
            </Box>
        ) : (
            <Typography
                sx={{
                textAlign: "center",
                color: "#6b7280",
                fontSize: "1.1rem",
                }}
            >
                No se han encontrado citas para hoy...
            </Typography>
            )}
        </Box>
      

    <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 5,
          mb: 3,
        }}
      >
        <Pagination count={Math.ceil(datos.count / 6)} page={pagina}
          onChange={(e, valor) => {
            setPagina(valor);
          }}
          color="primary" size="large"
        />
      </Box>
      
    </CustomBox>
  )
}

export default TodaysAppointments
