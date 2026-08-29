import React, { useEffect, useState } from 'react'
import CustomBox from '../../components/CustomBox'
import { MenuItem, Pagination, TextField, Typography } from '@mui/material'
import CustomButton from '../../components/CustomButton'
import { useDispatch } from 'react-redux'
import { misCitas } from '../../store/AppointmentSlice'
import { Box } from '@mui/system'
import CustomProfile from '../../components/CustomProfile'
import { useNavigate } from 'react-router-dom'
import CustomAppointment from '../../components/CustomAppointment'

const CurrentAppointments = () => {
  const [datos, setDatos] = useState({
    count: 0,
    next: null,
    previous: null,
    results: []
  });
  const [pagina, setPagina] = useState(1);
  const [estado, setEstado] = useState("");
  const [doctor, setDoctor] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    dispatch(misCitas({page: pagina, estado: estado, doctor: doctor})).unwrap().then(datos => setDatos(datos));
  }, [dispatch, pagina, estado, doctor]);
  console.log(datos);

  const handleFormulario = async (e) => {
      e.preventDefault();
            
      const {nombre} = e.currentTarget;
      try {
  
      } catch (err) {
        toast.error(err);
      }
  }

  const handleNuevaCita = () => {
    navigate("/encuentraTuMedico");
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
          Citas Actuales
        </Typography>
      <Box sx={{display: "flex", justifyContent: "flex-end",}}>
        <CustomButton color="#fff" text="¿Buscas crear una nueva cita?" backgroundColor="#16a34a" onClick={handleNuevaCita}/>
      </Box>
      <Box component="form" onSubmit={handleFormulario}>
        
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "2fr 1fr",
            },
            gap: 2,
            mt: 2,
          }}
        >

          <TextField fullWidth
            label="Nombre del médico" placeholder="Busca por nombre..."
            valor={doctor}
            onChange={(e) => {
              setDoctor(e.target.value);
              setPagina(1);
            }}
          />

          <TextField select fullWidth
            label="Estado" value={estado}
            onChange={(e) => {
              setEstado(e.target.value);
              setPagina(1);
            }}
          >
            <MenuItem value="">
              Todos los Estados
            </MenuItem>
            <MenuItem value="pendiente">
              Pendiente
            </MenuItem>
            <MenuItem value="confirmada">
              Confirmada
            </MenuItem>
            <MenuItem value="cancelada">
              Cancelada
            </MenuItem>
            <MenuItem value="completada">
              Completada
            </MenuItem>
          </TextField>
        </Box>

      </Box>
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
              }}
          >
              {datos.results.map((appointment) => (
              <CustomAppointment
                key={appointment.id}
                appointment={appointment}
              />
            ))}
          </Box>
      ) : (
          <Typography
            sx={{
              textAlign: "center",
              color: "#6b7280",
              fontSize: "1.1rem",
            }}
          >
            No se han encontrado citas...
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
        <Pagination count={Math.ceil(datos.count / 6)}
          page={pagina}
          onChange={(e, valor) => {
            setPagina(valor);
          }}
          color="primary" size="large"
        />
      </Box>
    </CustomBox>
  )
}

export default CurrentAppointments
