import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import Login from '../views/authApp/Login'
import Error404 from '../views/Error404'
import Register from '../views/authApp/Register'
import AdminDashboard from '../views/adminApp/AdminDashboard'
import { ProtectedRoute } from './ProtectedRoute'
import PatientDashboard from '../views/patientApp/PatientDashboard'
import DoctorDashboard from '../views/doctorApp/DoctorDashboard'
import Appointments from '../views/patientApp/Appointments'

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        

        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>




        <Route element={<ProtectedRoute/>}>
          <Route path="/doctor/dashboard" element={<DoctorDashboard/>}/>
        </Route>

        <Route element={<ProtectedRoute/>}>
          <Route path="/patient/dashboard" element={<PatientDashboard/>}/>
          <Route path="/patient/appointments" element={<Appointments/>}/>
        </Route>

        <Route element={<ProtectedRoute/>}>
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
        </Route>

        <Route path="*" element={<Error404/>}/>
      </Routes>
    </>
  )
}

export default AppRoute
