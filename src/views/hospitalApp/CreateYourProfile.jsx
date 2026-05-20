import { Box, TextField, Typography } from '@mui/material'
import React from 'react'
import CustomButton from '../../components/CustomButton';
import { useDispatch } from 'react-redux';
import { administratorPost } from '../../store/HospitalSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const CreateYourProfile = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleForm = async (e) => {
        e.preventDefault();
        console.log(e.target);
        const {name, firstName, secondName, sex, birthday, identity, address, city, postCode, country, telephone} = e.currentTarget;
        if (true) {
            const user = {name: name.value, 
                firstName: firstName.value,
                secondName: secondName.value,
                sex: "M",
                birthdate: birthday.value,
                identityDocument: identity.value,
                address: address.value,
                city: city.value,
                postCode: postCode.value,
                country: country.value,
                telephone: telephone.value}
            console.log(user);
            try {
                await dispatch(administratorPost(user)).unwrap();
                toast.success("Administrator registered successfully!");
                navigate("/createYourHospital");
            } catch (err) {
                toast.error(err?.email ? err.email.join(", ") : "Registration failed");
            }
                
                
        } else {
            toast("Wrong");
            console.log("Wrong");
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
        }}>Create your Administrator Profile</Typography>
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
                  
                }}>Your Name</Typography>
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
                  
                }}>First Name</Typography>
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
                  
                }}>Second Name (if any)</Typography>
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
                
                Sex 
            
              <Box>
                <Typography variant='h6' sx={{
                  fontWeight: 600,
                  color: "#374151"
                }}>Birthday</Typography>
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
                  
                }}>Identity Document (if any)</Typography>
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
                  
                }}>Address</Typography>
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
                  
                }}>City</Typography>
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
                  
                }}>Post Code</Typography>
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
                  
                }}>Country</Typography>
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
                  
                }}>Telephone</Typography>
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
              

              <CustomButton color="#fff" text="Register" backgroundColor='#2563eb' type='submit'/>
          </Box>

      </Box>
    </Box>
  )
}

export default CreateYourProfile
