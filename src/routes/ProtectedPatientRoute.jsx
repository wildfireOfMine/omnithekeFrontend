import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedPatientRoute = () => {
    const session = useSelector(
        (state) => state.users.session
    )
    console.log(session);
    if (!session.token && session.role != "paciente") {
        return <Navigate to={'/iniciarSesion'} replace />
    }
    return <Outlet />
}
