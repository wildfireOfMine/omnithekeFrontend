import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error404 from '../views/public/Error404'
import Home from '../views/public/Home'
import FindYourDoctor from '../views/public/FindYourDoctor'
import WhoWeAre from '../views/public/WhoWeAre'
import Contact from '../views/public/Contact'



const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Error404/>}/>
        <Route path="/encuentraTuMedico" element={<FindYourDoctor/>}/>
        <Route path="/quienesSomos" element={<WhoWeAre/>}/>
        <Route path="/contacto" element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default AppRoute
