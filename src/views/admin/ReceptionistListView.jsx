import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { todosRecepcionistasList } from '../../store/UserSlice';
import CustomBox from '../../components/CustomBox';
import { MenuItem, Pagination, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CustomButton from '../../components/CustomButton';
import CustomProfile from '../../components/CustomProfile';

const ReceptionistListView = () => {
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
    dispatch(todosRecepcionistasList({page: pagina, search: busqueda})).unwrap().then(datos => setDatos(datos));
  }, [dispatch, pagina, busqueda])
  console.log(datos);

  const handleAnadir = () => {
    navigate("/admin/nuevoRecepcionista");
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
          Lista de Recepcionistas
      </Typography>

      <Box component="form">
        
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
            label="Nombre del recepcionista" placeholder="Busca por nombre..."
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
          <CustomButton text="Invitar un recepcionista" color="white" backgroundColor='#16a34a' onClick={handleAnadir}/>
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
              {datos.results.map((recepcionista) => (
              <CustomProfile
                key={recepcionista.id}
                usuario={recepcionista}
                boton={false}
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
            No se han encontrado recepcionistas...
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

export default ReceptionistListView
