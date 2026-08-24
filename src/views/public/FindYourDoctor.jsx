import React, { useEffect, useState } from 'react'
import CustomBox from '../../components/CustomBox'
import { Avatar, Button, Card, CardContent, Divider, TextField, Typography } from '@mui/material'
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import { Box, Stack } from '@mui/system'
import { toast } from 'react-toastify'
import { todosDoctores } from '../../store/UserSlice'
import { useDispatch } from 'react-redux'
import CustomProfile from '../../components/CustomProfile';


const FindYourDoctor = () => {
  const [datos, setDatos] = useState({});
  const dispatch = useDispatch();

  useEffect(() =>{
    dispatch(todosDoctores()).unwrap().then(datos => setDatos(datos));
  }, [dispatch])
  console.log(datos);

  const handleForm = async (e) => {
    e.preventDefault();
          
    const {nombre} = e.currentTarget;
    const user = {name: name.value, 
      firstSurname: firstSurname.value,
      secondSurname: secondSurname.value,
      sex: sex,
      birthdate: birthday.value,
      identityDocument: identity.value,
      address: address.value,
      city: city.value,
      postCode: postCode.value,
      country: country.value,
      telephone: telephone.value}
    try {

    } catch (err) {
      toast.error(err);
    }
  }

  return (
    <CustomBox>
      <Box component="form" onSubmit={handleForm}>
        <Typography
        variant="h1"
        sx={{
          fontSize: "clamp(2rem, 4vw, 2.8rem)",
          fontWeight: 800,
          color: "#1f2933",
          margin: "12px",
        }}
        >
          Encuentra tu Médico
        </Typography>

        <TextField type="text" id="nombre" name="nombre" placeholder='Filtra por su nombre...' variant="outlined"
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

      <Box sx={{ mt: 6 }}>
        {datos.length > 0 ? (
          <Box
              sx={{
                  display: "grid",
                  gridTemplateColumns: {
                      xs: "1fr",
                      sm: "repeat(2, 1fr)",
                      lg: "repeat(3, 1fr)",
                  },
                  gap: 3,
                  mt: 3,
              }}
          >
              {datos.map((doctor) => (
                  <CustomProfile key={doctor.id} doctor={doctor}/>
              ))}
          </Box>
      ) : (
          <Typography
            sx={{
              textAlign: "center",
              color: "#6b7280",
              fontSize: "1.1rem",
            }}
          >
            No se han encontrado médicos...
          </Typography>
        )}
      </Box>


    </CustomBox>
  )
}

export default FindYourDoctor
