import React from 'react'
import AppRoute from './routes/AppRoute'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <>
      <Navbar/>
      <AppRoute/>
      <ToastContainer/>
    </>
  )
}

export default App
