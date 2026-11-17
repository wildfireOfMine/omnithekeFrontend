import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import { toast, ToastContainer } from 'react-toastify'
import AppRoute from './routes/AppRoute'
import tokenInterceptor from './utils/tokenInterceptor'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from './store/UserSlice'

const App = () => {
  const session = useSelector((state) => state.users.session);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (session?.token && tokenInterceptor(session.token)) {
      dispatch(logout());
      toast.error("Tu sesión ha caducado. Inicia sesión de nuevo.");
      navigate("/iniciarSesion", { replace: true });
    }
  }, [session, dispatch, navigate]);

  return (
    <>
      <Navbar/>
      <AppRoute/>
      <ToastContainer/>
    </>
  )
}

export default App
