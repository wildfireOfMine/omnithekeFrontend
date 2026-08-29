import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error404 from '../views/public/Error404'
import Home from '../views/public/Home'
import FindYourDoctor from '../views/public/FindYourDoctor'
import Contact from '../views/public/Contact'
import Login from '../views/patient/Login'
import Register from '../views/patient/Register'
import Dashboard from '../views/patient/Dashboard'
import { ProtectedPatientRoute } from './ProtectedPatientRoute'
import Appointments from '../views/patient/Appointments'
import MyPatientProfileView from '../views/patient/MyPatientProfileView'
import CurrentAppointments from '../views/patient/CurrentAppointments'
import NewAppointment from '../views/patient/NewAppointment'



const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Error404/>}/>
        <Route path="/encuentraTuMedico" element={<FindYourDoctor/>}/>
        <Route path="/contacto" element={<Contact/>}/>

        <Route path="/iniciarSesion" element={<Login/>}/>
        <Route path="/registrarse" element={<Register/>}/>

        <Route element={<ProtectedPatientRoute/>}>
          <Route path="/portalPaciente" element={<Dashboard/>}/>
          <Route path="/citas" element={<CurrentAppointments/>}/>
          <Route path="/citas/:doctorId" element={<NewAppointment/>}/>
          <Route path="/miPerfil" element={<MyPatientProfileView/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default AppRoute
