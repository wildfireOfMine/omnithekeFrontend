import { Avatar, Button, Card, CardContent, Divider, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Link as RouterLink } from 'react-router-dom';
import React from 'react'
import CustomButton from './CustomButton';

const CustomProfile = ({doctor}) => {
  return (
        <Card
            key={doctor.id}
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
                        {doctor.nombre?.charAt(0)}
                        {doctor.primerApellido?.charAt(0)}
                    </Avatar>

                    <Box>
                        <Typography
                            variant="h6"
                            fontWeight={700}
                        >
                            Dr. {doctor.nombre} {doctor.primerApellido}
                        </Typography>

                        <Typography
                            variant="body2"
                            color="text.secondary"
                        >
                            <strong>{doctor.especialidad || "Médico"}</strong>
                        </Typography>
                    </Box>
                </Box>

                <Divider sx={{ mb: 2 }} />

                    <Stack spacing={1.5}>
                        {doctor.correo && (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                }}
                            >
                                <EmailIcon color="action" fontSize="small" />

                                <Typography variant="body2">
                                    {doctor.correo}
                                </Typography>
                            </Box>
                        )}

                        {doctor.telefono && (
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                }}
                            >
                                <PhoneIcon color="action" fontSize="small" />

                                <Typography variant="body2">
                                    {doctor.telefono}
                                </Typography>
                            </Box>
                        )}
                    </Stack>
                          
                    <Button
                        fullWidth
                        variant="contained"
                        component={RouterLink}
                        to={`/citas/${doctor.id}`} 
                        sx={{
                            mt: 3,
                            borderRadius: 2,
                            textTransform: "none",
                            fontWeight: 600,
                        }}
                    >
                        Pedir cita
                    </Button>
            </CardContent>
        </Card>
  )
}

export default CustomProfile
