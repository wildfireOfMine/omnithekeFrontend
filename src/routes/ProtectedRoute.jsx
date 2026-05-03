import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRoute = () => {
    const session = useSelector(
        (state) => state.account.session
    )
    if (!session.token) {
        return <Navigate to={'/'} replace />
    }
    return <Outlet />
}
