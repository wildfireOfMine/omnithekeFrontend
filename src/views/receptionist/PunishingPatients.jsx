import React, { useState } from 'react'
import CustomBox from '../../components/CustomBox'
import { Avatar, Button, Card, CardContent, CircularProgress, Divider, TextField, Typography } from '@mui/material'
import { Box, Grid, Stack } from '@mui/system'
import { useDispatch } from 'react-redux'
import { pacienteGet, pacientePatch } from '../../store/UserSlice'
import { toast } from 'react-toastify'
import { Bloodtype, Business, CalendarMonth, Fingerprint, PersonOff, Wc } from '@mui/icons-material'
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { useNavigate } from 'react-router-dom'
import CustomButton from '../../components/CustomButton'

const PunishingPatients = () => {
  const dispatch = useDispatch();
  const [texto, setTexto] = useState("");
  const [cargando, setCargando] = useState(false);
  const [datos, setDatos] = useState(null);
  const navigate = useNavigate();

  const buscarPaciente = async (e) => {
    e.preventDefault()
    setCargando(true);
    try {
        const respuesta = await dispatch(pacienteGet(texto)).unwrap();
        setCargando(false);
        setDatos(respuesta);
    } catch (error) {
        setCargando(false);
        setDatos(null)
        toast.error("No se ha podido encontrar al paciente");
    }
  }

  const penalizarPaciente = async () => {
    try {
        console.log(datos.id);
        await dispatch(pacientePatch(datos.id)).unwrap();
        toast.success("Paciente penalizado con éxito");
        navigate(-1);
    } catch (error) {
        toast.error("No se ha podido penalizar el paciente");
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
          Penaliza a un Paciente
      </Typography>

      <Typography 
        sx={{ 
            textAlign: "center", 
            color: "#6b7280", 
            fontSize: "1rem", 
            mb: 4,}}>
        La protección de los datos personales es un derecho fundamental,
        las solicitudes de supresión deberán revisarse conforme a la
        normativa de protección de datos y a las obligaciones legales
        de conservación de documentación sanitaria</Typography>
      
      <Box component="form" onSubmit={buscarPaciente}>
        <TextField fullWidth label="Documento de identidad del paciente" placeholder="Busca por su DNI..." value={texto} 
        onChange={(e) => setTexto(e.target.value)}/>
      </Box>

      <Box sx={{ pt: "30px"}}>
        { cargando && <CircularProgress/>}
        {datos && 
            <Card
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
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
                <CardContent sx={{
                    p: 3,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                }}>
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
                            {datos.nombre?.charAt(0)}
                            {datos.primerApellido?.charAt(0)}
                        </Avatar>

                        <Box>
                            <Typography
                                variant="h6"
                                fontWeight={700}
                            >
                                {datos.nombre}
                                {datos.primerApellido ? ` ${datos.primerApellido}` : ""}
                                
                            </Typography>

                            
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                <strong>Paciente</strong>
                            </Typography>
                        </Box>

                    </Box>

                    <Divider sx={{ mb: 2 }} />

                        <Grid container spacing={3} sx={{ minHeight: 85, mb: "10px" }}>

                            <Grid size={{ xs: 12, md: 4 }}>
                            {datos.correo && (
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                    }}
                                >
                                    <EmailIcon color="action" fontSize="small" />

                                    <Typography variant="body2">
                                        {datos.correo}
                                    </Typography>
                                </Box>
                            )}
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>
                            {datos.telefono && (
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                    }}
                                >
                                    <PhoneIcon color="action" fontSize="small" />

                                    <Typography variant="body2">
                                        {datos.telefono}
                                    </Typography>
                                </Box>
                            )}
                            </Grid>

                            <Grid size={{ xs: 12, md: 4 }}>
                            {datos.aseguradoras && 
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                    }}
                                >
                                    <Business color="action" fontSize="small" />

                                    <Typography variant="body2">
                                        {datos.aseguradoras.length > 0 ? datos.nombreAseguradoras.map((asegurador) => asegurador).join(", ") : "Sin aseguradora"}
                                    </Typography>
                                </Box> 
                            }
                            </Grid>

                            <Grid size={{ xs: 12, md: 3 }}>
                            {datos.sexo && 
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                    }}
                                >
                                    <Wc color="action" fontSize="small" />

                                    <Typography variant="body2">
                                        {datos.sexo}
                                    </Typography>
                                </Box> 
                            }
                            </Grid>

                            <Grid size={{ xs: 12, md: 3 }}>
                            {datos.documentoIdentidad && 
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                    }}
                                >
                                    <Fingerprint color="action" fontSize="small" />

                                    <Typography variant="body2">
                                        {datos.documentoIdentidad}
                                    </Typography>
                                </Box> 
                            }
                            </Grid>

                            <Grid size={{ xs: 12, md: 3 }}>
                            {datos.fechaNacimiento && 
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                    }}
                                >
                                    <CalendarMonth color="action" fontSize="small" />

                                    <Typography variant="body2">
                                        {datos.fechaNacimiento}
                                    </Typography>
                                </Box> 
                            }
                            </Grid>

                            <Grid size={{ xs: 12, md: 3 }}>
                            {datos.grupoSanguineo && 
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                    }}
                                >
                                    <Bloodtype color="action" fontSize="small" />

                                    <Typography variant="body2">
                                        {datos.grupoSanguineo}
                                    </Typography>
                                </Box> 
                            }
                            </Grid>

                            <Grid size={{ xs: 12, md: 12 }}> 
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1.5,
                                    }}
                                >
                                    <PersonOff color="action" fontSize="small" />

                                    <Typography variant="body2">
                                        Citas sin asistir: {datos.citasSinAsistir ?? "Asistió a todas sus citas"}
                                    </Typography>
                                </Box> 
                            </Grid>
                            
                        </Grid>
                        
                        { datos.citasSinAsistir < 3 ? 
                        <CustomButton backgroundColor="#ffffff" disabled text="Sólo se puede penalizar a usuarios que han faltado a 3 citas como mínimo" color="white" onClick={penalizarPaciente}/>
                        : 
                        <CustomButton backgroundColor="#590000" text="Penalizar usuario" color="white" onClick={penalizarPaciente}/>
                        }
                        
                </CardContent>
            </Card>
        }
      </Box>

    </CustomBox>
  )
}

export default PunishingPatients
