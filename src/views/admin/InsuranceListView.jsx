import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { todasAseguradorasList } from '../../store/UserSlice';
import CustomBox from '../../components/CustomBox';
import { Avatar, Box, Card, CardContent, Divider, Pagination, Paper, TextField, Typography } from '@mui/material';
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import CustomButton from '../../components/CustomButton';
import { Stack } from '@mui/system';
import { OpenInNew, Web } from '@mui/icons-material';

const InsuranceListView = () => {
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
    dispatch(todasAseguradorasList({page: pagina, search: busqueda})).unwrap().then(datos => setDatos(datos));
  }, [dispatch, pagina, busqueda])
  console.log(datos);

  const handleAnadir = () => {
    navigate("/admin/nuevaAseguradora");
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
          Lista de Aseguradoras
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
            label="Nombre de la aseguradora" placeholder="Busca por nombre..."
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
          <CustomButton text="Añadir una aseguradora" color="white" backgroundColor='#16a34a' onClick={handleAnadir}/>
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
              {datos.results.map((aseguradora) => (
                <Card
                  key={aseguradora.id}
                  sx={{
                      borderRadius: 4,
                      overflow: "hidden",
                      transition: "all 0.25s ease",
                      border: "1px solid",
                      borderColor: "divider",
                      "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: 6,
                      },
                      }}
                  >
                  <CardContent sx={{ p: 3 }}>
                      <Box
                          sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 2,
                              mb: 2.5,
                          }}
                      >
                          <Avatar
                              sx={{
                                  width: 60,
                                  height: 60,
                                  fontSize: "1.4rem",
                              }}
                          >
                              {aseguradora.nombre?.charAt(0)}
                          </Avatar>

                          <Box>
                              <Typography
                                  variant="h6"
                                  fontWeight={700}
                              >
                                  
                                  {aseguradora.nombre}
                                  
                                  
                              </Typography>

                          </Box>
                      </Box>

                      <Divider sx={{ mb: 2 }} />

                          <Stack spacing={1.5}>
                              {aseguradora.correo && (
                                  <Box
                                      sx={{
                                          display: "flex",
                                          alignItems: "center",
                                          gap: 1.5,
                                      }}
                                  >
                                      <EmailIcon color="action" fontSize="small" />

                                      <Typography variant="body2">
                                          {aseguradora.correo}
                                      </Typography>
                                  </Box>
                              )}

                              {aseguradora.telefono && (
                                  <Box
                                      sx={{
                                          display: "flex",
                                          alignItems: "center",
                                          gap: 1.5,
                                      }}
                                  >
                                      <PhoneIcon color="action" fontSize="small" />

                                      <Typography variant="body2">
                                          {aseguradora.telefono}
                                      </Typography>
                                  </Box>
                              )}

                              {aseguradora.paginaWeb && (
                                  <Box
                                      sx={{
                                          display: "flex",
                                          alignItems: "center",
                                          gap: 1.5,
                                      }}
                                  >
                                      <OpenInNew color="action" fontSize="small" />

                                      <Typography variant="body2">
                                          <Link to={aseguradora.paginaWeb} target="_blank">{aseguradora.paginaWeb}</Link>
                                      </Typography>
                                  </Box>
                              )}

                          </Stack>
                                
                         
                  </CardContent>
              </Card>
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
            No se han encontrado aseguradoras...
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

export default InsuranceListView
