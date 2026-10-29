import React, { useEffect, useState } from 'react'
import { misConsultas } from '../../store/HistorySlice';
import { useDispatch } from 'react-redux';
import CustomBox from '../../components/CustomBox';
import { MenuItem, Pagination, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CustomQuery from '../../components/CustomQuery';

const MyHistory = () => {
  const [datos, setDatos] = useState({
    count: 0,
    next: null,
    previous: null,
    results: []
  });
  const [pagina, setPagina] = useState(1);
  const [doctor, setDoctor] = useState("");
  const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(misConsultas({page: pagina, doctor: doctor})).unwrap().then(datos => setDatos(datos));
  }, [dispatch, pagina, doctor]);
    
  console.log(datos);
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
          Mi Historial Médico
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
                    label="Nombre del médico" placeholder="Busca por nombre..."
                    valor={doctor}
                    onChange={(e) => {
                    setDoctor(e.target.value);
                    setPagina(1);
                    }}
                />
            
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
                    alignItems: "start",
                }}
            >
                {datos.results.map((consulta) => 
                  <CustomQuery consulta={consulta}/>)
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
                No se han encontrado consultas pasadas...
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

export default MyHistory
