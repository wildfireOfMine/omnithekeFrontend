import { Box, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import { adminPut, myAdminProfile } from '../../store/AdminSlice';
import { toast } from 'react-toastify';

const MyAdminProfileView = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector(state => state.doctor.loading);
    const [data, setData] = useState({});
    const [edit, setEdit] = useState(false);
    console.log("LOADING", loading);
    useEffect(() => {
            dispatch(myAdminProfile()).unwrap().then(data => setData({
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
            }));
        }, [dispatch]);
    
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
          telephone: data.telephone}
          try {
            await dispatch(adminPut(user)).unwrap();
            toast.success("PUT exitoso");
          } catch (err) {
            console.log(err);
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
        }}>Mi Perfil de Administrador</Typography>
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
        <Grid container spacing={2}>
          {data && <>
            <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                  
                }}>Nombre</Typography>
                  <TextField type="text" id="name" name="name" placeholder='John' variant="outlined" value={data.name} 
                  onChange={handleInputChange}
                  disabled={!edit}
                  sx={{
                    borderRadius: "8px",
                    color: "#1f2933",
                    transition: "border-color 0.15s",
                    fontFamily: "inherit",
                    width: "100%",
                    border: "1.5px solid #fff",
                    fontSize: "0.95rem"
                  }}
                />
              </Box>

              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                  
                }}>Primer Apellido</Typography>
                  <TextField type="text" id="firstSurname" name="firstSurname" placeholder='Doe' variant="outlined" value={data.firstSurname}
                  onChange={handleInputChange}
                  disabled={!edit}
                  sx={{
                    borderRadius: "8px",
                    color: "#1f2933",
                    transition: "border-color 0.15s",
                    fontFamily: "inherit",
                    width: "100%",
                    border: "1.5px solid #fff",
                    fontSize: "0.95rem"
                  }}
                />
              </Box>

              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                  
                }}>Segundo Apellido (si existe)</Typography>
                  <TextField type="text" id="secondSurname" name="secondSurname" placeholder='Does' variant="outlined" value={data.secondSurname}
                  onChange={handleInputChange}
                  disabled={!edit}
                  sx={{
                    borderRadius: "8px",
                    color: "#1f2933",
                    transition: "border-color 0.15s",
                    fontFamily: "inherit",
                    width: "100%",
                    border: "1.5px solid #fff",
                    fontSize: "0.95rem"
                  }}
                />
              </Box>
                
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

              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                }}>Email</Typography>
                <TextField type='email' id='email' name='email' placeholder='user@gmail.com' variant="outlined" value={data.email}
                onChange={handleInputChange}
                disabled={!edit}
                sx={{
                    borderRadius: "8px",
                    color: "#1f2933",
                    transition: "border-color 0.15s",
                    fontFamily: "inherit",
                    width: "100%",
                    border: "1.5px solid #fff",
                    fontSize: "0.95rem"
                  }}
              />
              </Box>
            
              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                }}>Fecha de Nacimiento</Typography>
                <TextField type='date' id='birthdate' name='birthdate' variant="outlined" value={data.birthdate}
                onChange={handleInputChange}
                disabled={!edit}
                sx={{
                    borderRadius: "8px",
                    color: "#1f2933",
                    transition: "border-color 0.15s",
                    fontFamily: "inherit",
                    width: "100%",
                    border: "1.5px solid #fff",
                    fontSize: "0.95rem"
                  }}
              />
              </Box>

              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                  
                }}>Documento de Identidad (si existe)</Typography>
                  <TextField type="text" id="identity" name="identity" placeholder='123456789X' variant="outlined" value={data.identityDocument}
                  onChange={handleInputChange}
                  disabled={!edit}
                  sx={{
                    borderRadius: "8px",
                    color: "#1f2933",
                    transition: "border-color 0.15s",
                    fontFamily: "inherit",
                    width: "100%",
                    border: "1.5px solid #fff",
                    fontSize: "0.95rem"
                  }}
                />
              </Box>

              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                  
                }}>Dirección</Typography>
                  <TextField type="text" id="address" name="address" placeholder='Calle de Madrid' variant="outlined" value={data.address}
                  onChange={handleInputChange}
                  disabled={!edit}
                  sx={{
                    borderRadius: "8px",
                    color: "#1f2933",
                    transition: "border-color 0.15s",
                    fontFamily: "inherit",
                    width: "100%",
                    border: "1.5px solid #fff",
                    fontSize: "0.95rem"
                  }}
                />
              </Box>

              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                  
                }}>Ciudad</Typography>
                  <TextField type="text" id="city" name="city" placeholder='Madrid' variant="outlined" value={data.city}
                  onChange={handleInputChange}
                  disabled={!edit}
                  sx={{
                    borderRadius: "8px",
                    color: "#1f2933",
                    transition: "border-color 0.15s",
                    fontFamily: "inherit",
                    width: "100%",
                    border: "1.5px solid #fff",
                    fontSize: "0.95rem"
                  }}
                />
              </Box>

              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                  
                }}>Código Postal</Typography>
                  <TextField type="text" id="postCode" name="postCode" placeholder='12345' variant="outlined" value={data.postCode}
                  onChange={handleInputChange}
                  disabled={!edit}
                  sx={{
                    borderRadius: "8px",
                    color: "#1f2933",
                    transition: "border-color 0.15s",
                    fontFamily: "inherit",
                    width: "100%",
                    border: "1.5px solid #fff",
                    fontSize: "0.95rem"
                  }}
                />
              </Box>

              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                  
                }}>País</Typography>
                  <TextField type="text" id="country" name="country" placeholder='España' variant="outlined" value={data.country}
                  onChange={handleInputChange}
                  disabled={!edit}
                  sx={{
                    borderRadius: "8px",
                    color: "#1f2933",
                    transition: "border-color 0.15s",
                    fontFamily: "inherit",
                    width: "100%",
                    border: "1.5px solid #fff",
                    fontSize: "0.95rem"
                  }}
                />
              </Box>

              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                  
                }}>Teléfono</Typography>
                  <TextField type="text" id="telephone" name="telephone" placeholder='(+34)152567171' variant="outlined" value={data.telephone}
                  onChange={handleInputChange}
                  disabled={!edit}
                  sx={{
                    borderRadius: "8px",
                    color: "#1f2933",
                    transition: "border-color 0.15s",
                    fontFamily: "inherit",
                    width: "100%",
                    border: "1.5px solid #fff",
                    fontSize: "0.95rem"
                  }}
                />
              </Box>
          </>
          }
        </Grid>
        <Grid spacing={2} sx={{textAlign:"center"}}>
          {!edit ? <CustomButton color="#fff" text="Modificar" backgroundColor='#2563eb' onClick={handlePutMethod}/> : 
          <CustomButton color="#fff" text="Confirmar" backgroundColor='#2563eb' onClick={handleConfirmPut}/>}
          
          <CustomButton color="#fff" text="Volver Atrás" backgroundColor='#2563eb' onClick={handleCustomButton}/>
        </Grid>
      </Box>
      
    </Box>
  )
}

export default MyAdminProfileView
