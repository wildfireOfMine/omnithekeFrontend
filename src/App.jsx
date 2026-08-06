import React from 'react'
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify'
import AppRoute from './routes/AppRoute'

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
