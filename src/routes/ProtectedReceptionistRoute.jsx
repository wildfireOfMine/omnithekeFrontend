import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedReceptionistRoute = () => {
    const session = useSelector(
        (state) => state.users.session
    )
    console.log(session);
    if (!session.token || session.rol != "recepcionista") {
        return <Navigate to={'/iniciarSesion'} replace />
    }
    return <Outlet />
}
