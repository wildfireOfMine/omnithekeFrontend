import React, { useEffect, useState } from 'react'
import CustomBox from '../../components/CustomBox'
import { Avatar, Button, Card, CardContent, Divider, MenuItem, Pagination, TextField, Typography } from '@mui/material'
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Stack } from '@mui/system'
import { toast } from 'react-toastify'
import { todosDoctores } from '../../store/UserSlice'
import { todasEspecialidades } from '../../store/UserSlice'
import { useDispatch } from 'react-redux'
import CustomProfile from '../../components/CustomProfile';


const FindYourDoctor = () => {
  const [datos, setDatos] = useState({
    count: 0,
    next: null,
    previous: null,
    results: []
  });
  const [pagina, setPagina] = useState(1);
  const [especialidad, setEspecialidad] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [especialidades, setEspecialidades] = useState([]);
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(todosDoctores({page: pagina, especialidad: especialidad, search: busqueda})).unwrap().then(datos => setDatos(datos));
    dispatch(todasEspecialidades()).unwrap().then((datos) => setEspecialidades(datos));
  }, [dispatch, pagina, especialidad, busqueda])
  console.log(datos);

  const handleFormulario = async (e) => {
    e.preventDefault();
          
    const {nombre} = e.currentTarget;
    try {

    } catch (err) {
      toast.error(err);
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
          Encuentra tu Médico
      </Typography>
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
            value={busqueda}
            onChange={(e) => {
              setBusqueda(e.target.value);
              setPagina(1);
            }}
          />

          <TextField select fullWidth
            label="Especialidad" value={especialidad}
            onChange={(e) => {
              setEspecialidad(e.target.value);
              setPagina(1);
            }}
          >
            <MenuItem value="">
              Todas las especialidades
            </MenuItem>
            {especialidades.map((especia) => (
              <MenuItem
                key={especia.id}
                value={especia.id}
              >
                {especia.nombre}
              </MenuItem>
            ))}
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
              {datos.results.map((doctor) => (
              <CustomProfile
                key={doctor.id}
                doctor={doctor}
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
            No se han encontrado médicos...
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

export default FindYourDoctor
