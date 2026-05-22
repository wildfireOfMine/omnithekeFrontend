import { Box, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import CustomButton from '../../components/CustomButton';
import { doctorPost } from '../../store/AdminSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const DoctorForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [sex, setSex] = useState("M")

    const handleCustomButton = () => {
        navigate(-1);
    }
    
    const handleForm = async (e) => {
        e.preventDefault();
        const {name, firstName, secondName, sex, email, birthday, identity, address, city, postCode, country, telephone, educationalBackground, cv} = e.currentTarget;
        if (true) {
            const user = {
                name: name.value, 
                firstName: firstName.value,
                secondName: secondName.value,
                email: email.value,
                sex: sex,
                birthdate: birthday.value,
                identityDocument: identity.value,
                address: address.value,
                city: city.value,
                postCode: postCode.value,
                country: country.value,
                telephone: telephone.value,
                educationalBackground: educationalBackground.value}
            try {
                await dispatch(doctorPost(user)).unwrap();
                toast.success("Doctor registered successfully!");
            } catch (err) {
                console.log(err);
                toast.error(err?.email ? err.email.join(", ") : "Registration failed");
            }
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
        }}>Añadir un Doctor</Typography>
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
                  <TextField type="text" id="name" name="name" placeholder='John Doe' variant="outlined"
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
                  <TextField type="text" id="firstName" name="firstName" placeholder='John Doe' variant="outlined"
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
                  <TextField type="text" id="secondName" name="secondName" placeholder='John Doe' variant="outlined"
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
                }}>Email</Typography>
                <TextField type='email' id='email' name='email' placeholder='user@gmail.com' variant="outlined"
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
                <TextField type='date' id='birthday' name='birthday' placeholder='user@gmail.com' variant="outlined"
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
                  <TextField type="text" id="address" name="address" placeholder='John Doe' variant="outlined"
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
                  <TextField type="text" id="city" name="city" placeholder='John Doe' variant="outlined"
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
                  <TextField type="text" id="country" name="country" placeholder='John Doe' variant="outlined"
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
                  <TextField type="text" id="telephone" name="telephone" placeholder='John Doe' variant="outlined"
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
                  
                }}>Estudios</Typography>
                  <TextField type="text" id="educationalBackground" name="educationalBackground" placeholder='John Doe' variant="outlined"
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
                  
                }}>CV</Typography>
                  <TextField type="file" id="cv" name="cv" placeholder='John Doe' variant="outlined"
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
              

              <CustomButton color="#fff" text="Registrar" backgroundColor='#2563eb' type='submit'/>
              <CustomButton color="#fff" text="Volver atrás" backgroundColor='#2563eb' onClick={handleCustomButton}/>
          </Box>

      </Box>
    </Box>
  )
}

export default DoctorForm
