import { Avatar, Button, Card, CardContent, Divider, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link as RouterLink } from 'react-router-dom';
import React from 'react'
import CustomButton from './CustomButton';
import { Business } from '@mui/icons-material';

const CustomProfile = ({usuario, boton=true}) => {
    console.log(usuario);
  return (
        <Card
            key={usuario.id}
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
                        {usuario.nombre?.charAt(0)}
                        {usuario.primerApellido?.charAt(0)}
                    </Avatar>

                    <Box>
                        <Typography
                            variant="h6"
                            fontWeight={700}
                        >
                            {usuario.especialidad ? "Dr. " : ""}
                            {usuario.nombre}
                            {usuario.primerApellido ? ` ${usuario.primerApellido}` : ""}
                            
                        </Typography>

                        
                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            { usuario.especialidad 
                            ? <strong>{usuario.nombreEspecialidad || "Médico"}</strong> 
                            : <strong>Recepcionista</strong>}
                            
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ mb: 2 }} />

                    <Stack spacing={1.5}>
                        {usuario.correo && (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                }}
                            >
                                <EmailIcon color="action" fontSize="small" />

                                <Typography variant="body2">
                                    {usuario.correo}
                                </Typography>
                            </Box>
                        )}

                        {usuario.telefono && (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                }}
                            >
                                <PhoneIcon color="action" fontSize="small" />

                                <Typography variant="body2">
                                    {usuario.telefono}
                                </Typography>
                            </Box>
                        )}

                        {usuario.aseguradoras && 
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                }}
                            >
                                <Business color="action" fontSize="small" />

                                <Typography variant="body2">
                                    {usuario.aseguradoras.length > 0 ? usuario.nombreAseguradoras.map((asegurador) => asegurador).join(", ") : "Sin aseguradora"}
                                </Typography>
                            </Box> 
                        }  
                    </Stack>
                          
                    {boton && <Button
                        fullWidth
                        variant="contained"
                        component={RouterLink}
                        to={`/paciente/citas/${usuario.id}`} 
                        sx={{
                            mt: 3,
                            borderRadius: 2,
                            textTransform: "none",
                            fontWeight: 600,
                        }}
                    >
                        Pedir cita
                    </Button>}
            </CardContent>
        </Card>
  )
}

export default CustomProfile
