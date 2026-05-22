import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton';
import { useDispatch } from 'react-redux';
import { administratorPost } from '../../store/HospitalSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateYourProfile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [sex, setSex] = useState("M")

    const handleChange = (e) => {
      setSex(e.target.value);
    };
    
    const handleForm = async (e) => {
        e.preventDefault();
        
        const {name, firstSurname, secondSurname, sex, birthday, identity, address, city, postCode, country, telephone} = e.currentTarget;
        if (true) {
            const user = {name: name.value, 
                firstSurname: firstSurname.value,
                secondSurname: secondSurname.value,
                sex: sex.value,
                birthdate: birthday.value,
                identityDocument: identity.value,
                address: address.value,
                city: city.value,
                postCode: postCode.value,
                country: country.value,
                telephone: telephone.value}
            try {
                await dispatch(administratorPost(user)).unwrap();
                toast.success("Administrator registered successfully!");
                navigate("/createYourHospital");
            } catch (err) {
                toast.error(err?.email ? err.email.join(", ") : "Something's odd, are all the fields filled?");
            }
                
                
        } else {
            toast.error("Something's odd...");
        }
    
    }

  return (
    <Box sx={{
      maxWidth: "860px",
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
        }}>Crea tu Perfil de Administrador</Typography>
      </Box>

      <Box component="form" onSubmit={handleForm} 
      sx={{
        display: "flex", 
        flexDirection: "column",
        background: "white",
        borderRadius: "14px",
        padding: "24px 28px 10px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        marginBottom: "20px",
        }}> 
            <Box component="div"
            sx={{
              padding: "50px 0",
              marginBottom: "16px",
              display: "flex",
              flexDirection: "column",
              gap: "30px"
            }}>
              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                  
                }}>Nombre</Typography>
                  <TextField type="text" id="name" name="name" placeholder='John' variant="outlined"
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
                  <TextField type="text" id="firstSurname" name="firstSurname" placeholder='Doe' variant="outlined"
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
                  <TextField type="text" id="secondSurname" name="secondSurname" placeholder='Does' variant="outlined"
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
                    labelId="sex"
                    id="sex"
                    value={sex}
                    label="Sex"
                    onChange={handleChange}
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
                }}>Fecha de Nacimiento</Typography>
                <TextField type='date' id='birthday' name='birthday' variant="outlined"
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
                  <TextField type="text" id="identity" name="identity" placeholder='123456789X' variant="outlined"
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
                  <TextField type="text" id="address" name="address" placeholder='Madrid Street' variant="outlined"
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
                  <TextField type="text" id="city" name="city" placeholder='Madrid' variant="outlined"
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
                  <TextField type="text" id="postCode" name="postCode" placeholder='12345' variant="outlined"
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
                  <TextField type="text" id="country" name="country" placeholder='Spain' variant="outlined"
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
                  <TextField type="tel" id="telephone" name="telephone" placeholder='(+34)152567171' variant="outlined"
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
              

              <CustomButton color="#fff" text="Registrarse" backgroundColor='#2563eb' type='submit'/>
          </Box>

      </Box>
    </Box>
  )
}

export default CreateYourProfile
