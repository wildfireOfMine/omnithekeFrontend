import { Box, FormControl, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import { myAdminProfile } from '../../store/AdminSlice';
import { hospitalGet, hospitalPut } from '../../store/HospitalSlice';
import { toast } from 'react-toastify';

const MyHospital = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loading = useSelector(state => state.doctor.loading);
    const [data, setData] = useState({});
    const [edit, setEdit] = useState(false);
    console.log("LOADING", loading);
    useEffect(() => {
            dispatch(hospitalGet()).unwrap().then(data => setData({
              identityCode: data.identityCode,
              name: data.name,
              address: data.address,
              city: data.city,
              country: data.country,
              postCode: data.postCode,
              telephone: data.telephone,
              fax: data.fax
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
      if (true) {
        const hospital = {
          identityCode: data.identityCode,
          name: data.name,
          address: data.address,
          city: data.city,
          country: data.country,
          postCode: data.postCode,
          telephone: data.telephone,
          fax: data.fax}
          try {
            await dispatch(hospitalPut(hospital)).unwrap();
            toast.success("PUT exitoso");
          } catch (err) {
            console.log(err);
            toast.error(err?.email ? err.email.join(", ") : "PUT fallido");
          }
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

export default MyHospital
