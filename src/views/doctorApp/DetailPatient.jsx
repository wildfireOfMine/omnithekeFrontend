import React, { useEffect, useState } from 'react'
import { doctorGetPatientPK, incidentPatchPK } from '../../store/DoctorSlice';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Divider, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import CustomField from '../../components/CustomField';
import CustomButton from '../../components/CustomButton';
import { toast } from 'react-toastify';

const DetailPatient = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const {id} = useParams();
  const [edit, setEdit] = useState(false);
  const [incident, setIncident] = useState("");

  const fieldStyle = {
      borderRadius: "8px",
      color: "#1f2933",
      transition: "border-color 0.15s",
      fontFamily: "inherit",
      width: "100%",
      fontSize: "0.95rem"
  };
    
  console.log(data);

  const handleCustomButton = () => {
        navigate(-1);
  }

  const handleIncident = (e) => {
    setIncident(e.target.value);
  }

  const handleClosingIncident = async () => {
    try {
      console.log(incident);
      await dispatch(incidentPatchPK({incidentId: incident, 
        patch: 
        { active: false, endingDate: new Date().toISOString()}
      })).unwrap();
      dispatch(doctorGetPatientPK(id)).unwrap().then(data => setData(data));
      toast.success("Episodio creado con éxito");
    } catch (err) {
      console.log(err);
      toast.error(err?.email ? err.email.join(", ") : "Informe fallido");
    }
  }
  
  useEffect(() =>{
    dispatch(doctorGetPatientPK(id)).unwrap().then(data => setData(data));
  }, [dispatch])
  console.log(data);

  const patientName = data.secondSurname && data.firstSurname
    ? `${data.firstSurname} ${data.secondSurname}, ${data.name}`
    : data.firstSurname
    ? `${data.firstSurname}, ${data.name}`
    : data.name;

  return (
    <Box sx={{
      maxWidth: "1660px",
      margin: "0 auto",
      padding: "10px 16px 64px"
    }}>
      <Box component="div" sx={{
        textAlign: "center"
      }}>
        <Typography sx={{
          fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
          color: "#1f2933",
          margin: "12px",
          fontWeight: 800
        }}>La información de: {patientName}</Typography>
      </Box>

      <Box sx={{
        display: "flex", 
        flexDirection: "column",
        background: "white",
        borderRadius: "14px",
        padding: "24px 28px 10px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        marginBottom: "20px",
        }}>
          {data && <>
              <Grid container spacing={3}>

                <Grid size={12}>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "#1f2933",
                      mb: 1
                    }}
                  >
                    Datos Personales
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box>
                    <Typography variant='h6' sx={{
                      fontWeight: 600,
                      color: "#374151"
                      
                    }}>Nombre</Typography>
                      <CustomField
                        name="name"
                        value={data.name}
                        fieldStyle={fieldStyle}
                      />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box>
                    <Typography variant='h6' sx={{
                      fontWeight: 600,
                      color: "#374151"
                      
                    }}>Sexo</Typography>
                    <FormControl variant="standard" fullWidth>
                      <Select
                        disabled
                        labelId="sex"
                        id="sex"
                        name="sex"
                        value={data.sex || "M"}
                        label="Sex"
                        fullWidth
                      >
                        <MenuItem value={"M"}>Varón</MenuItem>
                        <MenuItem value={"F"}>Mujer</MenuItem>
                      </Select>
                      </FormControl>
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box>
                    <Typography variant='h6' sx={{
                      fontWeight: 600,
                      color: "#374151"
                      
                    }}>Primer Apellido</Typography>
                      <CustomField
                        name="firstSurname"
                        value={data.firstSurname}
                        fieldStyle={fieldStyle}
                      />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box>
                    <Typography variant='h6' sx={{
                      fontWeight: 600,
                      color: "#374151"
                      
                    }}>Segundo Apellido (si existe)</Typography>
                      <CustomField
                        placeholder="Does"
                        name="secondSurname"
                        value={data.secondSurname}
                        fieldStyle={fieldStyle}
                      />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box>
                    <Typography variant='h6' sx={{
                      fontWeight: 600,
                      color: "#374151"
                    }}>Fecha de Nacimiento</Typography>
                    <CustomField
                        name="birthdate"
                        value={data.birthdate}
                        type="date"
                        fieldStyle={fieldStyle}
                      />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box>
                    <Typography variant='h6' sx={{
                      fontWeight: 600,
                      color: "#374151"
                      
                    }}>Documento de Identidad (si existe)</Typography>
                      <CustomField
                        name="identity"
                        value={data.identityDocument}
                        fieldStyle={fieldStyle}
                      />
                  </Box>
                </Grid>


                <Grid size={12}>
                  <Divider sx={{ my: 2 }} />
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "#1f2933"
                    }}
                  >
                    Contacto
                  </Typography>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box>
                    <Typography variant='h6' sx={{
                      fontWeight: 600,
                      color: "#374151"
                    }}>Email</Typography>
                    <CustomField
                        name="email"
                        value={data.email}
                        fieldStyle={fieldStyle}
                      />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box>
                    <Typography variant='h6' sx={{
                      fontWeight: 600,
                      color: "#374151"
                      
                    }}>Teléfono</Typography>
                      <CustomField
                        name="identity"
                        value={data.identityDocument}
                        fieldStyle={fieldStyle}
                      />
                  </Box>
                </Grid>

                <Grid size={12}>
                  <Box>
                    <Typography variant='h6' sx={{
                      fontWeight: 600,
                      color: "#374151"
                      
                    }}>Dirección</Typography>
                      <CustomField
                        name="address"
                        value={data.address}
                        fieldStyle={fieldStyle}
                      />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box>
                    <Typography variant='h6' sx={{
                      fontWeight: 600,
                      color: "#374151"
                      
                    }}>Ciudad</Typography>
                      <CustomField
                        name="city"
                        value={data.city}
                        fieldStyle={fieldStyle}
                      />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box>
                    <Typography variant='h6' sx={{
                      fontWeight: 600,
                      color: "#374151"
                      
                    }}>Código Postal</Typography>
                      <CustomField
                        name="postCode"
                        value={data.postCode}
                        fieldStyle={fieldStyle}
                      />
                  </Box>
                </Grid>

                <Grid size={12}>
                  <Box>
                    <Typography variant='h6' sx={{
                      fontWeight: 600,
                      color: "#374151"
                      
                    }}>País</Typography>
                      <CustomField
                        name="country"
                        value={data.country}
                        fieldStyle={fieldStyle}
                      />
                  </Box>
                </Grid>


                <Grid size={12}>
                  <Divider sx={{ my: 2 }} />
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      color: "#1f2933"
                    }}
                  >
                    Información Médica
                  </Typography>
                </Grid>

                <Grid size={12}>
                  <Box>
                    <Typography variant='h6' sx={{
                      fontWeight: 600,
                      color: "#374151"
                      
                    }}>Tipo de Sangre</Typography>
                      <CustomField
                        name="bloodType"
                        value={data.bloodType}
                        fieldStyle={fieldStyle}
                      />
                  </Box>
                </Grid>

                <Grid size={12} sx={{padding: "10px 0"}}>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        color: "#374151"
                      }}
                    >
                      Otra Información Médica
                    </Typography>

                    <TextField multiline rows={4}
                      id="unrelatedClinicalData" name="unrelatedClinicalData"
                      value={data.unrelatedClinicalData}
                      fullWidth disabled
                    />
                  </Box>
                </Grid>

                <Grid size={{ xs: 12, md: 6 }}>
                  <Box>
                    <Typography variant='h6' sx={{
                      fontWeight: 600,
                      color: "#374151"
                      
                    }}>Episodios</Typography>
                    <FormControl variant="standard" fullWidth>
                      <Select
                        labelId="incident"
                        id="incident"
                        name="incident"
                        value={incident}
                        label="Incident"
                        fullWidth
                        onChange={handleIncident}
                        displayEmpty
                      >
                        <MenuItem value="" disabled>Selecciona un episodio</MenuItem>
                        {data.activeIncidents?.map((incident) => (
                          <MenuItem key={incident.id} value={incident.id}>
                            {incident.description}
                          </MenuItem>
                        ))}
                      </Select>
                      <CustomButton text="Cerrar" onClick={handleClosingIncident} disabled={!incident}/>
                      </FormControl>
                  </Box>
                </Grid>


              </Grid>
          </>
          }
          <Box sx={{ alignSelf: "center" }}>
            <CustomButton color="#fff" text="Volver Atrás" backgroundColor="#6b7280" onClick={handleCustomButton}/>
          </Box>
        </Box>
    </Box>
  )
}

export default DetailPatient
