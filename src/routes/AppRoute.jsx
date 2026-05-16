import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import Login from '../views/authApp/Login'
import Error404 from '../views/Error404'
import Register from '../views/authApp/Register'
import AdminDashboard from '../views/adminApp/AdminDashboard'
import PatientDashboard from '../views/patientApp/PatientDashboard'
import DoctorDashboard from '../views/doctorApp/DoctorDashboard'
import Appointments from '../views/patientApp/Appointments'
import MyProfile from '../views/doctorApp/MyProfile'
import MyPatients from '../views/doctorApp/MyPatients'
import { ProtectedAdminRoute } from './ProtectedAdminRoute'
import { ProtectedDoctorRoute } from './ProtectedDoctorRoute'
import { ProtectedPatientRoute } from './ProtectedPatientRoute'

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>

        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route element={<ProtectedAdminRoute/>}>
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        </Route>

        <Route element={<ProtectedDoctorRoute/>}>
          <Route path="/doctor/dashboard" element={<DoctorDashboard/>}/>
          <Route path="/doctor/myProfile" element={<MyProfile/>}/>
          <Route path="/doctor/myPatients" element={<MyPatients/>}/>
        </Route>

        <Route element={<ProtectedPatientRoute/>}>
          <Route path="/patient/dashboard" element={<PatientDashboard/>}/>
          <Route path="/patient/appointments" element={<Appointments/>}/>
        </Route>

        <Route path="*" element={<Error404/>}/>
      </Routes>
    </>
  )
}

export default AppRoute
