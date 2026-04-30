import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRoute = () => {
    const session = useSelector(
        (state) => state.account.session
    )
    if (!session) {
        return <Navigate to={'/'} replace />
    }
    return <Outlet />
}
