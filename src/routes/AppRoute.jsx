import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import Login from '../views/authApp/Login'
import Error404 from '../views/Error404'
import Register from '../views/authApp/Register'
import Dashboard from '../views/adminApp/Dashboard'
import { ProtectedRoute } from './ProtectedRoute'

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        

        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>

   





        <Route element={<ProtectedRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Route>

        <Route path="*" element={<Error404/>}/>
      </Routes>
    </>
  )
}

export default AppRoute
