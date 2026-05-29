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
import MyAppointments from '../views/doctorApp/MyAppointments'
import MyMessages from '../views/doctorApp/MyMessages'
import Messages from '../views/patientApp/Messages'
import MyDoctors from '../views/patientApp/MyDoctors'
import MyIncidents from '../views/patientApp/MyIncidents'
import MyOfficeDoctors from '../views/adminApp/MyOfficeDoctors'
import MyOfficePatients from '../views/adminApp/MyOfficePatients'
import OfficeRegister from '../views/officeApp/OfficeRegister'
import OfficeDashboard from '../views/officeApp/OfficeDashboard'
import CreateYourProfile from '../views/officeApp/CreateYourProfile'
import DoctorForm from '../views/officeApp/DoctorForm'
import PatientForm from '../views/officeApp/PatientForm'
import AttachNewDoctors from '../views/adminApp/AttachNewDoctors'
import MyDoctorProfile from '../views/doctorApp/MyDoctorProfileView'
import MyDoctorProfileView from '../views/doctorApp/MyDoctorProfileView'
import MyAdminProfileView from '../views/adminApp/MyAdminProfileView'
import MyPatientProfileView from '../views/patientApp/MyPatientProfileView'
import MyOffice from '../views/adminApp/MyOffice'
import Reports from '../views/doctorApp/Reports'
import ReportForm from '../views/doctorApp/ReportForm'


const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>

        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>

        <Route path="/createYourProfile" element={<CreateYourProfile/>}/>
        <Route path="/createYourOffice" element={<OfficeRegister/>}/>

        <Route element={<ProtectedAdminRoute/>}>
          <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
          <Route path="/admin/myProfile" element={<MyAdminProfileView/>}/>
          <Route path="/admin/myOfficeDoctors" element={<MyOfficeDoctors/>}/>
          <Route path="/admin/doctorForm" element={<DoctorForm/>}/>
          <Route path="/admin/myOfficePatients" element={<MyOfficePatients/>}/>
          <Route path="/admin/patientForm" element={<PatientForm/>}/>
          <Route path="/admin/myOffice" element={<MyOffice/>}/>
          <Route path="/doctor/attachDoctors" element={<AttachNewDoctors/>}/>
        </Route>

        <Route element={<ProtectedDoctorRoute/>}>
          <Route path="/doctor/dashboard" element={<DoctorDashboard/>}/>
          <Route path="/doctor/myProfile" element={<MyDoctorProfileView/>}/>
          <Route path="/doctor/myPatients" element={<MyPatients/>}/>
          <Route path="/doctor/myAppointments" element={<MyAppointments/>}/>
          <Route path="/doctor/myReports" element={<Reports/>}/>
          <Route path="/doctor/reportForm" element={<ReportForm/>}/>
          <Route path="/doctor/myMessages" element={<MyMessages/>}/>
        </Route>

        <Route element={<ProtectedPatientRoute/>}>
          <Route path="/patient/dashboard" element={<PatientDashboard/>}/>
          <Route path="/patient/myProfile" element={<MyPatientProfileView/>}/>
          <Route path="/patient/appointments" element={<Appointments/>}/>
          <Route path="/patient/messages" element={<Messages/>}/>
          <Route path="/patient/myDoctors" element={<MyDoctors/>}/>
          <Route path="/patient/myIncidents" element={<MyIncidents/>}/>
        </Route>

        <Route path="*" element={<Error404/>}/>
      </Routes>
    </>
  )
}

export default AppRoute
