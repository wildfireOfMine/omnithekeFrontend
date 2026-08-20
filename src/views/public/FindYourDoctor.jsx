import React, { useEffect, useState } from 'react'
import CustomBox from '../../components/CustomBox'
import { TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { toast } from 'react-toastify'
import { todosDoctores } from '../../store/UserSlice'
import { useDispatch } from 'react-redux'


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
          datos.map((doctor) => (
            <Box key={doctor.id}>
              <Typography>
                {doctor.nombre} {doctor.primerApellido}
              </Typography>
            </Box>
          ))
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
