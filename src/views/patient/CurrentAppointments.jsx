import React from 'react'
import CustomBox from '../../components/CustomBox'
import { Typography } from '@mui/material'
import CustomButton from '../../components/CustomButton'

const CurrentAppointments = () => {
  return (
    <CustomBox>
      <Typography>Citas Actuales</Typography>
      <CustomButton text="¿Buscas crear una nueva cita?"/>
    </CustomBox>
  )
}

export default CurrentAppointments
