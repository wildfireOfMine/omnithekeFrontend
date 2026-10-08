import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedDoctorRoute = () => {
    const session = useSelector(
        (state) => state.users.session
    )
    console.log(session);
    if (!session.token || session.rol != "doctor") {
        return <Navigate to={'/iniciarSesion'} replace />
    }
    return <Outlet />
}
