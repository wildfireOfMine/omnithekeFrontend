import { Box, Button, Divider, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { doctorPut, myDoctorProfile } from '../../store/DoctorSlice';
import CustomButton from '../../components/CustomButton';
import { toast } from 'react-toastify';
import CustomField from '../../components/CustomField';

const MyDoctorProfileView = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector(state => state.doctor.loading);
    const [data, setData] = useState({});
    const [sex, setSex] = useState("M");
    const [edit, setEdit] = useState(false);
    console.log("LOADING", loading);
    useEffect(() => {
        dispatch(myDoctorProfile()).unwrap().then(data => setData({
          name: data.name,
          firstSurname: data.firstSurname,
          secondSurname: data.secondSurname,
          sex: data.sex,
          email: data.email,
          birthdate: data.birthdate,
          identityDocument: data.identityDocument,
          address: data.address,
          city: data.city,
          postCode: data.postCode,
          country: data.country,
          telephone: data.telephone,
          educationalBackground: data.educationalBackground,
          cv: data.cv
        }));
    }, [dispatch]);

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

    const handlePutMethod = () => {
      if (!edit) {
        setEdit(true);
      }
    }

    const handleInputChange = (e) => {
      const { name, value } = e.target
      setData((prev) => ({
        ...prev,
        [name]: value
      }))
    }

    const handleConfirmPut = async (e) => {
      e.preventDefault();
          const user = {
            name: data.name, 
            firstSurname: data.firstSurname,
            secondSurname: data.secondSurname,
            email: data.email,
            sex: data.sex,
            birthdate: data.birthdate,
            identityDocument: data.identityDocument,
            address: data.address,
            city: data.city,
            postCode: data.postCode,
            country: data.country,
            telephone: data.telephone,
            educationalBackground: data.educationalBackground}
            try {
              await dispatch(doctorPut(user)).unwrap();
              toast.success("PUT exitoso");
            } catch (err) {
              console.log(err);
              toast.error(err);
              toast.error(err?.email ? err.email.join(", ") : "PUT fallido");
        }
      setEdit(false);
    }

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
        }}>Mi Perfil de Doctor</Typography>
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
                        placeholder="John"
                        value={data.name}
                        edit={edit}
                        handleInputChange={handleInputChange}
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
                        disabled={!edit}
                        labelId="sex"
                        id="sex"
                        name="sex"
                        value={data.sex || "M"}
                        label="Sex"
                        onChange={handleInputChange}
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
                        placeholder='Doe'
                        value={data.firstSurname}
                        edit={edit}
                        handleInputChange={handleInputChange}
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
                        edit={edit}
                        handleInputChange={handleInputChange}
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
                        edit={edit}
                        type="date"
                        handleInputChange={handleInputChange}
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
                        placeholder='12345678X'
                        name="identity"
                        value={data.identityDocument}
                        edit={edit}
                        handleInputChange={handleInputChange}
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
                        placeholder='user@gmail.com'
                        name="email"
                        value={data.email}
                        edit={edit}
                        handleInputChange={handleInputChange}
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
                        placeholder='(+34)152567171'
                        name="identity"
                        value={data.identityDocument}
                        edit={edit}
                        handleInputChange={handleInputChange}
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
                        placeholder='Calle de Madrid'
                        name="address"
                        value={data.address}
                        edit={edit}
                        handleInputChange={handleInputChange}
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
                        placeholder='Madrid'
                        name="city"
                        value={data.city}
                        edit={edit}
                        handleInputChange={handleInputChange}
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
                        placeholder='12345'
                        name="postCode"
                        value={data.postCode}
                        edit={edit}
                        handleInputChange={handleInputChange}
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
                        placeholder='España'
                        name="country"
                        value={data.country}
                        edit={edit}
                        handleInputChange={handleInputChange}
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
                    Información Profesional
                  </Typography>
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
                      Estudios
                    </Typography>

                    <TextField multiline rows={4}
                      id="educationalBackground" name="educationalBackground"
                      value={data.educationalBackground} onChange={handleInputChange}
                      disabled={!edit} fullWidth
                    />
                  </Box>
                </Grid>


              </Grid>
          </>
          }
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 4,
            flexWrap: "wrap"
          }}
        >

          <CustomButton color="#fff" text="Volver Atrás" backgroundColor="#6b7280" onClick={handleCustomButton}/>
          {!edit ? (
            <CustomButton color="#fff" text="Modificar" backgroundColor="#2563eb" onClick={handlePutMethod}/>
          ) : (
            <CustomButton color="#fff" text="Confirmar" backgroundColor="#16a34a" onClick={handleConfirmPut}/>
          )}

        </Box>
      </Box>
      
    </Box>
  )
}

export default MyDoctorProfileView
