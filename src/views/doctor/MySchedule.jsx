import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { misHorarios } from '../../store/AppointmentSlice';

const MySchedule = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [datos, setDatos] = useState();

    useEffect(() => {
      dispatch(misHorarios()).unwrap().then((datos) => setDatos(datos));
    }, [dispatch])
    console.log(datos);
  return (
    <div>
      <p>{JSON.stringify(datos)}</p>
    </div>
  )
}

export default MySchedule
