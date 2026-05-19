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
import MyProfile from '../components/MyProfile'
import MyPatients from '../views/doctorApp/MyPatients'
import { ProtectedAdminRoute } from './ProtectedAdminRoute'
import { ProtectedDoctorRoute } from './ProtectedDoctorRoute'
import { ProtectedPatientRoute } from './ProtectedPatientRoute'
import Vaccines from '../views/doctorApp/Vaccines'
import AttachNewDoctors from '../views/doctorApp/AttachNewDoctors'
import MyAppointments from '../views/doctorApp/MyAppointments'
import MyMessages from '../views/doctorApp/MyMessages'
import Messages from '../views/patientApp/Messages'
import MyDoctors from '../views/patientApp/MyDoctors'
import MyIncidents from '../views/patientApp/MyIncidents'
import MyVaccines from '../views/patientApp/MyVaccines'
import MyHospitalDoctors from '../views/adminApp/MyHospitalDoctors'
import MyHospitalPatients from '../views/adminApp/MyHospitalPatients'

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>

        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route element={<ProtectedAdminRoute/>}>
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
          <Route path="/admin/myProfile" element={<MyProfile/>}/>
          <Route path="/admin/myHospitalDoctors" element={<MyHospitalDoctors/>}/>
          <Route path="/admin/myHospitalPatients" element={<MyHospitalPatients/>}/>
        </Route>

        <Route element={<ProtectedDoctorRoute/>}>
          <Route path="/doctor/dashboard" element={<DoctorDashboard/>}/>
          <Route path="/doctor/myProfile" element={<MyProfile/>}/>
          <Route path="/doctor/myPatients" element={<MyPatients/>}/>
          <Route path="/doctor/vaccines" element={<Vaccines/>}/>
          <Route path="/doctor/attachDoctors" element={<AttachNewDoctors/>}/>
          <Route path="/doctor/myAppointments" element={<MyAppointments/>}/>
          <Route path="/doctor/myMessages" element={<MyMessages/>}/>
        </Route>

        <Route element={<ProtectedPatientRoute/>}>
          <Route path="/patient/dashboard" element={<PatientDashboard/>}/>
          <Route path="/patient/myProfile" element={<MyProfile/>}/>
          <Route path="/patient/appointments" element={<Appointments/>}/>
          <Route path="/patient/messages" element={<Messages/>}/>
          <Route path="/patient/myDoctors" element={<MyDoctors/>}/>
          <Route path="/patient/myIncidents" element={<MyIncidents/>}/>
          <Route path="/patient/myVaccines" element={<MyVaccines/>}/>
        </Route>

        

        <Route path="*" element={<Error404/>}/>
      </Routes>
    </>
  )
}

export default AppRoute
