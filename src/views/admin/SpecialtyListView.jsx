import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { todasEspecialidadesList } from '../../store/UserSlice';
import CustomBox from '../../components/CustomBox';
import { Box, Pagination, Paper, TextField, Typography } from '@mui/material';
import CustomCard from '../../components/CustomCard';
import CustomButton from '../../components/CustomButton';
import { useNavigate } from 'react-router-dom';

const SpecialtyListView = () => {
  const [datos, setDatos] = useState({
    count: 0,
    next: null,
    previous: null,
    results: []
  });
  const [pagina, setPagina] = useState(1);
  const [busqueda, setBusqueda] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() =>{
    dispatch(todasEspecialidadesList({page: pagina, search: busqueda})).unwrap().then(datos => setDatos(datos));
  }, [dispatch, pagina, busqueda])
  console.log(datos);

  const handleAnadir = () => {
    navigate("/admin/nuevaEspecialidad");
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

      <Box component="form">
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr",
            },
            gap: 2,
            mt: 2,
          }}
        >

          <TextField fullWidth
            label="Nombre de la especialidad" placeholder="Busca por nombre..."
            value={busqueda}
            onChange={(e) => {
              setBusqueda(e.target.value);
              setPagina(1);
            }}
          />
        </Box>
      </Box>
      
      <Box sx={{ mt: 6 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between"}}>
          <CustomButton text="Añadir una especialidad" color="white" backgroundColor='#16a34a' onClick={handleAnadir}/>
        </Box>
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
              {datos.results.map((especialidad) => (
                <Paper
                  key={especialidad.id}
                  elevation={0}
                  sx={{
                    p: 2,
                    border: "1px solid #e0e5eb",
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    transition: "0.2s",
                    "&:hover": {
                      borderColor: "#1976d2",
                      bgcolor: "#f5f9ff",
                    },
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      bgcolor: "#e3f2fd",
                      color: "#1565c0",
                      fontWeight: 700,
                      px: 1,
                      py: 0.5,
                      borderRadius: 1,
                    }}
                  >
                    {especialidad.id}
                  </Typography>

                  <Typography variant="body1"
                    sx={{ fontWeight: 600, overflowWrap: "anywhere" }}
                  >
                    {especialidad.nombre}
                  </Typography>
                </Paper>
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
            No se han encontrado especialidades...
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

export default SpecialtyListView
