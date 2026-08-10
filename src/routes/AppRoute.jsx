import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error404 from '../views/public/Error404'
import Home from '../views/public/Home'



const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="*" element={<Error404/>}/>
      </Routes>
    </>
  )
}

export default AppRoute
