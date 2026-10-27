import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error404 from '../views/public/Error404'
import Home from '../views/public/Home'
import FindYourDoctor from '../views/public/FindYourDoctor'
import Contact from '../views/public/Contact'
import Login from '../views/public/Login'
import Register from '../views/public/Register'
import Dashboard from '../views/patient/Dashboard'
import { ProtectedPatientRoute } from './ProtectedPatientRoute'
import CurrentAppointments from '../views/patient/CurrentAppointments'
import NewAppointment from '../views/patient/NewAppointment'
import AdminDashboard from '../views/admin/AdminDashboard'
import { ProtectedAdminRoute } from './ProtectedAdminRoute'
import DoctorDashboard from '../views/doctor/DoctorDashboard'
import { ProtectedDoctorRoute } from './ProtectedDoctorRoute'
import { ProtectedReceptionistRoute } from './ProtectedReceptionistRoute'
import HaveYouForgottenYourPassword from '../views/public/HaveYouForgottenYourPassword'
import NewPassword from '../views/public/NewPassword'
import ConfirmAccount from '../views/public/ConfirmAccount'
import MyHistory from '../views/patient/MyHistory'
import DetailQueryView from '../views/patient/DetailQueryView'



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
        <Route path="/confirmarCuenta/:uid/:token" element={<ConfirmAccount/>}/>
        <Route path="/solicitarRecuperacion" element={<HaveYouForgottenYourPassword/>}/>
        <Route path="/restablecerContrasena/:uid/:token" element={<NewPassword/>}/>

        <Route element={<ProtectedAdminRoute/>}>
          <Route path="/admin/portal" element={<AdminDashboard/>}/>
        </Route>

        <Route element={<ProtectedPatientRoute/>}>
          <Route path="/paciente/portal" element={<Dashboard/>}/>
          <Route path="/paciente/citas" element={<CurrentAppointments/>}/>
          <Route path="/paciente/citas/:doctorId" element={<NewAppointment/>}/>
          <Route path="/paciente/misConsultas" element={<MyHistory/>}/>
          <Route path="/paciente/misConsultas/:consultaId" element={<DetailQueryView/>}/>
        </Route>

        <Route element={<ProtectedDoctorRoute/>}>
          <Route path="/doctor/portal" element={<DoctorDashboard/>}/>
        </Route>

        <Route element={<ProtectedReceptionistRoute/>}>
          <Route path="/recepcionista/portal" element={<AdminDashboard/>}/>
        </Route>
        
      </Routes>
    </>
  )
}

export default AppRoute
