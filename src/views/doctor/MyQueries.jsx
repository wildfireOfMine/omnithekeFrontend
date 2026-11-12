import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { misConsultasDoctor } from '../../store/HistorySlice';
import { todasEspecialidades } from '../../store/UserSlice';
import CustomBox from '../../components/CustomBox';
import { Box, MenuItem, Pagination, TextField, Typography } from '@mui/material';
import CustomQuery from '../../components/CustomQuery';

const MyQueries = () => {
  const [datos, setDatos] = useState({
    count: 0,
    next: null,
    previous: null,
    results: []
  });
  const [pagina, setPagina] = useState(1);
  const [paciente, setpaciente] = useState("");
  const [especialidades, setEspecialidades] = useState([]);
  const [especialidad, setEspecialidad] = useState("");
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(misConsultasDoctor({page: pagina, paciente: paciente, especialidad: especialidad})).unwrap().then(datos => setDatos(datos));
    dispatch(todasEspecialidades()).unwrap().then((datos) => setEspecialidades(datos));
  }, [dispatch, pagina, especialidad, paciente]);

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
          Mis Consultas
        </Typography>

        <Box component="form">
        
            <Box
            sx={{
                gap: 2,
                mt: 2,
            }}
            >

                <TextField fullWidth
                    label="Nombre del paciente" placeholder="Busca por nombre..."
                    value={paciente}
                    onChange={(e) => {
                    setpaciente(e.target.value);
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
                  <CustomQuery key={consulta.id} consulta={consulta} doctorPdv={true}/>)
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

export default MyQueries
