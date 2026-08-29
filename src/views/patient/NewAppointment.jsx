import React from 'react'
import CustomBox from '../../components/CustomBox'
import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'

const NewAppointment = () => {
    const {doctorId} = useParams();
  return (
    <CustomBox>
      <Typography>Crear cita con el doctor {doctorId}</Typography>
    </CustomBox>
  )
}

export default NewAppointment
