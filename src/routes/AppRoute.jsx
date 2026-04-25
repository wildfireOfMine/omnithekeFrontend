import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../views/Home'
import Login from '../views/Login'
import Error404 from '../views/Error404'
import Register from '../views/hospitalApp/Register'

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        
        <Route path="/register" element={<Register/>}/>

        

        

        

        
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </>
  )
}

export default AppRoute
